import CloseMenuMobile from "../assets/images/icon-menu-close.svg";
import OpenMenuMobile from "../assets/images/icon-menu.svg";
import LogoSvg from "../assets/images/logo.svg";

import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="flex justify-between p-4 relative">
      <div className="container max-w-7xl mx-auto flex items-center justify-between">
        <a href="#">
          <img src={LogoSvg} alt="Logo" />
        </a>

        <nav className="hidden sm:flex flex-wrap">
          <ul className="flex space-x-10">
            <li>
              <a
                href="#"
                className="text-lg font-medium text-dark-grayish-blue hover:text-soft-red"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-lg font-medium text-dark-grayish-blue hover:text-soft-red"
              >
                New
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-lg font-medium text-dark-grayish-blue hover:text-soft-red"
              >
                Popular
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-lg font-medium text-dark-grayish-blue hover:text-soft-red"
              >
                Trinding
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-lg font-medium text-dark-grayish-blue hover:text-soft-red"
              >
                Categories
              </a>
            </li>
          </ul>
        </nav>

        {/* Botão para abrir o menu mobile */}
        <button
          className="sm:hidden"
          onClick={openMobileMenu}
          aria-label="Abrir menu"
          aria-expanded={isMobileMenuOpen}
        >
          <img src={OpenMenuMobile} alt="" />
        </button>

        {/* Menu mobile */}
        {isMobileMenuOpen && (
          <nav
            className="sm:hidden absolute top-0 right-0  bg-white shadow-lg z-50  flex flex-col w-2/3 h-svh"
            aria-label="Menu de navegação"
          >
            <div className="flex flex-col justify-end bg-white p-5 gap-15">
              <button
                className="hover:bg-gray-100 rounded-full transition-colors self-end"
                onClick={closeMobileMenu}
                aria-label="Fechar menu"
              >
                <img src={CloseMenuMobile} alt="Fechar menu" />
              </button>
              <ul className="flex flex-col space-y-6 ">
                <li>
                  <a href="#" className="text-lg text-very-dark-blue">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-lg text-very-dark-blue">
                    New
                  </a>
                </li>
                <li>
                  <a href="#" className="text-lg text-very-dark-blue">
                    Popular
                  </a>
                </li>
                <li>
                  <a href="#" className="text-lg text-very-dark-blue">
                    Trinding
                  </a>
                </li>
                <li>
                  <a href="#" className="text-lg text-very-dark-blue">
                    Categories
                  </a>
                </li>
              </ul>
            </div>

            {/* Lista de navegação separada do botão de fechar */}
          </nav>
        )}

        {/* Overlay para fechar o menu ao clicar fora */}
        {isMobileMenuOpen && (
          <div
            className="sm:hidden fixed inset-0 bg-black/50 z-40"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />
        )}
      </div>
    </header>
  );
};

export default Header;
