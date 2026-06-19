"use client";

import Image from "next/image";
import { useState } from "react";

const navItems = [
  { href: "#program", label: "Программа" },
  { href: "#for-whom", label: "Кому подойдет" },
  { href: "#funds", label: "Фонды" },
  { href: "#bonuses", label: "Бонусы" },
  { href: "#registration", label: "Регистрация" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Новая Планета">
        {/* <span className="brand__mark">НП</span> */}
        <Image width={40} height={40} src={"/favicon.png"}/>
        <span className="brand__text">
          <span>Новая Планета</span>
          <small>онлайн-вебинар</small>
        </span>
      </a>

      <nav className="desktop-nav" aria-label="Основная навигация">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="header-cta" href="#registration">
        Записаться
      </a>

      <button
        className={`burger ${isOpen ? "burger--open" : ""}`}
        type="button"
        aria-label="Открыть меню"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`mobile-menu ${isOpen ? "mobile-menu--open" : ""}`}>
        <div className="mobile-menu__panel">
          <p className="mobile-menu__title">Меню вебинара</p>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a className="mobile-menu__cta" href="#registration" onClick={closeMenu}>
            Зарегистрироваться
          </a>
        </div>
      </div>
    </header>
  );
}
