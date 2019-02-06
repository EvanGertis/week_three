
// gloabal variable to keep track of current state;
let state = "Home";

// set inputs for UI buttons.
button1 = document.getElementById('button-one');
button2 = document.getElementById('button-two');
button3 = document.getElementById('button-three');
UI_text = document.getElementById("UI-text");
UI_body = document.getElementById("UI-body");
UI_control = document.getElementById("UI-control");

// UI controls listener passes event targets into UI input function.
UI_control.addEventListener("click", UI_input);

// interprets the event target and calls the appropriate function.
function UI_input(e){
    switch(e.target.id){
        case "button-one": buttonOneClick();
            break;
        case "button-two": buttonTwoClick();
            break;
        case "button-three": buttonThreeClick();
            break;
        default:
            break;
    }
}

// BUTTON HANDLERS
// ***************
// ***************

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
        case "Dancing": if(income > 3){
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
        case "Hack": state = "Work";
                break;
        case "Shank": state = "Laugh";
                break;
        case "Laugh": state = "Fire";
                break;     
        case "Execute": state = "Death";
                    break;   
        case "Riot": state = "Fire";
                    break;
        case "Fire": state = "Death";
                    break;
        case "Weep": state = "Death";
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
        case "Jail": 
                    if(income >= 100){
                        income -= 100;
                        state = "Riot";
                    }
            break;
        case "Laugh": state = "Execute"
            break;
        case "Hack": state = "Home";
                    break;
        case "Shank": state = "Weep";
                    break;
        case "Execute": 
                    if(income >= 100){
                        income -= 100;
                        state = "Riot";
                    }
                    break;
        case "Riot": state = "Execute";
                    break;
        case "Fire": state = "Execute";
                    break;
        default:
                    break;
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
        case "Work": state = "Hack";
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
        case "Jail": state = "Shank";
            break;
        case "Hack": state = "Kill";
                    break;
        case "Shank": 
                    if(income >= 100){
                        income -= 100;
                        state = "Riot";
                    }
                    break;
        case "Laugh": state = "Home";
                    break;
        case "Execute": state = "Home";
                    break;
        case "Riot": state = "Home";
                    break;
        case "Fire": state = "Home";
                    break;
        case "Weep": state = "Home";
                    break;
        default:
                    break;
    }

    main();
}


// END BUTTON HANDLERS
// ***************
// ***************




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
    home: { b1: "VIEW WINDOW.", b2: "VIEW ROOM.",b3: "GO OUTSIDE." }, 
    window: { b1: "LOOK OUT WINDOW.", b2: "MEDITATE.", b3: "RETURN TO ROOM." }, 
    outside: { b1: "GO TO WORK.", b2: "GO TO THE PARK.", b3: "RETURN HOME."}, 
    work: { b1: "KILL BOSS.", b2: "DRINK COFFEE AND WORK.", b3: "HACK YOUR BOSS."}, 
    park: { b1: "CONVERSE WITH RANDOM STRANGER.", b2: "GO TO WORK.", b3: "RETURN HOME."}, 
    kill: {b1: "CLEAN UP BLOOD.", b2: "CONFESS.", b3: "CASUALLY DRINK COFFEE."},  
    busted: {b1: "PLAY AGAIN?", b2: "GO TO JAIL", b3: "----"},
    jail: {b1: "CLICK AWAY YOUR PRISON TIME.", b2: "PAY GOONS TO RIOT. COST $100", b3: "STAB GUARD WITH SHANK"}, 
    conversation: {b1: "KILL THEM.", b2: "GO ON DATE.", b3: "RETURN HOME."},
    date: {b1: "KILL DATE.", b2: "GO TO NIGHTCLUB.", b3: "RETURN HOME."},
    dancing: {b1: "GET DRUNK.", b2: "GET HIGH.", b3: "RETURN HOME."},
    drugs: {b1: "DO MORE DRUGS.", b2: "GET DRUNK.", b3: "RETURN HOME."},
    drunk: {b1: "''I'm okay!'', KEEP DRINKING.", b2: "GET HIGH.", b3: "RETURN HOME."},
    busted: {b1: "PLAY AGAIN?", b2: "GO TO JAIL.", b3: "----"},
    death: {b1: "PLAY AGAIN?", b2: "-----", b3: "----"},
    hack:  {b1: "RETURN TO WORK.", b2:"GO HOME", b3:"KILL BOSS"},
    shank:  {b1: "LAUGH WILDLY.", b2:"WEEP IN PITTY.", b3:"PAY GOONS TO RIOT. COST $100"},
    riot: {b1: "LIGHT TOILET PAPER FIRE.", b2:"EXECUTE CELL MATE.", b3:"ESCAPE JAIL."},
    laugh: {b1: "LIGHT TOILET PAPER FIRE.", b2:"EXECUTE CELL MATE.", b3:"ESCAPE JAIL."},
    execute: {b1: "GO OUT IN GLORY.", b2:"PAY GOONS TO RIOT COST $100.", b3:"ESCAPE JAIL."},
    fire:{b1: "GO OUT IN GLORY.", b2:"EXECUTE CELL MATE.", b3:"ESCAPE JAIL."},
    weep:{b1: "GO OUT IN GLORY.", b2:"------", b3:"ESCAPE JAIL."}
    };


