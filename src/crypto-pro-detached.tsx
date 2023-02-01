import { useCryptoProDetached } from "./@bcs/crypto-pro";

export function CryptoProDetached({
  message,
}: {
  message?: string | ArrayBuffer;
}) {
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
