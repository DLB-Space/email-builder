import { TYPES } from "../../../constants/content-types";

const ComponentSettings = ({title, placeholder}) => {
  return (
    <div style={{ borderBottom: "1px solid #DEDEDE" }}>
      <div className="m-4 flex flex-col">
        <p className="font-bold mb-4">Шапка</p>
        <input
          type="text"
          placeholder={placeholder}
          className="border"
          onChange={(event) => {}}
        />
      </div>
    </div>
  );
};

export default ComponentSettings;
