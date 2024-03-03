import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addStudent } from '../service/api';
import FileUploader from '../Components/FileUploader';
import { ChevronLeftCircle } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import '../Assets/css/AddStudent.css'

const AddStudent = () => {
    const navigate = useNavigate()
    const [fileUrl, setFileUrl] = useState('');
    const [formdata, setFormdata] = useState({
      studentName: '',
      studentRoll: '',
      studentDob: '',
      studentClas:'',
      studentImage: ''
    })
  
    const handleChange = (e) => {
      e.preventDefault();
      setFormdata({ ...formdata, [e.target.id]: e.target.value })
    }
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const StudentData = {
          ...formdata,
          studentImage: fileUrl,
        };
        console.log(StudentData)
        const res = await addStudent(StudentData);
        console.log(res)
        if (res.status == 201) {
          toast.success(`${formdata.studentName} Added Successfully !`, {
            position: "bottom-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setTimeout(() => {
            navigate('/admin/dashboard')
          }, 1000)
        }
      }
      catch (error) {
        console.log(error);
        // toast.error(`Can't add same student Twice !`, {
        //   position: "bottom-right",
        //   autoClose: 4000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "light",
        // });
      }
    }
  
    const routeBack = () => {
      navigate(-1)
    }
    return (
      <>
        <div className='mainx'>
  
          <form className='data-content shadow bg-white' onSubmit={handleSubmit}>
            <h3 className='data-title green'>Add Student</h3>
            <input type="text" name="studentName" id="studentName" placeholder='Name' className='data-input bg-secondary black' onChange={handleChange} required />
            <input type="text" name="studentRoll" id="studentRoll" placeholder='Roll' className='data-input bg-secondary black' onChange={handleChange} required />
            <input type="text" name="studentDob" id="studentDob" placeholder='DOB' className='data-input bg-secondary black' onChange={handleChange} required />
            <input type="text" name="studentClas" id="studentClas" placeholder='Class' className='data-input bg-secondary black' onChange={handleChange} required />
            <FileUploader setImageUrl={setFileUrl} />
            <button type="submit" className='data-btn '>Add</button>
            {/* <button type="submit" className='data-btn bg-green blue'>Add</button> */}
          </form>
  
  
          <button onClick={routeBack} className='route-btn-1 bg-white'><ChevronLeftCircle color="#25db00" /></button>
        </div>
        {/* <ToastContainer
          position="bottom-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        /> */}
    {/* <button onSubmit={navigate("/student")}>View Students</button> */}
      </>
    )
  }
  export default AddStudent;