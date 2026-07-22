import { useEffect, useState } from 'react'
import './App.css'
import Hero from './components/hero/hero'
import NavBar from './components/navbar/navbar'
import Menu from './components/menu/menu'
import { AnimatePresence } from 'motion/react'
import Intro from './components/intro/intro'
import Discover from './components/discover/discover'
import CardsList from './components/cardslist/cardslist'
import LocationCta from './components/locationcta/locationcta'
import InfoSection from './components/infosection/infosection'
import AdventureSection from './components/adventuresection/adventuresection'
import ReviewSection from './components/reviewsection/reviewsection'
import BrandVisual from './components/brandvisual/brandvisual'
import Footer from './components/footer/footer'
import InfoModal from './components/infomodal/infomodal'
import rooms from './data/rooms.json'
import Lenis from 'lenis'
import Loader from './components/loader/loader'

function App() {
  const [isDesktop, ] = useState(window.innerWidth > 1024);
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [infoIsOpen, setInfoIsOpen] = useState(false)
  const [selectedRoom, setSelectedRoom] = useState("")
  const [loader, setLoader] = useState(true)

  const openInfoModal = (selected : string) => {
    setSelectedRoom(selected)
    setInfoIsOpen(true)
  }

  const toggleMenu = () => {
    if (menuIsOpen || modalIsOpen) {
      setMenuIsOpen(false)
      setModalIsOpen(false)
    }
    if (!modalIsOpen && !menuIsOpen) {
      setMenuIsOpen(true)
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false)
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 4,
      wheelMultiplier: 0.7,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const nextIsDesktop = window.innerWidth > 1024;

      if (nextIsDesktop !== isDesktop) {
        window.location.reload();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isDesktop]);

  return (
    <div className='relative'>
      <AnimatePresence mode='wait'>
        {loader && 
          <Loader />
        }
        {menuIsOpen &&
          <Menu 
            isDesktop={isDesktop}
            toggleMenu={toggleMenu}
          />
        }
        {infoIsOpen &&
          <InfoModal 
            selectedRoom={selectedRoom}
            rooms={rooms}
            closeModalInfo={() => setInfoIsOpen(prev => !prev)}
          />
        }
      </AnimatePresence>
      <NavBar 
        toggleMenu={toggleMenu}
        menuIsOpen={menuIsOpen}
        modalIsOpen={modalIsOpen}
      />
      <main>
        <Hero />
        <Intro />
        <Discover />
        <CardsList 
          rooms={rooms}
          isDesktop={isDesktop}
          openInfoModal={openInfoModal}
        />
        <LocationCta
          modalIsOpen={modalIsOpen}
          toggleModal={() => setModalIsOpen(prev => !prev)}
        />
        <InfoSection 
          isDesktop={isDesktop}
        />
        <AdventureSection 
          isDesktop={isDesktop}
        />
        <ReviewSection />
        <BrandVisual />
      </main>
      <Footer/>
      <div className='app-overlay'>

      </div>
    </div>
  )
}

export default App
