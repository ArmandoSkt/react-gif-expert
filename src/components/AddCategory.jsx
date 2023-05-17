import { useState } from "react"

export const AddCategory = ( {onNewCategory} ) => {
    //Estado del input
    const [inputValue, setInputValue] = useState("");

    //Método para cambiar el valor del input
    const onInputChange = ( { target } ) => {
        setInputValue(target.value)
        
    }

    //Método para enviar el formulario
    const onSubmit = (e) => {
        e.preventDefault();
        const newInputValue = inputValue.trim();
        if(newInputValue.length <= 2) return;
        onNewCategory(newInputValue)
        setInputValue("")

    }

    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={onInputChange}/>
        </form>
    )
}

AddCategory