import './App.css';

import Locate from "./components/Locate";
import {IpProvider} from "./Context";

function App() {
  return (
    <div className="App">
      <IpProvider>
        <Locate/>
      </IpProvider>
    </div>
  );
}

export default App;
