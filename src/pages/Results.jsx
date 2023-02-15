import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Results = () => {
    const [gifs, setGifs] = useState([]);
    const location = useLocation();

    const params = new URLSearchParams(location.search);
    // setWord(params.get('palabra'));
    const word = params.get('palabra');


    useEffect (()=> {
        if (word.length >= 3) {
            fetch(`https://api.giphy.com/v1/gifs/search?api_key=H23hUGTNwKzpi2PTgh7DBTQ63Ok0eo4v&q=${word}&limit=10`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
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
                        <div className="col-3" key={gif.id}><img src={gif.images.original.url} alt="" style={{height: '200px'}}/></div>
                    ))
                }
            </div>
        </div>
    )
};
 
export default Results;