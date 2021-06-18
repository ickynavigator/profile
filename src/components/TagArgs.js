import { useLocation } from "react-router-dom";
import TagManager from "react-gtm-module";

const TagArgs = () => {
  const location = useLocation();
  TagManager.dataLayer({
    dataLayer: {
      page: location,
    },
    dataLayerName: "PageDataLayer",
  });
};

export default TagArgs;
