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
	console.log("New speed is " + video.playbackRate);
	});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.95;
	console.log("New speed is " + video.playbackRate);
	});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 15 < video.duration){
		console.log("Original location " + video.currentTime);
		video.currentTime += 15;
		console.log("New location " + video.currentTime);
		video.play();
	} 
	else {
		console.log("Going back to beginning");
		video.currentTime = 0;
		console.log("New location " + video.currentTime);
		video.play();
	}
});



/* document.querySelector("#mute").addEventListener("click", function() {
	video.muted = true;
	
	}); */

/* if (video.muted){
	document.querySelector("#mute").innerHTML= "Unmute";
	document.querySelector("#mute").addEventListener("click", function() {
		video.muted = false;
		});
} else {
	document.querySelector("#mute").innerHTML= "Mute";
	document.querySelector("#mute").addEventListener("click", function() {
		video.muted = true;
		});
}
 */




document.querySelector("#mute").addEventListener("click", function() {
	video.muted = true;
	document.querySelector("#mute").innerHTML= "Unmute"
	console.log("Muted");
	if (video.muted){
		document.querySelector("#mute").addEventListener("click", function() {
			video.muted = false;
			document.querySelector("#mute").innerHTML= "Mute"
			console.log("Unmuted");
			});
	}
	});



document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Vintage");
	video.classList.add("oldSchool");
	});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Back to normal");
	video.classList.remove("oldSchool");
	});
	
