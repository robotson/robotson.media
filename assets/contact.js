// Builds mailto links at runtime so the address isn't in the HTML for scrapers.
// Markup: <a class="em" data-u="user" data-d="example.com" data-label="optional text">user [at] example [dot] com</a>
document.querySelectorAll('a.em').forEach(function (a) {
  var addr = a.getAttribute('data-u') + '@' + a.getAttribute('data-d');
  a.href = 'mai' + 'lto:' + addr;
  a.textContent = a.getAttribute('data-label') || addr;
});
