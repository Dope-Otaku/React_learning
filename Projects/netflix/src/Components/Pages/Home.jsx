import { useEffect, useState } from "react";
import "./css/Home.css";
import axios from "axios";

const apiKey = "7e5122f42b3d47b2f9c1deaf4e1d2214";
const url = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/original/";
// const upcoming = upcoming;

const Card = ({ img }) => <img className="card" src={img} alt="cover" />;

const Row = ({ title, arr = [] }) => (
  <div className="row">
    <h2>{title}</h2>
    <div className="innerWal">
      {arr.map((item, index) => (
        <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
      ))}
    </div>
  </div>
);

const Home = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [recentMo, setRecentMo] = useState([]);
  const [trendMovies, setTrendMovies] = useState([]);

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

    upcomingData();
    recentlyWatched();
    trendingMovies();
  }, []);

  return (
    <section className="home">
      <div className="banner"></div>
      {/* <h1>Popular on Net</h1> */}

      <Row title={"Upcoming Movies"} arr={upcomingMovies} />
      <Row title={"Recently Watched"} arr={recentMo} />
      <Row title={"Trending"} arr={trendMovies} />
    </section>
  );
};

export default Home;
