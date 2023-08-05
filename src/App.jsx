import { useEffect } from "react"
import "./App.css"
import searchicon from "./search.svg"
import MovieCard from "./MovieCard"
import { useState } from "react"
function App() {

  const [movies, setMovies] = useState([])
   const [searchTerm, setSearchTerm] = useState("")

   const searchMovies = async (title) =>{
      const response = await fetch(`https://www.omdbapi.com/?apikey=4a4b5b09&s=${title}`)
      const data = await response.json()

      setMovies(data.Search)
    }

  useEffect(() =>{
   searchMovies("superman")
  },[])


  return (
    <>
      <div className="app">
        <h1>MovieLand</h1>
        <div className="search">
          <input type="text"
          placeholder="Search for movies"
          value={searchTerm} 
          onChange={(e) =>setSearchTerm(e.target.value)}
          />
          <img src={searchicon} alt="search"
          onClick={() =>searchMovies(searchTerm)}
           />
        </div>
        {
          movies?.length > 0 
          ? (
        <div className="container">
        {movies.map((movie) =>{
          return (<MovieCard movie={movie}/>);
        })}    
        </div>
           ) :
          (
            <div className="empty">
            <h2>No movies Found</h2>
            </div>
          )
        }
        
      </div>
    </>
  )
}

export default App
