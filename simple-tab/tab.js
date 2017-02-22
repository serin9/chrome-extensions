var locale = 'de-DE';
var clock = {
	msg: document.querySelector('.content .message').firstChild,
};
render();

function render() {
	clock.msg.data = "new tab";
}
