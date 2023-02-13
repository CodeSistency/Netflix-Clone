import { useState, useEffect } from "react"
import React from 'react'
import axios from "../axios"
import '../App.css'
import YouTube from "react-youtube"
import movieTrailer from "movie-trailer"

export default function Row(props) {

    const base_URL = "https://image.tmdb.org/t/p/original/"

    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
    
        async function fetchData(){
            const request = await axios.get(props.fetchURL)
            setMovies(request.data.results)
            return request
        }

        fetchData()

    }, [props.fetchURL])

    const opts = {
        heigt: "398",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    function handleClick(movie) {
        if(trailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer(movie?.name || "")
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"))
            })
            .catch((error) => console.log(error))
        }
    }

    const rowMovies = movies.map(movie => {
        return (
           <img
                key={movie.id}
                onClick={() => handleClick(movie)} 
                className={`row-movie ${props.isLarge && "row-movie-large"}`} 
                src={`${base_URL}${props.isLarge ? movie.poster_path : movie.backdrop_path}`}
                alt={movie.name} 
           /> 
        )
    })
    


  return (
    <div className="row">
        <h1>{props.title}</h1>
        <div className="row-movies">
            {rowMovies}
        </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}
