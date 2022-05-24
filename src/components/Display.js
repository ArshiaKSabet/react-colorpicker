function Display({ name, age, color }) {
	// 	const myStyle = {
	// 		color: 'red',
	// 		background: 'aliceblue',
	// 		margin: '10px',
	// 		paddingTop: '10px'
	// };
	return (
		<div style={{ backgroundColor: color }}>
			Display {name} is {age} years old.
		</div>
	);
}

export default Display;
