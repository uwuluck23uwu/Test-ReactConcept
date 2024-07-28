import './App.css';
import { Header } from "./components/Header";
import { AllRoutes } from './routes/AllRoutes';

export default function App() {
  return (
    <div className="App">
    <Header/>
    <AllRoutes/>
    </div>
  );
}
