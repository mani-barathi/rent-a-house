import { BookRounded, SearchOutlined } from "@mui/icons-material";
import React from "react";
import "../styles/Home.css";
function Home() {
  const fetchProperties = (e) => {
    e.preventDefault();
    window.location.href = "/rentahouse";
  };
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__welcomeMsg">
          <h2>Welcome! Rent Properties that connects to your Heart :)</h2>
        </div>
        <div className="home__searchbar">
          <form action="">
            <select
              className="home__searchbar__selectPlace"
              name=""
              id=""
              onChange={fetchProperties}
            >
              <option value="chennai">Chennai</option>
              <option value="vellore">Vellore</option>
              <option value="coimbatore">Coimbatore</option>
            </select>

            <div className="home__searchButton">
              <SearchOutlined />
              <b>Search</b>
              <button style={{ display: "none" }} type="submit">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="home__container1">
        <h2>OTHER FACILITIES</h2>
        <div className="home__containerOptions">
          <div className="container__optionsTop">
            <div className="container__option">
              <BookRounded />
              <p>Buy products</p>
            </div>
            <div className="container__option">
              <BookRounded />
              <p>Buy products</p>
            </div>
            <div className="container__option">
              <BookRounded />
              <p>Buy products</p>
            </div>
            <div className="container__option">
              <BookRounded />
              <p>Buy products</p>
            </div>
            <div className="container__option">
              <BookRounded />
              <p>Buy products</p>
            </div>
          </div>
          <div className="container__optionsBottom">
            <div className="container__option">
              <BookRounded />
              <p>Buy products</p>
            </div>
            <div className="container__option">
              <BookRounded />
              <p>Buy products</p>
            </div>
            <div className="container__option">
              <BookRounded />
              <p>Buy products</p>
            </div>
            <div className="container__option">
              <BookRounded />
              <p>Buy products</p>
            </div>
            <div className="container__option">
              <BookRounded />
              <p>Buy products</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
