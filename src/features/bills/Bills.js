import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addItem,
  selectBills,
} from './billsReducer';
import { BillForm } from "../../components";

export function Bills() {
  const bills = useSelector(selectBills);
  const dispatch = useDispatch();
  return (
    <div>
        <BillForm params = {(item) => dispatch(addItem(item))}/>
    </div>
  );
}
