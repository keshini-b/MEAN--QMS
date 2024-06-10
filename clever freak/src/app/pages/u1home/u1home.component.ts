
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PageVisibilityService } from 'src/app/services/PageVisibilityService';
interface Question {
  question: string;
  options: string[];
  correctAnswerIndex: number;
}
@Component({
  selector: 'app-u1home',
  templateUrl: './u1home.component.html',
  styleUrls: ['./u1home.component.css']
})
export class U1homeComponent {
 
  questions: Question[] = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Rome'],
      correctAnswerIndex: 0
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      correctAnswerIndex: 1
    },
    {
      question: 'Result of 13+7?',
      options: ['25', '20', '19', '18'],
      correctAnswerIndex: 1
    },
    {
      question: 'Which of the following is a mammal?',
      options: ['Ant', 'Mosquito', 'Whale', 'Fish'],
      correctAnswerIndex: 2
    },
    {
      question: 'Which is a colour and a fruit?',
      options: ['Red', 'Pink', 'Orange', 'Yellow'],
      correctAnswerIndex: 2
    },
    // Add more questions here
  ];

  currentQuestionIndex: number = 0;
  currentQuestion: Question = this.questions[this.currentQuestionIndex];
  score: number = 0;
  showFeedback: boolean = false;
  feedbackMessage: string = '';
  showScore: boolean = false;

  checkAnswer(option: string, index: number) {
    const correctAnswerIndex = this.currentQuestion.correctAnswerIndex;
    const isCorrect = index === correctAnswerIndex;
    if (isCorrect) {
      this.feedbackMessage = 'Correct!';
      this.score++;
    } else {
      this.feedbackMessage = 'Wrong!';
    }
    this.showFeedback = true;

    // Add a class to the clicked option to style it based on correctness
    const options = document.querySelectorAll('.options button');
    options.forEach((btn: any, i: number) => {
      if (i === index) {
        btn.classList.add(isCorrect ? 'correct' : 'wrong');
      }
      btn.disabled = true; // Disable all buttons after answer selection
    });

    setTimeout(() => {
      this.showFeedback = false;
      this.nextQuestion();
    }, 1500);
  }

  nextQuestion() {
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex < this.questions.length) {
      this.currentQuestion = this.questions[this.currentQuestionIndex];
    } else {
      this.showScore = true;
    }
  }
}


