// import MotionHoc from "./MotionHoc";
// import React, { useState, useEffect } from 'react';
// import '../Assets/css/Attendance.css'

// const AttendanceComponent = () => {
//   const [students, setStudents] = useState([
//     { id: 1, name: 'Mohan Giresh', present: false },
//     { id: 2, name: 'Nithin', present: false },
//     { id: 3, name: 'Manas', present: false },
    
//   ]);

//   const toggleAttendance = (id) => {
//     const updatedStudents = students.map((student) =>
//       student.id === id ? { ...student, present: !student.present } : student
//     );
//     setStudents(updatedStudents);
//   };

//   return (
//     <div className="attendance-container">
//       <h1>Attendance Management</h1>
//       <table className="attendance-table">
//         <thead>
//           <tr>
//             <th>Student ID</th>
//             <th>Student Name</th>
//             <th>Attendance</th>
//           </tr>
//         </thead>
//         <tbody>
//           {students.map((student) => (
//             <tr key={student.id}>
//               <td>{student.id}</td>
//               <td>{student.name}</td>
//               <td>
//               <div><input type="checkbox" id="ni"/>
// <label for="ni" class="ni"></label></div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// const Attendance = MotionHoc(AttendanceComponent);

// export default Attendance;













// // // import MotionHoc from "./MotionHoc";
// // import React, { useState, useEffect } from 'react';
// // import '../Assets/css/Attendance.css'
// // import {addAttendance, getStudents} from '../service/api'
// // const Attendance = () => {
// //   const [students, setStudents] = useState([]);
// //   const getStudent = async () =>{
// //     await getStudents().then((response)=>{
// //       setStudents(response.data);
// //       console.log(response);
// //     }).catch((error)=>{
// //       console.log(error);
// //     })
// //   }
// //   useEffect(() => {
// //     getStudent()
// //   }, [])

// //   const HandleAttendance = async (e,sid) =>{
// //     console.log(e);
// //     console.log(sid);
// //     await addAttendance({sid,isPresent:e.target.checked}).then((response)=>{
// //       console.log(response);
// //     }).catch((error)=>{
// //       console.log(error);
// //     })
// //   }
  
// //   const toggleAttendance = (id) => {
// //     const updatedStudents = students.map((student) =>
// //       student.id === id ? { ...student, present: !student.present } : student
// //     );
// //     setStudents(updatedStudents);
// //   };

// //   return (
// //     <div className="attendance-container">
// //       <h1>Attendance Management</h1>
// //       <table className="attendance-table">
// //         <thead>
// //           <tr>
// //             <th>Student ID</th>
// //             <th>Student Name</th>
// //             <th>Attendance</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {students.map((student) => (
// //             <tr key={student?.sid}>
// //               <td>{student.sid}</td>
// //               <td>{student?.studentName}</td>
// //               <td>
// //                 <input
// //                   type="checkbox"
// //                   onChange={(e)=>{HandleAttendance(e,student.sid)}}
// //                   // onClick={HandleAttendance}
// //                 />
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // // const Attendance = MotionHoc(AttendanceComponent);

// // export default Attendance;



// import MotionHoc from "./MotionHoc";
import React, { useState, useEffect } from 'react';
import '../Assets/css/Attendance.css'
import {addAttendance, getStudents} from '../service/api'
const Attendance = () => {
  const [students, setStudents] = useState([]);
  const getStudent = async () =>{
    await getStudents().then((response)=>{
      setStudents(response.data);
      console.log(response);
    }).catch((error)=>{
      console.log(error);
    })
  }
  useEffect(() => {
    getStudent()
  }, [])

  const HandleAttendance = async (e,sid) =>{
    console.log(e);
    console.log(sid);
    await addAttendance({sid,isPresent:e.target.checked}).then((response)=>{
      console.log(response);
    }).catch((error)=>{
      console.log(error);
    })
  }
  
  const toggleAttendance = (id) => {
    const updatedStudents = students.map((student) =>
      student.id === id ? { ...student, present: !student.present } : student
    );
    setStudents(updatedStudents);
  };

  return (
    <div className="attendance-container">
      <h1>Attendance Management</h1>
      <table className="attendance-table">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Attendance</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student?.sid}>
              <td>{student.sid}</td>
              <td>{student?.studentName}</td>
              <td>
                <input
                  type="checkbox"
                  onChange={(e)=>{HandleAttendance(e,student.sid)}}
                  // onClick={HandleAttendance}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// const Attendance = MotionHoc(AttendanceComponent);

export default Attendance;