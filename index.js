var isTouch = require('has-touch');
var cl = document.documentElement.classList;

if (isTouch) {
  cl.add('touch');
  cl.remove('no-touch');
} else {
  cl.add('no-touch');
  cl.remove('touch');
}
