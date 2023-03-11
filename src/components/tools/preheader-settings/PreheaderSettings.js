import { useState } from "react";
import { useDispatch } from "react-redux";
import { setShowLink, setTo } from "./preheaderSlice";

export const PreheaderSettings = () => {
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(true);

  const handleChangeShowLink = (event) => {
    setChecked(checked ? false : true);
    dispatch(setShowLink(event.target.checked));
  };

  const setToLink = (event) => {
    dispatch(setTo(event.target.value));
  };

  return (
    <div style={{ borderBottom: "1px solid #DEDEDE" }}>
      <div className="m-4 flex flex-col">
        <p className="font-bold mb-4">Ссылка на регистрацию</p>
        <label>
          <input
            type="checkbox"
            name="checkbox"
            value={checked}
            checked={checked}
            onChange={(event) => handleChangeShowLink(event)}
            className="mr-2 mb-4"
          />
          Ссылка в прехедере
        </label>
        <input
          disabled={!checked}
          type="text"
          placeholder="Ссылка на регистрацию"
          className="border"
          onChange={(event) => setToLink(event)}
        />
      </div>
    </div>
  );
};
