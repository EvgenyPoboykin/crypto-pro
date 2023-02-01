import { getSystemInfo, isValidSystemSetup } from "crypto-pro";

import { CryptoProAttached } from "./crypto-pro-attached";
import { CryptoProDetached } from "./crypto-pro-detached";
import { useEffect } from "react";

function App() {
  const getOwnerSystemInfo = () => {
    getSystemInfo().then((data) => console.log(data));
  };

  useEffect(() => {
    isValidSystemSetup().then((data) => console.log(data));
  }, []);
  return (
    <div className="App">
      <button onClick={getOwnerSystemInfo}>getSystemInfo</button>
      <hr />
      <CryptoProAttached />
      <CryptoProDetached />
    </div>
  );
}

export default App;
