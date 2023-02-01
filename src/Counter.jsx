import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export function Counter() {


  const [total, setLike] = useState(0);

  const [total1, setLike1] = useState(0);

  return (

    <div>
      <IconButton onClick={() => setLike(total + 1)} aria-label="delete" color="primary">
        <Badge onClick={() => setLike(total + 1)} badgeContent={total} color="primary">
          👍
        </Badge>
      </IconButton>

      <IconButton onClick={() => setLike1(total1 + 1)} aria-label="delete" color="error">

        <Badge onClick={() => setLike1(total1 + 1)} badgeContent={total1} color="error">
          👎
        </Badge>
      </IconButton>

      {/* <button className="likes" onClick={() => setLike(total + 1)}>👍{total}</button>
                  <button className="likes" onClick={() => setLike1(total1 + 1)}>👎{total1}</button> */}

    </div>
  );
}
