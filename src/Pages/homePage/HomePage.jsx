import { useContext } from 'react';
import SearchBar from '../../components/searchBar/SearchBar';
import './HomePage.scss';
import { AuthContext } from '../../context/AuthContext';
function HomePage() {
  const { } = useContext(AuthContext);
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find <span> Real Estate</span> & Get Your Dream Place</h1>
          <p className='text'>
            Welcome to StatSphere, where we bring you closer to the perfect home. Whether you're buying, renting, or investing, our curated selection of real estate options ensures you find exactly what you need.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>Years of Experience</h1>

            </div>

            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}
export default HomePage;