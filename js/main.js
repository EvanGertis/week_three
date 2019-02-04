
// gloabal variable to keep track of current state;
let state = "Home";

// set inputs for UI buttons.
button1 = document.getElementById('button-one');
button2 = document.getElementById('button-two');
button3 = document.getElementById('button-three');
UI_text = document.getElementById("UI-text");
UI_body = document.getElementById("UI-body");

// this variable is used to keep track of the number of clicks the user needs to make to get out of jail
let clicks = 30;

// this variable is used to keep track of how much narcotics the user abuses.
let hits = 20;

// this variable is used to keep track of how much the user drinks.
let drinks = 12;

// this variable is used to keep track of money made.
let income = 0;

// this variable is used to keep track of class status;
let thresh = 1000;

// Button states. Each state has three button options. These are used to travese the story tree.
storyChoice = { 
    home: { b1: "view window.", b2: "view room.",b3: "go outside" }, 
    window: { b1: "look out window", b2: "meditate", b3: "return to room" }, 
    outside: { b1: "go to work.", b2: "go to the park.", b3: "return home."}, 
    work: { b1: "kill your boss.", b2: "drink coffee and get to work.", b3: "return home."}, 
    park: { b1: "start a conversation with a stranger.", b2: "go to work.", b3: "return home."}, 
    kill: {b1: "clean up the blood.", b2: "confess to what you've done.", b3: "drink coffee."},  
    busted: {b1: "play again?", b2: "go to jail", b3: "----"},
    jail: {b1: "----", b2: "----", b3: "----"}, 
    conversation: {b1: "kill them.", b2: "go on date.", b3: "go home."},
    date: {b1: "Kill your date.", b2: "Go dancing.", b3: "Go home."},
    dancing: {b1: "Get drunk.", b2: "Get high.", b3: "Go home."},
    drugs: {b1: "Do more drugs.", b2: "Get drunk.", b3: "Go home."},
    drunk: {b1: "''I'm okay!'', keep drinking.", b2: "Do some drugs.", b3: "Go home."},
    busted: {b1: "play again?", b2: "go to jail.", b3: "----"},
    death: {b1: "play again?", b2: "-----", b3: "----"}
    };

main();

