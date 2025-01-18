import Articles from "../components/Articles"
import Categories from "../components/Categories"
import Feedback from "../components/Feedback"
import Footer from "../components/Footer"
import HeroSection from "../components/Hero"
import Statistics from "../components/Statistics"
import NavigationBar from "./NavigationBar"

function Home() {

  return (
    <>
    <NavigationBar />
    <HeroSection />
    <Categories />
    <Statistics />
    <Feedback />
    <Articles />
    <Footer />
    </>
  )
}

export default Home
