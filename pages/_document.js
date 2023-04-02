import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="fr">
        {" "}
        {/* Remplacez 'fr' par le code de langue approprié */}
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="canonical" href="https://naitreensemble.netlify.app" />
          <meta
            name="google-site-verification"
            content="OqJtjzEEWYIb7ULttXVLJ2DYMO2e_aWepXJ_xK2F0dU"
          />
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
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta property="og:title" content="Naitre ensemble" />
          <meta
            property="og:description"
            content="Accompagnement pour femmes & couples pendant grossesse, accouchement & post-partum. Profitez d'une personne ressource pour vivre ces moments avec sérénité."
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://www.naitreensemble.fr/img/logo.png"
          />
          <meta property="og:url" content="https://www.naitreensemble.fr" />
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
