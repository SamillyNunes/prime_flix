import { useEffect, useState } from 'react';
import './favorites.css';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";

function Favorites(){

    const [movies, setMovies] = useState([]);

    useEffect(()=>{

        const myList = localStorage.getItem('@primeflix');
        setMovies(JSON.parse(myList) || []);

    },[]);

    function deleteMovie(id){
        let moviesFiltered = movies.filter(item => item.id!==id);

        setMovies(moviesFiltered);

        localStorage.setItem('@primeflix', JSON.stringify(moviesFiltered));
        toast.success('Filme removido com sucesso!');

    }

    return (
        <div className='my-movies'>
            <h1>Meus filmes</h1>

            { movies.length===0 && <span>Você não possui nenhum filme salvo :( </span> }

            <ul>
                {movies.map(movie => {
                    return (
                        <li key={movie.id}>
                            <span> {movie.title} </span>
                            <div>
                                <Link to={`/filme/${movie.id}`} >Ver detalhes</Link>
                                <button onClick={() => deleteMovie(movie.id)} >Excluir</button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Favorites;