window.onload = function () {
	let start = $("start");
	let box = $("box");

	//总路程
	const TOTAL_DISTANCE = 600;
	//速度
	let SPEED = 15;

	//最小路程,代码世界中可以为负数
	const MIN_DISTANCE = 0;

	start.onclick = function () {
		//清除老的定时器
		clearInterval(box.timer);
		box.timer = setInterval(function () {
			//设置速度
			box.style.left = box.offsetLeft + SPEED + "px";
			//当box距离左侧的距离 >= 总路程的时候，就把速度 * -1
			//这样下一次就是减去这个速度
			//box.offsetLeft不能写box的left值,写了left值后就会一直抖动
			if (box.offsetLeft >= TOTAL_DISTANCE) {
				SPEED *= -1;
			}
			//当box距离左侧距离 <= 最小距离是，就把速度 * -1
			//这样下一次就是加上这个速度
			if (box.offsetLeft <= MIN_DISTANCE) {
				SPEED *= -1;
			}
		}, 50);
	}
}
