import { Certificate } from "crypto-pro-js";

export interface UseCryptoProReturnType {
  onSelectCertificate: (thumbprint: string) => Promise<void>;
  onSignMessage: (message: string | ArrayBuffer) => Promise<void>;
  certificates: Certificate[];
  hasCertificates: boolean;
}

export type UseCryptoProType = (
  signCallback?: (data: string) => void
) => UseCryptoProReturnType;

export type OnSignMessageType = UseCryptoProReturnType["onSignMessage"];

export type OnSelectCertificateType =
  UseCryptoProReturnType["onSelectCertificate"];

export type CertificatesType = UseCryptoProReturnType["certificates"];

export type CertificateType = UseCryptoProReturnType["certificates"][number];
