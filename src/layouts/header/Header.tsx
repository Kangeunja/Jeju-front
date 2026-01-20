import { useEffect, useState } from "react";
import "../../assets/css/header.css";
import LogoWhite from "../../assets/img/logo/logo_white.png";
import LogoColor from "../../assets/img/logo/logo_color.png";
import LogoJeju from "../../assets/img/logo/jejudo-logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isShrink, setIsShrink] = useState(false); // Shrink 유무
  const [logoSrc, setLogoSrc] = useState(LogoWhite); // 로고 url
  const navigate = useNavigate();

  // 스크롤 shrink 처리
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
    <>
      <div className={`header ${isShrink ? "shrink" : ""}`}>
        <div className="side-menu">
          <p>제주관광공사</p>
          <p>제주시청</p>
          <img src={LogoJeju} alt="logo" />
        </div>
        <div className="in-header">
          <div className="logo-wrap" onClick={() => navigate("/")}>
            <img src={logoSrc} alt="jejudo-logo" />
            <div className="logo-title">문화관광</div>
          </div>
          <div className="menu_wrap">
            <p onClick={() => navigate("/travel")}>여행라이프</p>
            <p onClick={() => navigate("/screen")}>스크린속 라이프</p>
            <p onClick={() => navigate("/tour")}>관광정보 라이프</p>
            <p onClick={() => navigate("/history")}>역사/문화 라이프</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
