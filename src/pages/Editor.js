import React from "react";
import EmailTemplateView from "../components/EmailTemplateView";
import ToolsView from "../components/ToolsView";

const EditorPage = () => {
  return (
    <div className="flex h-full	">
      <EmailTemplateView />
      <div className="w-96"></div>
      <ToolsView />
    </div>
  );
};

export default EditorPage;
