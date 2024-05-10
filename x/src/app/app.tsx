// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { Route, Routes } from 'react-router-dom'
 
import NxWelcome from './nx-welcome';
import BuilderHomePage from './pages/BuilderHomePage/BuilderHomePage'

export function App() {
  return (
    <Routes>
        {/* <Route path="/" element={<Home />}></Route> */}
        <Route path="/builder" element={<BuilderHomePage />}></Route>
        <Route path="*" element={<BuilderHomePage />}></Route>
      </Routes>
  );
}

export default App;
