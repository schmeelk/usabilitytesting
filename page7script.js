function onPlaySoundButtonClick() {
  alert('Button Play Sound clicked!');
	// create "mySound"...
  var mySound = soundManager.createSound({
	  url: 'media/captcha-sounds/cat.mp3'
	});

	// ...and play it
	mySound.play();
}

function onSubmitButtonClick() {
  alert('Button Submit clicked!');
}

const button = document.querySelector('button');
button.addEventListener('click', onButtonClick);

var selected_image = 'cat.jpg'; 
 
window.onload = choosePic;

var myPix = new Array(
		"bird.jpg",
        "cat.jpg",
        "fireworks.jpg"
		);

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
	 selected_image = imyPix[random_index];
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

