$("document").ready(function(){
// randomize number
var rand = Math.floor((Math.random() * 81 ) + 19);
 


// setting var for crystals and randomize 
var crystal1 =  Math.floor((Math.random() * 11) + 1);
var crystal2 =  Math.floor((Math.random() * 11) + 1);
var crystal3 =  Math.floor((Math.random() * 11) + 1);
var crystal4 =  Math.floor((Math.random() * 11) + 1);


// keeping score

var wins = 0;
var losses = 0;
var userscore = 0;

//displays scores
$("#wins").text(wins);
$("#losses").text(losses);
$("#randomnumber").text(rand);

// reset function
function reset(){
    rand = Math.floor((Math.random() * 81 ) + 19);
    $('#randomnumber').text(rand);
 
    crystal1 = Math.floor((Math.random() * 11) + 1);
    crystal2 = Math.floor((Math.random() * 11) + 1);
    crystal3 = Math.floor((Math.random() * 11) + 1);
    crystal4 = Math.floor((Math.random() * 11) + 1);
    userscore = 0;
    $("#userscore").text(userscore);
};
// wins counter
function wins(){
    alert("YOU WON!");
    wins++;
    $("#wins").text(wins);
    reset();
};
// loss counter
function loss(){
    alert("YOU LOSS!");
    losses++;
    $("#losses").text(losses);
    reset();

};


    
    // crystal one button
    $("#button1").on("click", function(){
          $("#userscore").text(userscore);
          userscore = userscore + crystal1;
         if(rand == userscore){
             wins();
         } else if(userscore > rand){
             loss();
             reset();
             
             
         }
 });
      // crystal two function
    $("#button2").on("click", function(){
        $("#userscore").text(userscore);
        userscore = userscore + crystal2;
         if(rand == userscore){
             wins();
         } else if(userscore > rand){
             loss();
             reset();
         }
        

    });
    // crystal three function
    $("#button3").on("click", function(){
        $("#userscore").text(userscore);
        userscore = userscore + crystal3;
        if(rand == userscore){
            wins();
        }else if(userscore > rand){
            loss();
            reset();
        }


    });
    //crystal four function
    $("#button4").on("click", function(){
        $("#userscore").text(userscore);
        userscore = userscore + crystal4;
        if(rand == userscore){
            wins();
        }else if(userscore > rand){
            loss();
            reset();
        }

    });
    
});