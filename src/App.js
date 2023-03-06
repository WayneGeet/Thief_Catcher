import './App.css';
import Header from "./components/Header";
import Locate from "./components/Locate";
import {IpProvider} from "./Context";

function App() {
  return (
    <div className="App">
      <IpProvider>
        <Header/>
        <Locate/>
      </IpProvider>
    </div>
  );
}

export default App;
