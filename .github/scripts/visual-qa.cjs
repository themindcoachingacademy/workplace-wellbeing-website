const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
(async () => {
  fs.mkdirSync('qa-output', { recursive: true });
  const browser = await chromium.launch({ headless: true });
  const pages = ['index','workshops','organisations','about','contact'];
  const viewports = [{name:'desktop',width:1440,height:900},{name:'tablet',width:820,height:1180},{name:'mobile',width:390,height:844}];
  const findings = []; let failures = 0;
  for (const viewport of viewports) {
    const page = await browser.newPage({viewport:{width:viewport.width,height:viewport.height},deviceScaleFactor:1});
    for (const name of pages) {
      const consoleErrors = [];
      page.on('pageerror', err => consoleErrors.push(err.message));
      const response = await page.goto('http://127.0.0.1:8765/' + name + '.html', {waitUntil:'domcontentloaded'});
      await page.evaluate(() => document.fonts.ready);
      await page.screenshot({path:path.join('qa-output',name+'-'+viewport.name+'.png'),fullPage:true,animations:'disabled'});
      const result = await page.evaluate(() => ({
        title: document.title,
        headingCount: document.querySelectorAll('main h1').length,
        imageFailures: [...document.images].filter(img=>!img.complete||img.naturalWidth===0).map(img=>img.src),
        horizontalOverflow: document.documentElement.scrollWidth > innerWidth + 3,
        visibleContactLink: [...document.querySelectorAll('a[href="contact.html"]')].some(el => !!(el.offsetWidth||el.offsetHeight)),
        badLocalLinks: [...document.querySelectorAll('a[href]')].map(a=>a.getAttribute('href')).filter(h=>h && /^(employee-support|clinics|standards|how-we-work)\.html/.test(h))
      }));
      if (viewport.name === 'mobile') {
        const toggle = page.locator('.menu-toggle');
        await toggle.click();
        result.mobileMenuOpens = (await toggle.getAttribute('aria-expanded')) === 'true';
        await page.keyboard.press('Escape');
        result.mobileMenuCloses = (await toggle.getAttribute('aria-expanded')) === 'false';
      }
      result.page = name; result.viewport = viewport.name; result.httpStatus = response.status(); result.consoleErrors = consoleErrors;
      if (result.headingCount !== 1 || result.horizontalOverflow || !result.visibleContactLink || result.badLocalLinks.length || result.consoleErrors.length || result.httpStatus !== 200 || (viewport.name==='mobile' && (!result.mobileMenuOpens || !result.mobileMenuCloses))) { result.failed = true; failures++; }
      findings.push(result);
      console.log(JSON.stringify(result));
    }
    await page.close();
  }
  await browser.close();
  fs.writeFileSync('qa-output/report.json', JSON.stringify({failures,findings},null,2));
  if (failures) process.exit(1);
})().catch(err=>{console.error(err);process.exit(2)});
