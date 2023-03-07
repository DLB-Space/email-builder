import React from 'react';

const ToolsView = () => {
  return (
    <div className="bg-white w-96">
      <div style={{borderBottom: '1px solid #DEDEDE'}}>
        <div className="m-4">
          <a href="/" className="mr-6 font-bold	">Настройки</a>
          <a href="/" className="mr-6">Контент</a>
          <a href="/">Экспорт</a>
        </div>
      </div>
    </div>
  );
};

export default ToolsView;
