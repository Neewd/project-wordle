import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess";
import { range } from "../../utils";

function Results({ guesses, answer }) {
	return (
		<>
			<div className="guess-results">
				{range(NUM_OF_GUESSES_ALLOWED).map((num) => (
					<Guess key={num} answer={answer} guess={guesses[num]} />
				))}
			</div>
		</>
	);
}

export default Results;
