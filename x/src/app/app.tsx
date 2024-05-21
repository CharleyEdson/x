// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { Route, Routes } from 'react-router-dom'
 
// import BuilderHomePage from './pages/BuilderHomePage/BuilderHomePage'
import HomePage from './pages/Home/HomePage';
import { CatchAllRoute } from '@x/builderio';
import { Blog } from '@x/blog';

export function App() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/builder" element={<CatchAllRoute />}></Route>
        <Route path="/builder/*" element={<CatchAllRoute />}></Route>
        <Route path="/blog/" element={<Blog />}></Route>
        <Route path="/blog/*" element={<Blog />}></Route>
      </Routes>
  );
}

export default App;
