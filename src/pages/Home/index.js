import { useEffect, useState } from "react";
import api from "../../services/api";

function Home(){

    const [movies, setMovies] = useState([]);

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

            console.log(response.data.results);
        }

        loadMovies();
    }, []);

    return (
        <div>
            <h1>Bem vindo a Home</h1>
        </div>
    );
}

export default Home;