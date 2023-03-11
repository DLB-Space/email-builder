import React, { useState } from "react";
import SettingsView from "./SettingsView";
import ExportImportView from "./ExportImportView";

const ToolsView = () => {
  const [view, setView] = useState("SETTINGS");

  const viewContent = () => {
    if (view === "SETTINGS") {
      return <SettingsView />;
    }

    if (view === "EXPORT") {
      return <ExportImportView />;
    }
  };

  return (
    <div
      className="bg-white w-96 fixed h-screen right-0"
      style={{ borderLeft: "1px solid #DEDEDE" }}
    >
      <div style={{ borderBottom: "1px solid #DEDEDE" }}>
        <div className="m-4">
          <button
            className="mr-6 font-bold"
            onClick={() => setView("SETTINGS")}
          >
            Настройки
          </button>
          <button onClick={() => setView("EXPORT")}>Экспорт</button>
        </div>
      </div>
      <div>{viewContent()}</div>
    </div>
  );
};

export default ToolsView;
