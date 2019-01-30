
// gloabal variable to keep track of current state;
let state = "Home";

// set inputs for UI buttons.
button1 = document.getElementById('button-one');
button2 = document.getElementById('button-two');
button3 = document.getElementById('button-three');
UI_text = document.getElementById("UI-text");
UI_body = document.getElementById("UI-body");

// Story states. This is a JSON where the key is the story state and the value is the paragraph that is displayed in the UI.
story = { 
    "Home": "You live in a modest house with Ikea furniture and cream colored walls", 
    "Home-view": "You have done well for yourself, but this place seems rather empty", 
    "Window": "You are infront of a large bay window.", "Window-view": "What a lovely day it is.", 
    "Window-meditate":"Ah and so we continue along the path of enlightenment.", 
    "Outside": "What a lovely day. Perhaps, too nice to even go to work?", "Work":"Another day of hard labor, little pay, and medocrity.", 
    "Park": "Ah the park. Sometimes you just got to get outside. I wish I could share this day with someone else.", 
    "Kill": "Violent eh? YOU PSYCOPATH! THERE IS SO MUCH BLOOD!", 
    "Coffee": "Buona coffee, not too bad I should get some for home.",
    "Busted": "great. now you've done it you're so busted.", "Jail":"you're jail. You have no more options. Enjoy!", 
    "Conversation":"Beautiful day isn't it? <br> Stranger: Almost as beautiful as you.",
    "Date":"It is nice to spend time with someone other than myself. <br> Stranger: Yeah, it sure is. <br> I feel like I am stuck in a circle. I don't know how to get out. <br> Stranger: Life is just a recollection of a past that has yet present itself. <br> This seems like deja vu. ",
    "Dancing": "You are in a crowded nightclub with loud music",
    "Drunk": "You puke all over your date",
    "Drugs":"You are high on drugs", 
    };

