console.log("Hello")

var submit_button = document.getElementById("submit_button");

/*
submit_button.addEventListener("click", fetchGiphyImages);


function fetchGiphyImages(event) {
    event.preventDefault(); //Prevent form submission (optional)

    //Perform your desired action here
    console.log("Button clicked!");
}

(event) => {
    event.preventDefault(); //Prevent form submission (optional)

    //Perform your desired action here
    console.log("Button clicked!");
}
*/

submit_button.addEventListener("click", (event) => {
    event.preventDefault(); //Prevent form submission (optional)

    //Perform your desired action here
    console.log("Button clicked!");
});