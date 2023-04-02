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
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
