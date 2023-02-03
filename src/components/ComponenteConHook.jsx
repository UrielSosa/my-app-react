import { useState } from "react";

const ComponenteConHook = () => {
    const [user, setUser] = useState("Pato");
    const [age, setAge] = useState(34);

    const handleUser = () => {
        setUser("Ana");
        setAge(age + 5);
    };

    return (
        <>
            <h2>{user}</h2>
            <h3>{age}</h3>
            <button onClick={handleUser}>Cambiar el valor del estado</button>
        </>
    );
};

export default ComponenteConHook;
