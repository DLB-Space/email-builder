import React from 'react';
import EmailTemplateView from "../components/EmailTemplateView";
import ToolsView from "../components/ToolsView";

const EditorPage = () => {
  return (
    <div className="flex h-screen	">
      <EmailTemplateView />
      <ToolsView />
    </div>
  );
};

export default EditorPage;
