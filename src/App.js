import React from "react";
import EditorPage from "./pages/Editor";
import { store } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const App = () => {
  let persistor = persistStore(store);

  return (
    <Provider store={store} className="App">
      <PersistGate loading={null} persistor={persistor}>
        <EditorPage />
      </PersistGate>
    </Provider>
  );
};

export default App;
