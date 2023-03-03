import "./App.css";
import "./components/style.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
   return (
      <>
         <div className="ranz-body bg-[#1b1b1b] text-white relative">
            <Navbar />
            <Main />
            <Footer />
         </div>
      </>
   );
}

export default App;
