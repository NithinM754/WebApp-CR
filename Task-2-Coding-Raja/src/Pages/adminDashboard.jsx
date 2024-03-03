import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'
import '../Assets/css/Dashboard.css'
import Sidebar from '../Components/Sidebar'
import { Link, useNavigate } from 'react-router-dom'; 

function AdminDashBoard() {
    const user=useSelector(selectUser)
    const nav=useNavigate();
    const founders = [
        {
          role: 'SUBJECTS',
          bio: 'Assign subjects to specific classes or courses. Track subject enrollment status.',
          image: "https://res.cloudinary.com/dfrc94azr/image/upload/v1695491921/wired-lineal-112-book-morph_veq6fb.gif",
          path : "/subjects",
          
        },
        {
            role: 'MARKS',
            bio: 'Capability to record marks subject-wise. Customizable grade scales and criteria.',
            image: 'https://res.cloudinary.com/dfrc94azr/image/upload/v1695492027/wired-lineal-56-document_ebulpn.gif', 
            path : "/marks",
        },
    ];
    const founderss = [
        {
          role: 'ADD STUDENTS',
          bio: 'Define fee structures for different classes, courses, or programs. Include details such as student name, fee amount, and payment date.',
          image: "https://res.cloudinary.com/dmtzvxa53/image/upload/v1697431347/wired-lineal-268-avatar-man_e94yfr.gif",
          path : "/addStudent",
        },
        {
            role: 'ATTENDANCE',
            bio: 'Record daily attendance for students. View attendance trends and statistics. Synchronize attendance data with class schedules.',
            image: 'https://res.cloudinary.com/dfrc94azr/image/upload/v1695492666/wired-lineal-471-ebook-reader_yhxcj8.gif', 
            path : "/attendance",
        },
    ];
    const handleClick =(path)=>{
        if(path==="/subjects"){
            nav('/subjects')
        }
        if(path==="/marks"){
            nav('/marks')
        }
        if(path==="/addStudent"){
            nav('/addStudent')
        }
        if(path==="/attendance"){
            nav('/attendance')
        }
    }
    return (
        <>
    
        <Sidebar/>
        <div className='over'>
            <div className='heading'>
                <h1>Welcome Admin<span className=' username-color'>{user?.username} </span></h1>
            </div>
            <div className="container">
                <h2><b>DASHBOARD</b></h2>
            </div>
            <div>
                <button onClick={()=>nav('/')}>HOME</button>
            </div>
        </div>
        <div className='overall'>
        <section className="about-section">
                <div className="roww">
                {founders.map((founder, index) => (
                    <div key={index} className="col-lg-4">
                    <div className="founder-card">
                        <img src={founder.image} alt={founder.name} className="founder-image" />
                        <h3>{founder.name}</h3>
                        <p className="founder-role">{founder.role}</p>
                        <p className="founder-bio">{founder.bio}</p>
                        <button className="founder-button1" onClick={()=>handleClick(founder.path)}>{founder.role}</button>
                    </div>
                </div>
                ))}
        <div>
        </div>
        </div>
        </section>
        <section className="about-section1">
            <div className="container1">
                <div className="roww1">
          
                {founderss.map((founder, index) => (
                    <div key={index} className="col-lg-41">
                    <div className="founder-card">
                        <img src={founder.image} alt={founder.name} className="founder-image1" />
                        <h3>{founder.name}</h3>
                        <p className="founder-role1">{founder.role}</p>
                        <p className="founder-bio1">{founder.bio}</p>
                        {/* <button className="founder-button2">{founder.role}</button> */}
                        <button className="founder-button1" onClick={()=>handleClick(founder.path)}>{founder.role}</button>
                    </div>
                    <button onClick={()=>nav("/student")}>View Student</button>
                </div>
                ))}
            </div>
        <div>
        </div>
        </div>
        </section>
        </div>
        </>
    )
}

export default AdminDashBoard;

