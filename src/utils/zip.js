import JSZip from 'jszip';
// import { saveAs } from 'file-saver'; // We might need file-saver, wait, I didn't install it. 
// Actually I can just use a simple anchor download for the zip blob.

export async function downloadZip(files) {
    const zip = new JSZip();

    files.forEach(file => {
        if (file.status === 'done' && file.result) {
            // file.result is { blob, name, url } form logic
            // actually the converted result might be an array of files if multi-page. 
            // We'll assume flattened list in UI or handle here.
            // Let's assume input is list of "ConvertedFile" objects which contain a blob.
            zip.file(file.result.name, file.result.blob);
        }
    });

    const content = await zip.generateAsync({ type: 'blob' });

    // Trigger download
    const url = URL.createObjectURL(content);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'converted_images.zip';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
