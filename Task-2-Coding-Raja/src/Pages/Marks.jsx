// import MotionHoc from "./MotionHoc";
// import React, { useState } from 'react';
// import '../Assets/css/Marks.css';

// const MarksComponent = () => {
//   const [students, setStudents] = useState([
//     { id: 1, name: 'Mohan Giresh', marks: { math: 90, science: 85, history: 78 } },
//     { id: 2, name: 'Nithin', marks: { math: 88, science: 92, history: 80 } },
//     { id: 3, name: 'Manas', marks: { math: 75, science: 79, history: 82 } },
//     { id: 4, name: 'Keerthi', marks: { math: 90, science: 85, history: 78 } },
//     { id: 5, name: 'Hajith', marks: { math: 88, science: 92, history: 80 } },
//     { id: 6, name: 'Haaris', marks: { math: 75, science: 79, history: 82 } },
//     { id: 7, name: 'Magesh', marks: { math: 90, science: 85, history: 78 } },
//     { id: 8, name: 'Pazhani', marks: { math: 88, science: 92, history: 80 } },
//     { id: 9, name: 'Pramoth', marks: { math: 75, science: 79, history: 82 } },
//     { id: 10, name: 'Vishal', marks: { math: 90, science: 85, history: 78 } },
//     { id: 11, name: 'Kashf', marks: { math: 88, science: 92, history: 80 } },
//     { id: 12, name: 'Kishore', marks: { math: 75, science: 79, history: 82 } },
//     { id: 13, name: 'Prabha', marks: { math: 90, science: 85, history: 78 } },
//     { id: 14, name: 'Neeraj', marks: { math: 88, science: 92, history: 80 } },
//     { id: 15, name: 'Kavin', marks: { math: 75, science: 79, history: 82 } },
//   ]);

//   const [newMark, setNewMark] = useState({ subject: '', mark: '' });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewMark((prevMark) => ({ ...prevMark, [name]: value }));
//   };

//   const addMark = (studentId) => {
//     const updatedStudents = students.map((student) => {
//       if (student.id === studentId) {
//         const updatedMarks = { ...student.marks, [newMark.subject]: parseFloat(newMark.mark) };
//         return { ...student, marks: updatedMarks };
//       }
//       return student;
//     });
//     setStudents(updatedStudents);
//     setNewMark({ subject: '', mark: '' });
//   };

//   const calculateAverage = (marks) => {
//     const totalMarks = Object.values(marks).reduce((total, mark) => total + mark, 0);
//     const numberOfSubjects = Object.keys(marks).length;
//     return totalMarks / numberOfSubjects;
//   };

//   return (
//     <div className="marks-container">
//       <h1>Marks Management</h1>
//       <table className="marks-table">
//         <thead>
//           <tr>
//             <th>Student ID</th>
//             <th>Student Name</th>
//             <th>Math</th>
//             <th>Science</th>
//             <th>History</th>
//             <th>Average</th>
//             <th>Add Marks</th>
//           </tr>
//         </thead>
//         <tbody>
//           {students.map((student) => (
//             <tr key={student.id}>
//               <td>{student.id}</td>
//               <td>{student.name}</td>
//               <td>{student.marks.math}</td>
//               <td>{student.marks.science}</td>
//               <td>{student.marks.history}</td>
//               <td>{calculateAverage(student.marks).toFixed(2)}</td>
//               <td>
//                 <input
//                   type="text"
//                   name="subject"
//                   value={newMark.subject}
//                   placeholder="Subject"
//                   onChange={handleChange}
//                 />
//                 <input
//                   type="number"
//                   name="mark"
//                   value={newMark.mark}
//                   placeholder="Mark"
//                   onChange={handleChange}
//                 />
//                 <button onClick={() => addMark(student.id)}>Add</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// const Marks = MotionHoc(MarksComponent);

// export default Marks;



import React, { useEffect, useState } from "react";
import "../Assets/css/Marks.css";
import { getStudents } from "../service/api";
import ViewMarkDetails from "../Components/ViewMarkDetails";

