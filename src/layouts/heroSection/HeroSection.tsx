import { useEffect, useRef, useState } from "react";
import "../../assets/css/heroSection.css";

import MainImage1 from "../../assets/img/travel/main1.jpg";
import MainImage2 from "../../assets/img/travel/main2.jpg";
import MainImage3 from "../../assets/img/travel/main3.jpg";

type HeroSectionProps = {
  subTitle: {
    title1: string;
    title2: string;
    title3: string;
  };
  mode: "tab" | "scroll";
  onTabChange?: (tab: string) => void; //탭모드일때만 필요
  firstRef?: React.RefObject<HTMLDivElement | null>;
  secondRef?: React.RefObject<HTMLDivElement | null>;
  thirdRef?: React.RefObject<HTMLDivElement | null>;
};

const HeroSection = ({
  subTitle,
  firstRef,
  secondRef,
  thirdRef,
  onTabChange,
  mode,
}: HeroSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0); // 현재 보여줄 슬라이드 이미지의 인덱스
  const [currentState] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // 슬라이드 메인이미지 데이터
  const images = [
    { src: MainImage1, alt: "유채꽃이 넓게 펼쳐진 이미지" },
    { src: MainImage2, alt: "산 이미지" },
    { src: MainImage3, alt: "바다 이미지" },
  ];

  // 자동 슬라이드 처리
  useEffect(() => {
    if (currentState) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 3000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [currentState]);

  // 스크롤 함수
  const scrollToSection = (ref?: React.RefObject<HTMLDivElement | null>) => {
    if (ref?.current) {
      const yOffset = -100; // 고정된 헤더 높이
      const y =
        ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      // ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClick = (type: "first" | "second" | "third", title: string) => {
    if (mode === "tab" && onTabChange) {
      onTabChange(title);
    } else if (mode === "scroll") {
      if (type === "first") {
        scrollToSection(firstRef);
      }
      if (type === "second") {
        scrollToSection(secondRef);
      }
      if (type === "third") {
        scrollToSection(thirdRef);
      }
    }
  };

  return (
    <div className="navigate-slide-img">
      {images.map((item, index) => (
        <div
          key={index}
          style={{
            display: index === currentIndex ? "block" : "none",
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          <img src={item.src} alt={item.alt} />
        </div>
      ))}
      <div className="navigate-title">
        <p>
          <span>JeJu</span> Your <span>Life</span>
        </p>
      </div>

      <div className="navigate-wrap">
        <div
          className="navigate-con"
          onClick={() => handleClick("first", subTitle.title1)}
        >
          {subTitle.title1}
        </div>
        <div
          className="navigate-con"
          onClick={() => handleClick("second", subTitle.title2)}
        >
          {subTitle.title2}
        </div>
        <div
          className="navigate-con"
          onClick={() => handleClick("third", subTitle.title3)}
        >
          {subTitle.title3}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
