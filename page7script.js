let solve_start = -1;
let solve_end = -1;
let submit_time = -1;

function onPlaySoundButtonClick() {
    //alert('Button Play Sound clicked!');
    solve_start = Date.now(); 

	const soundPath = 	`./media/captcha-sounds/pixabay-com-sound-effects/${selected_image.replace('.jpg', '.mp3')}`;
	console.log(soundPath);
	
	const audio = new Audio(soundPath);
	audio.play();  //2seconds look at API ... edit media for different lenths  ... study A/B testing 
}

function onSubmitButtonClick() {
    //alert('Button Submit clicked!');
    solve_end = Date.now(); ;
	submit_time = solve_end - solve_start;
    console.log(submit_time);
	let mylist = document.getElementById("choiceList");  
    let selected_value = mylist.options[mylist.selectedIndex].text;  
	//alert('selected value is ' + selected_value);
	
	if(selected_image.includes(selected_value)){
		alert("Success!");
	}
	else{
		alert("Please Try Again!");
	}
	
	console.log(selected_value);
	writeUserData();// date, time, page, submit_time, start_time, end_time, imagefile_name, soundfile_name, incorrect attempts
	
}




function writeUserData() {
  // date, time, page, submit_time, start_time, end_time, imagefile_name, soundfile_name
  localStorage.setItem("Solve Time", submit_time.toString());
  
 
}

let selected_image = 'cat.jpg';

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

 const csvButtons = document.querySelector('.export-csv');
 csvButtons.addEventListener('click', onCSVButtonsClick);
 
 function onCSVButtonsClick(event){
	 console.alert("csv button click");
	 let exportData = localStorage.getItem("Solve Time");
	 let file = new Blob([exportData], {type: 'text/plain'});
	 let a=event.target.parent;
	 a.href = URL.createObjectURL(file);
	 a.download = 'exportfile'+Date.now()+'.txt';
 }

//function download(content, fileName, contentType) {
//    var a = document.createElement("a");
//    var file = new Blob([content], {type: contentType});
//    a.href = URL.createObjectURL(file);
//    a.download = fileName;
//    a.click();
//}
//download(jsonData, 'json.txt', 'text/plain');




