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
      console.log(toys) 
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addItem={addItem}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys = {toys}/> 
    </>
  );
}

export default App;
