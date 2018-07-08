// Controlled from the document ready event

$("document").ready(function(){


// Global Declarations

// My Trivia Question Bank


    var q1={
        question:"Let us start with an easy one. What is the name of a popular lookout point in San Francisco with great views of the city ?",
        answer:"Twin Peaks",
        choices:["SFO BayView","Cuckoo's Perch","Twin Peaks","Golden Gate"],
        img:"q1.jpg"
    };
    var q2={
        question:"If you're going to San Francisco, be sure to place some .....? Complete the lyrics from a famous song celebrating the spirit of freedom and openness SF is known for ",
        answer:"flowers in your hair",
        choices:["flowers on Jimi's grave","flowers in your hair","flowers in a vase","flour bags on your head"],
        img:"q2.jpg"
    };
    var q3={
        question:"You are looking at a grapevine. California wine is popular all over the world. Name one of the many areas in and around San Francisco which are famous for their vineyards.",
        answer:"Sonoma County",
        choices:["Sonoma County","Orange County","Honolulu","Pasadena"],
        img:"q3.jpg"
    };
    var q4={
        question:"Deeper into nature we venture. Identify this forested area (named after a famous naturalist)  located near San Francisco .",
        answer:"Muir Woods",
        choices:["King Kong Wonderland","Muir Woods","David Attenborough Park","Verdant Greene"],
        img:"q4.jpg"
    };
    var q5={
        question:"No SF trivia quiz is complete without a question around its most famous landmark! Well, this is indirectly related.... Otis Redding (who tragically passed away in his prime) was famous for his last song - Sittin' on the dock of the bay. Name the little town accross the bridge where he composed this song, (livin' in a houseboat)",
        answer:"Sausalito",
        choices:["Napa City","Alcatraz","San Quentin Guest House","Sausalito"],
        img:"q5.jpg"
    };
    var q6={
        question:"San Francisco, and Alcatraz, are often mentioned together. What exactly is Alcatraz?",
        answer:"Notorious Former Prison",
        choices:["Amusement Park","Notorious Gangster","South East Asian Curse","Notorious Former Prison"],
        img:"q6.jpg"
    };
    var q7={
        question:"These roads are breathtaking. Identify a popular movie with a hair-raising chase accross SF streets?",
        answer:"The Rock",
        choices:["The Rock","The Fast and the Furious","Ben Hur","Escape from Alcapone"],
        img:"q7.jpg"
    };
    var q8={
        question:"On movies still... south of San Francisco, along the coast, are some really quaint fishing villages and small towns. Identify this film, which is famous for starring James Dean and based in Monterrey, California ",
        answer:"East of Eden",
        choices:["Life in the Fast Lane","The Grapes of Wrath","East of Eden","Rebel without a cause"],
        img:"q8.jpg"
    };
    var q9={
        question:"Identify this place, known as the crookedest street in San Francisco",
        answer:"Lombard Street",
        choices:["Hillside Ave","Mission St","Lombard Street","Pretzel Lane"],
        img:"q9.jpg"
    };
    var q10={
        question:"And finally, giving some consideration to neighboring cities  - name the other big city (known for its baseball team) accross the bay from San Francisco",
        answer:"Oakland",
        choices:["Los Angeles","Oakland","San Jose","Marin County"],
        img:"q10.jpg"
    };

    // Array of Questions
    var qbank=[q1,q2,q3,q4,q5,q6,q7,q8,q9,q10];


    // Define a Show Question Function

    var showQuestion = function(q){



        if(qbank.indexOf(q)==-1){
            $(".centerQ").empty();
            $(".centerQ").append("<h3>Welcome to the Trivia Quiz.</h3><p> I was going to provide a detailed justification for the various photos and how a recent trip to San Francisco inspired all these questions etc....");
            $(".centerQ").append($("<br>"));
            $(".centerQ").append("... and then I heard the Russian football coach at his post match interview and now firmly believe - brevity is wisdom. Enjoy the quiz and click Play to get started.");
            $(".centerQ").append($("<br>"));
            $(".centerQ").append($("<br>"));
            $(".centerQ").append($("<br>"));
          
        
        } else {

            $("#body").css("background-image","url('./images/"+q.img+"')");
            $("#body").css("background-size","100% 100%");
            $(".centerQ").empty();
            $(".centerQ").append($("<br>"));
            $(".centerQ").append($("<p>")).text(q.question);
            $(".centerQ").append($("<br>"));
            $(".centerQ").append($("<br>"));
            for(var i = 0;i<q.choices.length;i++){
                $(".centerQ").append($("<input>",{name:"question",type:"radio",id:"a"+i,value:q.choices[i]})).append($("<label>",{text:q.choices[i]}));
                $(".centerQ").append($("<br>"));
            };

            return;
            
        };
    };


    // Point Counter


    var points=0;


    // Answer Checker - also responsible for resetting the game

    var checkAnswer = function(q){
        $(".areaS").empty();
        var selValue = $("input[name='question']:checked").val(); 
        if (selValue === q.answer){
            $(".areaS").append($("<p>",{class:"correct",text:"Last Answer Correct ! Your Score : "+(points+=1)+" out of "+(1+qbank.indexOf(q))}));
        } else {
            $(".areaS").append($("<p>",{class:"wrong",text:"Last Answer Wrong ! Your Score remains at : "+points+" out of "+(1+qbank.indexOf(q))}));
        };
        // if(qbank.indexOf(q)==9){
        //     $("#Next").text("Play Again");
        //     // $("#Next",{text:"Play Again",value:"Play Again"});

        // };
    };



    var cQ=-1;

    if(cQ=-1 || cQ>=10){
        $(".centerQ").append("<h3>Welcome to the Trivia Quiz.</h3><p> I was going to provide a detailed justification for the various photos and how a recent trip to San Francisco inspired all these questions etc....");

        $(".centerQ").append($("<br>"));
        $(".centerQ").append("... and then I heard the Russian football coach at his post match interview and now firmly believe - brevity is wisdom. Enjoy the quiz and click Play to get started.");
        $(".centerQ").append($("<br>"));
        $(".centerQ").append($("<br>"));
        $(".centerQ").append("<p>Hey - did I mention - try and finish this in less than 3 minutes !! All the Best !");
        $(".centerQ").append($("<br>"));

        $(".centerQ").append($("<br>"));
        $(".areaB").append($("<button>",{id:"Next",class:"btn-info",text:"Play"}));
    };

        


    // The main engine - the Play Button
 
    $("#Next").click( function(){
        console.log(cQ);
        if(cQ==-1||cQ==9){

                // Set the date we're counting down to
                var countDownDate = new Date().getTime() + 180000;

            if(cQ==9){ clearInterval(x); distance=-1};




            // Update the count down every 1 second
            var x = setInterval(function() {
            
                    // Get todays date and time
                    var now = new Date().getTime();
            
                    // Find the distance between now an the count down date
                    var distance = countDownDate - now;
                    
                    // Time calculations for days, hours, minutes and seconds
                    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                    
                    // Display the result in the element with id="demo"
                    document.getElementById("timer").innerHTML = days + "d " + hours + "h "
                    + minutes + "m " + seconds + "s ";
                    
                    // If the count down is finished, write some text 
                    if (distance < 0) {
                        clearInterval(x);
                        document.getElementById("timer").innerHTML = "";
                    }
                    }, 1000);
        };

        
        

        if(cQ>=0 && cQ<10){
            checkAnswer(qbank[cQ]);
        };
        $(".centerQ").empty();
        cQ+=1;
        if(cQ>9){
            cQ=0;
            points=0;
        };
        showQuestion(qbank[cQ]);
        

    }

    );






}); 

