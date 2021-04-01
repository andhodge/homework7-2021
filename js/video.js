var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

document.querySelector("#slider").addEventListener("input", function() {
	console.log(this.value)
	var slider = this.value / 100;
	video.volume = slider
	document.querySelector("#volume").innerHTML=video.volume*100+"%"
	});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML=video.volume*100+"%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
	});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.95;
	console.log(video.playbackRate);
	});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.95;
	console.log(video.playbackRate);
	});




document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Vintage");
	video.classList.add("oldSchool");
	});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Back to normal");
	video.classList.remove("oldSchool");
	});
	
