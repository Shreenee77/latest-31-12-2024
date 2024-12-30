import React from 'react';
import { useSelector } from 'react-redux';

const Media = () => {
  const videoLinks = [
    'uGI8dFVIw3E',
    'K8FktLJk1vk',
    'BBTcSRHGFZY',
    'TwHGyv4EYp0',
  ];

  const { language } = useSelector((state) => state.language); // Accessing the selected language from the state

  // Text content for different languages
  const headingText = language === 'tamil' ? ' ஊடகம் ' : 'Media';
  const heading = language === 'tamil' ? ' ஊடகம் சான்றுகள்' : 'Media Proofs';

  // Links to documents
  const documentLinks = [
    { name: 'The Hindu - Feb 18, 2019', url: 'https://www.tamilisaisangam.in/documents/governor-opens-museum-of-ancient-musical-instruments.pdf' },
    { name: 'The Hindu - Mar 15, 2019', url: 'https://www.tamilisaisangam.in/documents/a-museum-of-ancient-instruments-in-Chennai-The-Hindu.pdf' },
    { name: 'Dinathanthi English (DT NEXT) - Jul 4, 2019', url: 'https://www.tamilisaisangam.in/documents/this-chennai-museum-houses-rare-and-vintage-musical-instruments-from-across-India-DTNext.pdf' },
    { name: 'Saakshi paper - Jul 14, 2019', url: 'https://www.tamilisaisangam.in/documents/saakshi-paper.pdf' },
  ];

  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
      <h1
        style={{
          textAlign: 'center',
          marginBottom: '30px',
          fontSize: '2rem',
          fontWeight: '600',
          padding: '15px',
          color: 'white',
          borderRadius: '10px',
          background: 'linear-gradient(to right, #3fa3e0, rgb(58, 133, 173), rgb(20, 61, 126))',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', // Optional shadow for added effect
        }}
      >
        {headingText} {/* Dynamically rendered heading based on the language */}
      </h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', // Responsive grid with a minimum width for each column
          gap: '20px',
          justifyItems: 'center',
          padding: '0 10px',
        }}
      >
        {videoLinks.map((videoId, index) => (
          <div
            key={index}
            style={{
              width: '100%',
              height: '250px',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow
              backgroundColor: '#ffffff', // White background for videos
              padding: '10px',
              boxSizing: 'border-box', // Ensures padding does not overflow
            }}
          >
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}`}
              title={`YouTube video player ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>

      {/* Box Style Links Below the Videos */}
      <h2
        style={{
          textAlign: 'center',
          fontSize: '1.5rem',
          fontWeight: '600',
          color: '#333',
          marginTop: '40px',
          marginBottom: '20px',
          background: "linear-gradient(to right, #3fa3e0,rgb(58, 133, 173),rgb(20, 61, 126))",
          color:"white",
       padding:"10px",
       
          paddingBottom: '10px',
        }}
      >
        {heading}
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '20px',
          justifyItems: 'center',
          marginTop: '30px',
        }}
      >
        {documentLinks.map((doc, index) => (
          <a
            key={index}
            href={doc.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              width: '100%',
              textAlign: 'center',
              backgroundColor: '#3fa3e0',
              color: '#fff',
              textDecoration: 'none',
              padding: '20px',
              borderRadius: '10px',
              transition: 'background-color 0.3s ease, transform 0.3s ease',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
            onMouseEnter={(e) => {
            
              e.target.style.transform = 'translateY(-5px)'; // Move slightly up
            }}
            onMouseLeave={(e) => {
          
              e.target.style.transform = 'translateY(0)'; // Reset position
            }}
          >
            <h3 style={{ fontSize: '1.2rem', fontWeight: '500' }}>{doc.name}</h3>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Media;
