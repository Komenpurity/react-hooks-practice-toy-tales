import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys,setToys] = useState([])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }


  useEffect(() => {
      fetch("https://toy-tales-api.onrender.com/toys")
      .then(response => response.json())
      .then(data => setToys(data)) 
  },[] )

  function addItem(item){
      setToys([...toys,item])
  }

  function handleDelete (id){   
    fetch(`https://toy-tales-api.onrender.com/toys/${id}`, {
      method: "DELETE",
    })   
      .then(response => response.json())
      .then(() => { 
          const rem =  toys.filter((t) => t.id !== id)  
          setToys(rem)  
      })  
  }

  function handleLike(id){ 

    fetch(`https://toy-tales-api.onrender.com/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes:  toys.likes,   
      }),
    })  
    .then((r) => r.json())
    .then(data => console.log(data)) 
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addItem={addItem}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer handleLike={handleLike} handleDelete={handleDelete} toys = {toys}/> 
    </>
  );
}

export default App;
