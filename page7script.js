
import { } from 'https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js'
//import firebase from "firebase/app";
//import "firebase/compat/database";
//import { getDatabase, ref, set } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
//const firebaseConfig = {
  // ...
  // The value of `databaseURL` depends on the location of the database
  //databaseURL: "https://usabilitymetrics-default-rtdb.firebaseio.com",
//};

// Initialize Firebase
//firebase.initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
//const database = firebase.database();


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
    //alert('Button Submit clicked!');
    solve_end = performance.now(); ;
	submit_time = solve_end - solve_start;
    //console.log(submit_time);
	var mylist = document.getElementById("choiceList");  
    let selected_value = mylist.options[mylist.selectedIndex].text;  
	//alert('selected value is ' + selected_value);
	
	if(selected_image.includes(selected_value)){
		alert("Success!")
	}
	else{
		alert("Please Try Again!")
	}
	
	console.log(selected_value);
	writeUserData(1,2,3,4);
	
    //check to see if names of image and sound match at begining
    //log time solve results and date
	//report to screen
	//send to firebase database: date, time, solve_time, start_time, end_time, imagefile_name, soundfile_name
	
}

function writeUserData(param1, param2, param3, param4) {
  const db = getDatabase();
  set(ref(db, 'info/' + param1), {
    testa: test1,
    testb: test2,
    testc : test3
  });
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


