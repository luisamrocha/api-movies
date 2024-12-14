'use client'
import { useState , useEffect} from 'react'
import './index.scss'
import axios from 'axios'
import MovieCard from '../MovieCard'

export interface Movie{
    title: string,
    poster_path: string, 
    overview :string,
    vote_average:number,
    id:number
}

export default function MovieList(){
    const [movies,setMovies] = useState<Movie[]>([])
    const [error, setError] = useState<string | null>(null)

    useEffect(() =>{
        getMovies()
    },[])

    const getMovies = async () => {
        try {
            const response = await axios({
                method: 'get',
                url: 'https://api.themoviedb.org/3/discover/movie',
                params: {
                    api_key: '9de7f200423524fc4c0a1afeb84179e6',
                    language: 'pt-BR'
                }
            });
            setMovies(response.data.results);
        } catch (error:any) {
            console.error("Erro ao buscar filmes:", error);
            setError('Não foi possível carregar os filmes.');

        } 
    };



    return(
        <ul className='movie-list'>
            {movies.map((movie) =>(
               <MovieCard key = {movie.id} movie ={movie} />
            ))}
           
        </ul>
   
        )
}

