import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-blue-gray-50 dark:bg-gray-900">
        <Main />
        <NextScript />
    
        <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer></script>
      </body>
    </Html>
  );
}
