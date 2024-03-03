// import { useState } from 'react';
// import '../Assets/css/Signup.css';
// import { useNavigate } from 'react-router-dom';
// import toast, {Toaster} from 'react-hot-toast'
// import { userRegister } from '../service/api';

// function Signup() {
//     const navigate = useNavigate();
//     const [error,setError]=useState({})
//     const [signup,setSignup] = useState(
//       {

//         phone:0,
//         name: "",
//         email: "",
//         password : "",
//         role:'STUDENT',
//         clas:"CSE",

//       }
//     )

//     const handleChange = (e) => {
//       setSignup({...signup,[e.target.id]:e.target.value})
//     };

//     const handleClick = (e) => {
//       e.preventDefault();
//       setError({});
//       let validationErrors={}
//       if(!signup.name.trim())
//       {
//         validationErrors.name="Name is required";
//       }
//       if(!signup.mail.trim())
//       {
//         validationErrors.mail="Email is required";
//       }
//       else if(!/\S+@\S+\.\S+/.test(signup.mail))
//       {
//         validationErrors.mail="Email is invalid";
//       }
//       if(!signup.password.trim())
//       {
//         validationErrors.password="Password is required";
//       }

//      setError(validationErrors);
//      if(Object.keys(validationErrors).length===0){
//         navigate('/login')
//         toast.success('Login Successful');
//      }
//     }
//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       const res = await userRegister(signup);
//       if (res.data === "User registered successfully" && res.status==200) {
//           toast.success(` Signup Successfull !`, {
//               position: "bottom-right",
//               autoClose: 1000,
//               hideProgressBar: false,
//               closeOnClick: true,
//               pauseOnHover: true,
//               draggable: true,
//               progress: undefined,
//               theme: "light",
//           });
//           setTimeout(() => {
//               navigate('/login');
//           }, 1500);

//       } 
//       // else if (res.data === "Email Already Exists") {
//       //     toast.error(`Email Already Exists !`, {
//       //         position: "bottom-right",
//       //         autoClose: 4000,
//       //         hideProgressBar: false,
//       //         closeOnClick: true,
//       //         pauseOnHover: true,
//       //         draggable: true,
//       //         progress: undefined,
//       //         theme: "light",
//       //     });
//       // }
//        else if (res.data==="Sommething went wrong!" && res.status==="400") {
//           toast.error(`Sommething went wrong!`, {
//               position: "bottom-right",
//               autoClose: 4000,
//               hideProgressBar: false,
//               closeOnClick: true,
//               pauseOnHover: true,
//               draggable: true,
//               progress: undefined,
//               theme: "light",
//           });
//       }
//   };

    
    
//     return (
//       <div className="SignupBorder">
//         <div className='SignupBox'>
//           <div className='SignupBoxTop'>
//             <div className='SignupBoxTitle'>
//            <h2>New Profile</h2>
//               <p>For a New Beginning</p>
//             </div>
//             <form className="SignupForm" onSubmit={handleClick}>
//               <input
//                 onChange={handleChange}
//                 type="text"
//                 name="yourname"
//                 id="name"
//                 placeholder="Enter Name"
//               />
//                 {error.name && <span className='ErrorMsg'>{error.name}</span>}
//               <input
//                 onChange={handleChange}
//                 type="text"
//                 name="email"
//                 id="email"
//                 placeholder="Enter E-mail"
//               />
//               {error.mail && <span className='ErrorMsg'>{error.mail}</span>}
//               <input
//                 onChange={handleChange}
//                 type="password"
//                 name="password"
//                 id="password"
//                 placeholder="Enter Password"
//               />
//                 {error.password && <span className='ErrorMsg'>{error.password}</span>}
//               <button type="submit"  onClick={handleSubmit} >Signup</button>
//             </form>
//           </div>
//           <div className='SignupBoxBottom'>
//           <div className='SignupBoxBottomText1'>
//           <p>Already have an account?</p>
//           </div>
//           <div className='SignupBoxBottomText2'>
//           <p><span onClick={()=>navigate("/login")}>Login</span></p>
//           </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
  
//   export default Signup;















import React, { useState } from 'react';
import MotionHoc from "./MotionHoc";
import { Button, Modal, Form } from 'react-bootstrap';
import '../Assets/css/Subjects.css';

const SubjectsComponent = () => {
  const [subjects, setSubjects] = useState([
    { id: 1, name: 'maths' },
    { id: 2, name: 'science' },
    { id: 3, name: 'history' },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [subjectToEdit, setSubjectToEdit] = useState({});
  const [newSubject, setNewSubject] = useState('');

  const handleCloseAdd = () => setShowAddModal(false);
  const handleShowAdd = () => setShowAddModal(true);

  const handleCloseEdit = () => setShowEditModal(false);
  const handleShowEdit = (subject) => {
    setShowEditModal(true);
    setSubjectToEdit(subject);
  };

  const handleAddSubject = () => {
    if (newSubject) {
      const newSubjects = [...subjects, { id: subjects.length + 1, name: newSubject }];
      setSubjects(newSubjects);
      setNewSubject('');
      handleCloseAdd();
    }
  };

  const handleEditSubject = () => {
    const updatedSubjects = subjects.map((subject) =>
      subject.id === subjectToEdit.id ? { ...subject, name: newSubject } : subject
    );
    setSubjects(updatedSubjects);
    setNewSubject('');
    handleCloseEdit();
  };

  const handleDeleteSubject = (subjectId) => {
    const updatedSubjects = subjects.filter((subject) => subject.id !== subjectId);
    setSubjects(updatedSubjects);
  };

  return (
    <div className="subjects-container">
      <h1>Subjects Management</h1>
      <Button variant="success" className="firstb1" onClick={handleShowAdd}>
        Add Subject
      </Button>

      <ul className="subjects-list">
        {subjects.map((subject) => (
          <li key={subject.id}>
            {subject.name}
            <div className="actions">
              <Button variant="primary" className="firstb2" onClick={() => handleShowEdit(subject)}>
                Edit
              </Button>
              <Button variant="danger" className="firstb3" onClick={() => handleDeleteSubject(subject.id)}>
                Delete
              </Button>
            </div>
          </li>
        ))}
      </ul>

      <Modal show={showAddModal} onHide={handleCloseAdd}>
        <div className="newDiv1">
        <Modal.Header closeButton>
          <Modal.Title>Add Subject</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicSubject">
              <Form.Label>Subject Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter subject name"
                value={newSubject}
                onChange={(e) => setNewSubject(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className="firstb4" onClick={handleCloseAdd}>
            Close
          </Button>
          <Button variant="primary" className="firstb5" onClick={handleAddSubject}>
            Add
          </Button>
        </Modal.Footer>
      </div>
      </Modal>
      <Modal show={showEditModal} onHide={handleCloseEdit}>
      <div className="newDiv2">

        <Modal.Header closeButton>
          <Modal.Title>Edit Subject</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicSubject">
              <Form.Label>Subject Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter subject name"
                value={newSubject || subjectToEdit.name}
                onChange={(e) => setNewSubject(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className="firstb6" onClick={handleCloseEdit}>
            Close
          </Button>
          <Button variant="primary" className="firstb7" onClick={handleEditSubject}>
            Save Changes
          </Button>
        </Modal.Footer>
        </div>
      </Modal>
    </div>
  );
};

const Subjects = MotionHoc(SubjectsComponent);

export default Subjects;