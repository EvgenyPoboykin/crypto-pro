import {
  CertificateType,
  CertificatesType,
  OnSelectCertificateType,
  OnSignMessageType,
  UseCryptoProType,
} from "./crypto-pro-detached.types";
import {
  createDetachedSignature,
  createHash,
  getCertificate,
  getUserCertificates,
  isValidSystemSetup,
} from "crypto-pro";
import { useCallback, useEffect, useMemo, useState } from "react";

export const useCryptoProDetached: UseCryptoProType = (signCallback) => {
  const [certificate, setCertificate] = useState<CertificateType | null>(null);
  const [certificates, setCertificates] = useState<CertificatesType>([]);

  const onSignMessage: OnSignMessageType = useCallback(
    async (message) => {
      try {
        if (!certificate?.thumbprint || !message || !certificate.isValid())
          return;

        const hashMessage = await createHash(message);

        const response = await createDetachedSignature(
          certificate.thumbprint,
          hashMessage
        );

        signCallback?.(response);
      } catch (error) {
        // ...
      }
    },
    [certificate, signCallback]
  );

  const onSelectCertificate: OnSelectCertificateType = useCallback(
    async (thumbprint) => {
      try {
        if (!thumbprint) return;

        const response = await getCertificate(thumbprint);

        setCertificate(response);
      } catch (error) {
        // ...
      }
    },
    [setCertificate]
  );

  const onCertificates = useCallback(async () => {
    try {
      const isValid = await isValidSystemSetup();

      if (!isValid) {
        throw Error("don not setup");
      }
      const response = await getUserCertificates();

      setCertificates(response);
      setCertificate(response[0]);
      console.log(response[0]);
    } catch (error) {
      // ...
    }
  }, []);

  useEffect(() => {
    onCertificates();
  }, [onCertificates]);

  const hasCertificates = useMemo(
    () => certificates.length > 0,
    [certificates]
  );

  return {
    onSelectCertificate,
    onSignMessage,
    certificates,
    hasCertificates,
  };
};
