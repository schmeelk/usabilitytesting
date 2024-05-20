
function onPlaySoundButtonClick() {
  alert('Button Play Sound clicked!');
  solve_start = performance.now();
  
	// create "mySound"...
  var mySound = soundManager.createSound({
	  url: 'media/captcha-sounds/cat.mp3'
	});

	// ...and play it
	mySound.play();
}

function onSubmitButtonClick() {
  alert('Button Submit clicked!');
  solve_end = performance.now();
  
  //check to see if names of image and sound match at begining
  //log time solve results and date
}

var selected_image = 'cat.jpg'; 
 
window.addEventListener('load', choosePic);

var solve_start = -1;
var solve_end = -1; 

var myPix = new Array(
		"bird.jpg",
        "cat.jpg",
        "fireworks.jpg"
		);

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
	 selected_image = myPix[random_index];
     document.getElementById("myPicture").src =  `./media/captcha-images/public-domain-www.publicdomainpictures.net/${selected_image}`;
	 
	const sounds = {
	  alt: {
		url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
	  },
	  bas: {
		url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
	  },
	  sopraan: {
		url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
	  },
	  tenor: {
		url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
	  },
	  total: {
		url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
	  }
	};

	const membershipEl = document.querySelector("#membership");
	const playerEl = document.querySelector("#player");

	playerEl.src = sounds[membershipEl.value].url;
	membershipEl.addEventListener("change", (e) => {
	  playerEl.src = sounds[e.target.value].url;
	});


  const playButtons = document.querySelector('.play-button');
  playButtons.addEventListener('click', onPlaySoundButtonClick);
  
  const submitButtons = document.querySelector('.submit-button');
  submitButtons.addEventListener('click', onSubmitButtonClick);
  
};
