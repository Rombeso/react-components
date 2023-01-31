import React from 'react';
import MyInput from "../UI/input/MyInput";
import Select from "../UI/select/select";
import {FilterType} from "../App";

type PropsType = {
    filter: FilterType,
    setFilter: (filter: FilterType) => void
}

const PostFilter = ({filter, setFilter}: PropsType) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={(e)=> setFilter({...filter, query: e.target.value}) }
                placeholder={'Search...'}
            />
            <Select options={[
                {title: 'По названию', value: 'title'},
                {title: 'По содержанию', value: 'body'},
            ]}
                    defaultSelect={'Сортировка'}
                    changedSelect={(value)=> setFilter({...filter, sort: value})}
            />
        </div>
    );
};

export default PostFilter;