// ***************************************************************************
// |---- |\  | ---_--- |----  |---\   |  | |---- |---\ |----
// |--   | \ |    |    |--    |_ _/   |--| |--   |_ _/ |--
// |---- |  \|    |    |----  |\___   |  | |---- |\___ |----
// ***************************************************************************
/**************|*********************/
/////////****\\|//******//////////////
//////////****\_/******///////////////
main();
/////////////////////////////////////
/////////////////////////////////////


// ***************************************************************************
// |---- |\  | ---_--- |---\  \_ _/
// |--   | \ |    |    |_ _/    |
// |---- |  \|    |    | \__    |
// ***************************************************************************
function main() {
    button1.style.display = "inline-block";
    button2.style.display = "inline-block";
    button3.style.display = "inline-block";

    // Story states. This is a JSON where the key is the story state and the value is the paragraph that is displayed in the UI.
    // Needs to be in main to update the clicks in the jail state. 
    story = { 
        home: "You live in a modest house with Ikea furniture and cream colored walls.", 
        home_view: "You have done well for yourself, but this place seems rather empty.", 
        window: "You are infront of a large bay window.", 
        window_view: "What a lovely day it is.", 
        window_meditate:"Ah, so we continue along the path of enlightenment.", 
        outside: "What a lovely day. Perhaps, too nice to even go to work?", 
        work:"Another day of hard labor, little pay, and medocrity.", 
        park: "Ah the park, Sometimes you just got to get outside. I wish I could share this day with someone else.", 
        kill: "Violent eh? YOU PSYCOPATH! THERE IS SO MUCH BLOOD!", 
        coffee: `Love me some Buona coffee, es muy bueno. I should get some for home. clickity-clack-clack (keyboard clicking ensues)... \n Dollars made: $${income}.\n Dollars till level up in social class: $${thresh}`,
        busted: "Great now you've done it. You're so busted.", 
        jail:`You're in jail. You have no more options- Enjoy! <br> Clicks remaining: ${clicks} <br>  Money: ${income}`, 
        conversation:"Beautiful day isn't it? <br> Stranger: Almost as beautiful as you are.",
        date:"It is so nice to spend time with someone other than myself! <br> Stranger: Yeah, it sure is. <br> I feel like I am going in circles. I don't know how to get out. <br> Stranger: Life is just a recollection of a past that has yet present itself. <br> This seems like deja vu. ",
        dancing: `You are in a crowded nightclub with loud music. (thump thump thump)... (electronic music ensues)\n Money: ${income}`,
        drunk: `You puke all over your date. \n Alcohol tolerance: ${drinks} \n Money: ${income}`,
        drugs:`You are high on drugs. \n Hits left until overdose: ${hits} \n Money: ${income}`,
        death:`You're wasted. Hope you enjoyed life.`,
        hack:"",
        shank:`You just jabbed a shank through the prison guards eye socket. \n Money: ${income}`,
        riot:"You are the danger. You the power. You are the violence. Enjoy your rage.",
        laugh: `HA H A HA H A HAA (Y o u   a r e  p s y c h o) \n Money: ${income}`,
        execute:`You murdered your cell mate with a jagged piece of metal. \n Money: ${income}`,
        fire:`Burn! Burn! Burn it all! (You are overcome with rage). \n Money: ${income}`,
        weep:"Why hast thou fallen from grace?"
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
            button2.style.display = "none";
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
            button1.style.display = "none";
            button2.innerHTML = storyChoice.window.b2;
            button3.innerHTML = storyChoice.window.b3;
            UI_body.style.background = "blue";
            state = "Window";
            break;
        case "Window-meditate": UI_text.innerHTML = story.window_meditate;
            button1.innerHTML = storyChoice.window.b1;
            button2.style.display = "none";
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
            UI_body.style.backgroundRepeat = "no-repeat";
            UI_body.style.backgroundSize = "100%";
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
            UI_body.style.backgroundRepeat = "no-repeat";
            UI_body.style.backgroundSize = "100%";
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
            UI_body.style.backgroundRepeat = "no-repeat";
            UI_body.style.backgroundSize = "100%";
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
                button1.innerHTML = "NOT ENOUGH $$."
                button2.innerHTML = "NOT ENOUGH $$."
            }
            button3.innerHTML = storyChoice.dancing.b3;
            UI_body.style.backgroundImage = "url('https://media.giphy.com/media/C3EAt5F9qfHPO/giphy.gif')";
            UI_body.style.backgroundRepeat = "no-repeat";
            UI_body.style.backgroundSize = "100%";
            break;
        case "Death": UI_text.innerHTML = story.death;
            button1.innerHTML = storyChoice.death.b1;
            button2.innerHTML = storyChoice.death.b2;
            button3.innerHTML = storyChoice.death.b3;
            UI_body.style.backgroundImage = "url('https://media.giphy.com/media/YwAgyCddum3K0/giphy.gif')";
            UI_body.style.backgroundRepeat = "no-repeat";
            UI_body.style.backgroundSize = "100%";
            break;
        case "Hack" : UI_text.innerHTML = story.hack;
            hackingSimulation();
            button1.innerHTML = storyChoice.hack.b1;
            button2.innerHTML = storyChoice.hack.b2;
            button3.innerHTML = storyChoice.hack.b3;
            UI_body.style.backgroundImage = "url('http://vignette3.wikia.nocookie.net/matrix/images/9/9c/Matrix_Code.gif/revision/latest/scale-to-width-down/800?cb=20110306191618')";
            break;
        case "Shank" : UI_text.innerHTML = story.shank;
            button1.innerHTML = storyChoice.shank.b1;
            button2.innerHTML = storyChoice.shank.b2;
            button3.innerHTML = storyChoice.shank.b3;
            UI_body.style.backgroundImage = "url('https://theyearofhalloween.files.wordpress.com/2014/10/horror-gif-friday-the-13th-eye-stab.gif')";
            UI_body.style.backgroundRepeat = "no-repeat";
            UI_body.style.backgroundSize = "100%";
            break;
        case "Riot" : UI_text.innerHTML = story.riot;
            button1.innerHTML = storyChoice.riot.b1;
            button2.innerHTML = storyChoice.riot.b2;
            button3.innerHTML = storyChoice.riot.b3;
            UI_body.style.backgroundImage = "url('https://media.giphy.com/media/OCi7GMmsfl8aI/giphy.gif')";
            UI_body.style.backgroundRepeat = "no-repeat";
            UI_body.style.backgroundSize = "100%";
            break;
        case "Laugh" : UI_text.innerHTML = story.laugh;
            button1.innerHTML = storyChoice.laugh.b1;
            button2.innerHTML = storyChoice.laugh.b2;
            button3.innerHTML = storyChoice.laugh.b3;
            UI_body.style.backgroundImage = "url('https://i.gifer.com/6yK.gif')";
            UI_body.style.backgroundRepeat = "no-repeat";
            UI_body.style.backgroundSize = "100%";
            break;
        case "Execute" : UI_text.innerHTML = story.execute;
            button1.innerHTML = storyChoice.execute.b1;
            button2.innerHTML = storyChoice.execute.b2;
            button3.innerHTML = storyChoice.execute.b3;
            UI_body.style.backgroundImage = "url('https://thumbs.gfycat.com/OddballRevolvingGraysquirrel-size_restricted.gif')";
            UI_body.style.backgroundRepeat = "no-repeat";
            UI_body.style.backgroundSize = "100%";
            break;
        case "Fire" : UI_text.innerHTML = story.fire;
            button1.innerHTML = storyChoice.fire.b1;
            button2.innerHTML = storyChoice.fire.b2;
            button3.innerHTML = storyChoice.fire.b3;
            UI_body.style.backgroundImage = "url('https://thumbs.gfycat.com/HairyMammothArctichare-size_restricted.gif')";
            UI_body.style.backgroundRepeat = "no-repeat";
            UI_body.style.backgroundSize = "100%";
            break;
        case "Weep" : UI_text.innerHTML = story.weep;
            button1.innerHTML = storyChoice.weep.b1;
            button2.innerHTML = storyChoice.weep.b2;
            button3.innerHTML = storyChoice.weep.b3;
            UI_body.style.backgroundImage = "url('https://steamusercontent-a.akamaihd.net/ugc/920290112591130081/DBE9066FE242CF18CBFB9812646618E0019BD444/')";
            UI_body.style.backgroundRepeat = "no-repeat";
            UI_body.style.backgroundSize = "100%";
            break;
        default:
    }

}
// ***************************************************************************
// |---- |\  |  |---\ 
// |--   | \ |  |   \
// |---- |  \|  |_ _/
// ***************************************************************************


