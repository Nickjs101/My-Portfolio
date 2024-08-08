import React from 'react';
import KodyAdventureImage from '../../assets/Works/kodymain.jpg';
import kodylevel from '../../assets/Works/kodylevel.jpg';
import kodylesson from '../../assets/Works/kodylesson.jpg';
import kodymap from '../../assets/Works/kodymap.jpg';

const AppProject2 = () => {
  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col items-center">
      <div className="max-w-4xl w-full p-0 md:p-6 shadow-lg rounded-lg">
        <img src={KodyAdventureImage} alt="Kody's Adventure" className="w-full h-auto mb-6 rounded-lg" />
        <h1 className="text-3xl lg:text-5xl font-bold mb-4 text-white">Kody's Adventure</h1>
        
        <h2 className="text-2xl font-semibold mb-4 text-white">Project Overview</h2>
        <p className="mb-4 secondary-color">
          <strong>Kody's Adventure</strong> is a 2D side-scrolling mobile game designed to teach basic Python programming concepts in an engaging and interactive manner. Targeted at individuals aged 16 and above, this game aims to bridge the gap in the IT field by introducing non-IT individuals, including students and professionals, to the world of programming.
        </p>
        <img src={kodylevel} alt="Kody's Adventure" className="w-full h-auto mb-6 rounded-lg" />
        
        <h2 className="text-2xl font-semibold mb-4 text-white">Purpose and Goals</h2>
        <p className="mb-4 secondary-color">
          The primary goal of <strong>Kody's Adventure</strong> is to promote the IT field and encourage career shifts towards software development by providing an accessible and enjoyable learning platform. The game serves as a tool to familiarize players with programming basics, ultimately increasing the number of skilled developers in the industry.
        </p>
        <img src={kodylesson} alt="Kody's Adventure" className="w-full h-auto mb-6 rounded-lg" />
        
        <h2 className="text-2xl font-semibold mb-4 text-white">Game Mechanics and Features</h2>
        <p className="mb-4 secondary-color">
          <strong>Kody's Adventure</strong> features three levels of difficulty, each embedded with lessons and activities designed to teach programming concepts. Players will encounter various challenges, such as completing code snippets or engaging in interactive tasks that require them to move items using their character. The game introduces the Python programming language and provides tutorials to guide players through the gameplay.
        </p>

        <img src={kodymap} alt="Kody's Adventure" className="w-full h-auto mb-6 rounded-lg" />

        
        <h3 className="text-lg font-semibold mb-2 text-white">Health and Rewards System</h3>
        <p className="mb-4 secondary-color">
          Players are given a health bar that depletes when they fail activities. To progress to the next level, players must maintain at least one health point. Each activity carries risks and rewards, adding an element of strategy to the learning process.
        </p>
        
        <h3 className="text-lg font-semibold mb-2 text-white">Character and Storyline</h3>
        <p className="mb-4 secondary-color">
          The game's protagonist, Kody, is a college student aspiring to become a professional developer. Kody's journey begins when he is transported into a computer world where he meets Guido van Rossum, the creator of Python. Guided by Guido, Kody must complete programming challenges and defeat enemies to return to the real world with newfound programming skills.
        </p>
        
        <div className="flex justify-center my-8">
          <a href="https://mega.nz/file/luYB0LSJ#6gzzEFbbew4PBblpc2VvXYNZmOUfqFhOGFJUqUa5-Mo" download 
            target="_blank" 
            rel="noopener noreferrer"  
            className="bg-gradient-to-r from-[#4CAF50] to-[#81C784] text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-primary-dark">
            Download the Game
          </a>
        </div>

        <div className="flex justify-center my-8">
          <a href="https://github.com/Nickjs101/Kody-sAdventure.git" 
            target="_blank" 
            rel="noopener noreferrer"  
            className="bg-gradient-to-r from-[#4CAF50] to-[#81C784] text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-primary-dark">
            View Repository
          </a>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-white">Skills Utilized</h2>
        <div className="flex flex-wrap mb-4">
          {["C#", "Unity", "OOP"].map((skill, index) => (
            <span key={index} className="bg-gradient-to-r from-[#4CAF50] to-[#81C784] text-white font-semibold py-1 px-3 m-1 rounded-full">
              {skill}
            </span>
          ))}
        </div>

      </div>
    </div>
  )
}

export default AppProject2
