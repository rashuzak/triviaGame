$(document).ready(function() {
	var index = 0;
	var countdownTimer = {
		time : 30,
		reset: function() {
			this.time = 30;
			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;

			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}
			else {
				index++;
				answerCorrect();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
				}
			}
		}
	};

var correct = 0;
var incorrect = 0;

//created an array of oscar trivia questions

var  questionArray = [{
      
	question : "Who won the Oscars for Best Actor for playing Hannibal Lecter?",
	answerChoices : ["A. Jack Nicholson",
				 "B. Peter Finch",
				 "C. Anthony Hopkins",
				 "D. Ben Kingsley"],
	flags : [false, false, true, false],
  answer : "C. Anthony Hopkins"
    },


 {
	question: "Julie Andrews picked up the Oscar for Best Actress after her first film performance. Which film did she win the award for?",
	answerChoices: ["A. Sound of Music",
				 "B. Mary Poppins",
				 "C. Victor/Victoria",
				 "D. Peter Pan"],
	flags : [false, true, false, false],
	answer : "B. Mary Poppins"
},

{
	question : "Which of these actors won the Best Actor award consecutively for two years?",
	answerChoices : ["A. Roberto Benigni",
				 "B. Geoffrey Rushr",
				 "C. Jeremy Irons",
				 "D. Tom Hanks"],
	flags : [false, false, false, true],
	answer : "D. Tom Hanks"
},

 {
	question : "Which woman has written a book, that has become a film, that has earned Oscar nominations?",
	answerChoices : ["A. Alice Walker",
				 "B. Ann Tyler",
				 "C. Anne Rice",
				 "D. All Of Them"],
	flags : [false, false, false, true],
	answer : "D. All Of Them"
},

 {
	question : "What was one of the Oscars that 'The Godfather' won?",
	answerChoices : ["A. Best Director" ,
				 "B. Best Picture",
				 "C. Best Screenplay",
				 "D. Best Actress"],
	flags : [false, true, false, false],
	answer : "B. Best Picture"
},

 {
	question : "The movie 'Titanic', having earned 11 oscars, including Best Picture, and grossing over $600 million in the U.S., is probably the most successful film ever. Which of the following Best Picture Oscar winners has earned the most money at the box office?",
	answerChoices : ["A. Gone With The Wind",
				 "B. The Sound Of Music",
				 "C. The Silence Of The Lambs",
				 "D. Forrest Gump"],
	flags : [false, false, false, true],
	answer : "D. Forrest Gump"
},

 {
	question : "Which of the following movies won the Academy Award for Best Picture?",
	answerChoices : ["A. Jaws (1975)",
				 "B. Taxi Driver (1976)",
				 "C. The Deer Hunter (1978)",
				 "D. Star Wars (1978)"],
	flags : [false, false, true, false],
	answer : "C. The Deer Hunter (1978)"
},

 {
	question : "Which of the following films won the most Academy Awards without winning Best Picture?",
	answerChoices : ["A. A Place In The Sun",
				 "B. Cabaret",
				 "C.Star Wars",
				 "D.The King And I"],
	flags : [false, true, false, false],
	answer : "B. Cabaret"
},

 {
	question : "Of these four box office blockbusters, which one won the most Oscars?",
	answerChoices : ["A. E.T.",
				 "B. The Matrix",
				 "C. Jurassic Park",
				 "D. Star Wars"],
	flags : [false, false, false, true],
	answer : "D. Star Wars"
},

 {
	question : "Which of the following films was the first one to win an Oscar for Best Make-up?",
	answerChoices : ["A. The Exorcist",
				  "B. An American Werewolf in London",
				  "C. Quest For Fire",
				  "D. Ms. Doubtfire"],
	flags : [false, true, false, false],
	answer : "B. An American Werewolf in London"
}
    ];

function loadQuestion(questionSelection) {
	console.log(questionSelection);
	countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].answerChoices[0]).show();
  $("#buttonB").text(questionArray[questionSelection].answerChoices[1]).show();
  $("#buttonC").text(questionArray[questionSelection].answerChoices[2]).show();
  $("#buttonD").text(questionArray[questionSelection].answerChoices[3]).show();

}



function setup() {
	index = 0;
	$('.question').append('<button id="startButton">Start</button>');
	$('#startButton').on('click', function() {
		$(this).hide();
		countdownTimer.start();
	 	loadQuestion(index);
	});
}		

function getAnswer() {

//  nextQuestion();
	$('.answerchoice').on('click', function() {
	  console.log('alert', index);
		index++;
		console.log('click', index);
		$(".question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
		loadQuestion();
	})
}

function answerCorrect() {
	correct++;
	alert("Correct!");
	console.log("correct");
}

function answerIncorrect() {
	incorrect++;
	alert("Incorrect!");
	console.log("incorrect");
}

function showScore() {
	$('.question').empty();
	$('.question').append("<h2><p>" + correct + " correct</p></h2>");
	$('.question').append("<h2><p>" + incorrect + " incorrect</p></h2>");
	countdownTimer.stop();
	$('.timer').empty();

}

setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	answerIncorrect();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerIncorrect();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerIncorrect();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerIncorrect();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});

});