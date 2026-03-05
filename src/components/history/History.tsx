import { useEffect, useState } from "react";
import "../../assets/css/history.css";
import HeroSection from "../../layouts/heroSection/HeroSection";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { fetchClothing } from "../../api/clothingApi";
import { fetchFood } from "../../api/foodApi";
import { fetchHouse } from "../../api/houseApi";

type ClothingType = {
  id: number;
  src: string;
  title: string;
  subText: string;
};

type ChildrenData = {
  id: number;
  src: string;
  title: string;
  subText: string;
};

type FoodType = {
  id: number;
  src: string;
  title: string;
  subText: string;
  children: ChildrenData[];
};

type HouseType = {
  title: string;
  subText: string;
  img: string;
};

const History = () => {
  const [currentTab, setCurrentTab] = useState("탄생설화"); //현재 선택된 탭
  const [clothData, setClothData] = useState<ClothingType[]>([]);
  const [foodData, setFoodData] = useState<FoodType[]>([]);
  const [houseData, setHouseData] = useState<HouseType[]>([]);

  // 네비게이션 타이틀
  const subTitle = {
    title1: "탄생설화",
    title2: "의식주",
    title3: "역사",
  };

  useEffect(() => {
    fetchCloth();
    fetchFoods();
    fetchHouses();
  }, []);

  const fetchCloth = async () => {
    try {
      const data = await fetchClothing();
      setClothData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchFoods = async () => {
    try {
      const data = await fetchFood();
      setFoodData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchHouses = async () => {
    try {
      const data = await fetchHouse();
      setHouseData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <HeroSection
        subTitle={subTitle}
        mode="tab"
        onTabChange={(tab) => setCurrentTab(tab)}
      />

      {currentTab === "탄생설화" && (
        <div className="story-wrap">
          <div className="container">
            <div className="story-title">
              <p>재밌고 신비로운 제주탄생의 설화</p>
              <p>
                태초의 세상이 열린 개벽신화와 제주섬을 만든 거대한 여신
                설문대할망의 이야기!
              </p>
            </div>

            <div className="story-background-wrap">
              <div className="story-background-img1">
                <div className="story-background-box1">
                  <div className="story-background-title">
                    <p>태초의 세상이 열린 이야기</p>
                    <p>개벽신화</p>
                    <p>
                      오랫동안 세상은 그저 암흑이였습니다. 어둠과 혼돈으로
                      휩싸인 암흑천지에 개벽의 기운이 돌기 시작했어요 갑자년
                      갑자일 갑자시에 하늘머리가 열리고 을축년 을축월 을축일
                      을축시에 땅의 머리가 열리며 미세한 금이 생겨났습니다. 땅이
                      솟아 오르고 물이 흘러내려 하늘과 땅의 경계가 조금씩
                      분명해져 갔어요. 이 때 하늘에서 푸른 이슬이 내리고 땅에서
                      검은 이슬이 솟아나 서로 합쳐지고 트이면서 만물이 생겨나기
                      시작했답니다. 별이 가장 먼저 생겨났대요. 별들이 속속 돋아
                      펼쳐지며 하늘 가득 자리를 잡았습니다. 그저 어두운 채로,
                      동쪽에선 푸른구름이 , 서쪽에선 하얀 구름이, 남쪽에선 붉은
                      구름이, 북쪽에선 검은 구름이, 중앙에선 누런 구름이
                      오락가락 하고 어느 순간 , 천황닭이 목을 들고 지황닭이
                      날개를 치고 인황닭이 꼬리를 쳐 크게 우니 먼동이 트기
                      시작했어요. 이때 하늘에서 천지왕이 두 개의 해와 두 개의
                      달을 내보내자, 세상이 밝아지며 천지가 활짝 열렸다는군요
                    </p>
                  </div>
                </div>
              </div>

              <div className="story-background-img2">
                <div className="story-background-box2">
                  <div className="story-background-title">
                    <p>제주섬이 빚어진 이야기</p>
                    <p>설문대 전설</p>
                    <p>
                      옛날 옛적에 몸집이 주 큰 설문대 할망이 있었답니다. 설문대
                      할망은 힘 또한 장사였는데, 어느 날 치마폭에 흙을 가득 퍼
                      날라다 넓디넓은 푸른 바다 한가운데 붓기 시작했습니다.
                      얼마나 부지런히 날랐으면 바다 위로 섬의 형체가 만들어졌고,
                      저절로 만들어진 오름들이 보기 좋았는지, 설문대는 흙을 집어
                      섬 여기저기에 오름을 만들기 시작했습니다. 흙을 너무 많이
                      집어놓았다 싶은 것은 주먹으로 봉우리를 탁 쳐서 균형을
                      맞추었고 그것이 현재의 비로소 움푹 파인 오름들이
                      된것입니다. 섬 한가운데에 은하수를 만질수 있을 만큼 높은
                      산은 오늘의 한라산이 되었고, 산이 너무 높아 봉우리를 툭
                      꺽어 바닷가로 던져버린 그곳은 오늘의 산방산이 되었답니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {currentTab === "의식주" && (
        <div className="living-wrap">
          <div className="container">
            <div className="living-title">
              <p>제주도의 의식주 문화는 특별합니다.</p>
              <p>
                제주도의 자연과 독특한 생활문화가 깃들어 있는 전통 살림집,
                각종생활도구들과 음식 그리고 전통 의복에 이르기까지 제주만의
                빛깔을 고스란히 담고 있습니다. 한번 만나볼까요?!
              </p>
            </div>

            <div className="living-con">의(衣)</div>
            <div className="living-con-wrap">
              {clothData.map((item) => (
                <div className="living-img-wrap">
                  <img src={item.src} alt="" />
                  <div className="living-con-title">
                    <p>{item.title}</p>
                    <p>{item.subText}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="living-con">식(食)</div>
            {/* <div className="living-food-wrap">
              {food.map((item, idx) => (
                <div key={idx} className="living-food-box">
                  <img src={item.img} alt="" />

                  <div className="living-food-con">
                    <div className="living-food-title">
                      <p>{item.title}</p>
                      <p>{item.subText}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div> */}

            <div className="living-food-wrap">
              {foodData.map((item, idx) => (
                <div key={idx} className="living-food-box">
                  {item.children && item.children.length > 0 ? (
                    <Swiper
                      modules={[Pagination, Autoplay]}
                      pagination={{ clickable: true }}
                      // autoplay={{ delay: 3000 }}
                      loop={true}
                    >
                      {[item, ...item.children].map((slideItem, slideIdx) => (
                        <SwiperSlide key={slideIdx}>
                          <div className="living-food-slide">
                            <img src={slideItem.src} alt="" />
                            <div className="living-food-con">
                              <div className="living-food-title">
                                <p>{slideItem.title}</p>
                                <p>{slideItem.subText}</p>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  ) : (
                    <>
                      <img src={item.src} alt={item.title} />
                      <div className="living-food-con">
                        <div className="living-food-title">
                          <p>{item.title}</p>
                          <p>{item.subText}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>

            <div className="living-con">주(主)</div>
            <div className="living-house-wrap">
              <div className="living-house-box-wrap">
                {houseData.map((item) => (
                  <div className="living-house-box">
                    <div className="living-house-title">
                      <p>{item.title}</p>
                      <p>{item.subText}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="living-bottom-con">
                {houseData.map((item) => (
                  <img src={item.img} alt="" />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {currentTab === "역사" && (
        <div className="history_wrap">
          <div className="container">
            <div className="history_title">
              <p>제주의 역사</p>
              <p>
                제주도는 굴곡직 역사를 지니고 있는 곳입니다. 삼국시대에서 고려,
                조선시대를 거쳐
                <br />
                일제강점기와 현대사의 격동기까지 제주 역사를 여행해볼까요!
              </p>
            </div>

            <div className="history_content">콘텐츠 준비중입니다.</div>
          </div>
        </div>
      )}
    </>
  );
};

export default History;
