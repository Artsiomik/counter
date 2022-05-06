import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './Components/Counter';

function App() {
 const [value, setValue] = useState<number | null>(null)

    useEffect(() => {
        let valueAsString = localStorage.getItem('counterValue')
        if(valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
            console.log('value', value)
        } else {
            setValue(0)
        }
        }, [])

    useEffect(() => {
        if (value != null)
            localStorage.setItem('counterValue', JSON.stringify(value))
        }, [value])

const incHandler = () => {
     if(value != null && value < 10){
         setValue(value + 1)
     }
}

const resetHandler = () => {
     setValue(0)
 }

 return (
    <div className="App">
        <div className="container">
            <Counter incHandler={incHandler}
                     resetHandler={resetHandler}
                     value={value}
            />
        </div>
    </div>
  );
}

export default App;
