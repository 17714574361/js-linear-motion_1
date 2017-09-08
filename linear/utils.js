function $(id) {
	return document.getElementById(id);
}

function getStyle(element, attr) {
	return element.currentStyle ? element.currentStyle[attr] : getComputedStyle(element, null)[attr];
}
