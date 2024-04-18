import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import api from '../../services/api';
import './movie.css';

function Movie(){
    const { id } = useParams();
    const navigation = useNavigate();

    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        async function loadMovie(){
            const response = await api.get(`/movie/${id}`, {
                params: {
                    api_key: '2577d69700e36a4e7443e6b54b6f6a4b',
                    language: 'pt-BR',
                    page: 1,
                }
            })
            .then((response)=>{
                setMovie(response.data);
                setLoading(false);
            })
            .catch(()=>{
                console.log('filme nao encontrado!');
                // A flag replace vai garantir que nao tenha a opcao de voltar para a pagina de um filme nao encontrado/
                // ja que nao teria sentido voltar pra uma pagina de 'erro'
                navigation("/", { replace: true });
                return; //pra garantir que vai parar aqui
            });


        }

        loadMovie();

        return () => {
            console.log('Componente foi desmontado');
        }

    }, [id, navigation]);

    function saveMovie(){
        const myList = localStorage.getItem('@primeflix');
        
        // se myList nao for nula, ele vai fazer o parse, se for, vai iniciar um array vazio
        let savedMovies = JSON.parse(myList) || [];

        const hasMovie = savedMovies.some(saved => saved.id == movie.id);

        if(hasMovie){
            alert('Esse filme já está na lista');
            return;
        } 

        savedMovies.push(movie);
        localStorage.setItem('@primeflix', JSON.stringify(savedMovies));
        alert('Filme salvo com sucesso!');
    }


    if(loading){
        return (
            <div className="movie-info">
                <h1>Carregando detalhes...</h1>
            </div>
        );
    }

    return (
        <div className="movie-info">
            <h1> { movie.title } </h1>
             <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}` } alt={movie.title} />

             <h3>Sinopse</h3>
             <span> { movie.overview } </span>

             <strong>Avaliação: { movie.vote_average }/10</strong>

             <div className="buttons-area">
                <button onClick={saveMovie} >Salvar</button>
                <button>
                    <a href={`https://youtube.com/results?search_query=${movie.title} Trailer`} target="blank" rel="external" >Assistir trailer</a>
                </button>
             </div>
        </div>
    );
}

export default Movie;