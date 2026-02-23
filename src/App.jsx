import React, { useState } from "react";
import DataImage from "./data";
import { listTools, listProyek } from "./data";

function App() {
  // 1. State untuk kategori yang dipilih
  const [filter, setFilter] = useState("All");

  // 2. Daftar Kategori untuk Menu
  const categories = ["All", "Business Analysis", "System Modeling", "Application Development"];

  // 3. Logika Filter
  const filteredProyek = filter === "All" 
    ? listProyek 
    : listProyek.filter((p) => p.kategori === filter);

  return (
    <>
      {/* Home Section */}
      <div className="hero grid lg:grid-cols-[1fr_400px] pt-10 xl:gap-0 gap-6 grid-cols-1 items-center">
        <div className="animate__animated animate__fadeInUp animate__delay-3s order-2 lg:order-1">
          <div className="flex space-x-2">
            <div className="flex items-center gap-3 mb-6 text-[#9F7BFF] bg-[#11243D] hover:bg-[#7C4DFF]/20 w-fit p-4 rounded-2xl border border-[#7C4DFF]/50">
              <p>Product Manager</p>
            </div>
            <div className="flex items-center gap-3 mb-6 text-[#9F7BFF] bg-[#11243D] hover:bg-[#7C4DFF]/20 w-fit p-4 rounded-2xl border border-[#7C4DFF]/50">
              <p>Business Analyst</p>
            </div>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Hi, I'm Victor Lim Putra</h1>
          <p className="text-base/loose opacity-60">
            Undergraduate Double Degree student in Digital Business Innovation (Information Systems and Entrepreneurship)
          </p>
          <p className="text-base/loose mb-6 opacity-60">passionate about driving business growth through digital innovation and data analytics.</p>

          <div className="flex items-center sm:gap-4 gap-2">
            <a href="https://drive.google.com/file/d/1VfxB_SpN6pv968msX7RpDso_9fFvmZMi/view" target="_blank" rel="noopener noreferrer" className="bg-[#7C4DFF] p-4 rounded-2xl hover:bg-[#9F7BFF] transition">
              <i className="ri-eye-line"></i> View My CV
            </a>
            <a href="#proyek" className="bg-[#1A2F4A] p-4 rounded-2xl hover:bg-[#224A72] border border-[#1E3B58] transition">
              See Project <i className="ri-arrow-down-s-line ri-lg"></i>
            </a>
            <a href="#kontak" className="bg-[#1A2F4A] p-4 rounded-2xl hover:bg-[#224A72] border border-[#1E3B58] transition">
              <i className="ri-mail-line ri-lg"></i> Contact me
            </a>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="Hero Image" className="w-full max-w-lg mx-auto lg:max-w-none lg:h-[500px] object-cover rounded-md animate__animated animate__fadeInUp animate__delay-4s order-1 lg:order-2 lg:justify-self-end" loading="lazy" />
      </div>

      {/* About Me Section */}
      <div className="tentang mt-32 py-10 px-4" id="tentang">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[400px_1fr] grid-cols-1 gap-10 items-center">
          <div className="flex justify-center" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              <img src={DataImage.HeroImage} alt="Profile" className="w-full h-full object-cover rounded-full border-4 border-gray-700" loading="lazy" />
            </div>
          </div>
          <div data-aos="fade-left" data-aos-duration="1000" data-aos-once="true">
            <h1 className="text-white text-5xl font-bold mb-6">About <span className="text-[#7C4DFF]">Me</span></h1>
            <div className="h-1.5 w-24 bg-[#7C4DFF] rounded-full mb-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="150" data-aos-once="true"></div>
            <div className="text-lg/loose text-gray-300 space-y-4">
              <p>Hello! I'm Victor Lim Putra, A Double Degree student in <b>Digital Business Innovation</b> at Binus University...</p>
            </div>
          </div>
        </div>

        {/* Tools Section */}
        <div className="tools mt-32">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
              Software <span className="text-[#7C4DFF]">&</span> Tools
            </h1>
            <div className="h-1.5 w-24 bg-[#7C4DFF] mx-auto rounded-full mb-6"></div>
          </div>
          <div className="tools-box grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
            {listTools.map((tool) => (
              <div key={tool.id} className="flex items-center gap-4 p-4 border border-[#1E3B58] rounded-xl bg-[#11243D] hover:bg-[#1A2F4A] hover:border-[#7C4DFF] hover:scale-105 transition-all duration-300 group cursor-default" data-aos="fade-up" data-aos-delay={tool.dad} data-aos-once="true">
                <div className="bg-[#1A2F4A] p-2 rounded-lg group-hover:bg-[#224A72] transition">
                  <img src={tool.gambar} alt="Tools" className="w-10 h-10 object-contain" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">{tool.nama}</h4>
                  <p className="text-sm text-gray-400">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Projects Section */}
      <div className="project mt-32 py-10 px-4" id="proyek">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            Featured <span className="text-[#7C4DFF]">Projects</span>
          </h1>
          <div className="h-1.5 w-24 bg-[#7C4DFF] mx-auto rounded-full mb-6"></div>
        </div>

        {/* Menu Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-xl border font-medium transition-all duration-300 ${
                filter === cat
                  ? "bg-[#7C4DFF] border-[#7C4DFF] text-white shadow-lg shadow-[#7C4DFF]/30"
                  : "bg-[#11243D] border-[#1E3B58] text-gray-400 hover:border-[#7C4DFF] hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Proyek dengan key={filter} untuk restart animasi AOS */}
        <div 
          key={filter} 
          className="proyek-box grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8"
        >
          {filteredProyek.map((proyek) => (
            <div
              key={proyek.id}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={proyek.dad}
              data-aos-once="true"
              className="flex flex-col h-full bg-[#11243D] rounded-xl border border-[#1E3B58] transition-colors duration-300 hover:border-[#7C4DFF]"
            >
              <div className="overflow-hidden h-52 w-full relative border-b border-[#1E3B58]">
                <img src={proyek.gambar} alt="Proyek" loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col grow">
                <h1 className="text-2xl font-bold mb-1 text-white">{proyek.nama}</h1>
                <p className="text-xs text-[#7C4DFF] font-semibold mb-4 uppercase tracking-wider">{proyek.kategori}</p>
                <p className="text-gray-400 text-sm/relaxed mb-6 text-justify">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {proyek.tools.map((tool, index) => (
                    <span key={index} className="text-[10px] font-medium px-2 py-1 rounded-md bg-[#1A2F4A] text-gray-300 border border-[#1E3B58]">
                      {tool}
                    </span>
                  ))}
                </div>
                <a href={proyek.link} target="_blank" rel="noreferrer noopener" className="w-full py-3 px-4 bg-[#7C4DFF] text-white font-semibold rounded-lg text-center hover:bg-[#6a3de0] transition-colors flex items-center justify-center gap-2">
                  See Detail <i className="ri-arrow-right-up-line"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="Kontak mt-32 pb-20 px-4" id="kontak">
        <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Get in <span className="text-[#7C4DFF]">Touch</span></h1>
          <div className="h-1.5 w-24 bg-[#7C4DFF] mx-auto rounded-full mb-6"></div>
        </div>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div className="bg-[#11243D] p-8 rounded-2xl border border-[#1E3B58] flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-[#1A2F4A] rounded-full flex items-center justify-center text-[#7C4DFF] border border-[#1E3B58]"><i className="ri-mail-send-line ri-xl"></i></div>
              <div><p className="text-sm text-gray-400 mb-1">My Email</p><p className="font-semibold text-white text-lg break-all">victorlim7112005@gmail.com</p></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-[#1A2F4A] rounded-full flex items-center justify-center text-[#7C4DFF] border border-[#1E3B58]"><i className="ri-map-pin-line ri-xl"></i></div>
              <div><p className="text-sm text-gray-400 mb-1">My Location</p><p className="font-semibold text-white text-lg">Indonesia</p></div>
            </div>
          </div>
          <form action="https://formsubmit.co/victorlim7112005@gmail.com" method="POST" className="flex flex-col gap-5 bg-[#11243D] p-8 rounded-2xl border border-[#1E3B58]">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-300">Full Name</label>
              <input type="text" name="name" className="w-full bg-[#0A1A2F] border border-[#1E3B58] text-white rounded-lg p-3 focus:outline-none focus:border-[#7C4DFF]" required />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-300">Email</label>
              <input type="email" name="Email" className="w-full bg-[#0A1A2F] border border-[#1E3B58] text-white rounded-lg p-3 focus:outline-none focus:border-[#7C4DFF]" required />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-300">Message</label>
              <textarea name="message" rows="5" className="w-full bg-[#0A1A2F] border border-[#1E3B58] text-white rounded-lg p-3 focus:outline-none focus:border-[#7C4DFF] resize-none" required></textarea>
            </div>
            <button type="submit" className="bg-[#7C4DFF] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#6a3de0] transition-colors shadow-lg shadow-[#7C4DFF]/20 w-full">Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;