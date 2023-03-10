import React, { useEffect, useState } from "react";
import { getSystemInfo, isValidSystemSetup } from "crypto-pro";

import { CryptoProAttached } from "./crypto-pro-attached";
import { CryptoProDetached } from "./crypto-pro-detached";
import { convertUploadFileToArrayBuffer } from "./@bcs/crypto-pro";

function App() {
  const [message, setMessage] = useState("");
  const [fileBuffer, setFileBuffer] = useState<ArrayBuffer | null>(null);

  const getOwnerSystemInfo = () => {
    getSystemInfo().then((data) => console.log(data));
  };

  useEffect(() => {
    isValidSystemSetup().then((data) => console.log(data));
  }, []);

  const handleLoadFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileBuffer(await convertUploadFileToArrayBuffer(e));
  };

  return (
    <div className="App">
      <input type={"file"} onChange={handleLoadFile} />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.currentTarget.value)}
      />
      <button onClick={getOwnerSystemInfo}>getSystemInfo</button>
      <hr />
      <CryptoProAttached message={fileBuffer !== null ? fileBuffer : message} />
      <CryptoProDetached message={fileBuffer !== null ? fileBuffer : message} />
    </div>
  );
}

export default App;
