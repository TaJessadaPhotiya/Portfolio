import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [showHeader, setShowHeader] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.6; // 5% ของความสูงหน้าจอ
      if (window.scrollY > scrollThreshold) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = (menu) => {
    setSelected(menu);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className="sticky top-0 bg-white text-white p-4 w-full z-50"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
      }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center justify-between w-[1110px] mx-auto ">
          <div className="flex items-center gap-6">
            <Link
              to="home"
              smooth={true}
              duration={500}
              onClick={() => handleMenuClick("home")}
              className={`text-gray-700 font-semibold px-4 py-2 transition-all duration-300 cursor-pointer drop-shadow-sm ${
                selected === "home" ? "text-[#f85c70]" : "hover:text-indigo-400"
              }`}
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              onClick={() => handleMenuClick("about")}
              className={`text-gray-700 font-semibold px-4 py-2 transition-all duration-300 cursor-pointer drop-shadow-sm ${
                selected === "about"
                  ? "text-[#f85c70]"
                  : "hover:text-indigo-400"
              }`}
            >
              About
            </Link>
            <Link
              to="resume"
              smooth={true}
              duration={500}
              onClick={() => handleMenuClick("resume")}
              className={`text-gray-700 font-semibold px-4 py-2 transition-all duration-300 cursor-pointer drop-shadow-sm ${
                selected === "resume"
                  ? "text-[#f85c70]"
                  : "hover:text-indigo-400"
              }`}
            >
              Resume
            </Link>
          </div>

          {/* กลาง */}
          <div className="relative flex flex-col items-center justify-center ">
            <div
              className={`flex flex-col transition-all duration-500 w-[260px] ${
                showHeader
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              } `}
            >
              <p className="text-[18px] text-center text-gray-600 font-[600] drop-shadow-sm">
                Jessada Photiya
              </p>
              <p className="text-[12px] text-center text-gray-400 drop-shadow-sm mt-1">
                Frontend Developer | Web Programmer
              </p>
            </div>

            {/* รูปภาพอยู่ตรงกลางของ relative parent */}
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-[170px] h-[170px] rounded-full shadow-lg transition-all duration-500 bg-white
            ${
              showHeader
                ? "opacity-0 translate-y-5"
                : "opacity-100 translate-y-0"
            } `}
            >
              <figure className="w-[147px] h-[147px] rounded-full overflow-hidden bg-sky-50">
                <img
                  className="w-full h-full object-cover"
                  src="/img/ta2.jpg"
                  alt=""
                />
              </figure>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              onClick={() => handleMenuClick("portfolio")}
              className={`text-gray-700 font-semibold px-4 py-2 transition-all duration-300 cursor-pointer drop-shadow-sm ${
                selected === "portfolio"
                  ? "text-[#f85c70]"
                  : "hover:text-indigo-400"
              }`}
            >
              Portfolio
            </Link>
            <Link
              to="blog"
              smooth={true}
              duration={500}
              onClick={() => handleMenuClick("blog")}
              className={`text-gray-700 font-semibold px-4 py-2 transition-all duration-300 cursor-pointer drop-shadow-sm ${
                selected === "blog" ? "text-[#f85c70]" : "hover:text-indigo-400"
              }`}
            >
              Blog
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={() => handleMenuClick("contact")}
              className={`text-gray-700 font-semibold px-4 py-2 transition-all duration-300 cursor-pointer drop-shadow-sm ${
                selected === "contact"
                  ? "text-[#f85c70]"
                  : "hover:text-indigo-400"
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            ref={buttonRef}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`md:hidden text-center transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ maxHeight: isOpen ? "500px" : "0px" }}
      >
        <div className="py-4">
          <Link
            to="home"
            smooth={true}
            duration={500}
            onClick={() => handleMenuClick("home")}
            className={`block text-white py-2 px-4 transition-all duration-300 ease-in-out ${
              selected === "home" ? "text-indigo-300" : "hover:text-indigo-400"
            }`}
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={() => handleMenuClick("about")}
            className={`block text-white py-2 px-4 transition-all duration-300 ease-in-out ${
              selected === "about" ? "text-indigo-300" : "hover:text-indigo-400"
            }`}
          >
            About
          </Link>
          <Link
            to="resume"
            smooth={true}
            duration={500}
            onClick={() => handleMenuClick("resume")}
            className={`block text-white py-2 px-4 transition-all duration-300 ease-in-out ${
              selected === "resume"
                ? "text-indigo-300"
                : "hover:text-indigo-400"
            }`}
          >
            Resume
          </Link>
          <Link
            to="properties"
            smooth={true}
            duration={500}
            onClick={() => handleMenuClick("properties")}
            className={`block text-white py-2 px-4 transition-all duration-300 ease-in-out ${
              selected === "properties"
                ? "text-indigo-300"
                : "hover:text-indigo-400"
            }`}
          >
            Properties
          </Link>
          <Link
            to="blog"
            smooth={true}
            duration={500}
            onClick={() => handleMenuClick("blog")}
            className={`block text-white py-2 px-4 transition-all duration-300 ease-in-out ${
              selected === "blog" ? "text-indigo-300" : "hover:text-indigo-400"
            }`}
          >
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
