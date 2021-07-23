import { Helmet } from "react-helmet";
import { tagManagerID } from "../Constants";

interface childProps {
  title?: string;
  description?: string;
  keyword?: string;
  image?: string;
  url?: string;
}
const SiteHelmet: React.FC<childProps> = (
  { title, description, keyword, image, url } = {
    title: "Obi Fortune",
    description: "Obi Fortune Personal Portfolio",
    keyword: "portfolio, javascript, typescript, developer",
    image: "https://obifortune.tech/assets/images/myPic.jpg",
    url: "https://obifortune.tech",
  }
) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keyword" content={keyword} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />

        <script>
          {(function (w: any, d: Document, s: any, l: any, i: any): any {
            w[l] = w[l] || [];
            w[l].push({
              "gtm.start": new Date().getTime(),
              event: "gtm.js",
            });
            var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s),
              dl = l !== "dataLayer" ? "&l=" + l : "";
            j.async = true;
            j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
            f.parentNode.insertBefore(j, f);
          })(window, document, "script", "dataLayer", tagManagerID)}
        </script>
      </Helmet>

      <>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${tagManagerID}}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          ></iframe>
        </noscript>
      </>
    </>
  );
};
export default SiteHelmet;
