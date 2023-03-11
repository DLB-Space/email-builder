import { setTo } from "./headerImageSlice";
import { useDispatch } from "react-redux";

const LoadHeaderImage = () => {
  const dispatch = useDispatch();

  const handleSetLink = (event) => {
    dispatch(setTo(event.target.value));
  };

  return (
    <div style={{ borderBottom: "1px solid #DEDEDE" }}>
      <div className="m-4 flex flex-col">
        <p className="font-bold mb-4">Шапка</p>
        <input
          type="text"
          placeholder="Ссылка в шапке"
          className="border"
          onChange={(event) => handleSetLink(event)}
        />
      </div>
    </div>
  );
};

export default LoadHeaderImage;
