import "./App.css";
import CardSection from "./Components/Card";
import Footer from "./Components/Footer";
import FormSection from "./Components/FormSection";
import NavbarSection from "./Components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

AOS.init(); // Initialize AOS

function App() {
  return (
    <>
      <NavbarSection />
      <div className="bg-black px-4 sm:px-6 md:px-8 xl:px-[120px] pb-16 sm:pb-20 md:pb-24">
        <div className="pt-10">
          <CardSection />
          <FormSection />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
