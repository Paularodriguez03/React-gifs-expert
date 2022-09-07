import React, { useState } from 'react'

export const AddCategory = ({onAddCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        onAddCategories(inputValue);
        setInputValue('');
    }

  return (
    <form onSubmit={onSubmit} >
        <input value={inputValue} onChange={onInputChange} type='text' placeholder='Buscar gifs' />
    </form>
  )
}
