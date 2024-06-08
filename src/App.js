import './App.css';
import Profile from './components/profile/profile';
import Header from './components/header/header';
import Product from './components/product/product';
import Service from './components/service/service';
import AboutUs from './components/aboutUs/aboutUs';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Profile/>
      <Product/>
      <Service/>
      <AboutUs/>
      <Contact/>
    </div>
  );
}

export default App;
