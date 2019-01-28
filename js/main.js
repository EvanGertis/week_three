
// gloabal variable to keep track of current state;
let state = "Home";

// set inputs for UI buttons.
button1 = document.getElementById('button-one');
button2 = document.getElementById('button-two');
button3 = document.getElementById('button-three');
UI_text = document.getElementById("UI-text");
UI_body = document.getElementById("UI-body");

// Story states. This is a JSON where the key is the story state and the value is the paragraph that is displayed in the UI.
story = { "Home": "You live in a modest house with Ikea furniture and cream colored walls", "Home-view": "You have done well for yourself, but this place seems rather empty", "Window": "You are infront of a large bay window.", "Window-view": "What a lovely day it is.", "Window-meditate":"Ah and so we continue along the path of enlightenment.", "Outside": "What a lovely day. Perhaps, too nice to even go to work?", "Work":"Another day of hard labor, little pay, and medocrity.", "Park": "Ah the park. Sometimes you just got to get outside. I wish I could share this day with someone else." };

// Button states. Each state has three button options. These are used to travese the story tree.
storyChoice = { "Home": { "button-one": "view window.", "button-two": "view room.", "button-three": "go outside" }, "Window": { "button-one": "look out window", "button-two": "meditate", "button-three": "return to room" }, "Outside": { "button-one": "go to work.", "button-two": "go to the park.", "button-three": "return home."}, 
"Work": { "button-one": "kill your boss.", "button-two": "drink coffee and get to work.", "button-three": "return home."}, "Park": { "button-one": "start a conversation with a stranger.", "button-two": "go to work.", "button-three": "return home."} };

main();

function main() {


    switch (state) {
        case "Home": UI_text.innerHTML = story["Home"];
            button1.innerHTML = storyChoice["Home"]["button-one"];
            button2.innerHTML = storyChoice["Home"]["button-two"];
            button3.innerHTML = storyChoice["Home"]["button-three"];
            UI_body.style.background = "pink";
            break;
        case "Home-view": UI_text.innerHTML = story["Home-view"];
            button1.innerHTML = storyChoice["Home"]["button-one"];
            button2.innerHTML = storyChoice["Home"]["button-two"];
            button3.innerHTML = storyChoice["Home"]["button-three"];
            UI_body.style.background = "pink";
            state = "Home";
            break;
        case "Window": UI_text.innerHTML = story["Window"];
            button1.innerHTML = storyChoice["Window"]["button-one"];
            button2.innerHTML = storyChoice["Window"]["button-two"];
            button3.innerHTML = storyChoice["Window"]["button-three"];
            UI_body.style.background = "blue";
            break;
        case "Window-view": UI_text.innerHTML = story["Window-view"];
            button1.innerHTML = storyChoice["Window"]["button-one"];
            button2.innerHTML = storyChoice["Window"]["button-two"];
            button3.innerHTML = storyChoice["Window"]["button-three"];
            UI_body.style.background = "blue";
            state = "Window";
            break;
        case "Window-meditate": UI_text.innerHTML = story["Window-meditate"];
            button1.innerHTML = storyChoice["Window"]["button-one"];
            button2.innerHTML = storyChoice["Window"]["button-two"];
            button3.innerHTML = storyChoice["Window"]["button-three"];
            UI_body.style.background = "blue";
            state = "Window";
            break;
        case "Outside": UI_text.innerHTML = story["Outside"];
            button1.innerHTML = storyChoice["Outside"]["button-one"];
            button2.innerHTML = storyChoice["Outside"]["button-two"];
            button3.innerHTML = storyChoice["Outside"]["button-three"];
            UI_body.style.background = "green";
            break;
        case "Work": UI_text.innerHTML = story["Work"];
            button1.innerHTML = storyChoice["Work"]["button-one"];
            button2.innerHTML = storyChoice["Work"]["button-two"];
            button3.innerHTML = storyChoice["Work"]["button-three"];
            UI_body.style.background = "black";
            break;
        case "Park": UI_text.innerHTML = story["Park"];
            button1.innerHTML = storyChoice["Park"]["button-one"];
            button2.innerHTML = storyChoice["Park"]["button-two"];
            button3.innerHTML = storyChoice["Park"]["button-three"];
            UI_body.style.background = "aquamarine";
            break;
        default:
    }

}

function buttonOneClick() {

    switch (state) {
        case "Home": state = "Window";
            break;
        case "Window": state = "Window-view";
            break;
        case "Outside": state = "Work";
            break;
        default:
    }

    main();

}

function buttonTwoClick() {

    switch (state) {
        case "Home": state = "Home-view";
            break;
        case "Window": state = "Window-meditate";
            break;
        case "Outside": state = "Park";
            break;
        default:
    }

    main();

}


function buttonThreeClick() {

    switch (state) {
        case "Home": state = "Outside";
            break;
        case "Window": state = "Home";
            break;
        case "Window-view": state = "Home";
            break;
        case "Outside": state = "Home";
        default:
    }

    main();
}