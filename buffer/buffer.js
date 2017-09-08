window.onload = function () {
	let start = $("start");
	let box = $("box");

	//总路程
	const TOTAL_DISTANCE = 600;

	start.onclick = function () {
		//清除老的定时器
		clearInterval(box.timer);
		//开启新的定时器
		box.timer = setInterval(function () {
			//获得当前box的left值
			let currentPosition = getStyle(box, "left");
			//速度=剩下的路程/8，8为8段
			//			let speed = (TOTAL_DISTANCE - currentPosition) / 8;
			let speed = (currentPosition + 5) / 8;
			box.style.left = box.offsetLeft + speed + "px";
			if (box.offsetLeft >= TOTAL_DISTANCE) {
				box.style.left = TOTAL_DISTANCE + "px";
				clearInterval(box.timer);
			}
		}, 50);
	}
}
