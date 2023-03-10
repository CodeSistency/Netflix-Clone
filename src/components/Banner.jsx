import React, {useState} from 'react'
import { useEffect } from 'react'
import axios from '../axios'
import requests from '../Requests'
function Banner() {

    const [movie, setMovie] = useState([])

    useEffect(() =>{
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request
        }
        fetchData()
    }, [])

    console.log(movie);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

  return (
    
    <header 
        className='banner-container'
        style={{
            backgroundSize: "cover",
            backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
)`,
            backgroundPosition: "center center"
        }}
    >
        <div className='banner-content'>
            <h1 className='banner-title'>
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className="banner-buttons">
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>

            <h1 className='movie-description'>{truncate(movie?.overview, 150)}</h1>
            
        </div>
        <div className='banner-fade'></div>
    </header>
  )
}

export default Banner