//document load//
//countdown timer//
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
				console.log(countdownTimer.time);
//				$('.timer').html(countdownTimer.time);
			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
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
/*
	var basictrivia = {
					questions: ['What is the costliest hurracane in U.S. history(most damage?',
								'What was the best selling smartphone phone the world in 2016?',
								'In the Avengers movie, the Hulk because green as a result of what?',
								'Cynophobia is the fear of what kind of animal?',
								'How many planets in our solar system have moons?',
								'Jimmy Carter was the first U.S. president born in a what?'
								'What is the most popular breed of dog in the United States?',	
	 							'The use of chopsticks originated in what country?',	
								'The first movie of the Fast and Furious franchise was released in what year?',
 								'What is the most popular board game of all time?',	];
*/
var correct = 0;
var wrong = 0;
var q1 = {
	question : 'What was the costliest hurricane in U.S. history?(most damage)',
	possibleAnswers : ['A. Hurricane Andrew',
				 'B. Hurricane Katrina',
				 'C. Hurricane Harvey',
				 'D. Hurricane Sandy'],
	flags : [false, false, true, false],
	answer : 'C. Hurricane Harvey 140 Billion'
};

var q2 = {
	question: 'What was the best selling smartphone phone the world in 2016?',
	possibleAnswers: ['A. Xiaoami Mi 6',
				 'B. Samsung Galaxy',
				 'C. Motorola Droid',
				 'D. Apple Iphone'],
	flags : [false, false, false, true],
	answer : 'D. Apple Iphone'
};

var q3 = {
	question : 'In the Avengers movie, the Hulk turns green as a result of what?',
	possibleAnswers : ['A. Raging hormones',
				 'B. Gamma rays',
				 'C. Split personality',
				 'D. Ebola'],
	flags : [false, true, false, false],
	answer : 'B. Gamma rays'
};

var q4 = {
	question : 'Cynophobia is the fear of what kind of animal?',
	possibleAnswers : ['A. Dogs',
				 'B. Cats',
				 'C. Rats',
				 'D. Pigeons'],
	flags : [true, false, false, false],
	answer : 'A. Dogs'
};

var q5 = {
	question : 'How many planets in our solar system have moons?',
	possibleAnswers : ['A. 7',
				 'B. 6',
				 'C. 5',
				 'D. 8'],
	flags : [false, true, false, false],
	answer : 'B. 6'
};

var q6 = {
	question : 'Jimmy Carter was the first U.S. president born in a what??',
	possibleAnswers : ['A. Manger',
				 'B. Basement',
				 'C. Hospital',
				 'D. Automobile'],
	flags : [false, false, true, false],
	answer : 'C. Hospital'
};

var q7 = {
	question : 'What is the most popular breed of dog in the United States?',
	possibleAnswers : ['A. German Shepherd',
				 'B. Scottish Terrier',
				 'C. Labrador Retriever',
				 'D. Chihuahua'],
	flags : [false, false, true, false],
	answer : 'C. Labrador Retriever'
};

var q8 = {
	question : 'The use of chopsticks originated in what country?',
	possibleAnswers : ['A. Japan',
				 'B. China',
				 'C. Taiwan',
				 'D. None of the above'],
	flags : [false, true, false, false],
	answer : 'B. China'
};

var q9 = {
	question : 'The first movie of the Fast and Furious franchise was released in what year?',
	possibleAnswers : ['A. 2000',
				 'B. 2005',
				 'C. 2003',
				 'D. 2001'],
	flags : [false, false, false, true],
	answer : 'D. 2001'
};

var q10 = {
	question : 'What is the most popular board game of all time?',
	possibleAnswers : ['A. Checkers',
				  'B. Chess',
				  'C. Monopoly',
				  'D. Trivial Pursuit'],
	flags : [false, true, false, false],
	answer : 'B. Chess'
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