import Footer from "../components/compound/Footer";
import Header from "../components/compound/Header";
import Main from "../components/compound/Main";
import Card from "../components/molecule/card";
import CardData from "../sampleData/cardData";

const HomeDetail=()=>{
    return(
        <>
         <div className="home">
      <div className="hero">
        <button className="arrow left">&#10094;</button>

        <div className="hero-content">
          <h1>We Offer Products Made Of Wood</h1>
          <p>
           valued globally for its versality.
          </p>

          <button className="hero-btn">EXPLORE NOW</button>
        </div>

        <button className="arrow right">&#10095;</button>
      </div>
    </div>
        </>
    )
}

export default HomeDetail;