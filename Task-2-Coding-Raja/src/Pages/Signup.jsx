import { useState } from 'react';
import '../Assets/css/Signup.css';
import { useNavigate } from 'react-router-dom';
import toast, {Toaster} from 'react-hot-toast'
import { userRegister } from '../service/api';

function Signup() {
    const navigate = useNavigate();
    const [error,setError]=useState({})
    const [signup,setSignup] = useState(
      {
        name: "",
        email: "",
        password : "",
        role:'USER',
      }
    )

    const handleChange = (e) => {
      setSignup({...signup,[e.target.id]:e.target.value})
      console.log(signup);
    };

    const handleClick = (e) => {
      e.preventDefault();
      setError({});
      let validationErrors={}
      if(!signup.name.trim())
      {
        validationErrors.name="Name is required";
      }
      if(!signup.mail.trim())
      {
        validationErrors.mail="Email is required";
      }
      else if(!/\S+@\S+\.\S+/.test(signup.mail))
      {
        validationErrors.mail="Email is invalid";
      }
      if(!signup.password.trim())
      {
        validationErrors.password="Password is required";
      }

     setError(validationErrors);
     if(Object.keys(validationErrors).length===0){
        navigate('/login')
        toast.success('Login Successful');
     }
    }
    const handleSubmit = async (e) => {
      e.preventDefault();
      const res = await userRegister(signup);
      if (res.data === "User registered successfully" && res.status==200) {
          toast.success(` Signup Successfull !`, {
              position: "bottom-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
          });
          setTimeout(() => {
              navigate('/login');
          }, 1500);

      } 
  
       else if (res.data==="Sommething went wrong!" && res.status==="400") {
          toast.error(`Sommething went wrong!`, {
              position: "bottom-right",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
          });
      }
  };

    
    
    return (
      <div className="SignupBorder">
        <div className='SignupBox'>
          <div className='SignupBoxTop'>
            <div className='SignupBoxTitle'>
           <h2>New Profile</h2>
              <p>For a New Beginning</p>
            </div>
            <form className="SignupForm" onSubmit={handleClick}>
              <input
                onChange={handleChange}
                type="text1"
                name="yourusername"
                id="name"
                placeholder="Enter Username"
              />
                {error.name && <span className='ErrorMsg'>{error.name}</span>}
              <input
                onChange={handleChange}
                type="text1"
                name="email"
                id="email"
                placeholder="Enter E-mail"
              />
              {error.mail && <span className='ErrorMsg'>{error.mail}</span>}
              <input
                onChange={handleChange}
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
              />
                {error.password && <span className='ErrorMsg'>{error.password}</span>}
              <button type="submit"  onClick={handleSubmit} >Signup</button>
            </form>
          </div>
          <div className='SignupBoxBottom'>
          <div className='SignupBoxBottomText1'>
          <p>Already have an account?</p>
          </div>
          <div className='SignupBoxBottomText2'>
          <p><span onClick={()=>navigate("/login")}>Login</span></p>
          </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Signup;