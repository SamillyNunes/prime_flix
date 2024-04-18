import { useEffect, useState } from 'react';
import './favorites.css';
import { Link } from 'react-router-dom';

function Favorites(){

    const [movies, setMovies] = useState([]);

    useEffect(()=>{

        const myList = localStorage.getItem('@primeflix');
        setMovies(JSON.parse(myList) || []);

    },[]);

    return (
        <div className='my-movies'>
            <h1>Meus filmes</h1>
            <ul>
                {movies.map(movie => {
                    return (
                        <li key={movie.id}>
                            <span> {movie.title} </span>
                            <div>
                                <Link to={`/filme/${movie.id}`} >Ver detalhes</Link>
                                <button>Excluir</button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Favorites;