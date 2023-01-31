# Crypto Pro Prototype Project

## useCryptoPro hook

Return type

```typescript
export interface UseCryptoProReturnType {
  onSelectCertificate: (thumbprint: string) => Promise<void>;
  onSignMessage: (message: string | ArrayBuffer) => Promise<void>;
  certificates: Certificate[];
  hasCertificates: boolean;
}
```

Usage

```typescript
const { certificates, onSelectCertificate, onSignMessage, hasCertificates } =
  useCryptoPro((data) => console.log("onSignMessage", data));
```

## [crypto-pro documentation github](https://github.com/vgoma/crypto-pro#install)
