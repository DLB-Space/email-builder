const ExportImportView = () => {
  return (
    <div className="flex flex-col">
      <button
        className="rounded-full py-2 mx-4 mt-4 mb-0 font-bold"
        style={{ border: "1px solid #000" }}
      >
        Экспорт в HTML
      </button>
      {/* <button
        className="rounded-full py-2 mx-4 font-bold"
        style={{ border: "1px solid #000" }}
      >
        Импорт из HTML
      </button> */}
      <button
        className="rounded-full py-2 mx-4"
      >
        Сохранить шаблон
      </button>
    </div>
  );
};

export default ExportImportView;