function main() {
    

    // Story states. This is a JSON where the key is the story state and the value is the paragraph that is displayed in the UI.
    // Needs to be in main to update the clicks in the jail state. 
    story = { 
        home: "You live in a modest house with Ikea furniture and cream colored walls", 
        home_view: "You have done well for yourself, but this place seems rather empty", 
        window: "You are infront of a large bay window.", 
        window_view: "What a lovely day it is.", 
        window_meditate:"Ah and so we continue along the path of enlightenment.", 
        outside: "What a lovely day. Perhaps, too nice to even go to work?", 
        work:"Another day of hard labor, little pay, and medocrity.", 
        park: "Ah the park. Sometimes you just got to get outside. I wish I could share this day with someone else.", 
        kill: "Violent eh? YOU PSYCOPATH! THERE IS SO MUCH BLOOD!", 
        coffee: `Buona coffee, not too bad I should get some for home. \n Dollars made: $${income}.\n Dollars till level up in social class: $${thresh}`,
        busted: "great. now you've done it you're so busted.", "Jail":`You're in jail. You have no more options. Enjoy! clicks remaining: ${clicks}`, 
        conversation:"Beautiful day isn't it? <br> Stranger: Almost as beautiful as you.",
        date:"It is nice to spend time with someone other than myself. <br> Stranger: Yeah, it sure is. <br> I feel like I am stuck in a circle. I don't know how to get out. <br> Stranger: Life is just a recollection of a past that has yet present itself. <br> This seems like deja vu. ",
        dancing: `You are in a crowded nightclub with loud music\n Money: ${income}`,
        drunk: `You puke all over your date: Alcohol tolerance: ${drinks} \n Money: ${income}`,
        drugs:`You are high on drugs. Hits left until overdose: ${hits} \n Money: ${income}`,
        death:`You're wasted. Hope you enjoyed life.`, 
        };

    switch (state) {
        case "Home": UI_text.innerHTML = story.home;
            button1.innerHTML = storyChoice.home.b1;
            button2.innerHTML = storyChoice.home.b2;
            button3.innerHTML = storyChoice.home.b3;
            UI_body.style.background = "pink";
            break;
        case "Home-view": UI_text.innerHTML = story.home_view;
            button1.innerHTML = storyChoice.home.b1;
            button2.innerHTML = storyChoice.home.b2;
            button3.innerHTML = storyChoice.home.b3;
            UI_body.style.background = "pink";
            state = "Home";
            break;
        case "Window": UI_text.innerHTML = story.window;
            button1.innerHTML = storyChoice.window.b1;
            button2.innerHTML = storyChoice.window.b2;
            button3.innerHTML = storyChoice.window.b3;
            UI_body.style.background = "blue";
            break;
        case "Window-view": UI_text.innerHTML = story.window_view;
            button1.innerHTML = storyChoice.window.b1;
            button2.innerHTML = storyChoice.window.b2;
            button3.innerHTML = storyChoice.window.b3;
            UI_body.style.background = "blue";
            state = "Window";
            break;
        case "Window-meditate": UI_text.innerHTML = story.window_meditate;
            button1.innerHTML = storyChoice.window.b1;
            button2.innerHTML = storyChoice.window.b2;
            button3.innerHTML = storyChoice.window.b3;
            UI_body.style.background = "blue";
            state = "Window";
            break;
        case "Outside": UI_text.innerHTML = story.outside;
            button1.innerHTML = storyChoice.outside.b1;
            button2.innerHTML = storyChoice.outside.b2;
            button3.innerHTML = storyChoice.outside.b3;
            UI_body.style.background = "green";
            break;
        case "Work": UI_text.innerHTML = story.work;
            button1.innerHTML = storyChoice.work.b1;
            button2.innerHTML = storyChoice.work.b2;
            button3.innerHTML = storyChoice.work.b3;
            UI_body.style.background = "black";
            break;
        case "Park": UI_text.innerHTML = story.park;
            button1.innerHTML = storyChoice.park.b1;
            button2.innerHTML = storyChoice.park.b2;
            button3.innerHTML = storyChoice.park.b3;
            UI_body.style.background = "aquamarine";
            break;
        case "Kill": UI_text.innerHTML = story.kill;
            button1.innerHTML = storyChoice.kill.b1;
            button2.innerHTML = storyChoice.kill.b2;
            button3.innerHTML = storyChoice.kill.b3;
            UI_body.style.backgroundImage = "url('https://thumbs.gfycat.com/BlondNiftyHochstettersfrog-max-1mb.gif')";
            break;
        case "Coffee": UI_text.innerHTML = story.coffee;
            button1.innerHTML = storyChoice.work.b1;
            button2.innerHTML = storyChoice.work.b2;
            button3.innerHTML = storyChoice.work.b3;
            UI_body.style.background = "brown";
            state = "Work";
            break;
        case "Busted": UI_text.innerHTML = story.busted;
            button1.innerHTML = storyChoice.busted.b1;
            button2.innerHTML = storyChoice.busted.b2;
            button3.innerHTML = storyChoice.busted.b3;
            UI_body.style.backgroundImage = "url('https://www.lequzhai.com/data/out/12/497132.gif')";
            break;
        case "Jail": UI_text.innerHTML = story.jail;
            button1.innerHTML = storyChoice.jail.b1;
            button2.innerHTML = storyChoice.jail.b2;
            button3.innerHTML = storyChoice.jail.b3;
            UI_body.style.background = "gray";
            break;
        case "Conversation": UI_text.innerHTML = story.conversation;
            button1.innerHTML = storyChoice.conversation.b1;
            button2.innerHTML = storyChoice.conversation.b2;
            button3.innerHTML = storyChoice.conversation.b3;
            UI_body.style.background = "purple";
            break;
        case "Date": UI_text.innerHTML = story.date;
            button1.innerHTML = storyChoice.date.b1;
            button2.innerHTML = storyChoice.date.b2;
            button3.innerHTML = storyChoice.date.b3;
            UI_body.style.background = "orange";
            break;
        case "Drunk": UI_text.innerHTML = story.drunk;
            button1.innerHTML = storyChoice.drunk.b1;
            button2.innerHTML = storyChoice.drunk.b2;
            button3.innerHTML = storyChoice.drunk.b3;
            UI_body.style.backgroundImage = "url('https://i.gifer.com/IbdT.gif')";
            alcoholSimulation();
            state = "Drunk";
            break;
        case "Drugs": UI_text.innerHTML = story.drugs;
            button1.innerHTML = storyChoice.drugs.b1;
            button2.innerHTML = storyChoice.drugs.b2;
            button3.innerHTML = storyChoice.drugs.b3;
            drugSimulation();
            state = "Drugs";
            break;
        case "Dancing": UI_text.innerHTML = story.dancing;
            if(income > 0){
                button1.innerHTML = storyChoice.dancing.b1;
                button2.innerHTML = storyChoice.dancing.b2;
            }
            else{
                button1.innerHTML = "You don't have enough money to this activity."
                button2.innerHTML = "You don't have enough money to this activity."
            }
            button3.innerHTML = storyChoice.dancing.b3;
            UI_body.style.backgroundImage = "url('https://media.giphy.com/media/C3EAt5F9qfHPO/giphy.gif')";
            break;
        case "Death": UI_text.innerHTML = story.death;
            button1.innerHTML = storyChoice.death.b1;
            button2.innerHTML = storyChoice.death.b2;
            button3.innerHTML = storyChoice.death.b3;
            UI_body.style.backgroundImage = "url('https://media.giphy.com/media/YwAgyCddum3K0/giphy.gif')";
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
        case "Dancing": if(income > 0){
                            income--;
                            drinks--;
                            alcoholSimulation();
                            state = "Drunk";
                        }
                        else{

                        } 
            break;
        // Jail is special because the user needs
        // to click any of the buttons to leave
        // we need to check the click count
        // once the click count is reached we 
        // reset the count and change the state.
        case "Jail": clicks--;
                    if(clicks < 0){
                        clicks = 30;
                        state = "Home";
                    }
            break;

        case "Drugs": 
                    if(income > 0){
                        income--;
                        hits--;
                        drugSimulation();
                        if(hits < 0){
                            hits = 20;
                            state = "Death";
                        }
                    }
            break;
        // once the user has died we reset the animation for the buttons back to the original animation.
        case "Death": state = "Home";
                    resetAnimation();
            break;
        case "Drunk": 
                if(income > 0){
                    income--;
                    drinks--;
                    // this function makes the buttons move in big swinging motions.
                    alcoholSimulation();
                    if(drinks < 0){
                        drinks = 12;
                        state = "Death";
                    }
                }
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
        // If the user is at work the second button should cause them 
        // to sober up. So, we reset the animation. 
        case "Work": resetAnimation(); 
                     income += 1;
                     classStandingCalc();
                    state = "Coffee";
            break;
        case "Kill": state = "Busted";
            break;
        case "Busted": state = "Jail";
            break;
        case "Conversation": state = "Date";
            break;
        case "Date": state = "Dancing";
            break;
        case "Dancing": if(income > 0) {
                            income--;
                            hits--; 
                            drugSimulation();
                            state = "Drugs";
                        }
                        else{
                        
                        }
            break;
        case "Drugs": 
                if(income > 0){
                    income--;
                    drinks--;
                    // this function makes the buttons move in big swinging motions.
                    alcoholSimulation();
                    if(drinks < 0){
                        drinks = 12;
                        state = "Death";
                    }
                    state = "Drunk";
                }
            break;
        case "Drunk": 
                    if(income > 0) {
                        income--;
                        hits--;
                        drugSimulation(); 
                        state = "Drugs";
                    }
                    else{
                    
                    }
            break;
        case "Jail": clicks--;
                    if(clicks < 0){
                        clicks = 30;
                        state = "Home";
                    }
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
        case "Jail": clicks--;
                    if(clicks < 0){
                        clicks = 30;
                        state = "Home";
                    }
            break;
        default:
    }

    main();
}

