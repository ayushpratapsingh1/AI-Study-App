import Footer from '../components/Footer'
import FeaturedCourses from '../components/Features';
import NavigationBar from './NavigationBar';
import Breadcrumb from '../components/Breadcrumb';


export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <NavigationBar />
      <Breadcrumb />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <FeaturedCourses/>
      </main>
      <Footer />
    </div>
  )
}
