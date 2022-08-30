import { useState } from "react";
import AddCategory from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One Punch']);
    
    const addCategory = ( newCategory) =>{
     
      setCategories( [ newCategory , ...categories] );
    }
    
    return (
      <>
      <h1> GifExpertApp </h1>
      
      <AddCategory 
        onNewCategory = { addCategory }
      />

      <button onClick={addCategory}>Agregar</button> 
      
        { categories.map( category => {
           return (
           
          <GifGrid 
            key={ category }
            category= { category }
          />

       ) })}
      

      </>

    )
}

export default GifExpertApp;