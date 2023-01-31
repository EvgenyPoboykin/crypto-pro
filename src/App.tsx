import { getSystemInfo } from "crypto-pro";
import { useCryptoPro } from "./crypto-pro";
import { useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  const { certificates, onSelectCertificate, onSignMessage, hasCertificates } =
    useCryptoPro((data) => console.log("onSignMessage", data));

  const getOwnerSystemInfo = () => {
    getSystemInfo().then((data) => console.log(data));
  };

  return (
    <div className="App">
      <select
        id="certificates"
        onChange={(e) => onSelectCertificate(e.currentTarget.value)}
      >
        {hasCertificates &&
          certificates?.map(({ name, thumbprint }) => (
            <option key={thumbprint} value={thumbprint}>
              {name}
            </option>
          ))}
      </select>

      <hr />

      <button onClick={getOwnerSystemInfo}>getSystemInfo</button>
      <hr />
      <p>работа хука</p>
      <textarea value={msg} onChange={(e) => setMsg(e.currentTarget.value)} />
      <button
        onClick={async () => {
          onSignMessage(msg);
        }}
      >
        onSignMessage
      </button>
    </div>
  );
}

export default App;
