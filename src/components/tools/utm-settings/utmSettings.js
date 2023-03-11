import { useDispatch } from "react-redux";
import { setUTM } from "./utmSlice";

export const UtmSettings = () => {
  const dispatch = useDispatch();

  const setUtmLabel = (event) => {
    dispatch(setUTM(event.target.value));
  };

  return (
    <div style={{ borderBottom: "1px solid #DEDEDE" }}>
      <div className="m-4 flex flex-col">
        <p className="font-bold mb-4">utm метка</p>
        <input
          type="text"
          placeholder="Ссылка на регистрацию"
          className="border"
          onChange={(event) => setUtmLabel(event)}
        />
      </div>
    </div>
  );
};
