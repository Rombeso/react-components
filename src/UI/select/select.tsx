import React from 'react';
import {OptionSelectType} from "../../pages/Posts";


type PropsType = {
    options: OptionSelectType[],
    defaultSelect: string,
    changedSelect: (value: string | number) => void
}

const Select = ({options, defaultSelect, changedSelect}: PropsType) => {
    return (
        <select
            onChange={(e) => changedSelect(e.target.value)}
        >
            <option disabled>{defaultSelect}</option>
            {options.map( item => {
                return (
                    <option key={item.value} value={item.value}>{item.title}</option>
                )
            })}
        </select>
    );
};

export default Select;