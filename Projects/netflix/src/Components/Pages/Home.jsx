import "./css/Home.css";

const Card = ({ img }) => <img className="card" src={img} alt="cover" />;

const Row = ({
  title,
  arr = [
    {
      img: "http://media.comicbook.com/201/03/avengers-infinity-war-poster-1093756.jpeg",
    },
  ],
}) => (
  <div className="row">
    <h2>{title}</h2>
    <div className="innerWal">
      {arr.map((item) => (
        <Card key={item.img} img={item.img} />
      ))}
    </div>
  </div>
);

const Home = () => {
  return (
    <section className="home">
      <div className="banner"></div>
      {/* <h1>Popular on Net</h1> */}
      <Row title={"Popular on Netflix"} />
      <Row title={"Recently Watched"} />
      <Row title={"New List"} />
    </section>
  );
};

export default Home;
