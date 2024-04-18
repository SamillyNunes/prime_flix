import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

import './home.css';

function Home(){

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function loadMovies(){
            const response = await api.get(
                'movie/now_playing',
                {
                    params: {
                        api_key: '2577d69700e36a4e7443e6b54b6f6a4b',
                        language: 'pt-BR',
                        page: 1,
                    }
                }
            );

            // console.log(response.data.results.slice(0,10));
            setMovies(response.data.results);
            setLoading(false);
        }

        loadMovies();
    }, []);

    if(loading){
        return (
            <div className="loading"> Carregando filmes...</div>
        );
    }

    return (
        <div className="container">
            <div className="movies-list">
                {movies.map(movie => {
                    return (
                        <article key={movie.id} >
                            <strong> {movie.title} </strong>
                            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}` } alt={movie.title} />
                            <Link to={`/filme/${movie.id}`} >Acessar</Link>
                        </article>
                    );
                })}
            </div>
        </div>
    );
}

export default Home;