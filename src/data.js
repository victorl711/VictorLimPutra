import HeroImage from "/assets/fotodiri.jpg";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/visualparadigm.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/canva.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/powerbi.png";
import Tools6 from "/assets/tools/smartpls.png";
import Tools7 from "/assets/tools/java.png";
import Tools8 from "/assets/tools/javaFX.png";
import Tools9 from "/assets/tools/mendix.png";
import Tools10 from "/assets/tools/mysql.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/rapidminer.png";
import Tools13 from "/assets/tools/tableu.png";

export const listTools = [
  { id: 1, gambar: Tools1, nama: "Visual Paradigm", ket: "System Modeling", dad: "100" },
  { id: 2, gambar: Tools2, nama: "React JS", ket: "Web Development", dad: "200" },
  { id: 3, gambar: Tools3, nama: "Canva", ket: "Design", dad: "300" },
  { id: 4, gambar: Tools4, nama: "TailwindCSS", ket: "CSS Framework", dad: "400" },
  { id: 5, gambar: Tools5, nama: "Power BI", ket: "Data Visualization", dad: "500" },
  { id: 6, gambar: Tools6, nama: "SmartPLS", ket: "Statistical Analysis", dad: "600" },
  { id: 7, gambar: Tools7, nama: "Java", ket: "Programming Language", dad: "700" },
  { id: 8, gambar: Tools8, nama: "JavaFX", ket: "Dektop GUI", dad: "800" },
  // { id: 9, gambar: Tools9, nama: "Mendix", ket: "Low-Code Dev", dad: "900" },
  { id: 10, gambar: Tools10, nama: "MySQL", ket: "Database", dad: "1000" },
  { id: 11, gambar: Tools11, nama: "Figma", ket: "UI/UX Design", dad: "1100" },
  { id: 12, gambar: Tools12, nama: "Rapid Miner (Altair Studio)", ket: "Statistical Analysis", dad: "1200" },
  { id: 13, gambar: Tools13, nama: "Tableu", ket: "Data Visualization", dad: "1300" }
];

import Proyek1 from "/assets/proyek/DineOrder.png";
import Proyek2 from "/assets/proyek/LMS.png";
import Proyek3 from "/assets/proyek/Database.png";
import Proyek4 from "/assets/proyek/paperISAD.png";
import Proyek5 from "/assets/proyek/BRM.png";
import Proyek6 from "/assets/proyek/Oursmate.png";
import Proyek7 from "/assets/proyek/BPA.png";
import Proyek8 from "/assets/proyek/HaiDine.png";
import Proyek9 from "/assets/proyek/WarungQ.png";


export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "DineOrder",
    kategori: "Application Development",
    desk: "DineOrder is a JavaFX-based desktop application utilizing MVC architecture to streamline restaurant operations through efficient order recording, monitoring, and tracking.",
    tools: ["JavaFX", "CSS"],
    dad: "200",
    link: "https://github.com/victorl711/DineOrder",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Improving BINUSMAYA LMS",
    kategori: "Application Development",
    desk: "A UX research and redesign project for the BinusMaya LMS website, focusing on optimizing the dashboard, to-do list features, and assignment submission flow using Design Thinking methodology",
    tools: ["Figma", "Google Forms", "Canva", "Spreadsheets"],
    dad: "300",
    link: "https://drive.google.com/file/d/1_h1RIM6dLPnIwwqdbqU4xlQdhGufRunQ/view?usp=sharing",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Bonheur Cafe Database System",
    kategori: "Application Development",
    desk: "A comprehensive relational database project featuring normalization (1NF-3NF), ER modeling, and complex SQL implementation (DDL & DML) to manage cafe transactions and sales analysis.",
    tools: ["SQL Server", "Visual Paradigm", "Database Design"],
    dad: "400",
    link: "https://drive.google.com/file/d/1cAa4VvawUNdS0Gx1TxKwDvWVmWQw1SKU/view?usp=sharing",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Research papper (Pet Care Services on Demand)",
    kategori: "System Modeling",
    desk: "A mobile application platform designed using the Double Diamond methodology to streamline veterinary and grooming appointment scheduling, featuring automated booking and digital payment integration.",
    tools: ["Visual Paradigm", "Double Diamond Methodology", "UI/UX Design"],
    dad: "500",
    link: "https://drive.google.com/file/d/1mX1UZBHDydS7HFkEYJPW2wDkTI2todR0/view?usp=sharing",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Research papper (E-Commerce Loyalty & Satisfaction)",
    kategori: "Business Analysis",
    desk: "A quantitative study analyzing the impact of brand image, perceived value, and system quality on e-satisfaction and e-loyalty among 244 e-commerce users using SmartPLS analysis.",
    tools: ["SmartPLS", "Quantitative Method", "PLS-SEM"],
    dad: "600",
    link: "https://drive.google.com/file/d/1VMavrHrPU71zKCehGUkMoaVp949z47DG/view?usp=sharing",
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "Ours Mate: AI based Mental Health App Concept & Business Plan",
    kategori: "Business Analysis",
    desk: "A comprehensive business proposal and concept for a mental health application designed to commercialize emerging technologies like AI and VR for Gen Z users.",
    tools: ["Business Model Canvas", "SWOT Analysis", "Financial Projection"],
    dad: "700",
    link: "https://drive.google.com/file/d/1QYHukNXryuDhEDnYD4bwgzLLfD5TQrgP/view?usp=sharing",
  },
  {
    id: 7,
    gambar: Proyek7,
    nama: "Bank BRI Business Performance Analytics Report",
    kategori: "Business Analysis",
    desk: "A comprehensive performance analysis of PT Bank Rakyat Indonesia (Persero) Tbk using departmental KPIs, Balanced Scorecard, and Risk Analysis, supported by Power BI dashboard visualizations to drive digital transformation and financial inclusion",
    tools: ["Power BI", "Balanced Scorecard", "KPI Analysis", "Risk Management"],
    dad: "800",
    link: "https://drive.google.com/file/d/15v8oTduZ9acJNNvh9p_24c4RUXcBDuUz/view?usp=drive_link",
  },
{
    id: 8,
    gambar: Proyek8,
    nama: "HaiDine: Hotpot Home Service System Analysis & Design",
    kategori: "System Modeling",
    desk: "A comprehensive system analysis and design for a premium hotpot delivery platform. This project involves end-to-end UML modeling, including Activity Diagrams, Use Case specifications, and Domain Model Class Diagrams to bridge the gap between business requirements and technical implementation",
    tools: ["Visual Paradigm", "UML Modeling", "System Analysis", "Business Process Mapping"],
    dad: "900",
    link: "https://drive.google.com/file/d/1AQGrmAecJ7cZc9UfAS5NLxVvI_2hGVaZ/view?usp=sharing",
  },
{
    id: 9,
    gambar: Proyek9,
    nama: "WarungQ: Advanced Culinary Management System",
    kategori: "System Modeling",
    desk: "An advanced end-to-end system design for 'WarungQ', a mobile platform optimizing SME operations. This project involves complex architectural modeling, including Three-Layer Sequence Diagrams, CRC Cards, and Database Design to bridge business requirements with robust technical implementation",
    tools: ["Visual Paradigm", "UML Modeling", "System Architecture", "Database Design"],
    dad: "1000",
    link: " https://drive.google.com/file/d/1Hmk-C61Qnh0318KuzsslQPrUK4x3SBSZ/view?usp=sharing",
  },
];