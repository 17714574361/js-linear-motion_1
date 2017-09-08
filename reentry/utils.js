function $(id) {
	return document.getElementById(id);
}

function getStyle(element, attr) {
	let result = element.currentStyle ? element.currentStyle[attr] : getComputedStyle(element, null)[attr];
	return Number.parseInt(result);
}
