
import React, { useState } from 'react';
import "./Quiz.css"
export default function App() {
	const questions = [
		{
			questionText: 'Capital of France',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
			console.log(score)
		} else {
			setShowScore(true);
		}
	};
	const reset=()=>{
		/*setCurrentQuestion(0)*/
		setShowScore(false)
		setCurrentQuestion(0)
		setScore(0)
		//console.log("clciked")
	}
	return (
		<div className='app'>
        {/*<div className='question-text'> Know More About Our Website</div>*/}
		<h5 className='question-section'>TEST YOUR G.K. HERE!</h5>
			{showScore ? (
				<div className='score-section'>
					{/*You scored {score} out of {questions.length}*/}
                    <h1 style={{textAlign:"center"}}>You Score {score} out of {questions.length}</h1>
					<button onClick={reset}>Reset Quiz</button>
					<div>
						{score<=2 ? (<h1>Bad </h1>) : (<h1>Awesome</h1>) }
					</div>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
						<input type="range" min="0" max="125" value={(currentQuestion+1)*25}></input> 
						{/*console.log((currentQuestion+1)*25)*/} 
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
			
				</>
			)}
		</div>
	);
}