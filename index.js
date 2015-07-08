var hasClass = require('has-class');
var cl = document.documentElement.classList;

if (hasClass) {
  cl.add('touch');
  cl.remove('no-touch');
} else {
  cl.add('no-touch');
  cl.remove('touch');
}
