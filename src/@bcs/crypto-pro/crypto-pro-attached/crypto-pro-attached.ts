import {
  CertificateType,
  CertificatesType,
  OnSelectCertificateType,
  OnSignMessageType,
  UseCryptoProType,
} from "../types";
import {
  createAttachedSignature,
  getCertificate,
  getUserCertificates,
} from "crypto-pro";
import { useCallback, useEffect, useMemo, useState } from "react";

/**
 * useCryptoProAttached - attached sign to document, BIG SIZE return data
 *
 * @param signCallback - call return sign document data
 *
 */

export const useCryptoProAttached: UseCryptoProType = (signCallback) => {
  const [certificate, setCertificate] = useState<CertificateType | null>(null);
  const [certificates, setCertificates] = useState<CertificatesType>([]);

  const onSignMessage: OnSignMessageType = useCallback(
    async (message) => {
      try {
        if (!certificate?.thumbprint || !message || !certificate.isValid())
          return;

        const response = await createAttachedSignature(
          certificate.thumbprint,
          message
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
      const response = await getUserCertificates();

      setCertificates(response);
      setCertificate(response[0]);
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
