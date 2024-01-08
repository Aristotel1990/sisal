import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
// material
// redux
import { store, persistor } from "./redux/store";
import "./index.css";
import App from "./App";
import Home from './pages/Home';
import Welcome from './pages/Welcome';
import Header from './components/Header';
import MiniDrawer from './components/Sidebar';
import AppHeader from './components/AppHeader';
import Error from "./pages/Error";
import MonsterTab from './pages/MonsterTab';
import MonstersList from "./pages/MonstersList";
import DisplayList from './pages/DisplayList';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ReduxProvider store={store}>
  <PersistGate loading={<>Ne pritje</>} persistor={persistor}>
    <BrowserRouter>
      <App>
        <MiniDrawer/>
        <Routes>
          <Route path="/" element={<Navigate to="/welcome" />} />
          <Route  path="/create" element={<MonsterTab />} />
          <Route  path="/list" element={<MonstersList  />} />
          <Route  path="/error" element={<DisplayList />} />
        </Routes>
      </App>
    </BrowserRouter>
  </PersistGate>
</ReduxProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
