export const getUploadFile = (
  e: React.ChangeEvent<HTMLInputElement>
): File | null => {
  return e.target.files?.[0] ?? null;
};

export const convertFileToArrayBuffer = async (
  file: File | null
): Promise<ArrayBuffer | null> => {
  try {
    if (!file) return null;
    const blob = new Blob([file]);
    return await blob.arrayBuffer();
  } catch (e) {
    console.error("No files in input. Select file!");

    return null;
  }
};

export const convertUploadFileToArrayBuffer = async (
  e: React.ChangeEvent<HTMLInputElement>
): Promise<ArrayBuffer | null> => {
  try {
    return convertFileToArrayBuffer(getUploadFile(e));
  } catch (e) {
    console.error("No files in input. Select file!");

    return null;
  }
};
