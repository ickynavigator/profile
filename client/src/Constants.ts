/** items with - link start from public/assets/ */
import { mt } from "./myTypes";

/** Google tag manager */
export const tagManagerID: string = "GTM-NVKR37B";
/** Name Of the Owner */
export const ownerName: string = "OBI FORTUNE DUBEM";
/** Home page link of the Owner - link */
export const ownerPic: string = "images/myPic.jpg";
/** Title of the Owner */
export const ownerTitle: string = "Student / Web developer";
/** CV link of the Owner - link */
export const cvLocation: string = "cv.pdf";
/** CV link of the Owner - link */
export const twitterUsername: string = "obifortunebleh";
/** About Details for the User.
 *
 * New Lines are separated into different array inputs */
export const aboutDetails: string[] = [
  "I’m an IT student in my third year, studying Information & Technology, at Eastern Mediterranean University in Northern Cyprus.",
  "I am passionate about Web development and currently I am learning TypeScript. I like to practice my skills on sites like Frontend Mentor Code wars, CSS battle and Try Hack Me.",
  "I am currently seeking internship opportunities to help me harness and develop my skills in these areas.",
];
/** Project Details */
export const projList: mt.typeProjList[] = [
  {
    name: "Raneda Hair and Makeup",
    image: "raneda.png",
    info: "An Ecommerce Website",
    built: "MongoDB, Express, React JS and Node",
    link: "https://raneda.herokuapp.com/",
    src: "https://github.com/ickynavigator/raneda",
    active: [true, true],
  },
  {
    name: "Recipe Management",
    image: "327Project.png",
    info: "A website showcasing recipes and managing the Recipes.",
    built: "PHP",
    link: "https://itec327-termproject.herokuapp.com/",
    src: "https://github.com/ickynavigator/itec327-termproject",
    active: [true, true],
  },
  {
    name: "Personal Website/Portfolio",
    image: "profile.png",
    info: "The Website you are currently on 😂.",
    built: "ReactJS and Netlify AWS Lambda functions",
    link: "#",
    src: "https://github.com/ickynavigator/profile",
    active: [true, true],
  },
  {
    name: "Frontend Mentor - Tip Calculator app",
    image: "fm-TCA.png",
    info: "A tip Calculator application",
    built: "HTML, CSS AND JS",
    link: "https://ickynavigator.github.io/fm-tip-calculator-app/",
    src: "https://github.com/ickynavigator/fm-tip-calculator-app",
    active: [true, true],
  },
];
/** Footer Links */
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
/** Navbar Links */
export const navMenuLinks: mt.typeNavMenuLinks[] = [
  { title: "Projects", link: "/projects" },
  { title: "About", link: "/about" },
  { title: "Home", link: "/" },
  { title: "Contact", link: "/contact" },
  { title: "Certificates", link: "/certificates" },
];
/** Certificates */
export const myCerts: mt.typeCerts[] = [
  {
    idx: "UC-802b3921-e0fa-43d5-8e58-cdb423644f01",
    name: "MERN eCommerce From Scratch",
    authority: "Udemy",
    authorityImg:
      "https://media-exp1.licdn.com/dms/image/C4D0BAQFQr9e68bBOPQ/company-logo_100_100/0/1626275253364?e=1634774400&v=beta&t=-5_IWM801sji0lSjumo2Sr5WwNkovNANqOc6wGzXUR0",
    startDate: [2021, 3],
    endDate: null,
    url: "https://www.udemy.com/certificate/UC-802b3921-e0fa-43d5-8e58-cdb423644f01/",
  },
  {
    idx: "16291fea81bc4aa8b162a039adceb772",
    name: "JavaScript and Node.js",
    authority: "TestDome",
    authorityImg:
      "https://media-exp1.licdn.com/dms/image/C4E0BAQGybnEADjiqUg/company-logo_100_100/0/1546945897308?e=1634774400&v=beta&t=sv8ykE8zA4bu7dbzvB8Ld4Q9_WVN03Vua0kLuJDhSIg",
    startDate: [2021, 7],
    endDate: null,
    url: "https://app.testdome.com/cert/16291fea81bc4aa8b162a039adceb772",
  },
];
/** SEO Tags */
export const seoTags: mt.typeSeo = {
  title: "Obi Fortune",
  description: "Obi Fortune Personal Portfolio",
  keyword: "portfolio, javascript, typescript, developer",
  image: "https://obifortune.tech/assets/images/logo512.png",
  url: "https://obifortune.tech",
};
