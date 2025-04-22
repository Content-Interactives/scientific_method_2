import React, { useState } from 'react';

const ScientificMethod = () => {
	const [isAnimating, setIsAnimating] = useState(false);
	const [isExpanded, setIsExpanded] = useState(false);
	const [feedback, setFeedback] = useState(null);
	const [isExplaining, setIsExplaining] = useState(false);
	const [currentQuestion, setCurrentQuestion] = useState(1);

	const handleReset = () => {
		setIsAnimating(false);
		setIsExpanded(false);
		setFeedback(null);
		setIsExplaining(false);
	};

	const handleExplore = () => {
		setIsAnimating(true);
		setIsExpanded(true);
		setFeedback(null);
		setIsExplaining(false);
	};

	const handleStepClick = (step) => {
		const correctAnswers = {
			1: 'Question',
			2: 'Experiment',
			3: 'Hypothesis',
			4: 'Data Analysis',
			5: 'Research',
			6: 'Conclusion'
		};

		if (step === correctAnswers[currentQuestion]) {
			setFeedback({ text: 'Great job!', isCorrect: true });
		} else {
			setFeedback({ text: 'Try again!', isCorrect: false });
		}
		setIsExplaining(false);
	};

	const handleExplain = () => {
		setIsExplaining(true);
	};

	const handleNextQuestion = () => {
		if (currentQuestion < 6) {
			setCurrentQuestion(prev => prev + 1);
			setFeedback(null);
			setIsExplaining(false);
		}
	};

	return (
		<div className="w-[464px] mx-auto mt-5 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.05)] bg-white rounded-lg select-none">
			<style>
				{`
					.reset-button {
						background-color: #00783E;
						color: white;
						border: none;
						border-radius: 0.25rem;
						cursor: pointer;
						display: flex;
						align-items: center;
						justify-content: center;
						font-size: 0.75rem;
						transition: background-color 0.2s;
						margin-left: auto;
						font-family: system-ui, -apple-system, sans-serif;
						font-weight: bold;
						padding: 0.25rem 0.5rem;
						line-height: 1;
					}
					.reset-button:hover {
						background-color: #006633;
					}
					.node {
						cursor: pointer;
						transition: fill 0.2s ease;
					}
					.node-question:hover {
						fill: #ffb3b3;
					}
					.node-research:hover {
						fill: #ffc88a;
					}
					.node-hypothesis:hover {
						fill: #fff176;
					}
					.node-experiment:hover {
						fill: #a5d6a7;
					}
					.node-analysis:hover {
						fill: #90caf9;
					}
					.node-conclusion:hover {
						fill: #ce93d8;
					}
					.node-text {
						pointer-events: none;
					}
					@keyframes fadeIn {
						from {
							opacity: 0;
							transform: translateY(10px);
						}
						to {
							opacity: 1;
							transform: translateY(0);
						}
					}
					.fade-in {
						animation: fadeIn 0.5s ease-out forwards;
					}
					.explore-button {
						background-color: #00783E;
						color: white;
						border: none;
						border-radius: 0.5rem;
						padding: 0.5rem 1rem;
						font-size: 0.875rem;
						font-weight: 600;
						cursor: pointer;
						transition: all 0.2s;
						box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
						position: absolute;
						bottom: 1rem;
						right: 1rem;
					}
					.explore-button:hover {
						background-color: #006633;
						transform: translateY(-1px);
						box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
					}
					.interactive-container {
						transition: height 0.3s ease-in-out;
					}
					.interactive-container.expanded {
						height: 380px;
					}
					.feedback-text {
						animation: fadeIn 0.3s ease-out forwards;
						font-weight: 600;
						padding: 0.25rem 0.5rem;
						border-radius: 0.25rem;
					}
					.feedback-correct {
						color: #00783E;
						background-color: rgba(0, 120, 62, 0.1);
					}
					.feedback-incorrect {
						color: #FFC107;
						background-color: rgba(255, 193, 7, 0.1);
					}
					.feedback-buttons {
						display: flex;
						gap: 0.5rem;
						justify-content: center;
						animation: fadeIn 0.3s ease-out forwards;
					}

					.feedback-button {
						background-color: #00783E;
						color: white;
						border: none;
						border-radius: 0.25rem;
						padding: 0.25rem 0.75rem;
						font-size: 0.75rem;
						font-weight: 600;
						cursor: pointer;
						transition: all 0.2s;
					}

					.feedback-button:hover {
						background-color: #006633;
						transform: translateY(-1px);
					}

					.svg-container {
						transition: all 0.5s ease-out;
					}

					.node-fade {
						transition: opacity 0.3s ease-out;
					}

					.node-fade.fade {
						opacity: 0.3;
					}

					.node.current-step {
						opacity: 1;
						stroke: #00783E;
						stroke-width: 3;
					}

					.explanation-text {
						animation: fadeIn 0.5s ease-out forwards;
						animation-delay: 0.3s;
						opacity: 0;
					}
				`}
			</style>
			<div className="p-4">
				{/* Title and Reset Button */}
				<div className="flex justify-between items-center mb-4">
					<h2 className="text-[#00783E] text-sm font-medium select-none">Scientific Method Explorer</h2>
					<button 
						className="reset-button"
						onClick={handleReset}
						title="Reset interactive"
					>
						Reset
					</button>
				</div>

				<div className="space-y-4">
					{/* Interactive Section */}
					<div className="w-[400px] mx-auto bg-white border border-[#00783E]/30 rounded-md overflow-hidden relative">
						<div className={`relative w-[400px] interactive-container ${isExpanded ? 'expanded' : 'h-[320px]'}`}>
							{isExpanded && !isExplaining && (
								<>
									<div className="absolute top-5 left-0 right-0 px-6 text-center">
										<p className="text-sm font-medium text-gray-700 fade-in">
											{currentQuestion === 1 && "Jacob wonders if heavy objects fall faster than lighter objects. What step of the scientific method is he in?"}
											{currentQuestion === 2 && "Jacob drops a bowling ball and a soccer ball several times, writing down how fast each fell. What step is he in?"}
											{currentQuestion === 3 && "Jacob thinks that heavier objects will most likely fall at the same speed as a lighter object. What step is he in?"}
											{currentQuestion === 4 && "Jacob notices that the time it took for the bowling ball to fall to the ground compared to the soccer ball was on average the same. What step is he in?"}
											{currentQuestion === 5 && "Jacob finds out that according to Isaac Newton, in a vacuum, all objects fall at the same rate regardless of mass. What step is he in?"}
											{currentQuestion === 6 && "Jacob says that based off of his experiments, how heavy an object is does not affect how fast it falls. What step is he in?"}
										</p>
									</div>
								</>
							)}
							<div className="h-full flex justify-center items-center overflow-hidden">
								<svg width="400" height="320" 
									className={`transition-transform duration-300 svg-container ${isExpanded ? 'translate-y-[45px]' : ''}`}
								>
									<g transform="translate(200, 25)">
										{/* Arrowheads above each node */}
										<g className={`arrowheads node-fade ${isExplaining ? 'fade' : ''}`}>
											{/* Above Research */}
											<path d="M 80 42 l -8 -8 h 16 z" fill="black" />
											{/* Above Hypothesis */}
											<path d="M -80 82 l -8 -8 h 16 z" fill="black" />
											{/* Above Experiment */}
											<path d="M 80 122 l -8 -8 h 16 z" fill="black" />
											{/* Above Data Analysis */}
											<path d="M -80 162 l -8 -8 h 16 z" fill="black" />
											{/* Above Conclusion */}
											<path d="M 80 202 l -8 -8 h 16 z" fill="black" />
										</g>

										{/* Node 1 - Pastel Red */}
										<g className={`${isExplaining ? 'node-fade fade' : ''}`}>
											<ellipse 
												cx="-40" cy="15" rx="80" ry="15" 
												className={`node node-question ${isExpanded ? 'cursor-pointer' : ''} ${isExplaining && currentQuestion === 1 ? 'current-step' : ''}`}
												fill="#ffcdd2" 
												stroke={isExplaining && currentQuestion === 1 ? '#00783E' : 'black'} 
												strokeWidth={isExplaining && currentQuestion === 1 ? '3' : '2'}
												onClick={() => isExpanded && handleStepClick('Question')}
											/>
											<text x="-40" y="20" textAnchor="middle" className="node-text">Question</text>
										</g>

										{/* All other nodes wrapped in a group */}
										<g className={`${isExplaining ? 'node-fade fade' : ''}`}>
											<path d="M 40 15 Q 80 15, 80 35 T 40 55" fill="none" stroke="black" strokeWidth="2" />
											<polygon points="40,55 35,45 45,45" fill="black" />

											{/* Node 2 - Pastel Orange */}
											<ellipse 
												cx="40" cy="55" rx="80" ry="15" 
												className={`node node-research ${isExpanded ? 'cursor-pointer' : ''}`}
												fill="#ffe0b2" stroke="black" strokeWidth="2"
												onClick={() => isExpanded && handleStepClick('Research')}
											/>
											<text x="40" y="60" textAnchor="middle" className="node-text">Research</text>
											<path d="M -40 55 Q -80 55, -80 75 T -40 95" fill="none" stroke="black" strokeWidth="2" />
											<polygon points="-40,95 -45,85 -35,85" fill="black" />

											{/* Node 3 - Pastel Yellow */}
											<ellipse 
												cx="-40" cy="95" rx="80" ry="15" 
												className={`node node-hypothesis ${isExpanded ? 'cursor-pointer' : ''}`}
												fill="#fff9c4" stroke="black" strokeWidth="2"
												onClick={() => isExpanded && handleStepClick('Hypothesis')}
											/>
											<text x="-40" y="100" textAnchor="middle" className="node-text">Hypothesis</text>
											<path d="M 40 95 Q 80 95, 80 115 T 40 135" fill="none" stroke="black" strokeWidth="2" />
											<polygon points="40,135 35,125 45,125" fill="black" />

											{/* Node 4 - Pastel Green */}
											<ellipse 
												cx="40" cy="135" rx="80" ry="15" 
												className={`node node-experiment ${isExpanded ? 'cursor-pointer' : ''}`}
												fill="#c8e6c9" stroke="black" strokeWidth="2"
												onClick={() => isExpanded && handleStepClick('Experiment')}
											/>
											<text x="40" y="140" textAnchor="middle" className="node-text">Experiment</text>
											<path d="M -40 135 Q -80 135, -80 155 T -40 175" fill="none" stroke="black" strokeWidth="2" />
											<polygon points="-40,175 -45,165 -35,165" fill="black" />

											{/* Node 5 - Pastel Blue */}
											<ellipse 
												cx="-40" cy="175" rx="80" ry="15" 
												className={`node node-analysis ${isExpanded ? 'cursor-pointer' : ''}`}
												fill="#bbdefb" stroke="black" strokeWidth="2"
												onClick={() => isExpanded && handleStepClick('Data Analysis')}
											/>
											<text x="-40" y="180" textAnchor="middle" className="node-text">Data Analysis</text>
											<path d="M 40 175 Q 80 175, 80 195 T 40 215" fill="none" stroke="black" strokeWidth="2" />
											<polygon points="40,215 35,205 45,205" fill="black" />

											{/* Node 6 - Pastel Purple */}
											<ellipse 
												cx="40" cy="215" rx="80" ry="15" 
												className={`node node-conclusion ${isExpanded ? 'cursor-pointer' : ''}`}
												fill="#e1bee7" stroke="black" strokeWidth="2"
												onClick={() => isExpanded && handleStepClick('Conclusion')}
											/>
											<text x="40" y="220" textAnchor="middle" className="node-text">Conclusion</text>
										</g>
									</g>
								</svg>
								{!isExpanded && (
									<button
										className="explore-button"
										onClick={handleExplore}
										disabled={isAnimating}
									>
										Explore
									</button>
								)}
								{isExplaining && (
									<div className="absolute top-4 left-0 right-0 px-8 text-center">
										<p className="text-sm font-medium text-gray-700 explanation-text mb-4">
											{currentQuestion === 1 && (
												<>This is the <span className="font-bold text-[#00783E]">Question</span> step because Jacob is wondering about something he wants to investigate. He's asking if heavy objects fall faster than lighter objects, which is a testable scientific question.</>
											)}
											{currentQuestion === 2 && (
												<>This is the <span className="font-bold text-[#00783E]">Experiment</span> step because Jacob is actively testing his hypothesis with a controlled experiment. He's dropping both balls multiple times and collecting data to test his idea.</>
											)}
											{currentQuestion === 3 && (
												<>This is the <span className="font-bold text-[#00783E]">Hypothesis</span> step because Jacob is making a prediction about what he thinks will happen. His hypothesis suggests that the mass of an object won't affect its falling speed.</>
											)}
											{currentQuestion === 4 && (
												<>This is the <span className="font-bold text-[#00783E]">Data Analysis</span> step because Jacob is examining the data he collected during his experiment. He's comparing the fall times of both balls to see if there's a pattern or relationship.</>
											)}
											{currentQuestion === 5 && (
												<>This is the <span className="font-bold text-[#00783E]">Research</span> step because Jacob is learning about existing scientific knowledge on the topic. He's discovering Newton's laws about objects falling in a vacuum.</>
											)}
											{currentQuestion === 6 && (
												<>This is the <span className="font-bold text-[#00783E]">Conclusion</span> step because Jacob is stating what he learned from his experiment. He's using his data to make a final statement about how an object's mass affects its falling speed.</>
											)}
										</p>
									</div>
								)}
							</div>
							<div className="absolute bottom-2 flex w-full px-2 justify-between">
								{feedback && !isExplaining && (
									<p className={`text-sm feedback-text ${feedback.isCorrect ? 'feedback-correct' : 'feedback-incorrect'}`}>
										{feedback.text}
									</p>
								)}
								<div className="ml-auto flex gap-2">
									{!isExplaining && feedback?.isCorrect && (
										<button 
											className="feedback-button"
											onClick={handleExplain}
										>
											Explain
										</button>
									)}
									{feedback?.isCorrect && (
										<button 
											className="feedback-button"
											onClick={currentQuestion === 6 ? handleReset : handleNextQuestion}
										>
											{currentQuestion === 6 ? 'Start Over' : 'Next Question'}
										</button>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ScientificMethod;