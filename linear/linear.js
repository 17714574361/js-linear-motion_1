window.onload = function () {
	let start = $("start");
	let box = $("box");

	//总路程
	const TOTAL_DISTANCE = 600;
	//速度，每50ms走多少路程
	const SPEED = 15;

	start.onclick = function () {
		//清除老的定时器，box.timer就是我们给box添加一个自定义属性
		clearInterval(box.timer);
		//开启一个新的定时器
		box.timer = setInterval(function () {
			box.style.left = box.offsetLeft + SPEED + "px";
			//如果box的left值大于总路程，则设置总路程，并清除定时器，若不清除定时器，就会一直运行此段代码，这样会减少性能
			if (Number.parseInt(getStyle(box, "left")) > TOTAL_DISTANCE) {
				box.style.left = TOTAL_DISTANCE + "px";
				clearInterval(box.timer);
			}
		}, 50);
	}
}
