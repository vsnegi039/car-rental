import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Headers/Headers';
import Book from './Components/Book/Book';
import Features from './Components/Features/Features';
import Vehicle_model from './Components/Vehicle_model/Vehicle_model';
import Adver from './Components/Advertiesment/Advertiesment';
import Review from './Components/Review/Review';
import Contact from './Components/Contact/Contact';
import FAQ from './Components/FAQ/FAQ';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Book />
      <Features />
      <Vehicle_model />
      <Adver />
      <Review />
      <FAQ />
      <Contact />
    </div>
  );
}

export default App;
