import { useLocation } from "react-router-dom";
import TagManager from "react-gtm-module";
import { Helmet } from "react-helmet";
import { tagManagerID } from "../Constants";

const TagArgs = () => {
  const location = useLocation();
  console.log(location);
  TagManager.dataLayer({
    dataLayer: {
      page: location,
    },
    dataLayerName: "PageDataLayer",
  });
  return (
    <>
      <Helmet>
        <script>
          {(function (w, d, s, l, i) {
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

export default TagArgs;
