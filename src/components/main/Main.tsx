import { useEffect, useRef, useState } from "react";
import "../../assets/css/main.css";

import MainImage1 from "../../assets/img/main/main-images1.png";
import MainImage2 from "../../assets/img/main/main-images2.png";
import MainImage3 from "../../assets/img/main/main-images3.png";

import TopImage1 from "../../assets/img/main/main-top-images1.png";
import TopImage2 from "../../assets/img/main/main-top-images2.png";
import TopImage3 from "../../assets/img/main/main-top-images3.png";
import TopImage4 from "../../assets/img/main/main-top-images4.png";

import MainRecoImage1 from "../../assets/img/main/main-reco-img1.png";
import MainRecoImage2 from "../../assets/img/main/main-reco-img2.png";
import MainRecoImage3 from "../../assets/img/main/main-reco-img3.png";
import MainRecoImage4 from "../../assets/img/main/main-reco-img4.png";

import BarcordImage from "../../assets/img/main/main-barcode.png";

const Main = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // 현재 보여줄 슬라이드 이미지의 인덱스
  const [isPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [recommendIndex, setRecommendIndex] = useState(0);

  // 자동 슬라이드 메인이미지 데이터
  const images = [
    { src: MainImage1, alt: "유채꽃이 넓게 펼쳐진 이미지" },
    { src: MainImage2, alt: "계곡 이미지" },
    { src: MainImage3, alt: "바다 이미지" },
  ];

  // 제주도 상단 콘텐츠 데이터
  const topImages = [
    {
      src: TopImage1,
      alt: "지도 이미지",
      title: "테마여행",
    },
    {
      src: TopImage2,
      alt: "유튜브 이미지",
      title: "스크린여행",
    },
    {
      src: TopImage3,
      alt: "자동차 이미지",
      title: "교통정보",
    },
    {
      src: TopImage4,
      alt: "열쇠 이미지",
      title: "안전인증민박",
    },
  ];

  // 추천 여행코스 임시 데이터
  const contentData = [
    {
      index: 1,
      src: MainRecoImage1,
      title: "더럭분교",
      description:
        "알록달록한 학교 모든 곳이 포토존! 곳곳에 소소한 매력과 감성을 불러일으킬 수 있는 정겨움도 숨겨져 있습니다.",
      alt: "학교 이미지",
    },
    {
      index: 2,
      src: MainRecoImage2,
      title: "천왕사 삼나무길",
      description:
        "제주에서 아름다운 숲길에 선정된 곳이기도 하고 ‘효리네 민박’에서 이효리가 추천한 곳으로 맑은 공기와 함께 여유로운 산책을 즐길 수 있습니다.",
      alt: "삼나무 이미지",
    },
    {
      index: 3,
      src: MainRecoImage3,
      title: "성이시돌 목장",
      description:
        "짧은 산책 코스와 스냅 사진 촬영 장소로 유명해 발길이 끊이지 않는 이곳은 대자연의 이국적인 매력을 갖고 있는 곳입니다.",
      alt: "목장 이미지",
    },
    {
      index: 4,
      src: MainRecoImage4,
      title: "더럭분교",
      description:
        "인생샷하면 빠질 수 없는 곳 중에 하나! 마치 외국에 온 것 같은 느낌과 색다른 매력을 느낄 수 있으며 남녀노소 누구에게나 핫한 장소이기도 합니다.",
      alt: "동굴 이미지",
    },
  ];

  // 자동 슬라이드 처리
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 3000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying]);

  // 추천 여행코스 왼쪽버튼
  const prevSlide = () => {
    setRecommendIndex((prev) =>
      prev === 0 ? contentData.length - 1 : prev - 1
    );
  };

  // 추천 여행코스 오른쪽 버튼
  const nextSlide = () => {
    setRecommendIndex((prev) =>
      prev === contentData.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div style={{ minHeight: "100%" }}>
      <div className="main-slide-img">
        {images.map((item: any, index: any) => (
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

        <div className="main-title">
          <p> 사계절 놓치지 말아야 할 제주관광</p>
          <p>
            <span>걷고 싶은</span> 계절, <span>제주</span>의 매력을 탐하다
          </p>
        </div>
      </div>

      <div className="main-top-wrap">
        <div className="container">
          <div className="main-top-box">
            <div className="main-title-wrap">
              <div className="main-top-title">
                <span>제주도</span>&nbsp;여행도우미
                <p> 제주도 여행에 도움이 되는 바로가기 정보를 안내합니다</p>
                <div className="main-top-icon"></div>
              </div>
            </div>
            <div className="main-top-con-wrap">
              {topImages.map((item, index) => (
                <div key={index} className="main-top-circle">
                  <img src={item.src} alt={item.alt} />
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="main-reco-wrap">
        <div className="container">
          {/* <div className="main-reco-title-wrap"> */}
          {/* <div className="main-reco-icon"></div> */}
          <div className="main-reco-title">
            이런 <span>추천여행코스</span>는 어때요?
            <p>어디로 갈지 고민하는 분들을 위해 추천하는 추천코스 정보입니다</p>
          </div>
          {/* </div> */}

          <div className="main-reco-con-wrap">
            <div className="main-reco-left-wrap"></div>
            <div className="main-reco-right-wrap">
              <button className="main-reco-btn left" onClick={prevSlide}>
                &#10094;
              </button>

              <div className="main-reco-con">
                {`${contentData[recommendIndex].index}코스. ${contentData[recommendIndex].title}`}
                <img
                  src={contentData[recommendIndex].src}
                  alt={contentData[recommendIndex].alt}
                />
                <p>{contentData[recommendIndex].description}</p>
              </div>

              <div className="main-reco-barcode">
                <img src={BarcordImage} alt="바코드 이미지" />
              </div>

              <button className="main-reco-btn right" onClick={nextSlide}>
                &#10095;
              </button>
            </div>
          </div>
          <div className="main-bottom-con">
            <div className="main-bottom-icon"></div>
            <p>공지사항</p>
            <div className="main-bottom-box">
              뷰(view)티풀 제주 이벤트! 내가 제일 좋아하는 제주의 여름 여행지는?
            </div>
            <p>2022.07.16</p>
            <div className="main-bottom-right-icon"></div>
          </div>
        </div>
      </div>
      {/* main-reco-wrap end */}

      <div className="main-bottom-wrap">
        <div className="container">
          <div className="main-bottom-insta-wrap">
            <div className="main-bottom-insta-icon"></div>
            <div className="main-bottom-insta-con-wrap">
              <div className="main-bottom-insta-left-con">
                <div className="main-bottom-insta-con1"></div>
                <div className="main-bottom-insta-con2"></div>
                <div className="main-bottom-insta-con3"></div>
                <div className="main-bottom-insta-con4"></div>
                <div className="main-bottom-insta-con5"></div>
                <div className="main-bottom-insta-con6"></div>
              </div>
              <div className="main-bottom-insta-right-con">
                <p>관광지도</p>
                <p>제주시 문화관광 한눈에 보기!</p>
                <button className="main-bottom-insta-btn">자세히보기</button>
                <div className="main-b0ttom-insta-map"></div>
              </div>
            </div>

            <div className="main-bottom-insta-bottom-con">
              <div className="main-bottom-insta-bottom-con1">
                <div className="main-bottom-insta-box"></div>
                <p>
                  생활문화
                  <br />
                  의식주
                </p>
              </div>
              <div className="main-bottom-insta-bottom-con2">
                <div className="main-bottom-insta-box2"></div>
                <p>
                  신비로운
                  <br />
                  탄생설화
                </p>
              </div>
              <div className="main-bottom-insta-bottom-con3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
