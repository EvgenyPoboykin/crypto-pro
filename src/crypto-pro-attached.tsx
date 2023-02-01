import { useCryptoPro } from "./crypto-pro";

export function CryptoProAttached({
  message,
}: {
  message?: string | ArrayBuffer;
}) {
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

      <button
        onClick={async () => {
          onSignMessage(message);
        }}
      >
        onSignMessage
      </button>
    </div>
  );
}
