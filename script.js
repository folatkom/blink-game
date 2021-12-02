let num;
let ballNr;
let points = 0;
let clicked = false;
function colorBall(){
	$("#points").html(points);
	$(ballNr).removeClass('color');
	num = Math.ceil(Math.random()*37);
	ballNr = "#ball" + num;
	$(ballNr).addClass('color');
	$(".ball").click(function (){
		clicked = true
		if ($(this).attr('id') == "ball" + num) {
			points += 1;
			$(ballNr).removeClass('color');	 
		}
		else{
			lost();
		}
		$(".ball").unbind(); //remove click event listener
	})
	let timer1 = setTimeout(fal,1000)
	
}
let timer = setInterval(colorBall,1000);
function fal(){
	if(clicked == false){
		lost();
	}
	clicked = false;
}
function lost(){
	$("#result").html("YOU LOST");
	clearInterval(timer);
	$("#again").html("&nbspTry again&nbsp");
}