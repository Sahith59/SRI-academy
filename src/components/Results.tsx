import React, { useState } from 'react';
import './Results.css';

interface Student {
  id: number;
  name: string;
  rank: string;
  institute?: string;
  image: string;
  year: number;
}

const Results: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(2024);
  
  const students2024: Student[] = [
    { id: 1, name: 'Afrah Muskaan', rank: 'MBBS - KIMS, Narketpally', image: '/images/results/2024/Afrah.jpg', year: 2024 },
    { id: 2, name: 'MD. Abdhur Rehaman', rank: 'MBBS - GMC, Mulugu', image: '/images/results/2024/Rehman.jpg', year: 2024 },
    { id: 3, name: 'Nishath Fatima', rank: 'MBBS - GMC, Badradri', image: '/images/results/2024/Nishath.jpg', year: 2024 },
    { id: 4, name: 'Faiza Afsheen', rank: 'MBBS - RVMIMS, Siddipet', image: '/images/results/2024/Faiza.jpg', year: 2024 },
    { id: 5, name: 'Sirassu Soujanya', rank: 'MBBS - GMC, Nagar Kurnool', image: '/images/results/2024/SOUJANYa.jpg', year: 2024 },
    { id: 6, name: 'Manaswini', rank: 'MBBS - GMC, Jagityal', image: '/images/results/2024/Manaswini.jpg', year: 2024 },
    { id: 7, name: 'Mythili', rank: 'MBBS - GMC, Medak', image: '/images/results/2024/Mythili.jpg', year: 2024 },
    { id: 8, name: 'Varshitha', rank: 'MBBS - Mamatha Medical College Khammam', image: '/images/results/2024/varshitha.jpg', year: 2024 },
    { id: 9, name: 'Haneefa Janibee', rank: 'MBBS - Ayaan Institute of Medical Sciences, Hyderabad', image: '/images/results/2024/Haneefa.jpg', year: 2024 },
    { id: 10, name: 'J. Shivani', rank: 'BDS - KIMS, Narketpally', image: '/images/results/2024/shivani.jpg', year: 2024 },
    { id: 11, name: 'G. Akshara', rank: 'BDS - KIMS - Narketpally', image: '/images/results/2024/Akshara.jpg', year: 2024 },
    { id: 12, name: 'N. Srimani Archana', rank: 'BDS Mamatha Medical College Khammam', image: '/images/results/2024/Archana.jpg', year: 2024 },
    { id: 13, name: 'R. Nithyasri', rank: 'HOMEOPATHY - JIMS, Hyderabad', image: '/images/results/2024/Nithyasri.jpg', year: 2024 },
    { id: 14, name: 'Sania', rank: 'HOMEOPATHY - JIMS, Hyderabad', image: '/images/results/2024/sania.jpg', year: 2024 },
    { id: 15, name: 'Saniya Imorze', rank: 'Physiotherapy - Deccan College of Physiotherapy Kanchanbagh, Hyderabad', image: '/images/results/2024/Saniya.jpg', year: 2024 },
    { id: 16, name: 'A. Poojitha', rank: 'AGRICULTURE - Prof - Jayashankar Agriculture University Rajendranagar, Warangal', image: '/images/results/2024/Poojitha.jpg', year: 2024 },
    { id: 17, name: 'S. Sowmya', rank: 'AGRICULTURE - Warangal', image: '/images/results/2024/sowmya.jpg', year: 2024 },
    { id: 18, name: 'Zubia Urooj', rank: 'AGRICULTURE - Prof - Jayashankar Agriculture University Rajendranagar, Warangal', image: '/images/results/2024/zubia.jpg', year: 2024 }
  ];

  const students2025: Student[] = [
    { id: 1, name: 'Umme Ruman Maariya', rank: 'EAPCET Rank: 526', image: '/images/umme-ruman-maariya.jpg', year: 2025 },
    { id: 2, name: 'Arshiya Tabassum', rank: 'EAPCET Rank: 822', image: '/images/arshiya-tabassum.jpg', year: 2025 },
    { id: 3, name: 'Afiya Sadaf', rank: 'EAPCET Rank: 1133', image: '/images/afiya-sadaf.jpg', year: 2025 },
    { id: 4, name: 'Fahad', rank: 'EAPCET Rank: 1284', image: '/images/Fahad.jpg', year: 2025 },
    { id: 5, name: 'Faria Mehwish', rank: 'EAPCET Rank: 1603', image: '/images/Faria.jpg', year: 2025 },
    { id: 6, name: 'Maryam', rank: 'EAPCET Rank: 2025', image: '/images/Maryam.jpg', year: 2025 },
    { id: 7, name: 'B. Deekshitha', rank: 'EAPCET Rank: 2301', image: '/images/Deekshitha.jpg', year: 2025 },
    { id: 8, name: 'E. Sharvani', rank: 'EAPCET Rank: 2538', image: '/images/Sharvani.jpg', year: 2025 },
    { id: 9, name: 'V. Indhu', rank: 'EAPCET Rank: 2851', image: '/images/Indu.jpg', year: 2025 },
    { id: 10, name: 'Hiba Anwar', rank: 'EAPCET Rank: 3068', image: '', year: 2025 },
    { id: 11, name: 'K. Varshitha', rank: 'EAPCET Rank: 3106', image: '', year: 2025 },
    { id: 12, name: 'SK. Zuha Anjum', rank: 'EAPCET Rank: 3315', image: '', year: 2025 },
    { id: 13, name: 'Afiya Jabeen', rank: 'EAPCET Rank: 3900', image: '', year: 2025 },
    { id: 14, name: 'Mariya Tarannum', rank: 'EAPCET Rank: 4001', image: '', year: 2025 },
    { id: 15, name: 'Md. Hoornaaz', rank: 'EAPCET Rank: 4312', image: '', year: 2025 },
    { id: 16, name: 'B. Akshara', rank: 'EAPCET Rank: 4500', image: '', year: 2025 },
    { id: 17, name: 'Laxmi Priya', rank: 'EAPCET Rank: 5367', image: '', year: 2025 },
    { id: 18, name: 'Daniya Suzain', rank: 'EAPCET Rank: 5537', image: '', year: 2025 },
    { id: 19, name: 'Hema Durga', rank: 'EAPCET Rank: 6000', image: '', year: 2025 }
  ];

  return (
    <section id="results" className="results">
      <div className="container">
        <div className="section-title">
          <h2>Our Results</h2>
          <div className="underline"></div>
        </div>
        
        <div className="results-tabs">
          <button 
            className={`tab ${activeTab === 2023 ? 'active' : ''}`}
            onClick={() => setActiveTab(2023)}
          >
            NEET & EAPCET 2023
          </button>
          <button 
            className={`tab ${activeTab === 2024 ? 'active' : ''}`}
            onClick={() => setActiveTab(2024)}
          >
            NEET & EAPCET 2024
          </button>
          <button 
            className={`tab ${activeTab === 2025 ? 'active' : ''}`}
            onClick={() => setActiveTab(2025)}
          >
            NEET & EAPCET 2025
          </button>
        </div>
        
        <div className="results-intro">
          {activeTab === 2023 ? (
            <p>Our outstanding achievers from the batch of 2023 who secured admissions in prestigious medical colleges under the expert guidance of <span className="highlight faculty-name">Sridhar Reddy Thummala</span>.</p>
          ) : activeTab === 2024 ? (
            <p>Under the dynamic guidance of <span className="highlight faculty-name">Sridhar Reddy Thummala</span> (Chemistry), the following students achieved remarkable ranks in the NEET and EAPCET 2024 examinations, securing admissions in prestigious medical and allied health science colleges.</p>
          ) : (
            <p>Congratulations to our EAPCET 2025 rankers who have achieved exceptional results through their dedication and the expert guidance provided by our faculty team led by <span className="highlight faculty-name">Sridhar Reddy Thummala</span>.</p>
          )}
        </div>
        
        {activeTab === 2023 ? (
          <div className="results-poster">
            <img 
              src="/images/results/2023/results.jpg" 
              alt="SRI NEET Academy Results 2023" 
              className="poster-image"
            />
          </div>
        ) : (
          <div className="results-grid">
            {(activeTab === 2024 ? students2024 : students2025).map(student => (
              <div className="student-card" key={student.id}>
                <div className="student-image">
                  <img src={student.image} alt={student.name} />
                </div>
                <div className="student-info">
                  <h3>{student.name}</h3>
                  <div className={`rank-badge ${activeTab === 2025 ? 'rank-2025' : ''}`}>
                    <span>{student.rank}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Results;