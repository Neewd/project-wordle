import { useEffect } from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";
import classNames from "classnames";
import { useState } from "react";

export default function Guess({ guess, answer }) {
	const columnsNumber = 5;
	const [correctAnswers, setCorrectAnswers] = useState([]);

	useEffect(() => {
		const isCorrectAnswers = checkGuess(guess, answer);
		setCorrectAnswers(isCorrectAnswers);
	}, [guess, answer]);

	return (
		<>
			<p className="guess">
				{correctAnswers?.length > 0
					? correctAnswers.map((correct, index) => (
							<span
								className={classNames("cell", {
									correct:
										correctAnswers[index].status ===
										"correct",
									misplaced:
										correctAnswers[index].status ===
										"misplaced",
									misplaced:
										correctAnswers[index].status ===
										"misplaced",
								})}
								key={index}
							>
								{correctAnswers[index].letter}
							</span>
					  ))
					: range(columnsNumber).map((num) => (
							<span className="cell" key={num}></span>
					  ))}
			</p>
		</>
	);
}
