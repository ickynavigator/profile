import { mt } from "./myTypes";
// items with - link start from public/assets/

export const tagManagerID: string = "GTM-NVKR37B";

/** Name Of the Owner */
export const ownerName: string = "OBI FORTUNE DUBEM";
/** Home page link of the Owner - link */
export const ownerPic: string = "images/myPic.jpg";
/** Title of the Owner */
export const ownerTitle: string = "Student / Web developer";
/** About Details for the User.
 *
 * New Lines are separated into different array inputs*/
export const aboutDetails: string[] = [
  "I’m an IT student in my third year, studying Information & Technology, at Eastern Mediterranean University in Northern Cyprus.",
  "I am passionate about Web development and currently I am learning TypeScript. I like to practice my skills on sites like Code wars, CSS battle and Try Hack Me.",
  "I am currently seeking internship opportunities to help me harness and develop my skills in these areas.",
];
/** CV link of the Owner - link
 *
 * Leave empty to remove cv button
 */
export const cvLocation: string = "cv.pdf";
export const projList: mt.typeProjList[] = [
  {
    name: "Raneda Hair and Makeup",
    image: "images/raneda.png",
    info: "An Ecommerce Website",
    built: "MongoDB, Express, React JS and Node",
    link: "https://raneda.herokuapp.com/",
    src: "https://github.com/ickynavigator/raneda",
    active: [true, true],
  },
  {
    name: "Recipe Management",
    image: "images/327Project.png",
    info: "A website showcasing recipes and managing the Recipes.",
    built: "PHP",
    link: "https://itec327-termproject.herokuapp.com/",
    src: "https://github.com/ickynavigator/itec327-termproject",
    active: [true, true],
  },
  {
    name: "Personal Website/Portfolio",
    image: "images/profile.png",
    info: "The Website you are currently on 😂.",
    built: "ReactJS and Netlify AWS Lambda functions",
    link: "#",
    src: "https://github.com/ickynavigator/profile",
    active: [true, true],
  },
];

// Footer
export const footerLinks: mt.typeFooterLinks[] = [
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

/**
 * Navbar links
 *
 * no need to change this unless you are adding new routes
 */
export const navMenuLinks: mt.typeNavMenuLinks[] = [
  { title: "Projects", link: "/projects" },
  { title: "About", link: "/about" },
  { title: "Home", link: "/" },
  { title: "Contact", link: "/contact" },
  // { title: "Certificates", link: "/certificates" },
];

// Certificates
// dates are [dd, mm, yyyy]
export const myCerts: mt.typeCerts[] = [
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
