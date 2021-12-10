const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 10;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

var snake;

(function setup(){
	snake = new Snake();
	food = new Food();
	food.randLocation();

	window.setInterval(() => {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		food.draw()
		snake.update();
		snake.draw();

		if (snake.eat(food)){
			food.randLocation();
		}
	}, 250);
}());

window.addEventListener("keydown", ((evt) => {
	const direction = evt.key.replace("Arrow", "");
	snake.changeDirection(direction);
}))