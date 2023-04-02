import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="fr">
        {" "}
        {/* Remplacez 'fr' par le code de langue approprié */}
        <Head>
          {/* Google tag (gtag.js) */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-QQ7J5GJ3GY"
          />
          <script
            // rome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-QQ7J5GJ3GY');
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
