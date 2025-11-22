export const Footer = () => {
  return (
    <div className="bg-[#0A1A2F] py-10 px-4 mt-32">

      <div className="flex flex-col items-center max-w-5xl mx-auto gap-6">

        {/* COPYRIGHT */}
        <h1 className="text-2xl font-bold text-center text-white">
          © 2025 Victor Lim Putra. All Rights Reserved.
        </h1>

        {/* NAVIGATION LINK */}
        <div className="flex gap-6 text-white">
          <a href="#beranda" className="hover:text-blue-400 transition-colors">
            Home
          </a>
          <a href="#tentang" className="hover:text-blue-400 transition-colors">
            About Me
          </a>
          <a href="#proyek" className="hover:text-blue-400 transition-colors">
            Project
          </a>
        </div>

       {/* SOCIAL ICONS  */}
<div className="flex gap-4 text-white">
  <a 
    href="https://www.linkedin.com/in/victor-lim-putra-79188728a/?originalSubdomain=id" 
    target="_blank"
    rel="noopener noreferrer"
    className="text-2xl hover:text-blue-400 transition-colors"
  >
    <i className="ri-linkedin-fill"></i> 
  </a>

  <a 
    href="https://github.com/victorl711" 
    target="_blank"
    rel="noopener noreferrer"
    className="text-2xl hover:text-blue-400 transition-colors"
  >
    <i className="ri-github-fill"></i> 
  </a>
</div>
</div>

</div>
 );
};
