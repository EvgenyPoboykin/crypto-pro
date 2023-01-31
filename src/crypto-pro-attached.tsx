import { useCryptoPro } from "./crypto-pro";
import { useState } from "react";

export function CryptoProAttached() {
  const [msg, setMsg] = useState("");

  const { certificates, onSelectCertificate, onSignMessage, hasCertificates } =
    useCryptoPro((data) => console.log("onSignMessage", data));

  return (
    <div className="App">
      <h1>CryptoProAttached</h1>
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
