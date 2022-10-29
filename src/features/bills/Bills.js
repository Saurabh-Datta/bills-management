import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addItem,
  removeItem,
  editItem,
  selectBills,
} from './billsReducer';
import { BillForm, EditForm } from "../../components";

export function Bills() {
  const bills = useSelector(selectBills);
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(null);
  return (
    <div>
        {bills?bills.map(bill => {
            return (<div key={bill.id}>{bill.category} <button onClick={()=>{dispatch(removeItem(bill.id))}}>remove</button><button onClick={()=>{setEditing(bill)}}>Edit</button></div>);
        }):null}
        <BillForm params = {(item) => dispatch(addItem(item))}/>
        {editing!==null?<EditForm state={editing} editItem = {(item) => dispatch(editItem({id:editing.id,data:item}))}/>:null}
    </div>
  );
}
