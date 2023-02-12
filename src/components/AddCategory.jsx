import { useState } from "react";


export function AddCategory( { onCategory }) {
  
    const [ inputValue, setInputValue ] = useState('')

    const onSubmit = ( event ) => {
      event.preventDefault();
      const value = inputValue.trim();
      if(value.length <= 1) return;

      onCategory(value);
      event.target.reset();
      setInputValue('');
    }
    
    const onInputChange = ( { target } ) => { 
        setInputValue(target.value);
    }

    return (
      <form onSubmit={ onSubmit }>
        <input 
          type="text"
          placeholder="Buscar Gifs"
          onChange={ onInputChange } />
      </form>
    )
}

