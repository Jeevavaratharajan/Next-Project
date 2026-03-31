const readFileAsDataUrl = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

const compressSingleImage = (file) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
      const canvas = document.createElement("canvas");
      const maxWidth = 1100;
      const maxHeight = 1100;
      const widthRatio = maxWidth / image.width;
      const heightRatio = maxHeight / image.height;
      const scale = Math.min(1, widthRatio, heightRatio);
      canvas.width = Math.round(image.width * scale);
      canvas.height = Math.round(image.height * scale);
      const context = canvas.getContext("2d");
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(image.src);
      resolve(canvas.toDataURL("image/webp", 0.55));
    };
    image.onerror = async () => {
      try {
        URL.revokeObjectURL(image.src);
        const fallback = await readFileAsDataUrl(file);
        resolve(fallback);
      } catch (error) {
        reject(error);
      }
    };
    image.src = URL.createObjectURL(file);
  });

export const compressImages = async (files) => {
  const slicedFiles = Array.from(files).slice(0, 4);
  const compressed = await Promise.all(slicedFiles.map((file) => compressSingleImage(file)));
  return compressed;
};
