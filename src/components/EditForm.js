import React, { useState } from 'react';

const EditForm = (params) => {
    const [ID, setID] = useState(params.state.id);
    const [description, setDescription] = useState(params.state.description);
    const [category, setCategory] = useState(params.state.category);
    const [amount, setAmount] = useState(params.state.amount);
    const [date, setDate] = useState(params.state.date);
  return (
    <div>
        <input type="text" name='description' placeholder='Enter description' value={description} onChange={(e)=>{setDescription(e.target.value)}}></input>
        <input type="text" name='category' placeholder='Enter category' value={category} onChange={(e)=>{setCategory(e.target.value)}}></input>
        <input type="number" name='amount' placeholder='Enter amount' step={0.1} value={amount} onChange={(e)=>{setAmount(e.target.value)}}></input>
        <input type="date" name='date' placeholder='Enter Date' value={date} onChange={(e)=>{setDate(e.target.value)}}></input>
        <button onClick={() => {
          params.editItem({id:ID, description:description, category:category, amount:amount, date:date});
          console.log("something happened!");
          console.log(ID);
          console.log(date);
        }}>Add</button>
    </div>
  )
}


export default EditForm;