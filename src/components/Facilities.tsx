import React from 'react';
import { 
  BookOpen, Coffee, Home, AirVent, ClipboardCheck, Utensils, School, Sunrise
} from 'lucide-react';
import './Facilities.css';

interface Facility {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Facilities: React.FC = () => {
  const facilities: Facility[] = [
    {
      id: 1,
      title: 'AC Classrooms',
      description: 'Comfortable air-conditioned classrooms for an optimal learning environment regardless of outside temperatures.',
      icon: <AirVent size={32} />
    },
    {
      id: 2,
      title: 'Hostel Facility',
      description: 'Safe and comfortable accommodation for outstation students with all necessary amenities and supervision.',
      icon: <Home size={32} />
    },
    {
      id: 3,
      title: 'Weekly Tests',
      description: 'Regular assessment of student progress through comprehensive weekly tests followed by detailed analysis.',
      icon: <ClipboardCheck size={32} />
    },
    {
      id: 4,
      title: 'Canteen',
      description: 'Nutritious and balanced meals served in our hygienic canteen to ensure students\' health and well-being.',
      icon: <Utensils size={32} />
    },
    {
      id: 5,
      title: 'Study Hours',
      description: 'Dedicated and supervised study hours to ensure focused preparation and doubt resolution.',
      icon: <School size={32} />
    },
    {
      id: 6,
      title: 'Refreshment Area',
      description: 'Designated areas for students to relax and rejuvenate during breaks between intensive study sessions.',
      icon: <Coffee size={32} />
    },
    {
      id: 7,
      title: 'Morning Classes',
      description: 'Early morning classes for optimum concentration and effective learning when the mind is fresh.',
      icon: <Sunrise size={32} />
    }
  ];

  return (
    <section id="facilities" className="facilities">
      <div className="container">
        <div className="section-title">
          <h2>Our Facilities</h2>
          <div className="underline"></div>
        </div>
        
        <div className="facilities-description">
          <p>
            At SRI NEET Academy, we provide comprehensive facilities to ensure that our students can focus entirely on their 
            studies without any concerns. Our state-of-the-art infrastructure and student-centric amenities create 
            an ideal environment for academic excellence.
          </p>
        </div>
        
        <div className="facilities-grid">
          {facilities.map(facility => (
            <div className="facility-card" key={facility.id}>
              <div className="facility-icon">
                {facility.icon}
              </div>
              <div className="facility-content">
                <h3>{facility.title}</h3>
                <p>{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;