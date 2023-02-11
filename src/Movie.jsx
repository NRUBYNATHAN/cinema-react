import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from "react-router-dom";
import { Counter } from "./Counter";

export function Movie({ data, id,DeletteButton,EditButton }) {
  //conditional styling
  const styling = {
    color: data.rating > 8.5 ? "green" : "red"
  };
  //conditional styling and hooks
  //manage state,independed,accelarete
  const [show, setShow] = useState(false);

  //derived state,depended,speedo meter
  //  const summarystyle={
  //     display :show ?"block": "none"
  //   }
  // NAVIGATE DECLARATION
  const navigate = useNavigate();
  return (


    <Card className="movies">

      <img className="poster" src={data.poster} alt={data.name} />

      <div className="data">
        <div className="fir">
          <h2 className="name">{data.name}</h2>

          <IconButton color="primary" onClick={() => (setShow(!show))} aria-label="HIDE">
            {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>

          <IconButton color="primary" onClick={() => navigate(`/movie-list/${id}`)} aria-label="Movie details ">
            <InfoIcon />
          </IconButton>

          <p style={styling} className="rate">⭐{data.rating}</p></div>

        {/* <button onClick={()=>(setShow(!show))}>HIDE</button> */}
        {/* conditional rendering method*/}
        {show ? <p className="sum">{data.summary}</p> : null}
        
        {/*conditional styling method
            <p style={summarystyle} className="sum">{data.summary}</p> */}
        <div className="like">
          <Counter /> {DeletteButton} {EditButton}
          </div>
        </div>
    </Card>

  );
}
