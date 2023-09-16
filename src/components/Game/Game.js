import React, { useEffect, useState } from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import Results from "../Results";
import WinBanner from "../WinBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import LostBanner from "../LostBanner";

const answer = sample(WORDS);

// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guess, setGuess] = useState("");
	const [guesses, setGuesses] = useState([]);
	const [gameOver, setGameOver] = useState(false);
	const [status, setStatus] = useState("running");

	const submitGuess = (guess) => {
		if (guess.trim().toUpperCase() === answer && !gameOver) {
			setStatus("win");
		}
		setGuesses([...guesses, guess]);
	};

	const restartGame = () => {
		setGuesses([]);
		setGuess("");
	};

	useEffect(() => {
		if (guesses.length >= NUM_OF_GUESSES_ALLOWED && !gameOver) {
			setStatus("lost");
		}
	}, [guesses, gameOver]);

	useEffect(() => {
		setGameOver(guesses >= NUM_OF_GUESSES_ALLOWED || status !== "running");
	}, [guesses, status]);

	return (
		<>
			<Results guesses={guesses} answer={answer} />
			<form
				className="guess-input-wrapper"
				onSubmit={(event) => {
					event.preventDefault();
					submitGuess(guess);
					setGuess("");
				}}
			>
				<label htmlFor="guess-input">Enter guess:</label>
				<input
					id="guess-input"
					value={guess}
					disabled={gameOver}
					onChange={(event) => setGuess(event.target.value)}
					minLength={5}
					maxLength={5}
					pattern="[A-Z]{5}"
					type="text"
				/>
			</form>
			<button onClick={restartGame}> Restart </button>
			{gameOver && status === "win" && <WinBanner />}
			{gameOver && status === "lost" && (
				<LostBanner correctAnswer={answer} />
			)}
		</>
	);
}

export default Game;