//////////////////////////////////////////////////////////////////
//  /---  ----- /\  /\ |   | |      /\  ----- -----  ---- |\  | //
//  \_ _    |   | \/ | |   | |     |--|   |     |    |  | | \ | //
//   _ _/ __|__ |    | \_ _/ |_ _  |  |   |   __|__  |_ | |  \| //
//////////////////////////////////////////////////////////////////



function hackingSimulation(){
        let hackingContainer = document.createElement('form');
        hackingContainer.style.textAlign = "center";
        hackingContainer.style.display = "inline-block";

        let username = document.createElement('input');
        username.value = "Mark Zuckerberg";
        username.type = "text";
        

        let password = document.createElement('input');
        password.placeholder = "password";
        password.type = "password";

        let submit = document.createElement('input');
        submit.type = "submit";
        
        submit.addEventListener("click", passwordCrack);

        hackingContainer.append(username);
        hackingContainer.append(password);
        hackingContainer.append(submit);
        UI_text.append(hackingContainer);

}

function passwordCrack(e){
    e.target.parentNode.innerHTML = "You're in, but it turns out your boss just keeps pictures of himself on here.";
    UI_body.style.backgroundImage = "url('https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTQyMDA0NDgwMzUzNzcyNjA2/mark-zuckerberg_gettyimages-512304736jpg.jpg')";
}


function jailSimulation(){
    clicks = 30;

    while(clicks > 0){
        
        if(button1.clicked == true){
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
//////////////////////////////////////////////////////////////////
//  /---  ----- /\  /\ |   | |      /\  ----- -----  ---- |\  | //
//  \_ _    |   | \/ | |   | |     |--|   |     |    |  | | \ | //
//   _ _/ __|__ |    | \_ _/ |_ _  |  |   |   __|__  |_ | |  \| //
//////////////////////////////////////////////////////////////////