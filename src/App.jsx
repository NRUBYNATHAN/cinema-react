//app import
import "./App.css"
//meterial buttton import
import Button from '@mui/material/Button';
//meterial textfield import
import TextField from '@mui/material/TextField';
//named import hook
import {useState} from "react";
//
import IconButton from '@mui/material/IconButton';
//default export
//
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export default function App(){
       return(
               <div>
                  <Movielist/> 
                  
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
        <TextField onChange={(event)=>setPoster(event.target.value)} label="poster" variant="outlined" />
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
const[show,setShow]=useState(true)

  //derived state,depended,speedo meter
//  const summarystyle={
//     display :show ?"block": "none"
//   }

return(


<div className="movies">
 
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

</div>
);
}
function Counter() {


  const [total, setLike] = useState(0);

  const [total1, setLike1] = useState(0);

  return (

    <div className="like">
      <IconButton onClick={() => setLike(total + 1)} aria-label="delete" color="primary">
      👍{total}
     </IconButton>
     <IconButton onClick={() => setLike1(total1+ 1)} aria-label="delete" color="error">
     👎{total1}
     </IconButton>

      {/* <button className="likes" onClick={() => setLike(total + 1)}>👍{total}</button>
      <button className="likes" onClick={() => setLike1(total1 + 1)}>👎{total1}</button> */}

    </div>
  );
}
