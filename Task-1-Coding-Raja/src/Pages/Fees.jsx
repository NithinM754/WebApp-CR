import MotionHoc from "./MotionHoc";
import React, { useState, useEffect } from 'react';
import '../Assets/css/Fees.css'


const FeesComponent = () => {
  const [feesRecords, setFeesRecords] = useState([
    { id: 1, studentName: 'Mohan Giresh', feesAmount: 1000 },
    { id: 2, studentName: 'Nithin', feesAmount: 1200 },
  ]);

  const [newRecord, setNewRecord] = useState({ studentName: '', feesAmount: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewRecord((prevRecord) => ({ ...prevRecord, [name]: value }));
  };

  const addRecord = () => {
    if (newRecord.studentName && newRecord.feesAmount) {
      const newRecords = [
        ...feesRecords,
        { id: feesRecords.length + 1, ...newRecord },
      ];
      setFeesRecords(newRecords);
      setNewRecord({ studentName: '', feesAmount: '' });
    }
  };

  const calculateTotalFees = () => {
    const totalFees = feesRecords.reduce((total, record) => {
      return total + parseFloat(record.feesAmount);
    }, 0);
    return totalFees.toFixed(2);
  };

  return (
    <div className="fees-container">
      <h1>Fees Management</h1>
      <div className="add-record">
        <input
          type="text"
          name="studentName"
          value={newRecord.studentName}
          placeholder="Student Name"
          onChange={handleChange}
        />
        <input
          type="number"
          name="feesAmount"
          value={newRecord.feesAmount}
          placeholder="Fees Amount"
          onChange={handleChange}
        />
        <button onClick={addRecord}>Add Record</button>
      </div>

      <table className="fees-table">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Fees Amount</th>
          </tr>
        </thead>
        <tbody>
          {feesRecords.map((record) => (
            <tr key={record.id}>
              <td>{record.studentName}</td>
              <td>₹{parseFloat(record.feesAmount).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total Fees:</td>
            <td>₹{calculateTotalFees()}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
const Fees = MotionHoc(FeesComponent);

export default Fees;
