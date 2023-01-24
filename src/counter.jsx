import { useState } from "react";
import IconButton from '@mui/material/IconButton';
function Counter() {


  const [total, setLike] = useState(0);

  const [total1, setLike1] = useState(0);

  return (

    <div className="like">
      <IconButton onClick={() => setLike(total + 1)} aria-label="delete" color="primary">
        👍{total}
      </IconButton>
      <IconButton onClick={() => setLike1(total1 + 1)} aria-label="delete" color="error">
        👎{total1}
      </IconButton>

      {/* <button className="likes" onClick={() => setLike(total + 1)}>👍{total}</button>
            <button className="likes" onClick={() => setLike1(total1 + 1)}>👎{total1}</button> */}

    </div>
  );
}
export default Counter;