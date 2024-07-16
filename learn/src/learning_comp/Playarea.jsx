import { useParams, useNavigate } from "react-router-dom";

const Playarea = () => {
  const params = useParams();
  const navigate = useNavigate();
  console.log(params.id);
  return (
    <>
      <h1>hello this is my playarea</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Return
      </button>
    </>
  );
};

export default Playarea;
