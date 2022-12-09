import { useState, useEffect } from "react";

const Teste = () => {
    const [name, setName] = useState('Breno')
    const handleChangeName = () => {
        setName(prev => prev === 'Breno' ? 'Fernando' : 'Breno')
    }
    useEffect(() =>{
        alert('Nome alterado')
    },[name])
  
    return(
        <div>
            <p>
                {name}
            </p>
            <button onClick={handleChangeName}>Alterar</button>
        </div>
    )
}
export { Teste }