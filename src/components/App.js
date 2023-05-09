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
      fetch("http://localhost:3000/toys")
      .then(response => response.json())
      .then(data => setToys(data)) 
  },[] )

  function addItem(item){
      setToys([...toys,item])
  }

  function handleDelete (id){   
    fetch(`http://localhost:3000/toys/${id}`, {
      method: "DELETE",
    })   
      .then(response => response.json())
      .then(() => { 
          const rem =  toys.filter((t) => t.id !== id)  
          setToys(rem)  
      })  
  }


  return (
    <>
      <Header />
      {showForm ? <ToyForm addItem={addItem}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer handleDelete={handleDelete} toys = {toys}/> 
    </>
  );
}

export default App;
