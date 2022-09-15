import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { topNavbar } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <>
            <Route path="/" element={<MainLayout />}>
              {topNavbar.map((item, index) => {
                const Page = item.component;
                return (
                  <Route key={index} path={item.path} element={<Page />} />
                );
              })}
            </Route>
          </>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
