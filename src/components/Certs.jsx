import React, { useState } from 'react'
import C1 from '../assets/Certificates/HCIA.jpg'
import C2 from '../assets/Certificates/GoogleCC1.jpg'
import C3 from '../assets/Certificates/GoogleCC2.jpg'
import C4 from '../assets/Certificates/GoogleCC3.jpg'
import C5 from '../assets/Certificates/JavaExplorer.jpg'
import C6 from '../assets/Certificates/Onset.jpg'


const Certs = () => {
  const [imgsrc, setimagesrc] = useState(C1);
  const [activeCert, setActiveCert] = useState(0);

  const imagePaths = [C1, C2, C3, C4, C5, C6];
  const certNames = [
    "HCIA - Cloud Computing",
    "Connect & Protect: Networks & Network Security",
    "Foundations of Cybersecurity",
    "Play It Safe: Manage Security Risks",
    "Java Explorer",
    "ONE STI Educators Training Starter"
  ];

  const ChangeImage = (idx) => {
    setimagesrc(imagePaths[idx]);
    setActiveCert(idx);
  };

  const PrevCert = () => {
    ChangeImage(activeCert === 0? certNames.length - 1: activeCert - 1 );
  };
  const NextCert = () => {
    ChangeImage(activeCert === certNames.length - 1? 0: activeCert + 1 );
  };

  return (
    <div id='Certifications' className=' max-w-[1200px] mx-auto my-[100px]'>
      <div className=' shadow-xl md:grid md:grid-cols-2 rounded-xl py-5 px-2 mx-2 md:px-5 lg:mx-0'>
        <h2 className='text-4xl md:text-5xl font-bold mb-8 col-span-2 text-center text-[#9fef00]'>Certifications</h2>
        <div className='hidden md:block'>
              <ul className='px-10 pb-10 mt-0 text-left align-center text-[#A4B1CDff] flex flex-col text-xl'>
                  {certNames.map((name, idx) => (
                      <li
                      key={idx}
                      onClick={() => ChangeImage(idx)}
                      className={`py-2 highlight-effect ${activeCert === idx ? "active-highlight-effect" : ""}`}
                      >
                      {name}
                      </li>
                  ))}
              </ul>
        </div>
        <h3 className='block md:hidden text-xl font-bold text-white text-center h-[59px] md:h-auto'>{certNames[activeCert]}</h3>
        <div className='mx-auto w-auto py-5 md:py-0'>
          <img className='h-[259px] lg:h-[400px] mx-auto rounded-lg' src={imgsrc} alt="Certificate" />
        </div>
        <div className='block md:hidden'>
              <div className='flex flex-col items-center'>
                  <div className='flex mt-2 items-center'>
                      <button onClick={PrevCert} className="mx-5 text-[#A4B1CDff] text-xl text-bold">&#10094;</button>
                      {imagePaths.map((_, idx) => (
                      <button
                          key={idx}
                          onClick={() => ChangeImage(idx)}
                          className={`w-2 h-2 mx-1 text-center rounded-full ${activeCert === idx ? 'bg-[#9fef00be]' : 'bg-gray-400'}`}
                      ></button>
                      ))}
                      <button onClick={NextCert} className="mx-5 text-gray-400  text-xl text-bold">&#10095;</button>
                  </div>
              </div> 
        </div>
      </div>
    </div>
  )
}

export default Certs
