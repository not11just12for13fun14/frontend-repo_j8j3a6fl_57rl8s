import Hero from "./components/Hero";
import Features from "./components/Features";
import Demo from "./components/Demo";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Hero />
      <Features />
      <Demo />
      <Footer />
    </div>
  )
}

export default App