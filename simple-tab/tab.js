var locale = 'de-DE';
var content = {
	msg: document.querySelector('.content .message').firstChild,
  search: document.querySelector('.content .search').firstChild,
  links: document.querySelector('.content .links').firstChild,
};
var footer = {
  date: document.querySelector('.footer').firstChild
}
render();

function render() {
	content.msg.data = "new tab";

  var now = new Date();
  var seconds = now.getSeconds();
  footer.date.data = now.toLocaleString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  setTimeout(render, (60 - seconds) * 1000);
}
