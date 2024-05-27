let solve_start = -1;
let solve_end = -1;
let submit_time = -1;
let submit_attempt_count = 0;
let play_button_attempt_count = 0;
let listOfSubmitObjects = [];
let selected_image11 = 'cat.jpg';
let selected_image12 = 'cat.jpg';
let selected_image13 = 'cat.jpg';
let selected_image21 = 'cat.jpg';
let selected_image22 = 'cat.jpg';
let selected_image23 = 'cat.jpg';
let sound_image = 'cat.jpg';
let soundPath = '';
let soundNotSelected = true;
let selected_value = 'none.jpg';


window.addEventListener('load', choosePic);


var myPix = new Array(
    "bird.jpg",
    "cat.jpg",
    "fireworks.jpg",
	"breaking-glass.jpg",
	"chimes.jpg",
	"clock.jpg",
	"dolphin.jpg",
	"door-knock.jpg",
	"drum.jpg",
	"geese.jpg",
	"phone.jpg",
	"rain.jpg",
	"saw.jpg"
);

var myPixOnPage = new Array();
var pickedAlreadyMyPicIndex = new Array();


function onImageButtonClick(e) {
	
	alert("Image Button Click");
    var target = (e.target) ? e.target : e.srcElement;
	console.log("Image Button Click")
	console.log(target)
    selected_value = target.src;
	console.log(selected_value);
}

const button_td11 = document.querySelector('.td11-button');
button_td11.addEventListener('click', onImageButtonClick);

const button_td12 = document.querySelector('.td12-button');
button_td12.addEventListener('click', onImageButtonClick);

const button_td13 = document.querySelector('.td13-button');
button_td13.addEventListener('click', onImageButtonClick);

const button_td21 = document.querySelector('.td21-button');
button_td21.addEventListener('click', onImageButtonClick);

const button_td22 = document.querySelector('.td22-button');
button_td22.addEventListener('click', onImageButtonClick);

const button_td23 = document.querySelector('.td23-button');
button_td23.addEventListener('click', onImageButtonClick);

function choosePic() {
	
    let randomNum = Math.floor(Math.random() * myPix.length);
    selected_image11 = myPix[randomNum];
	pickedAlreadyMyPicIndex.push(randomNum);

    //let button_td11 = document.getElementById("td11").src;
    //button_td11.innerHTML = '<img src="./media/captcha-images/public-domain-www.publicdomainpictures.net/'+${selected_image11}+'" />';
    document.getElementById("td11img").src = `./media/captcha-images/public-domain-www.publicdomainpictures.net/${selected_image11}`;
    myPixOnPage.push(selected_image11);

	while(pickedAlreadyMyPicIndex.includes(randomNum)){
		randomNum = Math.floor(Math.random() * myPix.length);
	}
    selected_image12 = myPix[randomNum];
    pickedAlreadyMyPicIndex.push(randomNum);
	
    document.getElementById("td12").src = `./media/captcha-images/public-domain-www.publicdomainpictures.net/${selected_image12}`;
    myPixOnPage.push(selected_image12);

    while(pickedAlreadyMyPicIndex.includes(randomNum)){
		randomNum = Math.floor(Math.random() * myPix.length);
	}
    selected_image13 = myPix[randomNum];
    pickedAlreadyMyPicIndex.push(randomNum);
	
    document.getElementById("td13").src = `./media/captcha-images/public-domain-www.publicdomainpictures.net/${selected_image13}`;
    myPixOnPage.push(selected_image13);

    while(pickedAlreadyMyPicIndex.includes(randomNum)){
		randomNum = Math.floor(Math.random() * myPix.length);
	}
    selected_image21 = myPix[randomNum];
	pickedAlreadyMyPicIndex.push(randomNum);

    document.getElementById("td21").src = `./media/captcha-images/public-domain-www.publicdomainpictures.net/${selected_image21}`;
    myPixOnPage.push(selected_image21);

    while(pickedAlreadyMyPicIndex.includes(randomNum)){
		randomNum = Math.floor(Math.random() * myPix.length);
	}
    selected_image22 = myPix[randomNum];
	pickedAlreadyMyPicIndex.push(randomNum);
	
    document.getElementById("td22").src = `./media/captcha-images/public-domain-www.publicdomainpictures.net/${selected_image22}`;
    myPixOnPage.push(selected_image22);

    while(pickedAlreadyMyPicIndex.includes(randomNum)){
		randomNum = Math.floor(Math.random() * myPix.length);
	}
    selected_image23 = myPix[randomNum];
	pickedAlreadyMyPicIndex.push(randomNum);
	
    document.getElementById("td23").src = `./media/captcha-images/public-domain-www.publicdomainpictures.net/${selected_image23}`;
    myPixOnPage.push(selected_image23);

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
    this.imageFileName = selected_value;
    this.soundFileName = soundPath;
    this.textNames = selectedTextValue;
    this.accurate = match;
    this.submitAttemptNumber = submit_attempt_count;
    this.playButtonCount = play_button_attempt_count;
    this.usercomments = comments;
}

