const jokeContainer = document.getElementById('jokeContainer');
    
function displayJoke(joke) {
    jokeContainer.textContent = joke;
}




function getSingleJoke() {
    fetch('https://v2.jokeapi.dev/joke/Dark?type=single')
        .then(response => response.json())
        .then(data => {
            if (data.joke) {
                displayJoke(data.joke);
            } else {
                displayJoke("Sorry, no single joke available.");
            }
        })
        .catch(error => console.log(error));
}

function getTwoPartJoke() {
    fetch('https://v2.jokeapi.dev/joke/Dark?type=twopart')
        .then(response => response.json())
        .then(data => {
            if (data.setup && data.delivery) {
                const setup = data.setup;
                const delivery = data.delivery;
        //         jokeContainer.innerHTML = `
        // <div>${setup}</div>
        // <div> ${delivery}</div>`
                  displayJoke(setup+" "+delivery);
            }
            else {
                displayJoke("Sorry, no setup joke available.");
            }
        })
        .catch(error => console.log(error));
}


function getAnyJoke() {
    fetch('https://v2.jokeapi.dev/joke/Any')
        .then(response => response.json())
        .then(data => {
            if (data.type === "single") {
                joke = data.joke;
                displayJoke(data.joke);
            } else if (data.type === "twopart") {
                const setup = data.setup;
                const delivery = data.delivery;
                displayJoke(setup+" "+delivery);
            } else {
                displayJoke("Invalid joke type.");
            }
        })
        .catch(error => console.log(error));
}