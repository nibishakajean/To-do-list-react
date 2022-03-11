import React, { useState } from 'react';

// Import stylesheet
import './counter.css';

const Counter = () => 
{
	var [counter, setCounter] = useState(0);

	function decrementCounter ()
	{
		if(counter <= 0)
		{
			setCounter(0);
		}
		else
		{
			setCounter(counter - 1);
		}		
	}

	function incrementCounter ()
	{
		setCounter(counter + 1);
	}

	function resetCounter ()
	{
		setCounter(0);
	}

  return (
    <div>
        <div className='counter'>
            <p className='counterText'>{counter}</p>
            <div className='buttons'>
                <button onClick={decrementCounter}  className="decrement">-</button>
                <button onClick={resetCounter}      className="reset">Reset</button>
                <button onClick={incrementCounter}  className="increment">+</button>
            </div>
        </div>
    </div>
  )
}

export default Counter;

