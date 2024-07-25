const submitForm=document.querySelector('.submitForm')
const searchBox=document.querySelector('.searchBox')
const inputbtn=document.querySelector('.inputbtn')
const movieposter=document.querySelector('.movie-poster')
const moviedetails=document.querySelector('.movie-details')


// Fetching data from the api
async function  movieInfo(movie){

    const myapiKey='79a866a9'

    const url=`http://www.omdbapi.com/?apikey=${myapiKey}&t=${movie}`
    

    const datas=await fetch(url)
const apiData=await datas.json()


movieposter.innerHTML=` <img src="${apiData.Poster}" alt="" srcset="">`
console.log(apiData)

moviedetails.innerHTML=`<h1>Movie: ${apiData.Title} </h1> <br>
<h3>Actors: ${apiData.Actors}</h3> 
<h3>Director: ${apiData.Director}</h3>
<h3>Writer:  ${apiData.Writer} </h3>
<h3>IMDB-Rating:  ${apiData.imdbRating} </h3>
<h3>Released: ${apiData.Released}</h3>
<h3>Language: ${apiData.Language} </h3>
<h3>Duration: ${apiData.Runtime}</h3>
<h3>Genre: ${apiData.Genre}</h3>
`

 }



//  For showing movie data
//  const showMovieData=(data)=>{

//     // use distructing for fetching data

// const{Title,}
//  }



//  Function for button click
inputbtn.addEventListener('click',()=>{
const movieName=searchBox.value.trim();

if(movieName !=""){
    movieInfo(movieName)
}

})