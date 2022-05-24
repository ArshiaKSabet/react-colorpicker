import { useState } from 'react';
import './App.css';

function App() {
	const [color, setColor] = useState('#ff0000');

	const handleOnChange = (event) => {
		const newColor = event.target.value;
		console.log(color);
		setColor(newColor);
	};
	return (
		<div style={{ background: color }} className="App">
			<input type="color" value={color} onChange={handleOnChange} />
		</div>
	);
}

export default App;

// import { useState } from 'react';

// function App() {
// 	const [counter, setCounter] = useState(0);

// 	const onIncrement = () => {
// 		const newValue = counter + 1;
// 		setCounter(newValue);
// 	};

// 	const onReset = () => {
// 		setCounter(0);
// 	};

// 	return (
// 		<div>
// 			<p>Counter: {counter}</p>
// 			<button onClick={onIncrement}>Increment</button>
// 			<button onClick={onReset}>Reset</button>
// 		</div>
// 	);
// }
