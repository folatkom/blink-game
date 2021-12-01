let num;
let ballNr;
let score = 0

function colorBall(){
	$("#score").html(score);
	$(ballNr).removeClass('color');
	num = Math.ceil(Math.random()*37);
	ballNr = "#ball" + num;
	$(ballNr).addClass('color');
	$(".ball").click(function (){
		if ($(this).attr('id')=="ball" + num) {
			score += 1;
			$(ballNr).removeClass('color');	 
		}
		else{
			$("#result").html("you lose");
			clearInterval(timer);
		}
		$(".ball").unbind(); //remove click event listener
	})
}
let timer = setInterval(colorBall,1000);
