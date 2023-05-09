import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys,handleDelete,handleLike}) {
  return (
    <div id="toy-collection">
      {toys.map((toy) => {
        return <ToyCard handleLike={handleLike} handleDelete={handleDelete} name={toy.name} id = {toy.id} image = {toy.image} likes = {toy.likes}/>
      })}
    </div>
  );
}

export default ToyContainer;
