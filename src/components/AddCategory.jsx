import { useState } from "react";

const AddCategory = ( { onNewCategory }) => {

    const [inputvalue, setinputvalue] = useState('')
    
    const handleOnChange = (event) => {
      setinputvalue( event.target.value)
      
    }
    
    const onSubmit = ( event ) => {
      event.preventDefault();
      if (inputvalue.trim().length <= 1) return ;
      setinputvalue('')
        
      
      
     // setCategories ( categories => [ inputvalue, ...categories])
       onNewCategory( inputvalue.trim())
    }

    return (
        <form onSubmit={ onSubmit }>
        
        <input 
        type='text'
        placeholder="Buscar gifs"
        value={ inputvalue }
        onChange={ handleOnChange }
        />

        </form>
    )
}

export default AddCategory;