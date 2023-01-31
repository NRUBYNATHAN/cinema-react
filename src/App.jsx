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
import { Routes, Route, Link,useParams } from "react-router-dom";
//import info button
import InfoIcon from '@mui/icons-material/Info';
//import useNavigate hook 
import {useNavigate} from "react-router-dom";
//navbar meterial
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
//back space meterial
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
//paper meterial
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
//brightness incress meterial 
import Brightness4Icon from '@mui/icons-material/Brightness4';
//brightness decress meterial
import Brightness7Icon from '@mui/icons-material/Brightness7';

function App(){
  const Initial_List=[
    {
      "id": "99",
      "name": "Vikram",
      "poster": "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
      "rating": 8.4,
      "summary": "Members of a black ops team must track and eliminate a gang of masked murderers.",
      "trailer": "https://www.youtube.com/embed/OKBMCL-frPU"
    },
    {
      "id": "100",
      "name": "RRR",
      "poster": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
      "rating": 8.8,
      "summary": "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
      "trailer": "https://www.youtube.com/embed/f_vbAtFSEc0"
    },
    {
      "id": "101",
      "name": "Iron man 2",
      "poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      "rating": 7,
      "summary": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
      "trailer": "https://www.youtube.com/embed/wKtcmiifycU"
    },
    {
      "id": "102",
      "name": "No Country for Old Men",
      "poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      "rating": 8.1,
      "summary": "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
      "trailer": "https://www.youtube.com/embed/38A__WT3-o0"
    },
    {
      "id": "103",
      "name": "Jai Bhim",
      "poster": "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      "summary": "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      "rating": 8.8,
      "trailer": "https://www.youtube.com/embed/nnXpbTFrqXA"
    },
    {
      "id": "104",
      "name": "The Avengers",
      "rating": 8,
      "summary": "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
      "poster": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
      "trailer": "https://www.youtube.com/embed/eOrNdBpGMv8"
    },
    {
      "id": "105",
      "name": "Interstellar",
      "poster": "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      "rating": 8.6,
      "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
      "trailer": "https://www.youtube.com/embed/zSWdZVtXT7E"
    },
    {
      "id": "106",
      "name": "Baahubali",
      "poster": "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      "rating": 8,
      "summary": "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
      "trailer": "https://www.youtube.com/embed/sOEg_YZQsTI"
    },
    {
      "id": "107",
      "name": "Ratatouille",
      "poster": "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      "rating": 8,
      "summary": "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
      "trailer": "https://www.youtube.com/embed/NgsQ8mVkN8w"
    },
    {
      "name": "PS2",
      "poster": "https://m.media-amazon.com/images/M/MV5BYjFjMTQzY2EtZjQ5MC00NGUyLWJiYWMtZDI3MTQ1MGU4OGY2XkEyXkFqcGdeQXVyNDExMjcyMzA@._V1_.jpg",
      "summary": "Ponniyin Selvan: I is an upcoming Indian Tamil-language epic period action film directed by Mani Ratnam, who co-wrote it with Elango Kumaravel and B. Jeyamohan",
      "rating": 8,
      "trailer": "https://www.youtube.com/embed/KsH2LA8pCjo",
      "id": "108"
    },
    {
      "name": "Thor: Ragnarok",
      "poster": "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
      "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\\n of researchers, to find a new planet for humans.",
      "rating": 8.8,
      "trailer": "https://youtu.be/NgsQ8mVkN8w",
      "id": "109"
    }
  ]
  
  const [obj,setObject]=useState(Initial_List)
  const navigate=useNavigate()
  
const[mode,setMode]=useState("light")
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  const bpstyles={
    minHeight:"100vh",
  }
  fetch("https://63d870175a330a6ae16865de.mockapi.io/movies")
    .then((data)=>data.json)
    .then((mvs)=>console.log(mvs))

       return(
        <ThemeProvider theme={darkTheme}>
             <Paper style={bpstyles} elevation={3} >
               <div>
        {/*NAV BAR POTTU ATHA CLICK PANNA RENDER AKUM*/}
        <AppBar position="static">
        <Toolbar>
          <Button onClick={()=>navigate("/")} color="inherit">Home</Button>
          <Button onClick={()=>navigate("/movie-list")} color="inherit">Movielist</Button>
          <Button onClick={()=>navigate("/counter")} color="inherit">Like</Button>
          <Button onClick={()=>navigate("/movie/add")} color="inherit">AddMovie</Button>
         < Button sx={{marginLeft:"auto"}} onClick={()=>setMode(mode=== "light" ? "dark" : "light")} color="inherit">
         {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
         {(mode=== "light" ? "dark" : "light")}Mode
          </Button>
          
          
       </Toolbar>
      </AppBar>
                   {/* <nav>
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
                  </nav> */}
         {/*ROUTER INTRODUCE*/}
                  <Routes>
                      <Route  path="/"           element={<Home />} />
                      <Route  path="/movie-list" element={<Movielist obj={obj} setObject={setObject} />}/>
                      <Route  path="/counter"    element={<Counter />} />
                      <Route  path="*"           element={<NotFount />} />
                      <Route  path="/movie-list/:id"    element={<MovieDetails obj={obj}  />}/>
                      <Route  path="/movie/add"    element={<AddMovie obj={obj} setObject={setObject}  />}/>
                  </Routes>
                  
                </div>
                </Paper>
                </ThemeProvider>

              );
}
function MovieDetails({obj}){
  const {id} = useParams();
  const data=obj[id];
  const styling={
    color :data.rating > 8.5 ? "green" : "red"
  }
  const navigate=useNavigate()
  return(
    <div>
       <iframe 
    width="100%" height="650px"
     src={data.trailer} 
     title="Michael - Official Trailer (Tamil) | Sundeep Kishan, Vijay Sethupathi | Ranjit Jeyakodi | Sam CS" 
     frameborder="0" 
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
     allowfullscreen>

     </iframe>
   <div className="moviedetails">
   
    <div className="fir">
    <h1>{data.name}</h1>
    <p style={styling} className="rate">⭐{data.rating}</p>
    </div>
    <p>{data.summary}</p>
    <Button startIcon={<KeyboardBackspaceIcon />} variant="contained" onClick={()=>navigate(-1)}>back</Button>
   
   </div>
   </div>
  );
}
function NotFount() {
  return(
    <div>
      <img
          className="notfount"
          src="https://media.tenor.com/IHdlTRsmcS4AAAAM/404.gif"
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
function Movielist({obj,setObject}){
  //data calling
  
    
//Add movie concept starts here
     
      
    return(
//ithula index and key value ethukuna map panrapo error kattama iruka
      <div>    
       {/* <AddMovie obj={obj} setObject={setObject} /> */}
      <div className="movieslist">
         {obj.map( (mv,index)=> (<Movie key={index}  data={mv} id={index}/>)) }
        </div>
        </div>
 
        );
}
function AddMovie({obj,setObject}){
  const[name,setName]=useState("")
  const[poster,setPoster]=useState("")
  const[rating,setRating]=useState("")
  const[summary,setSummary]=useState("")
  const[trailer,setTrailer]=useState("")
  return(
    <div className="input">
    <TextField onChange={(event)=>setName(event.target.value)} label="name" variant="outlined" />
    <TextField onChange={(event)=>setPoster(event.target.value)} label="poster url" variant="outlined" />
    <TextField onChange={(event)=>setSummary(event.target.value)} label="summary" variant="outlined" />
    <TextField onChange={(event)=>setRating(event.target.value)} label="Rating" variant="outlined" />
    <TextField onChange={(event)=>setTrailer(event.target.value)} label="Trailer" variant="outlined" />

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
    rating:rating,
    trailer:trailer,};
    setObject([...obj,newMovie]);
  }} variant="contained">Add Movie</Button>
  </div>

  );
}
function Movie({data,id}){
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
// NAVIGATE DECLARATION
const navigate = useNavigate();
return(


<Card className="movies">
 
   <img  className="poster" src={data.poster} alt={data.name}/>
    
    <div className="data">
    <div className="fir">  
    <h2 className="name">{data.name}</h2>

    <IconButton color="primary" onClick={()=>(setShow(!show))} aria-label="HIDE">
      {show ? <ExpandLessIcon />: <ExpandMoreIcon/>}
    </IconButton>

    <IconButton color="primary" onClick={()=>navigate(`/movie-list/${id}`)} aria-label="Movie details ">
      <InfoIcon/>
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