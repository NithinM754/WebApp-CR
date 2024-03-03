import React from "react";
import "../Assets/css/ViewMarkDetails.css";


const ViewMarkDetails = ({ student, setShow }) => {
  return (
    <div className="screen123">
      <div className="bgog">
        {student?.studentName}
        {student?.subjects?.map((subject, i) => {
          return (
            <div className="" key={i}>
              <p>{subject?.subjectName}</p>
              <p>{subject?.mark}</p>
            </div>
          );
        })}
        <button onClick={() => setShow(false)}>Close</button>
      </div>
    </div>
  );
};

export default ViewMarkDetails;
