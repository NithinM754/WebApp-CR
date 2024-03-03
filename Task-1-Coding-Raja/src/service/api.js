import axios from "axios";

let jwtToken = localStorage.getItem('Token')
const authheader = `Bearer ${jwtToken}`;
console.log(jwtToken)
const headers = {
  'Authorization': authheader,
  'Content-Type': 'application/json',
};

const URI = 'http://localhost:8181/api'

const userLogin = (signin) => axios.post(`${URI}/student/auth/userlogin`, signin)
const userRegister = (register) => axios.post(`${URI}/student/auth/usersignup`, register)
const adminLogin = (signin) => axios.post(`${URI}/auth/login`, signin)

// const addStudent = (product) => axios.post(`${URI}/product/add`, product, { headers })
// const getStudents = (att) => axios.get(URI+"/student/get");
// const addAttendance = (att) => axios.post(URI+"/student/attendance",att);

const addStudent = (student) => axios.post(URI+"/student/add", student)

const getStudents = (att) => axios.get(URI+"/student/get");

const addAttendance = (att) => axios.post(URI+"/student/attendance",att);

export {userLogin,userRegister,adminLogin,addStudent,getStudents,addAttendance}