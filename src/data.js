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

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Paradigm",
    ket: "System Modeling",
    dad: "100",
  },
   {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Web Development",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Canva",
    ket: "Design",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "TailwindCSS",
    ket: "CSS Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Power BI",
    ket: "Data Visualization",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "SmartPLS",
    ket: "Statistical Analysis",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Java",
    ket: "Programming Language",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "JavaFX",
    ket: "Dektop GUI",
    dad: "800",
  },
   {
    id: 9,
    gambar: Tools9,
    nama: "Mendix",
    ket: "Low-Code Dev",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "MySQL",
    ket: "Database",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "UI/UX Design",
    dad: "1100",
  },
];

import Proyek1 from "/assets/proyek/DineOrder.png";
import Proyek2 from "/assets/proyek/LMS.png";
import Proyek3 from "/assets/proyek/Database.png";
import Proyek4 from "/assets/proyek/paperISAD.png";
import Proyek5 from "/assets/proyek/BRM.png";
import Proyek6 from "/assets/proyek/Oursmate.png";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "DineOrder",
    desk: "DineOrder is a JavaFX-based desktop application utilizing MVC architecture to streamline restaurant operations through efficient order recording, monitoring, and tracking.",
    tools: ["JavaFX", "CSS",],
    dad: "200",
    link: "https://github.com/victorl711/DineOrder",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Improving BINUSMAYA LMS",
    desk: "A UX research and redesign project for the BinusMaya LMS website, focusing on optimizing the dashboard, to-do list features, and assignment submission flow using Design Thinking methodology",
    tools: ["Figma", "Google Forms","Canva","Spreadsheets"],
    dad: "300",
    link: "https://drive.google.com/file/d/1_h1RIM6dLPnIwwqdbqU4xlQdhGufRunQ/view?usp=sharing"
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Bonheur Cafe Database System",
    desk: "A comprehensive relational database project featuring normalization (1NF-3NF), ER modeling, and complex SQL implementation (DDL & DML) to manage cafe transactions and sales analysis.",
    tools: ["SQL Server", "Visual Paradigm", "Database Design"],
    dad: "400",
     link: "https://drive.google.com/file/d/1cAa4VvawUNdS0Gx1TxKwDvWVmWQw1SKU/view?usp=sharing"
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Research papper (Pet Care Services on Demand)",
    desk: "A mobile application platform designed using the Double Diamond methodology to streamline veterinary and grooming appointment scheduling, featuring automated booking and digital payment integration.",
    tools: ["Visual Paradigm", "Double Diamond Methodology", "UI/UX Design"],
    dad: "500",
    link: "https://drive.google.com/file/d/1mX1UZBHDydS7HFkEYJPW2wDkTI2todR0/view?usp=sharing"
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Research papper (E-Commerce Loyalty & Satisfaction)",
    desk: "A quantitative study analyzing the impact of brand image, perceived value, and system quality on e-satisfaction and e-loyalty among 244 e-commerce users using SmartPLS analysis.",
    tools: ["SmartPLS", "Quantitative Method", "PLS-SEM"],
    dad: "600",
     link: "https://drive.google.com/file/d/1VMavrHrPU71zKCehGUkMoaVp949z47DG/view?usp=sharing"
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "Ours Mate: AI based Mental Health App Concept & Business Plan",
    desk: "A comprehensive business proposal and concept for a mental health application designed to commercialize emerging technologies like AI and VR for Gen Z users.",
    tools: ["Business Model Canvas","SWOT Analysis", "Financial Projection"],
    dad: "700",
    link: "https://drive.google.com/file/d/1QYHukNXryuDhEDnYD4bwgzLLfD5TQrgP/view?usp=sharing"
  },
];
