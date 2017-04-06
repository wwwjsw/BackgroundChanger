(function(){
	//object to be changed background
	var backgroundElement = document.getElementById('ElementId');
	//pass array of images to function
	ramdomBackground(['banner1.png','banner2.png','banner3.png'], backgroundElement);
})();

function ramdomBackground(banner, domElement){
	//element
	domElement.style.backgroundImage = "url('assets/img/"+banner[randomNumbersBetweenRange(0,2)]+"')";
}
// function to generate numbers in specific range
function randomNumbersBetweenRange(start, end){
	return Math.floor(Math.random() * (end - start + 1)) + start;
}
