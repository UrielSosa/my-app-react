import { useRef } from "react";
import { useState, useEffect } from "react";

const Gif = () => {
    const [gif, setGif] = useState('');
    const [text, setText] = useState('');
    const endpoint = 'https://api.giphy.com/v1/gifs/random?api_key=H23hUGTNwKzpi2PTgh7DBTQ63Ok0eo4v';
    const texto = useRef();

    useEffect(()=> {
        if(text.length > 3){
            console.log('Estoy dentro del buscador');
            fetch(`https://api.giphy.com/v1/gifs/search?api_key=H23hUGTNwKzpi2PTgh7DBTQ63Ok0eo4v&q=${text}`)
                .then(res => res.json())
                .then(gif => {
                    setGif(gif.data[0].images.original.url);
                })
                .catch(err => console.log(err))
        } else {
            fetch(endpoint)
            .then(res => res.json())
            .then(gif => {
                console.log(gif);
                setGif(gif.data.images.original.url);
            })
            .catch(err => console.log(err))
        }
    }, [text]);

    const cargarGif = () => {
        console.log('Cargamos un gif nuevo');
        fetch(endpoint)
            .then(res => res.json())
            .then(gif => {
                setGif(gif.data.images.original.url);
            })
            .catch(err => console.log(err))
    }

    const searchGif = (e) => {
        e.preventDefault();
        console.log('Estamos buscando un gif');
        // console.log(e.target.search.value)
        // console.log(texto.current.value)
        setText(texto.current.value);
    }

    return (
        <div className="d-box mt-5">
            <br/>
            <br/>
            <br/>
            <h2>API GIPHY</h2>
            <form onSubmit={(event) => searchGif(event)}>
                <input type="text" name="search" id="search" ref={texto}/>
                <button type="submit">Buscar</button>
            </form>
            {
                gif === ""
                ?
                <p>Cargando...</p>
                :
                <img src={gif} alt="" style={{width: '30%'}}/>
            }

            <div className="d-box">
                <button onClick={cargarGif}>Cargar nuevo gif</button>
            </div>
        </div>
    )
}
 
export default Gif;