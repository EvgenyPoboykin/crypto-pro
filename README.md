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

## [FAQ1](https://www.cryptopro.ru/forum2/default.aspx?g=posts&t=18066)

## [FAQ2](https://www.cryptopro.ru/forum2/default.aspx?g=posts&t=15504)

## [FAQ3](https://www.cryptopro.ru/forum2/default.aspx?g=posts&t=15408)

## [FAQ4](https://www.cryptopro.ru/forum2/default.aspx?g=posts&t=17100)

## [FAQ5](https://www.cryptopro.ru/forum2/default.aspx?g=posts&t=12112)

# Debug in Console Browser

```javascript
cadesplugin.set_log_level(cadesplugin.LOG_LEVEL_DEBUG);
```

## [support](https://support.cryptopro.ru/index.php?/Knowledgebase/Article/View/232)
