import React from "react";
import EditorPage from "./pages/Editor";
import { store } from "./store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store} className="App">
      <EditorPage />
    </Provider>
  );
};

export default App;
