import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="fr">
        {" "}
        {/* Remplacez 'fr' par le code de langue approprié */}
        <Head>
          {/* Ajoutez les balises meta et autres éléments du head ici */}
        </Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-QQ7J5GJ3GY"
        />
        <script>
          window.dataLayer = window.dataLayer || []; function gtag()
          {/* rome-ignore lint/style/noArguments: <explanation> */}
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-QQ7J5GJ3GY');
        </script>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
