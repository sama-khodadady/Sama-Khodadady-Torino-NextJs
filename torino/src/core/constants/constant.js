//nav menu list items
const navList = [
  { title: "صفحه اصلی", href: "/", icon: "home" },
  { title: "خدمات گردشگری", href: "/services", icon: "aiplaneSquar" },
  { title: "درباره ما", href: "/about-us", icon: "volume" },
  { title: "تماس با ما", href: "/contact-us", icon: "phoneRegular" },
];

//slider images list
const sliderImages = [
  { id: 1, src: "/images/R (1).png", width: 389, height: 479, alt: "img1" },
  { id: 2, src: "/images/OIP (8).png", width: 389, height: 479, alt: "img2" },
  {
    id: 3,
    src: "/images/car-4260033_1280.png",
    width: 389,
    height: 479,
    alt: "img3",
  },
  { id: 4, src: "/images/image_SI3.png", width: 389, height: 479, alt: "img4" },
];

//footer features list & images
const featureImages = [
  {
    id: 1,
    src: "/images/percent.png",
    width: 121.42,
    height: 109.03,
    alt: "percent-icon",
    title: "بصرفه ترین قیمت",
    description: "بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.",
  },
  {
    id: 2,
    src: "/images/message.png",
    width: 109.03,
    height: 99.12,
    alt: "message-icon",
    title: "پشتیبانی",
    description: "پشتیبانی و همراهی 24 ساعته در تمامی مراحل سفر شما.",
  },
  {
    id: 3,
    src: "/images/heart.png",
    width: 104.08,
    height: 104.08,
    alt: "heart-icon",
    title: "رضایت کاربران",
    description: "رضایت بیش از 10هزار کاربر از تور های ما.",
  },
];

//tour feature items
const tourFeatures = [
  { id: 1, icon: "userTick", title: "تورلیدر از مبدا" },
  { id: 2, icon: "map", title: "برنامه سفر" },
  { id: 3, icon: "medalStar", title: "تضمین کیفیت" },
];

//dashboard sidebar list
const dashboardSidebarList = [
  { id: 1, href: "/dashboard", title: "پروفایل", icon: "profile" },
  { id: 2, href: "/dashboard/my-tours", title: "تور های من", icon: "sunSolid" },
  {
    id: 3,
    href: "/dashboard/transactions",
    title: "تراکنش ها",
    icon: "convertCard",
  },
];

//footer images list
const footerImages = [
  { id: 1, src: "/images/aira.png", width: 68, height: 74, alt: "aira-logo" },
  {
    id: 2,
    src: "/images/samandehi.png",
    width: 68,
    height: 74,
    alt: "aira-logo",
  },
  {
    id: 3,
    src: "/images/ecunion.png",
    width: 68,
    height: 74,
    alt: "aira-logo",
  },
  {
    id: 4,
    src: "/images/passenger-rights.svg",
    width: 71,
    height: 74,
    alt: "aira-logo",
  },
  {
    id: 5,
    src: "/images/airline.svg",
    width: 78,
    height: 74,
    alt: "aira-logo",
  },
];

export {
  navList,
  sliderImages,
  featureImages,
  tourFeatures,
  footerImages,
  dashboardSidebarList,
};
