import React from 'react';
import './Gallery.css';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const Gallery: React.FC = () => {
  const images: GalleryImage[] = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/256520/pexels-photo-256520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Academy Building',
      category: 'Campus'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/256431/pexels-photo-256431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Chemistry Lab',
      category: 'Facilities'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/289740/pexels-photo-289740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Library',
      category: 'Facilities'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/5212696/pexels-photo-5212696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Classroom Session',
      category: 'Academics'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Group Study',
      category: 'Academics'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/8471899/pexels-photo-8471899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'AC Classroom',
      category: 'Facilities'
    }
  ];

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-title">
          <h2>Campus Gallery</h2>
          <div className="underline"></div>
        </div>
        
        <div className="gallery-description">
          <p>
            Take a visual tour of our campus and facilities. Our state-of-the-art infrastructure is designed to 
            provide the best learning environment for our students.
          </p>
        </div>
        
        <div className="gallery-grid">
          {images.map(image => (
            <div className="gallery-item" key={image.id} data-category={image.category}>
              <img src={image.src} alt={image.alt} />
              <div className="overlay">
                <div className="overlay-content">
                  <p>{image.alt}</p>
                  <span className="category">{image.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;