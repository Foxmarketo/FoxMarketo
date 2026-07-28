import {
  Monitor, Megaphone, Search, Palette, BarChart3, Share2,
  PenLine, Mail, Video, Image as ImageIcon, Users, Heart,
  Utensils, Wallet, Gem, Car, Newspaper, Baby, Shirt,
  ShoppingCart, ShieldCheck, Sparkles, Briefcase,
} from "lucide-react";

export const SERVICES = [
  { icon: Monitor, title: "Website Development", desc: "Custom, responsive, SEO-ready sites and platforms that turn visitors into customers." },
  { icon: Megaphone, title: "Paid Ads / PPC", desc: "Google & Meta ad campaigns planned, launched, and optimized to maximize your ROI." },
  { icon: Search, title: "Search Engine Optimization", desc: "Keyword research, on-page work, and link building for lasting organic traffic." },
  { icon: Share2, title: "Social Media Management", desc: "Content calendars, community management, influencer outreach, and analytics." },
  { icon: Palette, title: "Graphic & Brand Design", desc: "Logos, social posts, UI/UX, and brand systems that make you stand out." },
  { icon: PenLine, title: "Content Writing & Copy", desc: "Blogs, ad copy, and website content that ranks and converts." },
  { icon: Mail, title: "Email Marketing", desc: "Automated funnels and newsletters that nurture leads into buyers." },
  { icon: Video, title: "Video Editing & YouTube", desc: "Scroll-stopping edits plus full channel management: uploads, thumbnails, SEO, growth." },
  { icon: ImageIcon, title: "Thumbnail & Reels Design", desc: "Click-worthy thumbnails and short-form edits for YouTube, TikTok & Reels." },
  { icon: Users, title: "Influencer & UGC", desc: "Creator partnerships and user-generated content that builds trust." },
  { icon: BarChart3, title: "Marketing Strategy", desc: "Dedicated teams that plan and drive campaigns across every channel that matters." },
  { icon: Sparkles, title: "Conversion Optimization", desc: "Landing pages and funnels tuned to turn more of your traffic into revenue." },
];

export const INDUSTRIES = [
  { icon: Heart, name: "Health & Fitness" },
  { icon: Utensils, name: "Restaurants & Food" },
  { icon: Wallet, name: "Financial Services" },
  { icon: Gem, name: "Jewellery & Retail" },
  { icon: Car, name: "Automotive" },
  { icon: Newspaper, name: "News & Media" },
  { icon: Baby, name: "Baby Care" },
  { icon: Shirt, name: "Apparel & Fashion" },
  { icon: ShoppingCart, name: "E-commerce" },
  { icon: ShieldCheck, name: "Insurance" },
  { icon: Sparkles, name: "Cleaning Services" },
  { icon: Briefcase, name: "Recruitment & SaaS" },
];

export const STEPS = [
  { n: "1", title: "Discover", desc: "We learn your business, goals, and audience to shape the right strategy." },
  { n: "2", title: "Plan", desc: "A tailored roadmap across the channels that move your numbers." },
  { n: "3", title: "Execute", desc: "Our specialists build, launch, and manage every piece for you." },
  { n: "4", title: "Optimize", desc: "We track, report, and refine to keep results climbing." },
];

