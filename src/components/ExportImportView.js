import { data } from "../constants/test-data";

const ExportImportView = () => {
  const handleExport = () => {
    const dataToSend = data;    

    fetch("http://localhost:3002/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        console.log(data.link);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex flex-col">
      <button
        className="rounded-full py-2 mx-4 mt-4 mb-0 font-bold"
        style={{ border: "1px solid #000" }}
        onClick={handleExport}
      >
        Экспорт в HTML
      </button>
      {/* <button
        className="rounded-full py-2 mx-4 font-bold"
        style={{ border: "1px solid #000" }}
      >
        Импорт из HTML
      </button> */}
      <button className="rounded-full py-2 mx-4">Сохранить шаблон</button>
    </div>
  );
};

export default ExportImportView;
