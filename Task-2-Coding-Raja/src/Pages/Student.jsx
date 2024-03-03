// import Layout from '../Components/Layout'
import '../Assets/css/student.css'

import React, { useState, useEffect } from 'react';
import {addAttendance, getStudents} from '../service/api'


const Student=() =>{
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
  return (
      
      <div class="food-area">
      <div class="container">
        <div class="title">
          <h4><i style={{fontSize:'1.2em'}} class="fa-solid fa-utensils"></i> &nbsp;Students </h4>
          <div class="foods">
            {students.map((students, sid) => {
              
                return (
                    <div key={sid} class="singlefood">
                  <div class="food-img">
                    <img
                      src={students.studentImage}
                      alt="Subject"
                      height="230px"
                      width="350px"
                      />
                    <h4>{students.studentName}</h4>
                  </div>
  
                  <ul class="food-list">
                    <li>{students.studentRoll}</li>
                    <li>{students.studentName}</li>
                  </ul>
                  <div className="but">
                  </div>
                  {/* <div className="pos">
                  <Link className='logo'>Add to Package</Link>
                </div> */}
                </div>
                
                );
            })}
          </div>
        </div>
      </div>
    </div>
  );
  
}
export default Student;