// From the Fox Marketo Behance portfolio (behance.net/foxmarketo)
// Each card links out to the live project. Thumbnails are Behance's public CDN images.
export const PORTFOLIO = [
  {
    title: "Digital Marketing Agency",
    cat: "Branding & Web",
    url: "https://www.behance.net/gallery/209225925/Digital-Marketing-Agency",
    img: "https://mir-s3-cdn-cf.behance.net/projects/404/6b7bff209225925.Y3JvcCwyMTYwLDE2ODksMCwyMzU.png",
  },
  {
    title: "Recruitment as a Service",
    cat: "Brand Identity",
    url: "https://www.behance.net/gallery/209225097/Recruitment-as-a-Service-Company",
    img: "https://mir-s3-cdn-cf.behance.net/projects/404/c79e78209225097.Y3JvcCwyMTYwLDE2ODksMCwyMzU.png",
  },
  {
    title: "YouTube Thumbnails",
    cat: "Video / Design",
    url: "https://www.behance.net/gallery/208850171/YouTube-Thumbnails",
    img: "https://mir-s3-cdn-cf.behance.net/projects/404/74e71d208850171.Y3JvcCwxNjAwLDEyNTEsMCwxNDI.png",
  },
  {
    title: "Health & Fitness Coach",
    cat: "Social Media",
    url: "https://www.behance.net/gallery/170213737/Social-Media-Posts-for-Health-Fitness-Coach",
    img: "https://mir-s3-cdn-cf.behance.net/projects/404/e8801b170213737.Y3JvcCw5ODMsNzY5LDE1Myww.jpg",
  },
  {
    title: "Cleaning Company",
    cat: "Social Media",
    url: "https://www.behance.net/gallery/170206165/Social-Media-Posts-for-Cleaning-Company",
    img: "https://mir-s3-cdn-cf.behance.net/projects/404/d30fda170206165.Y3JvcCw5ODMsNzY5LDI1Myww.png",
  },
  {
    title: "Restaurant Branding",
    cat: "Social Media",
    url: "https://www.behance.net/gallery/170199363/Social-Media-Posts-Design-for-Restaurant",
    img: "https://mir-s3-cdn-cf.behance.net/projects/404/99c907170199363.Y3JvcCwxOTk5LDE1NjQsMCwyMTc.png",
  },
  {
    title: "Japanese Restaurant",
    cat: "Social Media",
    url: "https://www.behance.net/gallery/170203781/Social-Media-Posts-for-Japanese-Restaurant",
    img: "https://mir-s3-cdn-cf.behance.net/projects/404/5ac35e170203781.Y3JvcCwxOTk5LDE1NjQsMCwyMTc.png",
  },
  {
    title: "Baby Care / Diaper Brand",
    cat: "Social Media",
    url: "https://www.behance.net/gallery/170195175/Social-Media-Post-Design-for-Diaper-Industry",
    img: "https://mir-s3-cdn-cf.behance.net/projects/404/5925bf170195175.Y3JvcCw5ODMsNzY5LDE5LDA.jpg",
  },
  {
    title: "Financial Services",
    cat: "Social Media",
    url: "https://www.behance.net/gallery/170210875/Social-Media-Posts-for-Financial-Service-Company",
    img: "https://mir-s3-cdn-cf.behance.net/projects/404/7331b8170210875.Y3JvcCwxNjAwLDEyNTEsMCwxNzg.jpeg",
  },
  {
    title: "Fast Food (UK)",
    cat: "Social Media",
    url: "https://www.behance.net/gallery/170205517/Social-Media-Post-Design-for-Fast-Food-Restaurant-UK",
    img: "https://mir-s3-cdn-cf.behance.net/projects/404/1c0758170205517.Y3JvcCwxMDgwLDg0NCwwLDExNw.png",
  },
  {
    title: "Jewellery Brand",
    cat: "Social Media",
    url: "https://www.behance.net/gallery/170207177/Social-Media-Posts-for-Jewellery-Brand",
    img: "https://mir-s3-cdn-cf.behance.net/projects/404/8cbc98170207177.Y3JvcCwxMTI1LDg3OSwwLDE1OA.jpeg",
  },
  {
    title: "Physiotherapy Clinic",
    cat: "Social Media",
    url: "https://www.behance.net/gallery/170199787/Social-Media-Posts-Design-for-Physiotherapy-Clinic",
    img: "https://mir-s3-cdn-cf.behance.net/projects/404/554a7c170199787.Y3JvcCw5ODMsNzY5LDE1NSww.png",
  },
];