function jailSimulation(){
    clicks = 30;

    while(clicks > 0){
        
        if(button1.clicked == true || button2.clicked == true || button3.clicked == true){
            clicks--;
        }
        
    }

    state = "Home";

    main();

}

function drugSimulation(){
    $('button').hover(function(){
        $(this).css("animation", `shake ${clicks/100}s`);
        $(this).css("animation-iteration-count", "infinite");
    }, 
    function(){ 
        $(this).css("animation",`shake ${clicks/10}s`);
        $(this).css("animation-iteration-count", "infinite");
    })
    UI_body.style.background = `linear-gradient(217deg, rgba(${Math.random()*1000},${Math.random()*563},${Math.random()*723}), rgba(${Math.random()*1000},${Math.random()*563},${Math.random()*723}) 70.71%)`;
    
}

function alcoholSimulation(){
    $('button').hover(function(){
        $(this).css("animation", `drunkShake ${clicks/10}s`);
        $(this).css("animation-iteration-count", "infinite");
    }, 
    function(){ 
        $(this).css("animation",`drunkShake ${clicks/10}s`);
        $(this).css("animation-iteration-count", "infinite");
    })
    UI_body.style.background = `linear-gradient(217deg, rgba(${Math.random()*1000},${Math.random()*563},${Math.random()*723}), rgba(${Math.random()*1000},${Math.random()*563},${Math.random()*723}) 70.71%)`;
    
}

function resetAnimation(){
    $('button').hover(function(){
        $(this).css("animation", `shake 5s`);
        $(this).css("animation-iteration-count", "infinite");
    }, 
    function(){ 
        $(this).css("animation",`shake 0s`);
        $(this).css("animation-iteration-count", "infinite");
    });
}

function classStandingCalc(){

    thresh = thresh - income/income;
    if(thresh <= 0){
        thresh = 1000;
    }

}