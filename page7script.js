let solve_start = -1;
let solve_end = -1;
let submit_time = -1;
let submit_attempt_count = 0;
let play_button_attempt_count = 0;
let listOfSubmitObjects = [];
let selected_image = 'cat.jpg';
let soundPath = '';

window.addEventListener('load', choosePic);


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


function SubmitDetails(match, comments, selectedTextValue) {
  //date, time, page, submit_time, start_time, end_time, imagefile_name, soundfile_name, attempts
  this.date = Date.now();
  this.page = 'Page7';
  this.submit_time = submit_time;
  this.solve_start_time = solve_start;
  this.solve_end_time = solve_end;
  this.imageFileName = selected_image;
  this.soundFileName = soundPath;
  this.textNames = selectedTextValue;
  this.accurate = match;
  this.submitAttemptNumber = submit_attempt_count;
  this.playButtonCount = play_button_attempt_count;
  this.usercomments = comments;
}



function onPlaySoundButtonClick() {
	//alert('Play Sound Button Submit clicked!');
    solve_start = Date.now(); 
    play_button_attempt_count = play_button_attempt_count + 1;
	soundPath = 	`./media/captcha-sounds/pixabay-com-sound-effects/${selected_image.replace('.jpg', '.mp3')}`;
	console.log(soundPath);
	
	const audio = new Audio(soundPath);
	audio.play();  //2seconds look at API ... edit media for different lenths  ... study A/B testing 
}

function onSubmitButtonClick() {
    //alert('Submit Button clicked!');
    solve_end = Date.now(); ;
	submit_time = solve_end - solve_start;
	submit_attempt_count = submit_attempt_count + 1;
    console.log(submit_time);
	let mylist = document.getElementById("choiceList");  
    let selected_value = mylist.options[mylist.selectedIndex].text;  
	let match = 'Fail';
	let comments = 'n/a';
	//alert('selected value is ' + selected_value);
	
	if(selected_image.includes(selected_value)){
		comments = prompt('Success! Type any comments here'); 
        match = 'Success';
	}
	else{
		comments = prompt('Please Try Again! Type any comments here'); 
		match = 'Fail';
	}

	console.log(comments);
	console.log(listOfSubmitObjects);
	let sd = new SubmitDetails(match, comments, selected_value);
	console.log(sd);
	listOfSubmitObjects.push(sd);
	writeUserData(sd);	
}

function writeUserData() {
  // date, time, page, submit_time, start_time, end_time, imagefile_name, soundfile_name
  localStorage.setItem("arraySubmits", listOfSubmitObjects); 
  console.log('write user data');
  console.log(listOfSubmitObjects);
}






 const csvButtons = document.querySelector('.export-csv');
 csvButtons.addEventListener('click', onCSVButtonsClick);
 
 function onCSVButtonsClick(event){
	 alert("CSV Button Clicked!");
	 let exportData = localStorage.getItem("arraySubmits");
	 let file = new Blob([exportData], {type: 'text/plain'});
	 let a=event.target.parent;
	 a.href = URL.createObjectURL(file);
     let fileDetails = prompt('Please enter any file name details here!'); 
	 a.download = fileDetails+'SubmitExportFile'+Date.now()+'.txt';
 }

//function download(content, fileName, contentType) {
//    var a = document.createElement("a");
//    var file = new Blob([content], {type: contentType});
//    a.href = URL.createObjectURL(file);
//    a.download = fileName;
//    a.click();
//}
//download(jsonData, 'json.txt', 'text/plain');




