import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";

export namespace mt {
  export interface typeProjList {
    /** Project Name */
    name: string;
    /** Project Image - link */
    image: string;
    /** Project Info */
    info: string;
    /** Project Built with */
    built: string;
    /** Link to Project */
    link: string;
    /** Link to Project Code
     *
     * Leave Empty to hide button */
    src: string;
    /** false to hide
     *
     * [[project link] [Code link]]*/
    active: [boolean, boolean?];
  }
  export interface typeFooterLinks {
    link: string;
    icon: [IconPrefix, IconName];
    title: string;
  }
  export interface typeCerts {
    idx: string;
    name: string;
    authority: string;
    startDate: [number, number, number];
    endDate: [number, number, number] | null;
    url: string;
  }
  export interface typeNavMenuLinks {
    title: string;
    link: string;
  }
}

export default mt;
