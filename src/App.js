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
import Chatbox from "./components/Chat-box2";
import AnimatedChatButton from "./components/subcomponents/animated-bot"

import { library } from '@fortawesome/fontawesome-svg-core'
import { faGoogle, faLinux, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faCode, faBug, faDatabase, faFlag, faShieldHalved, faPeopleGroup, faLightbulb, faBookAtlas, faShield, faFileCode, faDownload} from '@fortawesome/free-solid-svg-icons'

import {Provider} from 'react-redux'
import projectStorage from './components/subcomponents/projectStorage'
import { useState, useCallback } from "react";

library.add(faGoogle,faCode,faBug,faLinux,faDatabase,faFlag,faShieldHalved,faPeopleGroup,faLightbulb,faBookAtlas,faShield,faFileCode,faLinkedinIn,faGithub,faEnvelope,faDownload);

function App() {
  const [currentContent, setCurrentContent] = useState('Main');
  const [projectComponent, setProjectComponent] = useState(<Navbar />);
  const [projectCategory, setProjectCategory] = useState('SoftwareDev');
  const [isChatVisible, setIsChatVisible] = useState(false);
  const [isFabVisible, setIsFabVisible] = useState(false);

  const displayProject = useCallback((Component, Category) => {
    setProjectComponent(Component);
    setProjectCategory(Category);
    setCurrentContent('Projects');
  }, []);

  const renderContent = useCallback(() => {
    if (currentContent === 'Projects') {
      return (
        <Provider store={projectStorage}>
          <Cyberprojects
            projectComponent={projectComponent}
            category={projectCategory}
            setProjectComponent={setProjectComponent}
            setProjectCategory={setProjectCategory}
            setCurrentContent={setCurrentContent}
          />
        </Provider>
      );
    }
    return (
      <>
        <Navbar
          onWantToKnowMoreClick={() => {
            setIsFabVisible(true);
            setIsChatVisible(true);
          }}
        />
        <Hero />
        <Skills />
        <Certs />
        <About />
        <Experience />
        <Education />
        <Provider store={projectStorage}>
          <Work displayProject={displayProject} />
        </Provider>
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
