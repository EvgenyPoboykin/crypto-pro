import { useCryptoProDetached } from "./crypto-pro detached";
import { useState } from "react";

export function CryptoProDetached() {
  const [msg, setMsg] = useState("");

  const { certificates, onSelectCertificate, onSignMessage, hasCertificates } =
    useCryptoProDetached((data) => console.log("onSignMessage", data));

  return (
    <div className="App">
      <h1>CryptoProDetached</h1>
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