function selectSound(){
	
	if (soundNotSelected){
		let randomNum = Math.floor(Math.random() * pickedAlreadyMyPicIndex.length);
		sound_image = myPix[pickedAlreadyMyPicIndex[randomNum]];
		console.log(sound_image);
	
		soundPath = `./media/captcha-sounds/pixabay-com-sound-effects/${sound_image.replace('.jpg', '.mp3')}`;
		console.log(soundPath);
		soundNotSelected = false;
	}
}

function onPlaySoundButtonClick() {
    //alert('Play Sound Button Submit clicked!');
    solve_start = Date.now();
    play_button_attempt_count = play_button_attempt_count + 1;
	selectSound();
    const audio = new Audio(soundPath);
    audio.play(); //2seconds look at API ... edit media for different lenths  ... study A/B testing 
}

function onSubmitButtonClick() {
    alert('Submit Button clicked!');
    solve_end = Date.now();
    submit_time = solve_end - solve_start;
    submit_attempt_count = submit_attempt_count + 1;
    console.log(submit_time);
    let match = 'Fail';
    let comments = 'n/a';
    //alert('selected value is ' + selected_value);
	console.log('selected value');
	console.log(selected_value);
	console.log('sound_image');
	console.log(sound_image);
	console.log(selected_value.includes(sound_image));
    if (selected_value.includes(sound_image)) {
        comments = prompt('Success! Type any comments here');
        match = 'Success';
    } else {
        comments = prompt('Please Try Again! Type any comments here');
        match = 'Fail';
    }
    console.log('onSubmitButtonClick after prompt!');
    console.log(comments);
    console.log(listOfSubmitObjects);
    let sd = new SubmitDetails(match, comments, selected_value);  //TOO FIX
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


function submitDetails2JSON(exportData) {  //TOO FIX
    let json_arr = [];
    for (let i in listOfSubmitObjects) {
        let o = listOfSubmitObjects[i];
        json_arr.push([{
            "Sumit Details Time": o.date, //.toString(),
            "Export Date Information": (new Date()).toString(),
            "Page": o.page,
            "Submit Time": o.submit_time, //.toString(),
            "Solve Start Time": o.solve_start_time, //.toString(),
            "Solve End Time": o.solve_end_time, //.toString(),
            "Image File Name": o.imageFileName,
            "Sound File Name": o.soundFileName,
            "Text Names": o.textNames,
            "Accurate": o.accurate,
            "Submit Attempt Number": o.submitAttemptNumber, //.toString(),
            "Play Button Count": o.playButtonCount, //.toString(),
            "User Comments": o.usercomments,
        }]);
    }
    console.log('Convert to JSON');
    console.log(json_arr);
    return json_arr;
}



const csvButtons = document.querySelector('.export-csv');
csvButtons.addEventListener('click', onCSVButtonsClick);

function onCSVButtonsClick(event) {
    alert("CSV Button Clicked!");
    let exportData = localStorage.getItem("arraySubmits");
    console.log('in onCSVButtonsClick');
    console.log(exportData);
    let a = document.createElement("a");
    console.log('here0');
    console.log(JSON.stringify(exportData, null, 2));
    a.href = URL.createObjectURL(new Blob([JSON.stringify(submitDetails2JSON(), null, 2)], {
        type: "application/json"
    }));
    console.log('here1');
    let fileDetails = prompt('Please enter any file name details here!');
    a.setAttribute("download", fileDetails + 'SubmitExportFile' + Date.now() + '.txt');
    console.log('here2');
    document.body.appendChild(a);
    console.log('here3');
    a.click();
    console.log('here3');
    document.body.removeChild(a);
    console.log('here4');
}

