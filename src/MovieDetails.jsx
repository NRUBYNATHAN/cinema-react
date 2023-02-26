import Button from '@mui/material/Button';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import {useEffect} from "react";
import {useState} from "react";
import { API } from './global';

export function MovieDetails() {
  const { id } = useParams();
  //const data = obj[id];
  const [Movie, setMovie] = useState({});
  useEffect(() => {
    fetch(`${API}/${id}`)
      .then((data) => data.json())
      .then((mvs) => setMovie(mvs));
  }, [id]);
  
 
  
  const styling = {
    color: Movie.rating > 8.5 ? "green" : "red"
  };
  const navigate = useNavigate();
  return (
    <div>
      <iframe
        width="100%" height="650px"
        src={Movie.trailer}
        title="Michael - Official Trailer (Tamil) | Sundeep Kishan, Vijay Sethupathi | Ranjit Jeyakodi | Sam CS"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>

      </iframe>
      <div className="moviedetails">

        <div className="fir">
          <h1>{Movie.name}</h1>
          <p style={styling} className="rate">⭐{Movie.rating}</p>
        </div>
        <p>{Movie.summary}</p>
        <Button startIcon={<KeyboardBackspaceIcon />} variant="contained" onClick={() => navigate(-1)}>back</Button>

      </div>
    </div>
  );
}
