# Naul HEIC to PNG Converter

A modern, privacy-first web application for converting HEIC images to PNG format. All conversions happen locally in your browser - your files never leave your device.

![Terminal Icon](public/favicon.svg)

## ✨ Features

### Core Functionality
- 🔒 **100% Private & Secure** - All processing happens locally in your browser
- ⚡ **Blazing Fast** - Instant conversion without server uploads
- 🎨 **Lossless Quality** - Maintains original image quality
- 📦 **Batch Conversion** - Convert multiple files at once
- 📥 **ZIP Download** - Download all converted images as a single ZIP file
- 🌐 **Works Offline** - Once loaded, works without internet connection

### SEO & Pages
- 🗺️ **XML Sitemap** - Optimized for search engines at `/sitemap.xml`
- 🤖 **Robots.txt** - Configured for Google and AI crawlers
- 📄 **About Page** - Comprehensive information about HEIC conversion
- 🔐 **Privacy Policy** - Detailed privacy commitment
- 📋 **Terms of Service** - Clear usage terms
- 🎯 **SEO Optimized** - Targeting "Free HEIC to PNG converter" with meta tags, Open Graph, Twitter Cards, and JSON-LD structured data

### Design & UX
- 📱 **Fully Responsive** - Works on desktop, tablet, and mobile
- 🎭 **Modern UI** - Beautiful glassmorphism design with smooth animations
- 🧭 **Easy Navigation** - Header and footer on all pages with mobile menu
- ♿ **Accessible** - Semantic HTML and ARIA labels

## 🛠️ Tech Stack

- **React 19** - Modern UI framework
- **React Router** - Client-side routing
- **React Helmet Async** - SEO meta tags management
- **Vite** - Fast build tool and dev server
- **heic2any** - HEIC to PNG conversion library
- **JSZip** - ZIP file creation for batch downloads

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/khalilullahnaul/naul-heic-to-png-converter.git
cd naul-heic-to-png-converter
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
naul-heic-to-png-converter/
├── public/
│   ├── robots.txt          # Search engine directives
│   ├── sitemap.xml         # XML sitemap for SEO
│   └── favicon.svg         # Site icon
├── src/
│   ├── components/
│   │   ├── Header.jsx      # Navigation header
│   │   ├── Footer.jsx      # Site footer
│   │   ├── DropZone.jsx    # File upload component
│   │   └── FileList.jsx    # Conversion queue display
│   ├── pages/
│   │   ├── HomePage.jsx    # Main converter page
│   │   ├── AboutPage.jsx   # About page with FAQ
│   │   ├── PrivacyPage.jsx # Privacy policy
│   │   └── TermsPage.jsx   # Terms of service
│   ├── utils/
│   │   ├── converter.js    # HEIC to PNG conversion logic
│   │   └── zip.js          # ZIP file creation
│   ├── Router.jsx          # Route definitions
│   ├── index.css           # Global styles
│   └── main.jsx            # App entry point
├── .npmrc                  # npm configuration
└── package.json            # Dependencies and scripts
```

## 🎯 SEO Features

This application is optimized for search engines and AI crawlers:

- **Target Keyword**: "Free HEIC to PNG converter"
- **Meta Tags**: Comprehensive title, description, and keywords
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Enhanced Twitter sharing
- **JSON-LD Structured Data**: Organization, SoftwareApplication, and FAQPage schemas
- **Sitemap**: XML sitemap with all pages
- **Robots.txt**: Configured for Google, Bing, and AI crawlers (GPTBot, Claude-Web, CCBot, etc.)

## 🔐 Privacy

Your privacy is our top priority:

- ✅ All conversions happen in your browser
- ✅ No files are uploaded to any server
- ✅ No data collection or tracking
- ✅ No accounts or registration required
- ✅ Works completely offline after initial load

Read our full [Privacy Policy](https://naul-heic-to-png-converter.vercel.app/privacy) for details.
## Usage
1.  Open the app in your browser (usually `http://localhost:5173`).
2.  Drag and drop `.heic` or `.heif` files into the drop zone.
3.  Wait for conversion to complete (indicated by ✅).
4.  Download individual files or use the **Download ZIP** button.

## License
MIT
