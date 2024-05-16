function onButtonClick() {
  alert('Button clicked!');
}

const button = document.querySelector('button');
button.addEventListener('click', onButtonClick);


window.onload = choosePic;

var myPix = new Array(
		"bird.jpg",
        "cat.jpg",
        "fireworks.jpg"
		);

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
	 var selected_image = imyPix[random_index];
     document.getElementById("myPicture").src =  `./media/captcha-images/public-domain-www.publicdomainpictures.net/${selected_image}`;
	 