// Button states. Each state has three button options. These are used to travese the story tree.
storyChoice = { 
    "Home": { "button-one": "view window.", "button-two": "view room.", "button-three": "go outside" }, 
    "Window": { "button-one": "look out window", "button-two": "meditate", "button-three": "return to room" }, 
    "Outside": { "button-one": "go to work.", "button-two": "go to the park.", "button-three": "return home."}, 
    "Work": { "button-one": "kill your boss.", "button-two": "drink coffee and get to work.", "button-three": "return home."}, 
    "Park": { "button-one": "start a conversation with a stranger.", "button-two": "go to work.", "button-three": "return home."}, 
    "Kill": {"button-one": "clean up the blood.", "button-two": "confess to what you've done.", "button-three": "drink coffee."},  "Busted": {"button-one": "play again?", "button-two": "go to jail", "button-three": "----"},
    "Jail": {"button-one": "----", "button-two": "----", "button-three": "----"}, 
    "Conversation": {"button-one": "kill them.", "button-two": "go on date.", "button-three": "go home."},
    "Date": {"button-one": "Kill your date.", "button-two": "Go dancing.", "button-three": "Go home."},
    "Dancing": {"button-one": "Get drunk.", "button-two": "Get high.", "button-three": "Go home."},
    "Drugs": {"button-one": "Do more drugs.", "button-two": "Get drunk.", "button-three": "Go home."},
    "Drunk": {"button-one": "''I'm okay!'', keep drinking.", "button-two": "Do some drugs.", "button-three": "Go home."}
    };

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
        case "Kill": UI_text.innerHTML = story["Kill"];
            button1.innerHTML = storyChoice["Kill"]["button-one"];
            button2.innerHTML = storyChoice["Kill"]["button-two"];
            button3.innerHTML = storyChoice["Kill"]["button-three"];
            UI_body.style.backgroundImage = "url('https://thumbs.gfycat.com/BlondNiftyHochstettersfrog-max-1mb.gif')";
            break;
        case "Coffee": UI_text.innerHTML = story["Coffee"];
            button1.innerHTML = storyChoice["Work"]["button-one"];
            button2.innerHTML = storyChoice["Work"]["button-two"];
            button3.innerHTML = storyChoice["Work"]["button-three"];
            UI_body.style.background = "brown";
            state = "Work";
            break;
        case "Busted": UI_text.innerHTML = story["Busted"];
            button1.innerHTML = storyChoice["Busted"]["button-one"];
            button2.innerHTML = storyChoice["Busted"]["button-two"];
            button3.innerHTML = storyChoice["Busted"]["button-three"];
            UI_body.style.backgroundImage = "url('https://www.lequzhai.com/data/out/12/497132.gif')";
            break;
        case "Jail": UI_text.innerHTML = story["Jail"];
            button1.innerHTML = storyChoice["Jail"]["button-one"];
            button2.innerHTML = storyChoice["Jail"]["button-two"];
            button3.innerHTML = storyChoice["Jail"]["button-three"];
            UI_body.style.background = "gray";
            break;
        case "Conversation": UI_text.innerHTML = story["Conversation"];
            button1.innerHTML = storyChoice["Conversation"]["button-one"];
            button2.innerHTML = storyChoice["Conversation"]["button-two"];
            button3.innerHTML = storyChoice["Conversation"]["button-three"];
            UI_body.style.background = "purple";
            break;
        case "Date": UI_text.innerHTML = story["Date"];
            button1.innerHTML = storyChoice["Date"]["button-one"];
            button2.innerHTML = storyChoice["Date"]["button-two"];
            button3.innerHTML = storyChoice["Date"]["button-three"];
            UI_body.style.background = "orange";
            break;
        case "Drunk": UI_text.innerHTML = story["Drunk"];
            button1.innerHTML = storyChoice["Drunk"]["button-one"];
            button2.innerHTML = storyChoice["Drunk"]["button-two"];
            button3.innerHTML = storyChoice["Drunk"]["button-three"];
            UI_body.style.backgroundImage = "url('https://i.gifer.com/IbdT.gif')";
            state = "Drunk";
            break;
        case "Drugs": UI_text.innerHTML = story["Drugs"];
            button1.innerHTML = storyChoice["Drugs"]["button-one"];
            button2.innerHTML = storyChoice["Drugs"]["button-two"];
            button3.innerHTML = storyChoice["Drugs"]["button-three"];
            UI_body.style.background = "yellow";
            state = "Drugs";
            break;
        case "Dancing": UI_text.innerHTML = story["Dancing"];
            button1.innerHTML = storyChoice["Dancing"]["button-one"];
            button2.innerHTML = storyChoice["Dancing"]["button-two"];
            button3.innerHTML = storyChoice["Dancing"]["button-three"];
            UI_body.style.backgroundImage = "url('https://media.giphy.com/media/C3EAt5F9qfHPO/giphy.gif')";
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
        case "Park": state = "Conversation";
            break;
        case "Work": state = "Kill";
            break;
        case "Kill": state = "Busted";
            break;
        case "Busted": state = "Home";
            break;
        case "Conversation": state = "Kill";
            break;
        case "Date": state = "Kill";
            break;
        case "Dancing": state = "Drunk";
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
        case "Park": state = "Work";
            break;
        case "Work": state = "Coffee";
            break;
        case "Kill": state = "Busted";
            break;
        case "Busted": state = "Jail";
            break;
        case "Conversation": state = "Date";
            break;
        case "Date": state = "Dancing";
            break;
        case "Dancing": state = "Drugs";
            break;
        case "Drugs": state = "Drunk";
            break;
        case "Drunk": state = "Drugs";
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
            break;
        case "Park": state = "Home";
            break;
        case "Work": state = "Home";
            break;
        case "Kill": state = "Busted";
            break;
        case "Conversation": state = "Home";
            break;
        case "Date": state = "Home";
            break;
        case "Dancing": state = "Home";
            break;
        case "Drugs": state = "Home";
            break;
        case "Drunk": state = "Home";
            break;
        default:
    }

    main();
}