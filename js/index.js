"use strict";

const app = document.getElementById("quiz-app");
const quizCard = document.getElementById("quiz-details");
const questionsCard = document.getElementById("questions-card");
const resultCard = document.getElementById("result-card");

let quiz;

function initApp() {
    const questions = [
        {
            title: "Used in ordinary or familiar conversation; not formal or literary...",
            options: ["Casual speech", "Colloquial", "Informal", "Everyday language"]
        }, {
            title: "Dependent on or conditioned by something else...",
            options: ["Based on circumstances", "Contingent", "Hinging on", "Subject to"]
        }, {
            title: "A close and harmonious relationship in which the people or groups concerned understand each other's feelings or ideas and communicate well...",
            options: [
                "Harmony",
                "Rapport",
                "Synergy",
                "Compatibility"]
        }, {
            title: "To be discussed later or at a different time...",
            options: [
                'Follow up',
                'Circle Back',
                'Readdress',
                'Follow up'
            ]
        }, {
            title: 'To get the most out of a project/task or individual working on a project/task...',
            options: [
                'Think outside the box',
                'Push the envelope',
                'Go the extra mile',
                'Maximize productivity',
            ]
        }, {
            title: 'Ability to take something on, usually a project or task...',
            options: [
                'Capacity',
                'Bandwidth',
                'Workload',
                'Capability',
            ]
        }, {
            title: 'Negative reaction to a change or to something new that has been introduced...',
            options: [
                'Backlash',
                'Pushback',
                'Opposition',
                'Resistance',
            ]
        },
    ];

    quiz = new Quiz(
                 "       Simple Vocab Quiz",
        `The test contains 7 questions and there is a time limit of 70 seconds.
        
        This test is a nice way to see how much you have learned so far during the Business Communication class at Year Up.
        
        At the end of the Quiz, your total score will be displayed. Maximum score is 100 points.`,
        70,
        questions);

    // questions.map(q => quiz.addQuestion(q.title, q.options));

    new QuizElementsHelper(app, quizCard, questionsCard, resultCard, quiz);
}

initApp();


