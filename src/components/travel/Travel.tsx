import { useEffect, useRef, useState } from "react";
import "../../assets/css/travel.css";
import HeroSection from "../../layouts/heroSection/HeroSection";

import travelImage1 from "../../assets/img/travel/travel-con1.png";
import travelImage2 from "../../assets/img/travel/travel-con2.png";
import travelImage3 from "../../assets/img/travel/travel-con3.png";
import travelImage4 from "../../assets/img/travel/travel-con4.png";
import travelImage5 from "../../assets/img/travel/travel-con5.png";
import travelImage6 from "../../assets/img/travel/travel-con6.png";
import { fetchFestivalByMonth } from "../../api/festivalApi";

type FestivalItem = {
  id: number;
  month: string;
  status: "coming" | "ended";
  title: string;
  explan: string;
};

type CurrentDataType = {
  coming: FestivalItem[];
  ended: FestivalItem[];
};

const Travel = () => {
  const [selectMonth, setSelectMonth] = useState<string>("1월"); // 선택한 월
  const [recommendIndex, setRecommendIndex] = useState(0);
  const [currentData, setCurrentData] = useState<CurrentDataType>({
    coming: [],
    ended: [],
  });

  // 각 섹션의 ref
  const themeRef = useRef<HTMLDivElement | null>(null);
  const scheduleRef = useRef<HTMLDivElement | null>(null);
  const shareRef = useRef<HTMLDivElement | null>(null);

  // 날짜 임시 데이터
  const date = [
    { day: "1월" },
    { day: "2월" },
    { day: "3월" },
    { day: "4월" },
    { day: "5월" },
    { day: "6월" },
    { day: "7월" },
    { day: "8월" },
    { day: "9월" },
    { day: "10월" },
    { day: "11월" },
    { day: "12월" },
  ];

  // 축제 일정 임시 데이터
  const recomData = [
    {
      img: travelImage1,
      key: 1,
    },
    {
      img: travelImage2,
      key: 2,
    },
    {
      img: travelImage3,
      key: 3,
    },
    {
      img: travelImage4,
      key: 4,
    },
    {
      img: travelImage5,
      key: 5,
    },
    {
      img: travelImage6,
      key: 6,
    },
  ];

  // 네비게이션 타이틀
  const subTitle = {
    title1: "테마여행",
    title2: "추천일정",
    title3: "여행공유",
  };

  // 초기로드
  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchFestivalByMonth(selectMonth);
        setCurrentData({
          coming: data.filter((f: any) => f.status === "coming"),
          ended: data.filter((f: any) => f.status === "ended"),
        });
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
  }, [selectMonth]);

  // 선택한 월의 상태 토글 이벤트
  const handleClick = async (month: string) => {
    setSelectMonth(month);
  };

  // 추천 일정 왼쪽버튼
  const prevSlide = () => {
    setRecommendIndex((prev) => (prev === 0 ? recomData.length - 1 : prev - 1));
  };

  // 추천 일정 오른쪽 버튼
  const nextSlide = () => {
    setRecommendIndex((prev) => (prev === recomData.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <HeroSection
        subTitle={subTitle}
        firstRef={themeRef}
        secondRef={scheduleRef}
        thirdRef={shareRef}
        mode="scroll"
      />

      <div className="travel-main-wrap" ref={themeRef}>
        <div className="container">
          <div className="travel-main-title">
            <p>테마여행</p>
            <p>수많은 제주의 축제와 행사를 계절별로 한눈에 파악하기!</p>
          </div>
          <div className="travel-main-top-con">
            {date.map((item, index: any) => (
              <p
                key={index}
                onClick={() => handleClick(item.day)}
                className={selectMonth === item.day ? "active-month" : ""}
              >
                {item.day}
              </p>
            ))}
          </div>

          <div className="travel-main-top-wrap">
            <div className="travel-main-top-title">
              <p>진행중이거나 예정인 축제</p>
            </div>

            <div className="festival-main-con-wrap">
              {currentData.coming.length > 0 ? (
                currentData.coming.map((item) => (
                  <div key={item.id}>
                    <img src="" alt="이미지 준비중" />
                    <h4>{item.title}</h4>
                    <p>{item.explan}</p>
                  </div>
                ))
              ) : (
                <p>등록된 축제가 없습니다.</p>
              )}
            </div>

            <div className="travel-main-top-title">
              <p>종료(미확정)된 축제</p>
            </div>

            <div className="festival-main-con-wrap">
              {currentData?.ended.length ? (
                currentData.ended.map((item) => (
                  <div key={item.id}>
                    <img src="" alt="이미지 준비중" />
                    <h4>{item.title}</h4>
                    <p>{item.explan}</p>
                  </div>
                ))
              ) : (
                <p>등록된 축제가 없습니다.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="travel-schedule-wrap" ref={scheduleRef}>
        <div className="travel-schedule-title">
          <p>추천일정</p>
          <p>
            일상 속 지루함은 이제 그만! 색다르고 이색적인 여행의 묘미를 떠나서~!
          </p>
        </div>

        <div className="travel-schedule-con-wrap">
          <div className="travel-schedule-slider-container">
            <button className="slider-btn-left" onClick={prevSlide}>
              &#10094;
            </button>
            <img
              src={recomData[recommendIndex].img}
              alt={`slide ${recommendIndex}`}
            />
            <button className="slider-btn-right" onClick={nextSlide}>
              &#10095;
            </button>
          </div>

          <div className="travel-schedule-box">
            <div className="travel-schedule-girl"></div>
            <div className="travel-schedule-box2"></div>
          </div>

          <div className="travel-schedule-box3">
            <div className="travel-schedule-girl2"></div>
            <div className="travel-schedule-box4"></div>
          </div>
        </div>
      </div>

      <div className="travel-insta-wrap" ref={shareRef}>
        <div className="travel-insta-title">
          <p>제주여행공유는 여러분들이 함께 만들어 나가는 플렛폼입니다</p>
          <p>제주여행자가 공유한 59,450개의 사진이 있습니다!</p>
        </div>

        <div className="travel-insta-con-wrap">
          <div className="travel-insta-con">
            <div className="travel-insta-box">
              <p>#봄</p>
              <div className="travel-insta-box1"></div>
              <div className="travel-insta-box2"></div>
            </div>
          </div>
          <div className="travel-insta-con">
            <div className="travel-insta-box">
              <p>#여름</p>
              <div className="travel-insta-box3"></div>
              <div className="travel-insta-box4"></div>
            </div>
          </div>
          <div className="travel-insta-con">
            <div className="travel-insta-box">
              <div className="travel-insta-box5"></div>
              <p>#가을</p>
              <div className="travel-insta-box6"></div>
            </div>
          </div>
          <div className="travel-insta-con">
            <div className="travel-insta-box7"></div>
            <div className="travel-insta-box">
              <p>#겨울</p>
              <div className="travel-insta-box8"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Travel;
