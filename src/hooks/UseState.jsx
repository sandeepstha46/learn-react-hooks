import React, {useState} from 'react';

export default function UseState() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(prevState => prevState + 1);
    }

    const handleDecrement = () => {
        setCount(prevState => prevState - 1 <= 0 ? 0 : prevState -1);
    }

    const resetCount = () => {
        setCount(0);
    }

    const [color, setColor] = useState('red');

    const [btnColor, setBtnColor] = useState('danger');

    const toggleBlue = () => {
        setColor('blue');
        setBtnColor('info');
    }

    const toggleYellow = () => {
        setColor('Yellow');
        setBtnColor('warning');
    }

    const toggleWhite = () => {
        setColor('White');
        setBtnColor('light');
    }

    const toggleGreen = () => {
        setColor('Green');
        setBtnColor('success');
    }

    const resetColor = () => {
        setColor('red');
        setBtnColor('danger');
    }


    return (
        <>
        <p className='mt-4 text-decoration-underline font-bold'>Use State Hook</p>
            <p className='opacity-75 mb-4'>useState hook is used to set the current state, update the current state with an option to add custom initial state.</p>

            <code className='p-3 rounded'>
                const [state, setState] = useState(0);
            </code>

            <p className='fst-italic fw-light opacity-50 pt-3 fs-6'>Note: You have to import useState from react</p>

            <p className='opacity-75'>Example:</p>


            <p> Count: {count}</p>

            <div className='d-grid gap-2 justify-content-start'>
               <div className='d-flex gap-2'>
                   <button className='btn btn-success' type='button' onClick={handleIncrement}>Increase Count</button>
                   <button className='btn btn-secondary' disabled={count <= 0}  type='button' onClick={handleDecrement}>Decrease Count</button>
               </div>
                <button className='btn btn-secondary' type='button' onClick={resetCount}>Reset</button>
            </div>

            <p className='opacity-50 mt-5'>By default the color is: red</p>
            <p className=''>Click button to change color: <span className={`text-${btnColor}`}>{color}</span></p>

            <div className='d-grid gap-2 justify-content-start'>
                <div className='d-flex gap-2'>
                    <button className='btn btn-info' type='button' onClick={toggleBlue}>Blue</button>
                    <button className='btn btn-warning' type='button' onClick={toggleYellow}>Yellow</button>
                    <button className='btn btn-light' type='button' onClick={toggleWhite}>White</button>
                    <button className='btn btn-success' type='button' onClick={toggleGreen}>Green</button>
                </div>
                <button className='btn btn-secondary' type='button' onClick={resetColor}>Reset</button>
            </div>
        </>
    )
}