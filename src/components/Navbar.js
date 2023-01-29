import { Link, StaticQuery, graphql } from "gatsby";
import React, { useEffect, useState } from "react";

import Search from "./Search";
import logo from "../img/header-outline.png";

const SearchQuery = () => (
  <StaticQuery
    query={graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
        }
      }
    `}
    render={(data) => {
      return (
        <>
          <Search searchIndex={data.siteSearchIndex.index} />
        </>
      );
    }}
  />
);

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [subnavActive, setSubnavActive] = useState(false);
  const [navBarActiveClass, setNavBarActiveClass] = useState("");
  const [subnavBarActiveClass, setSubnavBarActiveClass] = useState("");

  const toggleHamburger = () => {
    setActive(!active);
  };

  useEffect(() => {
    active ? setNavBarActiveClass("is-active") : setNavBarActiveClass("");
  }, [active]);

  const toggleSubNavbar = () => {
    setSubnavActive(!subnavActive);
  };

  useEffect(() => {
    subnavActive
      ? setSubnavBarActiveClass("is-active")
      : setSubnavBarActiveClass("");
  }, [subnavActive]);

  const onSubNavBarKeyPress = (event) => {
    var code = event.keyCode || event.which;
    if (code === 13) {
      toggleSubNavbar();
    }
  };

  const onBurgerMenuKeyPress = (event) => {
    var code = event.keyCode || event.which;
    if (code === 13) {
      toggleHamburger();
    }
  };

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            <img
              width="150px"
              height="50px"
              className="navBarLogo"
              src={logo}
              alt="Logo"
            />
          </Link>
          {/* Hamburger menu */}
          <div
            role="link"
            aria-label="menu"
            onKeyPress={onBurgerMenuKeyPress}
            tabIndex="0"
            className={`navbar-burger burger ${navBarActiveClass}`}
            data-target="navMenu"
            onClick={toggleHamburger}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div id="navMenu" className={`navbar-menu ${navBarActiveClass}`}>
          <div className="navbar-start has-text-centered">
            <Link className="navbar-item" to="/tags/apero">
              Apéritif
            </Link>
            <Link className="navbar-item" to="/tags/entree">
              Entrées
            </Link>
            <Link className="navbar-item" to="/tags/vegetarien">
              Plats végétariens
            </Link>
            <Link className="navbar-item" to="/tags/plats">
              Plats
            </Link>
            <Link className="navbar-item" to="/tags/dessert">
              Desserts
            </Link>
            <Link className="navbar-item" to="/tags/petitdej">
              Petits déjeuners
            </Link>
            <Link className="navbar-item" to="/tags/boissons">
              Boissons
            </Link>
            <Link className="navbar-item" to="/tags/autres">
              Autres
            </Link>
            <Link className="navbar-item" to="/tags/antigaspi">
              Anti-gaspi
            </Link>
            <SearchQuery />
            <div
              className={`navbar-item has-dropdown ${subnavBarActiveClass}`}
              onKeyPress={onSubNavBarKeyPress}
              onClick={toggleSubNavbar}
            >
              <p className="navbar-link is-arrowless no-underline">Autres</p>
              <div
                role="link"
                tabIndex="0"
                className={`menuArrowContainer ${subnavBarActiveClass}`}
                aria-roledescription="Menu déroulant catégories"
              >
                <div className="menuArrow" />
              </div>
              <div className="navbar-dropdown">
                <Link className="navbar-item" to="/tags/zerodechet">
                  Zéro déchet
                </Link>
                <Link className="navbar-item" to="/presentation">
                  Présentation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
