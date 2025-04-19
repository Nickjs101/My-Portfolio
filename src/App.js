import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import About from "./components/About";
import Work from "./components/projects-showcase";
import Footer from "./components/Footer";
import Certs from "./components/Certs";
import Experience from "./components/Experience";
import Cyberprojects from "./components/Cyberprojects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Chatbox from "./components/Chatbox";
import AnimatedChatButton from "./components/subcomponents/animated-bot"

import { library } from '@fortawesome/fontawesome-svg-core'
import { faGoogle, faLinux, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faCode, faBug, faDatabase, faFlag, faShieldHalved, faPeopleGroup, faLightbulb, faBookAtlas, faShield, faFileCode, faDownload} from '@fortawesome/free-solid-svg-icons'

import { useState, useCallback } from "react";

library.add(faGoogle,faCode,faBug,faLinux,faDatabase,faFlag,faShieldHalved,faPeopleGroup,faLightbulb,faBookAtlas,faShield,faFileCode,faLinkedinIn,faGithub,faEnvelope,faDownload);

function App() {
  const [currentContent, setCurrentContent] = useState('Main');
  const [projectComponent, setprojectComponent] = useState(<Navbar/>);
  const [projectCategory, setprojectCategory] = useState('Software Development');
  const [isChatVisible, setIsChatVisible] = useState(false);
  const [isFabVisible, setIsFabVisible] = useState(false);

  const displayProject = useCallback((Component, Category) => {
    setprojectComponent(Component);
    setprojectCategory(Category);
    setCurrentContent('Projects');
  }, []);

  const renderContent = useCallback(() => {

    if (currentContent === 'Projects') {
      return (
        <Cyberprojects  projectComponent={projectComponent} category={projectCategory} setprojectComponent={setprojectComponent} setprojectCategory={setprojectCategory} setCurrentContent={setCurrentContent} />
      );
    }
    return (
      <>
        <Navbar/>
        <Hero onWantToKnowMoreClick={() => {
            setIsFabVisible(true);
            setIsChatVisible(true);
          }}/>
        <Skills />
        <Certs />
        <About />
        <Experience />
        <Education />
        <Work displayProject={displayProject} />
        <Contact />
        <Footer />
        <Chatbox
          isChatVisible={isChatVisible}
          onClose={() => setIsChatVisible(false)}
          hideFab={() => setIsFabVisible(false)}
        />

        {isFabVisible && !isChatVisible && (
          <AnimatedChatButton onClick={() => setIsChatVisible(true)} />
        )}
      </>
    );
  
  
  }, [currentContent, projectComponent, projectCategory, displayProject, isChatVisible, isFabVisible]);

  return <div className="App">{renderContent()}</div>;
}

export default App;
