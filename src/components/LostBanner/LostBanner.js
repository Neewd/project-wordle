export default function LostBanner({ correctAnswer }) {
	return (
		<div class="sad banner">
			<p>
				Sorry, the correct answer is <strong>{correctAnswer}</strong>.
			</p>
		</div>
	);
}
