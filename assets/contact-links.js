document.addEventListener('DOMContentLoaded', function () {
  var contactUrl = 'https://themindcoachingacademy.github.io/workplace-wellbeing-website/contact.html';
  document.querySelectorAll('a').forEach(function (link) {
    var text = (link.textContent || '').trim().toLowerCase();
    var href = link.getAttribute('href') || '';
    if (href === 'contact.html' || href === '/workplace-wellbeing-website/contact.html' || text.includes('contact steven') || text.includes('discuss your workforce') || text.includes('discuss support')) {
      if (!href.startsWith('tel:') && !href.startsWith('mailto:')) {
        link.setAttribute('href', contactUrl);
      }
    }
  });
});