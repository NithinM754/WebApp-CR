import React from 'react';
import '../Assets/css/About.css';

function About() {
  const founders = [
    {
      name: 'Mohan Giresh',
      role: ' CEO',
      bio: 'Mohan Giresh is the visionary founder and CEO of SIMS. With a strong background in technology and a passion for education, he founded SIMS to simplify student information management for educational institutions.',
      image: "https://res.cloudinary.com/dnngdn8ev/image/upload/v1695363703/WhatsApp_Image_2023-09-04_at_5.52.22_PM_kmusxm.jpg",
    },
    {
      name: 'Nithin M',
      role: 'Co-Founder & CTO',
      bio: 'Nithin is a visionary technologist who brings extensive expertise in software development. He is dedicated to pushing the boundaries of technology to create user-friendly and innovative products.',
      image: 'https://res.cloudinary.com/dnngdn8ev/image/upload/v1695373470/WhatsApp_Image_2023-09-22_at_2.15.17_PM_xlyj9l.jpg', 
    },
    {
      name: 'Manas VM',
      role: 'Founder',
      bio: 'Manas is the visionary founder of our organization. With a passion for innovation and a keen entrepreneurial spirit, he established our company to address pressing challenges in various industries.',
      image: 'https://res.cloudinary.com/dnngdn8ev/image/upload/v1695363656/WhatsApp_Image_2023-09-22_at_11.48.50_AM_iilwcp.jpg', 
    },
  ];

  return (
    <section className="about-sectiona">
      <div className="containera">
        <h2><b><i>MEET THE CREATORS</i></b></h2>
        <div className="rowwa">
          
          {founders.map((founder, index) => (
            <div key={index} className="col-lg-4a">
              <div className="founder-carda">
                <img src={founder.image} alt={founder.name} className="founder-imagea" />
                <h3>{founder.name}</h3>
                <p className="founder-rolea">{founder.role}</p>
                <p className="founder-bioa">{founder.bio}</p>
              </div>
            </div>
          ))}
        </div>
        <div>

 
    
      <main>
        <section className="about-sectionna">
          <h2>ABOUT US</h2>
          <p>
          At Student Information Management System, we are driven by an unyielding passion for innovation, excellence, and the positive transformation of educational processes. Established in 2023, our company has rapidly ascended as a prominent authority in the field of Student Information Management Systems (SIMS), offering cutting-edge solutions and services tailored to the dynamic needs of educational institutions, administrators, educators, students, and parents.
Our mission is to elevate the educational experience, streamline administrative tasks, and empower all stakeholders through advanced SIMS technology. We believe in harnessing the power of data to facilitate efficient management, foster academic growth, and promote collaborative learning environments.
          </p>
        </section>
        <section className="mission-visiona">
          <div className='mission-vissiona'>
          <h2>Our MISSION</h2>
          <p>
          Our mission at Student Information Management System is straightforward yet impactful: to revolutionize educational data management. Whether it's enhancing administrative efficiency, empowering educators, or providing parents and students with transparent insights into academic progress, we are dedicated to delivering tangible results that foster success and empower our clients.
          </p>
          </div>
          <div className='mission-vissiona'>

          <h2>OUR VISION</h2>
          <p>
          We envision a future where education thrives through seamless digital solutions. This vision serves as our guiding star. We see a world where students, teachers, and administrators are seamlessly connected, empowered by data-driven insights, and where education becomes more accessible, personalized, and transformative than ever before.
          </p>
          </div>
        </section>
        <section className="core-valuesa">
          <h2>CORE VALUES</h2>
          <ul>
            <li>
              <strong><i>Innovation:</i></strong> Innovation is at the heart of everything we do. We foster a culture of creativity, continuous improvement, and forward-thinking to stay at the forefront of our field.
            </li>
            <li>
              <strong><i>Excellence:</i></strong> We hold ourselves to the highest standards of excellence. From product development to customer service, we aim for nothing less than perfection.
            </li>
            
            <li>
              <strong><i>Integrity:</i></strong> We operate with unwavering integrity, transparency, and honesty in all our dealings, earning the trust and respect of our clients and partners.
            </li>
            <li>
              <strong><i>Collaboration:</i></strong> We believe that great achievements are the result of effective collaboration. We work closely with our clients, employees, and partners to achieve shared goals.
            </li>
          </ul>
        </section>
        
      </main>
      
    </div>


        </div>
            
    </section>
  );
}

export default About;