$(document).ready(function() {
	var index = 0;
	var countdownTimer = {
		time : 30,
		reset: function() {
			this.time = 30;
			$(".timer").html("<h3>" + this.time + " seconds remaining</h3>");
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				console.log(countdownTimer.time);
//				$('.timer').html(countdownTimer.time);
			if (countdownTimer.time >= 0) {
				$(".timer").html("<h3>" + countdownTimer.time + " seconds remaining</h3>");
			}
			else {
				index++;
				answerWrong();
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

	//got trivia questions from https://www.funtrivia.com/en/Movies/Oscars--General-Trivia-18808_14.html

var correct = 0;
var wrong = 0;
var q1 = {
	question : "Who won th Oscars for Best Actor for playing Hannibal Lecter?",
	possibleAnswers : ["A. Jack Nicholson",
				 "B. Peter Finch",
				 "C. Anthony Hopkins",
				 "D. Ben Kingsley"],
	flags : [false, false, true, false],
	answer : "C. Anthony Hopkins"
};

var q2 = {
	question: "Julie Andrews picked up the Oscar for Best Actress after her first film performance. Which film did she win the award for?",
	possibleAnswers: ["A. Sound of Music",
				 "B. Mary Poppins",
				 "C. Victor/Victoria",
				 "D. Peter Pan"],
	flags : [false, true, false, false],
	answer : "B. Mary Poppins"
};

var q3 = {
	question : "Which of these actors won the Best Actor award consecutively for two years?",
	possibleAnswers : ["A. Roberto Benigni",
				 "B. Geoffrey Rushr",
				 "C. Jeremy Irons",
				 "D. Tom Hanks"],
	flags : [false, false, false, true],
	answer : "D. Tom Hanks"
};

var q4 = {
	question : "Which woman has written a book, that has become a film, that has earned Oscar nominations?",
	possibleAnswers : ["A. Alice Walker",
				 "B. Ann Tyler",
				 "C. Anne Rice",
				 "D. All Of Them"],
	flags : [false, false, false, true],
	answer : "D. All Of Them"
};

var q5 = {
	question : "What was one of the Oscars that 'The Godfather' won?",
	possibleAnswers : ["A. Best Director" ,
				 "B. Best Picture",
				 "C. Best Screenplay",
				 "D. Best Actress"],
	flags : [false, true, false, false],
	answer : "B. Best Picture"
};

var q6 = {
	question : "The movie 'Titanic', having earned 11 oscars, including Best Picture, and grossing over $600 million in the U.S., is probably the most successful film ever. Which of the following Best Picture Oscar winners has earned the most money at the box office?",
	possibleAnswers : ["A. Gone With The Wind",
				 "B. The Sound Of Music",
				 "C. The Silence Of The Lambs",
				 "D. Forrest Gump"],
	flags : [false, false, false, true],
	answer : "D. Forrest Gump"
};

var q7 = {
	question : "Which of the following movies won the Academy Award for Best Picture?",
	possibleAnswers : ["A. Jaws (1975)",
				 "B. Taxi Driver (1976)",
				 "C. The Deer Hunter (1978)",
				 "D. Star Wars (1978)"],
	flags : [false, false, true, false],
	answer : "C. The Deer Hunter (1978)"
};

var q8 = {
	question : "Which of the following films won the most Academy Awards without winning Best Picture?",
	possibleAnswers : ["A. A Place In The Sun",
				 "B. Cabaret",
				 "C.Star Wars",
				 "D.The King And I"],
	flags : [false, true, false, false],
	answer : "B. Cabaret"
};

var q9 = {
	question : "Of these four box office blockbusters, which one won the most Oscars?",
	possibleAnswers : ["A. E.T.",
				 "B. The Matrix",
				 "C. Jurassic Park",
				 "D. Star Wars"],
	flags : [false, false, false, true],
	answer : "D. Star Wars"
};

var q10 = {
	question : "Which of the following films was the first one to win an Oscar for Best Make-up?",
	possibleAnswers : ["A. The Exorcist",
				  "B. An American Werewolf in London",
				  "C. Quest For Fire",
				  "D. Ms. Doubtfire"],
	flags : [false, true, false, false],
	answer : "B. An American Werewolf in London"
}

var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

function loadQuestion(questionSelection) {
	console.log(questionSelection);
	countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();
//  getAnswer();  
//  nextQuestion(index);
}

//function nextQuestion() {
//	index = index++;
//	console.log(index);
//}

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

function answerWrong() {
	wrong++;
	alert("Incorrect!");
	console.log("wrong");
}

function showScore() {
	$('.question').empty();
	$('.question').append("<h2><p>" + correct + " correct</p></h2>");
	$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
	countdownTimer.stop();
	$('.timer').empty();

}
//		for (var i=0; i<questionArray.length; i++) {
//			$('.question').append('<p>'+questionArray[i].question+'</p>');
//			for (var j=0; j<questionArray[i].possibleAnswers.length; j++) {
//				$('.answers').append('<span><button id="possibleAnswer">' + questionArray[i].possibleAnswers[j]+ '</button></span>');
//			}
//			$('#possibleAnswers').on('click', function() {


//		console.log("click");
//		countdownTimer.start();
//		for (var i = 0; i < questionArray.length; i++) {
//			console.log(i);

//			$('.timer').html('<h3>'+countdownTimer.time + ' seconds remaining</h3>');
//			$('.question').html(questionArray[i].question);
//			while (countdownTimer != 0) {

//			}
		
//	});
//	$('#startButton').click(countdownTimer.start);

//}
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
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
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


//	$('#start').click(countdownTimer.start);
});