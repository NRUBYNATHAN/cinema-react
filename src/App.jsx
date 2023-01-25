//app import
import "./App.css";
//meterial buttton import
import Button from '@mui/material/Button';
//meterial textfield import
import TextField from '@mui/material/TextField';
//named import hook
import {useState} from "react";
//import iconbutton
import IconButton from '@mui/material/IconButton';
//import expand button
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//import batch  button
import Badge from '@mui/material/Badge';
//import card material 
import Card from '@mui/material/Card';
//import router
import { Routes, Route, Link } from "react-router-dom";


function App(){
       return(
               <div>
        {/*NAV BAR POTTU ATHA CLICK PANNA RENDER AKUM*/}
                   <nav>
                       <ul>
                         <li>
                           <Link to ="/">Home</Link>
                         </li>
                         <li>
                           <Link to ="/movie-list">Movielist</Link>
                         </li>
                         <li>
                           <Link to ="/counter">Like</Link>
                         </li>
                      </ul>
                  </nav>
         {/*ROUTER INTRODUCE*/}
                  <Routes>
                      <Route path="/"   element={<Home />} />
                      <Route path="/movie-list"   element={<Movielist />} />
                      <Route path="/counter"   element={<Counter />} />
                      <Route path="*"     element={<NotFount />} />
                  </Routes>
                  
                </div>
              );
}
function NotFount() {
  return(
    <div>
      <img
          className="notfount"
          src="data:image/png;base64,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"
          alt="404 not fount"
      />
    </div>
  );
}
function Home() {
  return(
    <div>
      <h1>Welcome to router home page 🎉🎉🎉❤️❤️</h1>
    </div>
  );
}
function Movielist(){
  //data calling

    const [obj,setObject]=useState([
        {
          "name": "Vikram",
          "poster": "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
          "rating": 8.4,
          "summary": "Members of a black ops team must track and eliminate a gang of masked murderers."
        },
        {
          "name": "RRR",
          "poster": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
          "rating": 8.8,
          "summary": "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments."
        },
        {
          "name": "Iron man 2",
          "poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
          "rating": 7,
          "summary": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy."
        },
        {
          "name": "No Country for Old Men",
          "poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
          "rating": 8.1,
          "summary": "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money."
        },
        {
          "name": "Jai Bhim",
          "poster": "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
          "summary": "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
          "rating": 8.8
        },
        {
          "name": "The Avengers",
          "rating": 8,
          "summary": "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
          "poster": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg"
        },
        {
          "name": "Interstellar",
          "poster": "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
          "rating": 8.6,
          "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans."
        },
        {
          "name": "Baahubali",
          "poster": "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
          "rating": 8,
          "summary": "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy."
        },
        {
          "name": "Ratatouille",
          "poster": "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
          "rating": 8,
          "summary": "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him."
        },
        {
          "name": "PS2",
          "poster": "https://m.media-amazon.com/images/M/MV5BYjFjMTQzY2EtZjQ5MC00NGUyLWJiYWMtZDI3MTQ1MGU4OGY2XkEyXkFqcGdeQXVyNDExMjcyMzA@._V1_.jpg",
          "summary": "Ponniyin Selvan: I is an upcoming Indian Tamil-language epic period action film directed by Mani Ratnam, who co-wrote it with Elango Kumaravel and B. Jeyamohan",
          "rating": 8
        },
        {
          "name": "Thor: Ragnarok",
          "poster": "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
          "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\\n of researchers, to find a new planet for humans.",
          "rating": 8.8
        }
      ])
//Add movie concept starts here
      const[name,setName]=useState("")
      const[poster,setPoster]=useState("")
      const[rating,setRating]=useState("")
      const[summary,setSummary]=useState("")
      
    return(
//ithula index and key value ethukuna map panrapo error kattama iruka
      <div>    
        <div className="input">
        <TextField onChange={(event)=>setName(event.target.value)} label="name" variant="outlined" />
        <TextField onChange={(event)=>setPoster(event.target.value)} label="poster url" variant="outlined" />
        <TextField onChange={(event)=>setSummary(event.target.value)} label="summary" variant="outlined" />
        <TextField onChange={(event)=>setRating(event.target.value)} label="Rating" variant="outlined" />

      {/*<input onChange={(event)=>setName(event.target.value)} type="text" placeholder="name"/>
      <input onChange={(event)=>setPoster(event.target.value)} type="text" placeholder="poster"/>
      <input onChange={(event)=>setSummary(event.target.value)} type="text" placeholder="summary"/>
      <input onChange={(event)=>setRating(event.target.value)} type="text" placeholder="rating"/> */}

{/*meterial button introduce */}

      {/* <button onClick={()=>{
      const newMovie= {
        name:name,
        poster:poster,
        summary:summary,
        rating:rating,};
        setObject([...obj,newMovie]);
      }}>Add Movie</button> */}
      {/* meterial button  */}
      <Button onClick={()=>{
      const newMovie= {
        name:name,
        poster:poster,
        summary:summary,
        rating:rating,};
        setObject([...obj,newMovie]);
      }} variant="contained">Add Movie</Button>
      </div>

      <div className="movieslist">
         {obj.map( (mv,index)=> (<Movie key={index}  data={mv}/>)) }
        </div>
        </div>
 
        );
}
function Movie({data}){
//conditional styling
  const styling={
    color :data.rating > 8.5 ? "green" : "red"
  }
//conditional styling and hooks
//manage state,independed,accelarete
const[show,setShow]=useState(false)

  //derived state,depended,speedo meter
//  const summarystyle={
//     display :show ?"block": "none"
//   }

return(


<Card className="movies">
 
   <img  className="poster" src={data.poster} alt={data.name}/>
    
    <div className="data">
    <div className="fir">  
    <h2 className="name">{data.name}</h2>
    <IconButton onClick={()=>(setShow(!show))} aria-label="HIDE">
      {show ? <ExpandLessIcon />: <ExpandMoreIcon/>}
    </IconButton>
    <p style={styling} className="rate">⭐{data.rating}</p></div>
  
    {/* <button onClick={()=>(setShow(!show))}>HIDE</button> */}
    {/* conditional rendering method*/ }
    {show ? <p className="sum">{data.summary}</p> : null}
    
    {/*conditional styling method
    <p style={summarystyle} className="sum">{data.summary}</p> */}
       <Counter/></div>
</Card>

);
}
function Counter() {


  const [total, setLike] = useState(0);

  const [total1, setLike1] = useState(0);

  return (

    <div className="like">
      <IconButton onClick={() => setLike(total + 1)} aria-label="delete" color="primary">
      <Badge  onClick={() => setLike(total + 1)} badgeContent={total} color="primary">
         👍
      </Badge>
      </IconButton>
      
      <IconButton onClick={() => setLike1(total1 + 1)} aria-label="delete" color="error">
        
        <Badge  onClick={() => setLike1(total1 + 1)} badgeContent={total1} color="error">
         👎
        </Badge>
      </IconButton>

      {/* <button className="likes" onClick={() => setLike(total + 1)}>👍{total}</button>
            <button className="likes" onClick={() => setLike1(total1 + 1)}>👎{total1}</button> */}

    </div>
  );
}

//export app
export default App;