import { useState } from "react";
import { useEffect } from "react";

const Results = () => {
    const [word, setWord] = useState('');
    const [gifs, setGifs] = useState([]);

    useEffect (()=> {
        if (false) {
            fetch(`https://api.giphy.com/v1/gifs/search?api_key=H23hUGTNwKzpi2PTgh7DBTQ63Ok0eo4v&q=${word}&limit=10`)
            .then(res => res.json())
            .then(data => {
                setGifs(data.data);
            })    
        }
    }, [word])

    return (
        <div className="container mt-5 pt-5">
            <br />
            <br />
            <br />
            <h2>Resultados de la busqueda</h2>
            <div className="row">
                {
                    gifs.map(gif => (
                        <div className="col-3" key={gif.id}><img src="" alt="" style={{height: '200px'}}/></div>
                    ))
                }
            </div>
        </div>
    )
};
 
export default Results;