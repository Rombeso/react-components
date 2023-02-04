import {useState} from "react";
type InputType = {
    value: string | number;
    onChange: (any) => void;
}
const useInput = (initialValue: string | number): InputType => {
    const [value, setValue] = useState(initialValue)

    const onChange = e => {
        setValue(e.target.value)
    }

    return { value, onChange}
}

export default useInput;