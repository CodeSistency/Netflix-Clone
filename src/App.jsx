import { useState, useEffect } from 'react'
import Row from './components/Row'
import Banner from './components/Banner'
import Nav from './components/Nav'
import './App.css'
import requests from './Requests'

function App() {
  


  return (
    <div className="App">
      <Nav />
      <Banner /> 
      <Row 
        title="NETFLIX ORIGINALS"  
        fetchURL={requests.fetchNetflixOriginals}
        isLarge={true}
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending}/>
      <Row title="Top Rated" fetchURL={requests.fetchTopRated}/>
      <Row title="Action" fetchURL={requests.fetchActionMovies}/>
      <Row title="Comedy" fetchURL={requests.fetchComedyMovies}/>
      <Row title="Horror" fetchURL={requests.fetchHorrorMovies}/>
      <Row title="Romance" fetchURL={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries}/>


    </div>
  )
}

export default App

