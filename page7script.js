
function onPlaySoundButtonClick() {
    //alert('Button Play Sound clicked!');
    solve_start = performance.now(); ;

    //create "mySound"...
    //var mySound = soundManager.createSound({
    //    url: 'media/captcha-sounds/cat.mp3'
    //});

    // ...and play it
    //mySound.play();

	const soundPath = 	`./media/captcha-sounds/pixabay-com-sound-effects/${selected_image.replace('.jpg', '.mp3')}`;
	console.log(soundPath);
	
	const audio = new Audio(soundPath);
	audio.play();
}

function onSubmitButtonClick() {
    alert('Button Submit clicked!');
    solve_end = performance.now(); ;
	submit_time = solve_end - solve_start;
    //console.log(submit_time);
	var mylist = document.getElementById("choiceList");  
    let selected_value = mylist.options[mylist.selectedIndex].text;  
	alert('selected value is ' + selected_value);
	
	if(selected_image.includes(selected_value)){
		alert("correct!")
	}
	else{
		alert("incorrect!")
	}
	
	let selected_image_name = selected_image.substring(1, selected_image.length - position);
	console.log(selected_image_name);
	console.log(selected_value);
	
    //check to see if names of image and sound match at begining
    //log time solve results and date
	//report to screen
	//send to firebase database: date, time, solve_time, start_time, end_time, imagefile_name, soundfile_name
	
}

let selected_image = 'cat.jpg';

window.addEventListener('load', choosePic);

var solve_start = -1;
var solve_end = -1;
var submit_time = -1;

var myPix = new Array(
    "bird.jpg",
    "cat.jpg",
    "fireworks.jpg"
);


function choosePic() {
    const randomNum = Math.floor(Math.random() * myPix.length);
    selected_image = myPix[randomNum];
    document.getElementById("myPicture").src = `./media/captcha-images/public-domain-www.publicdomainpictures.net/${selected_image}`;

    const playButtons = document.querySelector('.play-button');
    playButtons.addEventListener('click', onPlaySoundButtonClick);

    const submitButtons = document.querySelector('.submit-button');
    submitButtons.addEventListener('click', onSubmitButtonClick);

};


