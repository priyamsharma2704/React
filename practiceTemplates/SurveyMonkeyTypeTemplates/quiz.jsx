import React from 'react'
import ReactDOM from 'react-dom/client'

const { useState, useEffect, useRef } = React;

const QUESTIONS = [
    { id: 1, question: 'What does JSX stand for?', options: ['JavaScript XML', 'Java Syntax Extension', 'JSON Extra', 'None of the above'], answer: 0 },
    { id: 2, question: 'Which hook manages local state?', options: ['useEffect', 'useRef', 'useState', 'useContext'], answer: 2 },
    { id: 3, question: 'What does useEffect replace?', options: ['render()', 'componentDidMount', 'setState', 'props'], answer: 1 },
];

const SECONDS_PER_QUESTION = 15;

const checkAnswer = (question, selectedIndex) => {
    // Task 1B / 2A
    // Return true if selectedIndex matches question.answer
    return false;
};

const ScoreTracker = ({ score, total }) => {
    // Task 2A
    // Display current score out of questions answered so far
    return <div>Score: 0</div>;
};

const CountdownTimer = ({ seconds }) => {
    // Task 2B
    // Display the remaining seconds
    // Show in red when <= 5 seconds remain
    return <div>Time: {seconds}s</div>;
};

const ResultsScreen = ({ score, total, onRestart }) => {
    // Task 3
    // Show final score, a message based on performance,
    // and a Restart button that calls onRestart()
    return (
        <div>
            <h3>Quiz complete!</h3>
            <p>You scored {score} / {total}</p>
            <button onClick={onRestart}>Restart</button>
        </div>
    );
};

const QuestionCard = ({ question, onAnswer }) => {
    // Task 1A
    // Render the question text and a button for each option
    // Clicking an option calls onAnswer(index)
    return (
        <div>
            <p>{question.question}</p>
            <div>Add answer buttons here</div>
        </div>
    );
};

const App = () => {
    const [current, setCurrent] = useState(0);
    const [score, setScore] = useState(0);
    const [done, setDone] = useState(false);
    const [timeLeft, setTimeLeft] = useState(SECONDS_PER_QUESTION);
    const timerRef = useRef(null);

    useEffect(() => {
        // Task 2B
        // Start a 1-second interval that decrements timeLeft
        // When timeLeft hits 0, auto-advance to the next question
        // Clear the interval when the component unmounts or question changes
    }, [current]);

    const handleAnswer = (index) => {
        // Task 1B + 2A
        // Check the answer, update score if correct
        // Advance to next question or set done=true on the last question
        // Reset the timer
    };

    const handleRestart = () => {
        setCurrent(0);
        setScore(0);
        setDone(false);
        setTimeLeft(SECONDS_PER_QUESTION);
    };

    if (done) {
        return <ResultsScreen score={score} total={QUESTIONS.length} onRestart={handleRestart} />;
    }

    return (
        <div style={{ maxWidth: 480, margin: '2rem auto', fontFamily: 'sans-serif' }}>
            <h2>Quiz</h2>
            <ScoreTracker score={score} total={current} />
            <CountdownTimer seconds={timeLeft} />
            <p style={{ color: '#888', fontSize: 13 }}>Question {current + 1} of {QUESTIONS.length}</p>
            <QuestionCard question={QUESTIONS[current]} onAnswer={handleAnswer} />
        </div>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode><App /></React.StrictMode>
);