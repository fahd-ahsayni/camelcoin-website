import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import { motion } from 'framer-motion';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function PdfViewer() {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function renderAllPages() {
    let pages = [];
    for (let i = 1; i <= numPages; i++) {
      pages.push(
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Page
            className="py-8 bg-blue-gray-50 dark:bg-gray-900"
            renderAnnotationLayer={false}
            renderInteractiveForms={false}
            renderTextLayer={false}
            pageNumber={i}
          />
        </motion.div>
      );
    }
    return pages;
  }

  return (
    <div className="mt-28 flex justify-center items-center">
      <div className="bg-gray-50 h-full">
        <Document
          file={`/sample.pdf`}
          onLoadSuccess={onDocumentLoadSuccess}
          renderMode="canvas"
          className="bg-blue-gray-50 dark:bg-gray-900"
        >
          {renderAllPages()}
        </Document>
      </div>
    </div>
  );
}
