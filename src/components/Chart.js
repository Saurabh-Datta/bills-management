import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend} from 'recharts';
import { useSelector } from 'react-redux';
import { selectBills } from '../features/bills/billsReducer';
const findTotal = (bills) => {
    const total = {};
    let data = [];
    bills.map(bill => {
        total[bill.date] = total[bill.date]?total[bill.date]+parseInt(bill.amount):parseInt(bill.amount);
    });
    let sortedTotal = {}
    Object.keys(total).sort().forEach(a=>sortedTotal[a]=total[a]);
    for (let [key, value] of Object.entries(sortedTotal)) {
        data = [...data,{"date":key,"amount":value}];
    };
    return data;
};

const Chart = () => {
    const bills = useSelector(selectBills);
    const data = findTotal(bills);
  return (
    <div>
        <LineChart width={730} height={250} data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="amount" stroke="#8884d8" unit={" rupees"}/>
        </LineChart>
    </div>
  )
}

export default Chart