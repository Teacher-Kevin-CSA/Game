let step = 1;

function game() {
    let input = document.getElementById("userInput").value.toLowerCase();
    let message = document.getElementById("message");

    if (step === 1) {
        if (input === "right") {
            message.innerText = "You fall into a hole\nGame over!";
        } else {
            message.innerText =
                "You have come to a lake. There is an island in the middle of the lake.\n" +
                'Type "wait" to wait for the boat or "swim" to swim across.';
            step = 2;
        }
    }

    else if (step === 2) {
        if (input === "wait") {
            message.innerText = "The boat was attacked by pirates\nGame over!";
        } else {
            message.innerText =
                "You arrived at the island unharmed.\n" +
                "There is a house with 3 doors.\n" +
                "One red, one yellow, and one blue.";
            step = 3;
        }
    }

    else if (step === 3) {
        if (input === "red") {
            message.innerText = "You were burned by a fire\nGame over!";
        } else if (input === "yellow") {
            message.innerText = "You win!";
        } else if (input === "blue") {
            message.innerText = "You are eaten by beast\nGame over!";
        } else {
            message.innerText = "Game over!";
        }
    }

    document.getElementById("userInput").value = "";
}
