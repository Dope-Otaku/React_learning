import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./css/Home.css";
import axios from "axios";
import { apiKey } from "./key.js";

// const apiKey = process.env.REACT_APP_NETFLIX_API;
const url = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/original/";
// const upcoming = upcoming;

const Card = ({ img }) => <img className="card" src={img} alt="cover" />;

const Row = ({ title, arr = [] }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      if (scrollRef.current) {
        e.preventDefault();
        scrollRef.current.scrollLeft += e.deltaY;
      }
    };

    const current = scrollRef.current;
    if (current) {
      current.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (current) {
        current.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="innerWal" ref={scrollRef}>
        {arr.map((item, index) => (
          <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [recentMo, setRecentMo] = useState([]);
  const [trendMovies, setTrendMovies] = useState([]);
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    const upcomingData = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/upcoming?api_key=${apiKey}`);
      // console.log(results);
      setUpcomingMovies(results);
    };

    const recentlyWatched = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/now_playing?api_key=${apiKey}`);
      // console.log(results);
      setRecentMo(results);
    };

    const trendingMovies = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/popular?api_key=${apiKey}`);
      // console.log(results);
      setTrendMovies(results);
    };

    const getAllGenre = async () => {
      const {
        data: { genres },
      } = await axios.get(`${url}/genre/movie/list?api_key=${apiKey}`);
      setGenre(genres);
      console.log(genres);
    };

    upcomingData();
    recentlyWatched();
    trendingMovies();
    getAllGenre();
  }, []);

  return (
    <section className="home">
      {/* <div
        className="banner"
        style={{
          backgroundImage: trendMovies[0]
            ? `url(${`${imgUrl}/${trendMovies[0].poster_path}`})`
            : "rgb(16, 16, 16)",
        }}
      >
        {trendMovies[0] && <h1>{trendMovies[0].original_title}</h1>}
        {trendMovies[0] && <p>{trendMovies[0].overview}</p>}

        <div> 
          <button>
            <trendMovies /> Play{" "}
          </button>
          <button>
            My List <trendMovies />{" "}
          </button>
        </div>
      </div>*/}
      {/* <h1>Popular on Net</h1> */}

      <Row title={"Upcoming Movies"} arr={upcomingMovies} />
      <Row title={"Recently Watched"} arr={recentMo} />
      <Row title={"Trending"} arr={trendMovies} />

      {/* <div className="genreBox">
        {genre.map((item) => (
          <Link key={item.id} to={`/genre/${item.id}`}>
            {item.name}
          </Link>
        ))}
      </div> */}
    </section>
  );
};

export default Home;