const Marks = () => {
  // const [students, setStudents] = useState([
  //   {
  //     id: 1,
  //     name: "Mohan Giresh",
  //     marks: { math: 90, science: 85, history: 78 },
  //   },
  //   { id: 2, name: "Nithin", marks: { math: 88, science: 92, history: 80 } },
  //   { id: 3, name: "Manas", marks: { math: 75, science: 79, history: 82 } },
  //   { id: 4, name: "Keerthi", marks: { math: 90, science: 85, history: 78 } },
  //   { id: 5, name: "Hajith", marks: { math: 88, science: 92, history: 80 } },
  //   { id: 6, name: "Haaris", marks: { math: 75, science: 79, history: 82 } },
  //   { id: 7, name: "Magesh", marks: { math: 90, science: 85, history: 78 } },
  //   { id: 8, name: "Pazhani", marks: { math: 88, science: 92, history: 80 } },
  //   { id: 9, name: "Pramoth", marks: { math: 75, science: 79, history: 82 } },
  //   { id: 10, name: "Vishal", marks: { math: 90, science: 85, history: 78 } },
  //   { id: 11, name: "Kashf", marks: { math: 88, science: 92, history: 80 } },
  //   { id: 12, name: "Kishore", marks: { math: 75, science: 79, history: 82 } },
  //   { id: 13, name: "Prabha", marks: { math: 90, science: 85, history: 78 } },
  //   { id: 14, name: "Neeraj", marks: { math: 88, science: 92, history: 80 } },
  //   { id: 15, name: "Kavin", marks: { math: 75, science: 79, history: 82 } },
  //   { id: 16, name: "Prasanna", marks: { math: 69, science: 69, history: 69 } },
  // ]);
  const [students,setStudents] = useState([]);
  const [student,setStudent] = useState([]);
  useEffect(() => {
    getStudentsData();
  }, [])
  const getStudentsData=async()=>{
    await getStudents().then((response)=>{
      console.log(response.data);
      setStudents(response.data);
    }).catch((e)=>{
      console.log(e);
    })
  }
  

  const [newMark, setNewMark] = useState({ subject: "", mark: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMark((prevMark) => ({ ...prevMark, [name]: value }));
  };

  const addMark = (studentId) => {
    const updatedStudents = students.map((student) => {
      if (student.id === studentId) {
        const updatedMarks = {
          ...student.marks,
          [newMark.subject]: parseFloat(newMark.mark),
        };
        return { ...student, marks: updatedMarks };
      }
      return student;
    });
    setStudents(updatedStudents);
    setNewMark({ subject: "", mark: "" });
  };

  const calculateAverage = (marks) => {
    const totalMarks = Object.values(marks).reduce(
      (total, mark) => total + mark,
      0
    );
    const numberOfSubjects = Object.keys(marks).length;
    return totalMarks / numberOfSubjects;
  };
  const [show,setShow] = useState(false);
  return (
    <div className="marks-container">
      {show && <ViewMarkDetails setShow={setShow} student={student}/>}
      <h1>Marks Management</h1>
      <table className="marks-table">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Student Roll</th>
            <th>Student Name</th>
            <th>student Class</th>
            <th>student DOB</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {students?.map((student) => (
            <tr key={student.sid}>
              <td>{student.sid}</td>
              <td>{student.studentRoll}</td> 
              <td>{student.studentName}</td> 
              <td>{student.studentDob}</td> 
              <td>{student.studentClas}</td> 
              <td onClick={()=>{setShow(true);setStudent(student)}} className="cursor-pointer">{"View Details"}</td> 
              {/* <td>
                <input
                  type="text"
                  name="subject"
                  value={newMark.subject}
                  placeholder="Subject"
                  onChange={handleChange}
                />
                <input
                  type="number"
                  name="mark"
                  value={newMark.mark}
                  placeholder="Mark"
                  onChange={handleChange}
                />
                <button onClick={() => addMark(student.id)}>Add</button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Marks;
