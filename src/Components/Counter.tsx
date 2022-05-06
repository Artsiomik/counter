import React from 'react';
import style from './Counter.module.css'


type CounterPropsType = {
    incHandler: () => void
    resetHandler: () => void
    value: number | null
}

export const Counter = (props: CounterPropsType) => {

    const incHandler = () => {
      props.incHandler()
    }

    const resetHandler = () => {
      props.resetHandler()
    }



    return (
        <div className={style.wrapper}>
            <div className={props.value === 10 ? style.warn : style.display}>{props.value}</div>
            <button onClick={incHandler}>inc</button>
            <button onClick={resetHandler}>reset</button>

        </div>
    )
}