export namespace mt {
  export interface typeProjList {
    name: string;
    image: string;
    info: string;
    built: string;
    link: string;
    src: string;
    disabled: [boolean, boolean?];
  }
  export interface typeFooterLinks {
    link: string;
    icon: [string, string];
    title: string;
  }
  export interface typemyCerts {
    idx: string;
    name: string;
    authority: string;
    startDate: [number, number, number];
    endDate: [number, number, number] | null;
    url: string;
  }
}

export default mt;
