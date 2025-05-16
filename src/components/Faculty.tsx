import React from 'react';
import './Faculty.css';

interface FacultyMember {
  id: number;
  name: string;
  subject: string;
  image: string;
  description: string;
}

const Faculty: React.FC = () => {
  const facultyMembers: FacultyMember[] = [
    {
      id: 1,
      name: 'Sridhar Reddy Thummala',
      subject: 'Chemistry',
      image: '/images/faculty/sridhar-reddy.jpg',
      description: 'Founder of SRI NEET Academy and former Founder at Jasritha Academy. With over 25 years of experience, his dynamic teaching methodology has guided hundreds of students to success in medical entrance examinations.'
    },
    {
      id: 2,
      name: 'Dr. J.V. Rao',
      subject: 'Physics',
      image: '/images/faculty/jv-rao.jpg',
      description: 'A distinguished Physics educator with a doctorate in the field. His simplified approach to complex concepts has made Physics accessible and interesting for countless aspiring medical students.'
    },
    {
      id: 3,
      name: 'Suneetha Thummala',
      subject: 'Botany',
      image: '/images/faculty/suneetha-thummala.jpg',
      description: 'An expert in Botany with a passion for teaching. Her comprehensive knowledge and engaging teaching style help students master the biological concepts essential for medical entrance exams.'
    },
    {
      id: 4,
      name: 'Pavan Kumar',
      subject: 'Zoology',
      image: '/images/faculty/pavan-kumar.jpg',
      description: 'A specialist in Zoology with extensive experience in preparing students for NEET examinations. His detailed approach and clarity of concepts have been instrumental in students\' success.'
    }
  ];

  return (
    <section id="faculty" className="faculty">
      <div className="container">
        <div className="section-title">
          <h2>Our Expert Faculty</h2>
          <div className="underline"></div>
        </div>
        
        <div className="faculty-description">
          <p>
            Our academy boasts a team of experienced and dedicated educators who are experts in their respective fields.
            With their guidance, students receive comprehensive coaching that prepares them for success in medical entrance examinations.
          </p>
        </div>
        
        <div className="faculty-grid">
          {facultyMembers.map(faculty => (
            <div className="faculty-card" key={faculty.id}>
              <div className="faculty-image">
                <img src={faculty.image} alt={faculty.name} />
                <div className="subject-badge">{faculty.subject}</div>
              </div>
              <div className="faculty-info">
                <h3>{faculty.name}</h3>
                <p>{faculty.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;