console.log("Hello")

const api_key = "JSTUMgAWOn2NAFffrAamFQ85M6tlJiUm";

var submit_button = document.getElementById("submit_button");
var searchInput = document.getElementById("searchInput");

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

submit_button.addEventListener("click", async (event) => {
    event.preventDefault(); //Prevent form submission (optional)

    //Perform your desired action here
    try {
        // Perform the asynchronous action here
        const searchTerm = searchInput.value;
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${encodeURIComponent(searchTerm)}`);
        console.log(searchTerm);
        const data = await response.json();


        const gifs = data.data[0].images["original"].url;

        data.data.forEach(gif => {
            const img = document.createElement("img");
            img.src = gif.images["original"].url;
            gifsDiv.appendChild(img);
        });

        // Process the fetched data or perform other actions
        console.log(gifs);
    } catch (error) {
        // Handle any errors that occur during the fetch
        console.log("An error occurred:", error);
    }
});

// https://api.giphy.com/v1/gifs/search?api_key=JSTUMgAWOn2NAFffrAamFQ85M6tlJiUm&q=Hello