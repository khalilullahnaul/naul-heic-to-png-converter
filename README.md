# Naul HEIC to PNG Converter

A private, secure, and lossless HEIC to PNG converter that runs entirely in your browser. Created by **[Khalilullah Naul](https://github.com/khalilullahnaul)**.

## Features
- **Local Processing**: No images are ever uploaded to a server. Everything happens on your machine using WebAssembly.
- **Lossless Conversion**: Converts HEIC to PNG with maximum quality.
- **Batch Processing**: Convert multiple images at once.
- **ZIP Download**: Download all converted images in a single ZIP file.
- **Privacy Focused**: Zero telemetry, zero network requests for image data.

## Tech Stack
- **Frontend**: React (Vite)
- **Conversion**: `heic2any` (Client-side library)
- **Zip**: `jszip`

## Setup Instructions

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/khalilullahnaul/naul-heic-to-png-converter.git
    cd naul-heic-to-png-converter
    ```
2.  **Install Dependencies**:
    ```bash
    npm install
    ```
3.  **Start Development Server**:
    ```bash
    npm run dev
    ```
4.  **Build for Production**:
    ```bash
    npm run build
    npm run preview
    ```

## Usage
1.  Open the app in your browser (usually `http://localhost:5173`).
2.  Drag and drop `.heic` or `.heif` files into the drop zone.
3.  Wait for conversion to complete (indicated by ✅).
4.  Download individual files or use the **Download ZIP** button.

## License
MIT
