const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question('Please enter your name: ');

  console.log(`Greetings ${candidateName}!\n`);
}



function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
   for (i = 0; i < questions.length; i++) {
     candidateAnswer = input.question(questions[i]);
     candidateAnswers.push(candidateAnswer);
    
   }

}


function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let grade = 0;
  let numOfCorrectAnswers = 0;
  let numOfQuizQuestions = 5;
  let status = "";

  for (i = 0; i < candidateAnswers.length; i++) {
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      numOfCorrectAnswers += 1
    }
  }

  grade = (numOfCorrectAnswers/numOfQuizQuestions) * 100;

  if (grade < 80) {
    status = "FAILED";
  } else {
    status = "PASSED";
  }

  console.log(`\nCandidate Name: ${candidateName}`);
  console.log(`1) ${questions[0]}`);
  console.log(`Your Answer: ${candidateAnswers[0]}`);
  console.log(`Correct Answer: ${correctAnswers[0]}\n`);

  console.log(`2) ${questions[1]}`);
  console.log(`Your Answer: ${candidateAnswers[1]}`);
  console.log(`Correct Answer: ${correctAnswers[1]}\n`);

  console.log(`3) ${questions[2]}`);
  console.log(`Your Answer: ${candidateAnswers[2]}`);
  console.log(`Correct Answer: ${correctAnswers[2]}\n`);

  console.log(`4) ${questions[3]}`);
  console.log(`Your Answer: ${candidateAnswers[3]}`);
  console.log(`Correct Answer: ${correctAnswers[3]}\n`);

  console.log(`5) ${questions[4]}`);
  console.log(`Your Answer: ${candidateAnswers[4]}`);
  console.log(`Correct Answer: ${correctAnswers[4]}\n`);

  console.log(`>>> Overall Grade: ${grade}% (${numOfCorrectAnswers} of ${numOfQuizQuestions} responses correct) <<<`);
  console.log(`>>> Status: ${status} <<<`);




  return grade;

  
}


function runProgram() {
  askForName();
  // TODO 1.1c: Welcome the candidate, you already got their name //
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);



}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};