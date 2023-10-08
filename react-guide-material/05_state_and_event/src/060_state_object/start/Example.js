import { useState } from "react";

const Example = () => {
  const personObj = { name: "Tom", age: 18 };
  const [person, setPerson] = useState(personObj);
  const changeName = (e) => {
    setPerson({ ...person, name: e.target.value })
  }
  const changeAge = (e) => {
    setPerson({ name: person.name, age: e.target.value })
  }
  const resetButton = () => {
    setPerson({ name: "", age: "" })
  }

  return (
    <>
      <h3>Name: {person.name}</h3>
      <h3>Age: {person.age}</h3>
      <input type="text" value={person.name} onChange={changeName} />
      <input type="number" value={person.age} onChange={changeAge} />
      <button onClick={resetButton}>リセット</button>
    </>
  )
};

export default Example;
