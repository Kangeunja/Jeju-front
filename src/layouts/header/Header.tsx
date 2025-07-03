import { useEffect, useState } from "react";
import "../../assets/css/header.css";
import LogoWhite from "../../assets/img/logo/logo_white.png";
import LogoColor from "../../assets/img/logo/logo_color.png";

const Header = () => {
  const [isShrink, setIsShrink] = useState(false);
  const [logoSrc, setLogoSrc] = useState(LogoWhite);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 0) {
        if (!isShrink) {
          setIsShrink(true);
          setLogoSrc(LogoColor);
        }
      } else {
        if (isShrink) {
          setIsShrink(false);
          setLogoSrc(LogoWhite);
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [isShrink]);
  return (
    <div className={`header ${isShrink ? "shrink" : ""}`}>
      <img id="logo" src={logoSrc} alt="Logo" />
    </div>
  );
};

export default Header;
