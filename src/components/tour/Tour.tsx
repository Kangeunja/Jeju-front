import HeroSection from "../../layouts/heroSection/HeroSection";
import "../../assets/css/tour.css";
import { useState } from "react";
import InfoImage1 from "../../assets/img/tour/info-img1.png";
import InfoImage2 from "../../assets/img/tour/info-img2.png";
import InfoImage3 from "../../assets/img/tour/info-img3.png";
import InfoImage4 from "../../assets/img/tour/info-img4.png";

import DirectionImg1 from "../../assets/img/tour/direction1.png";
import DirectionImg2 from "../../assets/img/tour/direction2.png";
import DirectionImg3 from "../../assets/img/tour/direction3.png";
import SafeContent from "../../layouts/safeContent/SafeContent";

const Tour = () => {
  const [currentTab, setCurrentTab] = useState("공지사항"); //현재 선택된 탭

  // 네비게이션 타이틀
  const subTitle = {
    title1: "공지사항",
    title2: "관광정보센터",
    title3: "안전 안심가이드",
  };

  // 테이블 헤더 데이터
  const headers = [
    {
      text: "글번호",
      key: "index",
    },
    {
      text: "제목",
      key: "title",
    },
    {
      text: "작성일",
      key: "date",
    },
    {
      text: "조회수",
      key: "search",
    },
  ];

  // 테이블 바디 데이터
  const items = [
    {
      title:
        "뷰(View)티풀제주 이벤트! 내가 제일 좋아하는 제주의 여름 여행지는?",
      date: "2022.07.19",
      search: "1340",
    },
    {
      title:
        "뷰(View)티풀제주 이벤트! 내가 제일 좋아하는 제주의 여름 여행지는?",
      date: "2022.07.19",
      search: "140",
    },
    {
      title:
        "뷰(View)티풀제주 이벤트! 내가 제일 좋아하는 제주의 여름 여행지는?",
      date: "2022.07.19",
      search: "120",
    },
    {
      title:
        "뷰(View)티풀제주 이벤트! 내가 제일 좋아하는 제주의 여름 여행지는?",
      date: "2022.07.19",
      search: "10",
    },
    {
      title:
        "뷰(View)티풀제주 이벤트! 내가 제일 좋아하는 제주의 여름 여행지는?",
      date: "2022.07.19",
      search: "1340",
    },
  ];

  // 관광정보 데이터
  const infoData = [
    {
      img: InfoImage1,
      title: "전문 제주관광 상담인력 보유",
      subText:
        "양질의 관광정보 전달을 위해 신뢰성 있는 제주의 대표 관광정보센터 운영",
    },
    {
      img: InfoImage2,
      title: "응급상황을 대비한 유관기간 현장 출동 서비스",
      subText:
        "제주특별자치도 자치경찰, 국가 경찰, 119 안전신고센터, 제주특별자치도 관광협회 등 유관기관 연계를 통한 응급 상황 출동 서비스",
    },
    {
      img: InfoImage3,
      title: "관광객 위치기반 서비스 제공",
      subText:
        "관광객의 현재 위치정보를 센터로 전송받아 인근 관광 정보 안내(개인 정보 보호법에 의거 위치정보조회 동의 후 진행)",
    },
    {
      img: InfoImage4,
      title: "이용방법",
      subText:
        "온라인 : 콜센터 운영 +82-64-740-6000 오프라인 : 제주관광정보센터 방문 안내",
    },
  ];

  // 교통안내 데이터
  const directionData = [
    {
      img: DirectionImg1,
      subText:
        "제주공항 입구에서 중문, 한림, 신제주 방면으로 우회전 » 공항로를 따라 1.7km 이동 » 신대로를 따라 502m 이동 » 연동사거리에서 좌회전» 선덕로를 따라 269m 이동 후 좌회전",
    },
    {
      img: DirectionImg2,
      subText:
        "제주국제공항 정류장에서 315번, 316번, 365번, 465번, 466번 버스 승차 후 연동 주민센터 정류장에서 하차(4개 정류장 이동) » 제주관광공사까지 약 278m 이동",
    },
    {
      img: DirectionImg3,
      subText:
        "공항입구 교차로까지 약 216m 이동 » 횡단보도를 이용해 공항로를 횡단 » 공항로를 따라 1.68km 이동 » 회전교차로 직진 » 신대로를 따라 510m 이동 » 횡단보도를 통해 신대로 횡단 » 선덕로를 따라 약 232m 이동 후 좌회전",
    },
  ];

  return (
    <>
      <HeroSection
        subTitle={subTitle}
        mode="tab"
        onTabChange={(tab) => setCurrentTab(tab)}
      />
      {currentTab === "공지사항" && (
        <div className="notice-wrap">
          <div className="container">
            <div className="notice-title">
              <p>공지사항</p>
            </div>

            <table className="notice-table">
              <thead>
                <tr>
                  {headers.map((item) => (
                    <th key={item.text}>{item.text}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {items.map((item, idx) => (
                  <tr key={idx}>
                    {headers.map((header) => {
                      const value =
                        header.key === "index"
                          ? items.length - idx
                          : item[header.key as keyof typeof item];
                      return <td>{value}</td>;
                    })}
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="notice-bottom-con">
              <p>콘텐츠담당</p>
              <p>담당부서:문화관광팀</p>
            </div>
          </div>
        </div>
      )}

      {currentTab === "관광정보센터" && (
        <div className="info-wrap">
          <div className="container">
            <div className="info-title">
              <p>제주 관광정보센터</p>
              <p>
                제주관광공사에서는 여러분의 즐겁고 편안한 제주여행을 위해
                제주관광정보센터를 운영하고 있습니다.
                <br />
                관광지 문의, 관광 통역, 휠체어 대여, 교통문의 등 제주지역의
                관광과 관련된 모든것을 물어보세요!
              </p>
            </div>

            <div className="info-con-wrap">
              {infoData.map((item) => (
                <div className="info-con">
                  <div className="info-con-box">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="info-con-text">
                    <p>{item.title}</p>
                    <p>{item.subText}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="info-bottom-wrap">
              <div className="info-bottom-line-wrap">
                <div className="info-bottom-line"></div>
                <div className="info-bottom-text">
                  제주 관광정보 센터 방문 안내
                </div>
                <div className="info-bottom-line"></div>
              </div>

              <div className="info-bottom-map-wrap">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13310.34248799307!2d126.49079708674721!3d33.486137689921414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x350cfb0ce2cfb093%3A0xcf1416e1a129a61a!2z7KCc7KO86rSA6rSR7KCV67O07IS87YSw!5e0!3m2!1sko!2skr!4v1665568353279!5m2!1sko!2skr"
                  width="1000px"
                  height="580px"
                  style={{ border: 0 }}
                  // allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="google-map"
                ></iframe>

                <div className="info-bottom-left-wrap">
                  <div className="info-bottom-icon"></div>
                  <p>
                    제주특별자치도 제주시 선덕로 23 웰컴센터,
                    제주관광정보센터(1층, 로비)
                  </p>
                </div>

                <div className="info-bottom-right-wrap">
                  <div className="info-bottom-right-icon"></div>
                  <p>064-740-6000</p>
                </div>

                <div className="info-bottom-direction">
                  <div className="info-bottom-direction-title">교통안내</div>
                  <div className="info-bottom-subText-wrap">
                    {directionData.map((item) => (
                      <div className="info-bottom-subText-box-wrap">
                        <div className="info-bottom-subText-box">
                          <img src={item.img} alt="" />
                        </div>
                        <p>{item.subText}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {currentTab === "안전 안심가이드" && (
        <div className="safe-wrap">
          <div className="container">
            <div className="safe-title">
              <p>안전 / 안심가이드</p>
              <p>여행객들을 위한 안전한 여행 tip을 알려드려요~!</p>
            </div>
            <SafeContent />
          </div>
        </div>
      )}
    </>
  );
};

export default Tour;
