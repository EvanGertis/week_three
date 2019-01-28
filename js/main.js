
// gloabal variable to keep track of current state;
let state = "Home";

// set inputs for UI buttons.
button1 = document.getElementById('button-one');
button2 = document.getElementById('button-two');
button3 = document.getElementById('button-three');
UI_text = document.getElementById("UI-text");
UI_body = document.getElementById("UI-body");

story = { "Home": "You live in a modest house with Ikea furniture and cream colored walls", "Window": "You are infront of a large bay window.", "Window-view": "What a lovely day it is." };
storyChoice = { "Home": { "button-one": "view window.", "button-two": "view room.", "button-three": "go outside" }, "Window": { "button-one": "look out window", "button-two": "meditate", "button-three": "return to room" } };

main();

function main() {


    switch (state) {
        case "Home": UI_text.innerHTML = story["Home"];
            button1.innerHTML = storyChoice["Home"]["button-one"];
            button2.innerHTML = storyChoice["Home"]["button-two"];
            button3.innerHTML = storyChoice["Home"]["button-three"];
            UI_body.style.background = "pink";
            break;
        case "Window": UI_text.innerHTML = story["Window"];
            button1.innerHTML = storyChoice["Window"]["button-one"];
            button2.innerHTML = storyChoice["Window"]["button-two"];
            button3.innerHTML = storyChoice["Window"]["button-three"];
            UI_body.style.background = "blue";
            break;
        case "Window-view" : UI_text.innerHTML = story["Window-view"];
        button1.innerHTML = storyChoice["Window"]["button-one"];
        button2.innerHTML = storyChoice["Window"]["button-two"];
        button3.innerHTML = storyChoice["Window"]["button-three"];
        UI_body.style.background = "blue";
        default:
    }

}

function buttonOneClick() {

    switch (state) {
        case "Home": state = "Window";
            break;
        case "Window": state = "Window-view"
        default:
    }

    main();

}

function buttonTwoClick() {

}


function buttonThreeClick() {

    switch (state) {
        case "Home": state = "Outside";
            break;
        case "Window": state = "Home";
            break;
        case "Window-view": state = "Home";
            break;
        default:
    }

    main();
}