import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-white dark:bg-gray-900 scrollbar-thumb-brown-500 scrollbar-track-gray-100 dark:scrollbar-track-gray-900 scrollbar-thin scrollbar-rounded-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
