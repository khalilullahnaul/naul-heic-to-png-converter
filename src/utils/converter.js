import heic2any from 'heic2any';

export async function convertHeicToPng(file) {
  try {
    const blob = await heic2any({
      blob: file,
      toType: 'image/png',
      quality: 1, // Max quality
    });

    // heic2any can return an array if multiple images are in the HEIC, or a single blob.
    // We'll normalize to an array but for now just handle the first one or single blob.
    const blobs = Array.isArray(blob) ? blob : [blob];
    
    // Create specific return object
    return blobs.map((b, i) => ({
      blob: b,
      name: file.name.replace(/\.(heic|heif)$/i, '') + (blobs.length > 1 ? `-${i+1}` : '') + '.png',
      url: URL.createObjectURL(b)
    }));

  } catch (error) {
    console.error('Conversion failed:', error);
    throw error;
  }
}
