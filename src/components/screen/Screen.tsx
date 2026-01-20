import { useRef } from "react";
import "../../assets/css/screen.css";
import HeroSection from "../../layouts/heroSection/HeroSection";
import YoutubeImg1 from "../../assets/img/screen/screen-youtube-img1.png";
import YoutubeImg2 from "../../assets/img/screen/screen-youtube-img2.png";
import YoutubeImg3 from "../../assets/img/screen/screen-youtube-img3.png";

const Screen = () => {
  // 각 섹션의 ref
  const screenRef = useRef<HTMLDivElement | null>(null);
  const youtubeRef = useRef<HTMLDivElement | null>(null);
  const vlogRef = useRef<HTMLDivElement | null>(null);

  const subTitle = {
    title1: "사계절 코스여행",
    title2: "콘서트 공연",
    title3: "제주도여행 브이로그",
  };

  // youtube 썸네일 데이터
  const youtubeData = [
    {
      img: YoutubeImg1,
      subTitle: "정승환 part.1- 우주선, 눈사람",
    },

    {
      img: YoutubeImg2,
      subTitle: "정승환 part.2- 힐링스톤즈",
    },

    {
      img: YoutubeImg3,
      subTitle: "권진아 - Flyaway, 뭔가 잘못됐어",
    },
  ];

  return (
    <>
      <HeroSection
        subTitle={subTitle}
        firstRef={screenRef}
        secondRef={youtubeRef}
        thirdRef={vlogRef}
        mode="scroll"
      />

      <div className="screen-top-wrap" ref={screenRef}>
        <div className="container">
          <div className="screen-title">
            <p>
              스크린속에서
              <br />
              만나는 사계절 코스 여행
            </p>
            <p>
              계절별 제주도 여행코스 , 제주도에서 가볼만한곳을 영상으로
              만나보아요!
            </p>
          </div>

          <div className="screen-top-img-wrap">
            <div className="screen-top-left-wrap">
              <div className="screen-top-left-img"></div>
              <p>
                봄 제주 가볼만한 15곳 빠르게 모아보기 🌸 (봄꽃스팟 + 봄에
                가야 가장 좋은곳)
              </p>
            </div>
            <div className="screen-top-right-wrap">
              <div className="screen-top-left-img"></div>
              <p>
                봄 제주 가볼만한 15곳 빠르게 모아보기 🌸 (봄꽃스팟 + 봄에
                가야 가장 좋은곳)
              </p>
            </div>
            {/* <div className="screen-top-title">
              <p>
                봄 제주 가볼만한 15곳 빠르게 모아보기 🌸 (봄꽃스팟 + 봄에
                가야 가장 좋은곳)
              </p>
              <p>#제주도여행 #서귀포여행코스 #제주시여행코스 #제주호캉스</p>
            </div> */}
          </div>
        </div>
      </div>

      <div className="screen-youtube-wrap" ref={youtubeRef}>
        <div className="container">
          <div className="screen-youtube-icon-wrap">
            <div className="screen-youtube-icon"></div>
            <p>방구석에서 힐링하기 시리즈</p>
          </div>

          <div className="screen-youtube-con-wrap">
            {youtubeData.map((item) => (
              <div>
                <img src={item.img} alt="" />
                <p>{item.subTitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="screen-bottom-wrap" ref={vlogRef}>
        <div className="container">
          <div className="screen-bottom-title">
            <p>
              제주도 여행 브이로그 <br />
              지금 바로 영상으로 떠나볼까요!
            </p>
            <p>
              제주도 몇박몇일 브이로그와 핫플인곳을 떠나는 여행 브이로그를{" "}
              <br />
              영상으로 만나보아요~!!
            </p>
          </div>
          <div className="screen-bottom-con"></div>
          <div className="screen-bottom-icon"></div>
        </div>
      </div>
    </>
  );
};

export default Screen;
