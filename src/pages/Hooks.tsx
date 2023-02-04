import React, {useRef, useState} from 'react';
import useHover from "../hooks/useHover";
import MyInput from "../UI/input/MyInput";
import useDebounce from "../hooks/useDebounce";

const Hooks = () => {
    const hoverRef = useRef();
    const hovering = useHover(hoverRef);
    const [value, setValue] = useState('')
    const [displayValue, setDisplayValue] = useState('')
    const onChange = e => {
        setValue(e.target.value)
        setDebounce(e.target.value)
    }
    const setDebounce = useDebounce(setDisplayValue, 5000)
    return (
        <div>
            <h1>Учебные хуки которые нигде не используются</h1>
            <div style={{margin: '20px'}}>
                <h2>useHover</h2>
                <p>Отдает по ссылке эл-т на который навели</p>
                <div ref={hoverRef} style={{width: 200, height:200, backgroundColor: hovering ? 'green' : 'lightcyan'}}>
                    Наведи на меня
                </div>
            </div>
            <hr />
            <div>
                <h2>useDebounce</h2>
                <MyInput type={'text'} value={value} placeholder={'Напечатай...'} onChange={onChange}/>
                <p>Value before 5 sec: <strong>{displayValue}</strong></p>
            </div>
        </div>
    );
};

export default Hooks;