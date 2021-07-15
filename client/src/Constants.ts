interface typeProjList {
  name: string;
  image: string;
  info: string;
  built: string;
  link: string;
  src: string;
  disabled: [boolean, boolean?];
}
interface typeFooterLinks {
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

// links start from public/assets/
// do not remove any value from this file

// index.js
export const tagManagerID: string = "GTM-NVKR37B";

// Home Page
export const ownerName: string = "OBI FORTUNE DUBEM";
export const ownerPic: string = "images/myPic.jpg"; //link
export const ownerTitle: string = "Student / Web developer";

// About Page
// to make cv dissapear empty the array
export const AboutDetails: string[] = [
  "I’m an IT student in my third year, studying Information & Technology, at Eastern Mediterranean University in Northern Cyprus.",
  "I am passionate about Web development and currently I am learning TypeScript. I like to practice my skills on sites like Code wars, CSS battle and Try Hack Me.",
  "I am currently seeking internship opportunities to help me harness and develop my skills in these areas.",
];
export const cvLocation: string = "cv.pdf"; //link

// Projects Page
// image attribute is link
export const ProjList: typeProjList[] = [
  {
    name: "Raneda Hair and Makeup",
    image: "images/raneda.png",
    info: "An Ecommerce Website",
    built: "MongoDB, Express, React JS and Node",
    link: "https://raneda.herokuapp.com/",
    src: "https://github.com/ickynavigator/raneda",
    disabled: [false, false],
  },
  {
    name: "Recipe Management",
    image: "images/327Project.png",
    info: "A website showcasing recipes and managing the Recipes.",
    built: "PHP",
    link: "https://itec327-termproject.herokuapp.com/",
    src: "https://github.com/ickynavigator/itec327-termproject",
    disabled: [false, false],
  },
  {
    name: "Personal Website/Portfolio",
    image: "images/profile.png",
    info: "The Website you are currently on 😂.",
    built: "ReactJS and Netlify AWS Lambda functions",
    link: "#",
    src: "https://github.com/ickynavigator/profile",
    disabled: [false, false],
  },
];

// Footer
export const FooterLinks: typeFooterLinks[] = [
  {
    link: "https://github.com/ickynavigator",
    icon: ["fab", "github"],
    title: "Github",
  },
  // {
  //   link: "https://twitter.com/obifortunebleh",
  //   icon: ["fab", "twitter"],
  //   title: "Twitter",
  // },
  {
    link: "https://www.linkedin.com/in/obifortune/",
    icon: ["fas", "code"],
    title: "Site Source Code",
  },
  {
    link: "https://www.linkedin.com/in/obifortune/",
    icon: ["fab", "linkedin-in"],
    title: "Linkedin",
  },
  {
    link: "https://www.facebook.com/obi.fortune2",
    icon: ["fab", "facebook"],
    title: "Facebook",
  },
];

// Navbar
// dont change this unless you are adding new routes
export const navMenuLinks: [string, string][] = [
  ["/projects", "Projects"],
  ["/about", "About"],
  ["/", "Home"],
  ["/contact", "Contact"],
  ["/certificates", "Certificates"],
];

// Certificates
// dates are [dd, mm, yyyy]
export const myCerts: typemyCerts[] = [
  {
    idx: "UC-802b3921-e0fa-43d5-8e58-cdb423644f01",
    name: "MERN eCommerce From Scratch",
    authority: "Udemy",
    startDate: [0, 3, 2021],
    endDate: null,
    url: "ude.my/UC-802b3921-e0fa-43d5-8e58-cdb423644f01/",
  },
  {
    idx: "16291fea81bc4aa8b162a039adceb772",
    name: "JavaScript and Node.js",
    authority: "TestDome",
    startDate: [0, 7, 2021],
    endDate: null,
    url: "https://app.testdome.com/cert/16291fea81bc4aa8b162a039adceb772",
  },
];