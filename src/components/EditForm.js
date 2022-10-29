import React, { useState } from "react";
import { Autocomplete, TextField, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { selectBills } from "../features/bills/billsReducer";

const getInitialValue = (props) => {
  return {
    id: props.id,
    description: props.description,
    category: props.category,
    date: props.date,
    amount: props.amount,
  };
};

const EditForm = (params) => {
  const bills = useSelector(selectBills);
  const [response, setResponse] = useState(getInitialValue(params.state));
  let categories = [];
  bills.map((bill) => {
    categories = [...categories, bill.category];
  });
  let uniqueCategories = [...new Set(categories)];
  return (
    <div style={{display: 'flex', flexDirection:'row', justifyContent: 'space-around', margin: 22, backgroundColor: '#FFF', paddingTop: 25, paddingBottom: 25}} hidden= {params.editing?"false":"true"}>
      <h2>Edit Bill</h2>
      <TextField
        label="Description"
        variant="outlined"
        required
        value={response.description}
        style={{width:250}}
        onChange={(e) => {
          setResponse({...response, description: e.target.value});
        }}
      />
      <Autocomplete
        freeSolo
        options={uniqueCategories.map((uniqueCategory) => uniqueCategory)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Category"
            required
            style={{width:250}}
            value={response.category}
            onChange={(e) => {
              setResponse({...response, category: e.target.value});
            }}
          />
        )}
      />
      <TextField
        label="Amount"
        variant="outlined"
        required
        type="number"
        style={{width:250}}
        value={response.amount}
        onChange={(e) => {
          setResponse({...response, amount: e.target.value});
        }}
      />
      <TextField
        type="date"
        name="date"
        required
        label="Date"
        style={{width:250}}
        value={response.date}
        onChange={(e) => {
          setResponse({...response, date: e.target.value});
        }}
      />
      <Button
        variant="contained"
        disableElevation
        onClick={() => {
          params.editItem(response);
          setResponse({...response, id: response.id});
          setResponse(getInitialValue());
          params.editing = false;
          params.func();
        }}
      >
        Save
      </Button>
    </div>
  )
}


export default EditForm;