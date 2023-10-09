import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({id,name,hp,sprites}) {
  const [img,setImg] = useState(sprites.front)

  const handleClick = () =>{
    img === sprites.front ? setImg(sprites.back) : setImg(sprites.front)
  }


  return (
    <Card>
      <div onClick={handleClick}>
        <div className="image">
          <img src ={img} alt={"Failed To Load"} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
