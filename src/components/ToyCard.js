import React from "react";

function ToyCard({name,id,image,likes,handleDelete,handleLike}) {
  return (
    <div className="card" key={id}> 
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p> 
      <button onClick={() => handleLike(id)} className="like-btn">Like {likes}</button>
      <button onClick={() => handleDelete(id)} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
