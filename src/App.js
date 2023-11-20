import { useState } from "react";
import "./App.css";


function App() {
	const [display, setDisplay] = useState(0);
	const [lastNumber, setLastNumber] = useState('');
	const [lastOperation, setLastOperation] = useState('');
	const [output, setOutput] = useState('');
	const [result, setResult] = useState();

	const clearDisplay = () => {
		setDisplay(0);
	}

	const resetDisplay = () => {
		setDisplay(0);
		setOutput('');
		setResult('');
		setLastOperation('');
	}
	
	const writeToDisplay = (e) => {		
		if (e.target.innerHTML == '.' && display.includes('.')) {
			return;
		  }
		let newInput = display == '0' ? e.target.innerHTML : display + e.target.innerHTML;
		if (display == '0' && e.target.innerHTML == '0') {
			newInput = '0';
		}
		setDisplay(newInput);
		setOutput(output + e.target.innerHTML);
	}
	
	const calculateResult = () => {
		const results = eval(output);
		setOutput(String(results));
		setResult(results);
		setDisplay(results);
	}
	
	const addOperation = (e) => {
		if (lastOperation == '') {
			clearDisplay();
			setLastNumber(display);
			setLastOperation(e.target.innerHTML)
			setOutput(output + e.target.innerHTML)
			return;
		}

		if (e.target.innerHTML == '-') {
			const newOutput = output + e.target.innerHTML;
			setOutput(newOutput);
			output.match()
			setLastOperation(e.target.innerHTML);
			return;
		}

		const strArray = output.split('');

		let operatorsQuantity = 0;
		for (let i = strArray.length - 1; i > 0; i--) {
			if(!isNaN(strArray[i])) {
				break;
			}
			operatorsQuantity++;
		}

		const newOutput = /\d/.test(output.slice(-1)) ? output + e.target.innerHTML : output.substring(0, output.length - operatorsQuantity) + e.target.innerHTML;
		setLastOperation(e.target.innerHTML);
		setOutput(newOutput);
	}

    return (
        <div className="App">
            <div className="calculator-container">
                <div id="display" className="display">{display}</div>
                <div class="decimal-and-clean-container">
                    <button onClick={resetDisplay} id="clear">
                        AC
                    </button>

                    <button
                        onClick={writeToDisplay}
                        id="decimal"
                    >
                        .
                    </button>
                </div>
                <div class="operations-container">
                    <button onClick={calculateResult} id="equals">
                        =
                    </button>
                    <button onClick={addOperation} id="add">
                        +
                    </button>
                    <button
                        onClick={addOperation}
                        id="subtract"
                    >
                        -
                    </button>
                    <button
                        onClick={addOperation}
                        id="multiply"
                    >
                        *
                    </button>
                    <button onClick={addOperation} id="divide">
                        /
                    </button>
                </div>
                <div class="digits-container">
                    <button onClick={writeToDisplay} id="zero">
                        0
                    </button>
                    <button onClick={writeToDisplay} id="one">
                        1
                    </button>
                    <button onClick={writeToDisplay} id="two">
                        2
                    </button>
                    <button onClick={writeToDisplay} id="three">
                        3
                    </button>
                    <button onClick={writeToDisplay} id="four">
                        4
                    </button>
                    <button onClick={writeToDisplay} id="five">
                        5
                    </button>
                    <button onClick={writeToDisplay} id="six">
                        6
                    </button>
                    <button onClick={writeToDisplay} id="seven">
                        7
                    </button>
                    <button onClick={writeToDisplay} id="eight">
                        8
                    </button>
                    <button onClick={writeToDisplay} id="nine">
                        9
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
