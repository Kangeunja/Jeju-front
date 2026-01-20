import { useEffect, useRef, useState } from "react";
import "../../assets/css/history.css";
import HeroSection from "../../layouts/heroSection/HeroSection";

import Cloth1 from "../../assets/img/history/cloth1.png";
import Cloth2 from "../../assets/img/history/cloth2.png";
import Cloth3 from "../../assets/img/history/cloth3.png";

import Food1 from "../../assets/img/history/food1.png";
import Food2 from "../../assets/img/history/food2.png";
import Food3 from "../../assets/img/history/food3.png";
import Food4 from "../../assets/img/history/food4.png";
import Food5 from "../../assets/img/history/food5.png";
import Food6 from "../../assets/img/history/food6.png";
import Food7 from "../../assets/img/history/food7.png";
import Food8 from "../../assets/img/history/food8.png";
import Food9 from "../../assets/img/history/food9.png";
import Food10 from "../../assets/img/history/food10.png";
import Food11 from "../../assets/img/history/food11.png";
import Food12 from "../../assets/img/history/food12.png";
import Food13 from "../../assets/img/history/food13.png";
import Food14 from "../../assets/img/history/food14.png";
import Food15 from "../../assets/img/history/food15.png";
import Food16 from "../../assets/img/history/food16.png";
import Food17 from "../../assets/img/history/food17.png";
import Food18 from "../../assets/img/history/food18.png";
import Food19 from "../../assets/img/history/food19.png";
import Food20 from "../../assets/img/history/food20.png";
import Food21 from "../../assets/img/history/food21.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const History = () => {
  const [currentTab, setCurrentTab] = useState("탄생설화"); //현재 선택된 탭

  // 슬라이드 상태
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef<number | null>(null);

  // 네비게이션 타이틀
  const subTitle = {
    title1: "탄생설화",
    title2: "의식주",
    title3: "역사",
  };

  // 의(衣) 데이터
  const clothing = [
    {
      img: Cloth1,
      title: "갈옷",
      subText:
        "풋감을 즙으로 만들어 염색한 옷, 처음에는 황토빛을 띄며 뻣뻣하지만 입을수록 갈색이 되고 부드러워집니다. 더러움이 덜 타고 땀이 배지 않아 노동복으로도 최고랍니다.",
    },
    {
      img: Cloth2,
      title: "물옷",
      subText:
        "1970년대 초기 일본에서 검은 고무옷이 들어오기 이전에 제주 해녀들이 물집할때 입던 옷. 상의인 물적삼, 하의인 물소중이, 머리에 쓴 물수건이 포함됩니다.",
    },
    {
      img: Cloth3,
      title: "정당모자",
      subText:
        "야산에서 자생하는 댕댕이 줄기로 만듭니다. 모자골은 사용자의 머리에 맞게 하고, 갓은 비교적 넓게 만들어 해를 가릴수 있도록 했으며 주로 목자나 농부들이 사용했습니다.",
    },
  ];

  // 식(食) 데이터
  const food = [
    {
      img: Food1,
      title: "흑돼지",
      subText: `제주도를 처음 여행하는 사람들을 위해 흑돼지 맛있게 먹는 방법을 알려드릴께요. 흑돼지 구이는 멸치로 만든 젓갈인 '멜젓'에 찍어 먹으면 맛이 더욱 좋아지고 고기의 기름진 느끼함을 없애줌과 동시에 입맛을 더해줍니다!`,
    },

    {
      img: Food2,
      title: "고기국수",
      subText:
        "고기국수 제주도에는 고기국수집이 흔하다 할정도로 많이 있는데요. 고기국수는 뽀얗게 우려낸 육수에 면을 넣고, 삶은 돼지고기를 얹은 뒤, 입맛에 따라 청양고추와 고춧가루, 후춧가루 등을 넣고 먹으면 환상궁합!! 여기에 제주도 지역소주인 한라산과 함께 먹으면 금상청화입니다.",
    },

    {
      img: Food3,
      title: "성게국",
      subText: `성게국은 미역을 참기름으로 살짝 볶은 후, 성게와 오분자기를 함께 넣고 끓여줍니다. 소금으로 간을 하면 성게알은 노란빛을 더하고 순두부처럼 엉겨 달짝지근하면서도 담백한 맛이 납니다! 제주에서는 성게를 '구살'이라 불러 구살국이라고도 합니다.`,
    },
    {
      img: Food4,
      title: "황돔회",
      subText:
        "제주도에서 가장 흔한 생선 중 하나인 황돔은 저렴하면서도 고소한 맛이 일품으로 적당한 두께로 썰어져 나와 가장 적합한 맛을 볼수 있습니다",
      children: [
        {
          img: Food5,
          title: "옥돔회",
          subText:
            "옥돔회는 부위에 따라 기름진 맛과 담백한 맛, 부드러운 식감과 쫄깃한 식감이 공존하며 일년 중 12 ~ 3월까지가 가장 맛있는 때로 봄이 시작될쯤에 가장 물이 오릅니다.",
        },
        {
          img: Food6,
          title: "한치회",
          subText:
            "한치는 오징어와 생김새가 비슷해 자주 비교되지만 맛 자체의 급이 달라ㅠ최고 별미로 자리잡고 있으며 쫄깃한 식감과 감칠맛을 갖고 있고, 6 ~ 8월까지가 제철입니다.",
        },
        {
          img: Food7,
          title: "방어회",
          subText:
            "방어회는 크기에 따라 맛의 차이가 있는데 참치같은 느낌과 쫄깃한 식감과 특유의 향과 맛이 있으며 9월 ~10월말까지 제철입니다.",
        },
        {
          img: Food8,
          title: "벵에돔회",
          subText:
            "벵에돔회 제주도어로 구릿이라 불리는 벵에돔은 육질이 단단하여 씹는 식감이 좋고 12 ~ 3월에 낚시로 주로 잡히는 어종입니다.",
        },
      ],
    },
    {
      img: Food9,
      title: "자리물회",
      subText: `제주 사람들의 대표적인 여름 보양식으로, 비린내가 없고 시원하며 구수한 맛을 내는 특징 때문에 여름철 사람들에게 가장 인기가 높습니다.`,
      children: [
        {
          img: Food10,
          title: "해삼물회",
          subText: `해삼은 바다의 인삼이라는 뜻으로 예로부터 한약재로 많이 쓰이기도 했고, 오도독 씹히는 쫄깃한 식감으로 많이 섭취하며 먹기만 해도 관절 질환을 예방, 완화시킬 수 있다고 합니다.`,
        },
        {
          img: Food11,
          title: "소라물회",
          subText: `소라의 껍데기를 망치로 부수고 살만 발라내 적당한 크기로 채 썬 뒤, 각종 채소와 함께 된장 또는 고추장 등의 양념으로 버무린 후 차가운 물을 부어 먹는 여름철 별미로, 부드러운 맛이 일품입니다.`,
        },
        {
          img: Food12,
          title: "한치물회",
          subText: `오징어의 일종인 싱싱한 한치를 얇게 썰어 갖은 양념과 함께 시원한 물에 넣어 조리하는데, 시원한 국물맛과 부드럽게 씹히는 한치의 촉감이 별미이며, 주로 6 ~ 10월 경에 많이 찾습니다.`,
        },
      ],
    },
    {
      img: Food13,
      title: "갈치회",
      subText: `비릴 거라고 생각하는 사람들이 있으나, 씹는 맛이 좋고 고소해 남녀노소 누구에게나 인기가 많은 제주 갈치 요리 모음입니다.`,
      children: [
        {
          img: Food14,
          title: "갈치조림",
          subText: `싱싱한 갈치살이 입안에서 살살 녹고, 고춧가루로 양념한 조림은 밥에 비벼먹으면 일품입니다.`,
        },
        {
          img: Food15,
          title: "갈치구이",
          subText: `갈치 본연의 맛을 느낄 수 있고, 고소함과 담백함이 어우러져 간단하고 맛있습니다.`,
        },
        {
          img: Food16,
          title: "갈칫국",
          subText: `간단한 조리법이 두드러지는 음식인 만큼 재료의 신선도에서 맛이 결정됩니다. 끓는 물에 큼직하게 썬 호박을 넣어 익힌 후, 토막낸 갈치와 얼갈이 배추를 차례로 넣고 간을 해 끓입니다.`,
        },
      ],
    },
    {
      img: Food17,
      title: "오분자기",
      subText: `제주도 해산물의 으뜸으로 오분자기는 전복과의 연체동물로 수심 20m의 바위에 붙어 삽니다. 약 70% 정도를 제주도에서 재취하고 있으며, 칼슘 및 철분 등의 무기질과 비타민 B가 많이 함유되어 있습니다. 된장찌개와 죽의 재료로도 많이 사용하며 젓갈로도 담가 먹습니다!`,
    },
    {
      img: Food18,
      title: "전복죽",
      subText: `제주 지역의 전통적인 전복 요리 모음으로, 영양가가 높고 소화가 잘되는 다양한 요리들을 즐길 수 있습니다.`,
      children: [
        {
          img: Food19,
          title: "전복물회",
          subText: `전복은 고유의 감칠맛이 있으며, 식초와 설탕, 소금으로 간한 육수가 새콤달콤해지면 청양고추를 썰어 넣어 깔끔한 매운맛을 더해 더욱 맛있게 즐길 수 있습니다.`,
        },
        {
          img: Food20,
          title: "전복삼계탕",
          subText: `삼계탕에 전복이 들어가 영양가가 풍부하며, 지친 몸을 풀어주고 원기회복에 도움을 주며 집중력 향상과 영양보충에도 좋습니다. 여름철 보양식으로 많이 찾습니다.`,
        },
        {
          img: Food21,
          title: "전복뚝배기",
          subText: `꽃게와 조개를 포함한 해산물이 함께 들어가 있으며, 맵거나 자극적이지 않고 담백하면서 시원한 국물을 맛볼 수 있습니다.`,
        },
      ],
    },
  ];

  // 주(主) 데이터
  const house = [
    {
      title: "정낭과 올레",
      subText: `제주 전통민가의 구성은 ‘올레’부터 시작됩니다. 정낭은 올레 입구에 가로질러 놓는 세 개의 통나무고, 올레 입구 양 편 세워져 정낭을 끼우는 돌기둥은 '정주목' 입니다. 정낭은 원래 말과 소들이 집으로 들어오는 것을 막기 위해 쓰여졌습니다. 그리고 바람의 영향을 안받기 때문에 태풍이 불어도 끄덕없었습니다. 게다가 통나무 세개로 집주인과 손님사이에 의사소통신호도 만들어졌는데, 세 개 다 걸쳐져있지않으면 집주인이 종일 외출중이란 뜻이고 두 개가 걸쳐져있으면 좀 긴 시간의 외출, 한 개만 걸쳐져 있으면 잠깐 외출했다 라는 신호로 쓰였습니다. 올레는 집에 따라 곡선으로 구부러진 형태의 길인데 바람과 외부 시선을 막아주는 역할을 했습니다. 제주에서만 볼수 있는 독특한 주거경관입니다!`,
    },
    {
      title: "초가",
      subText: `제주의 초가는 제주에서만 볼수 있는 독특한 민가입니다. 외부는 돌담을 쌓고, 벽은 흙을 발라 돌담을 단단히 하고, 지붕은 새(띠)를 덮은 뒤 굵은 밧줄로 바둑판처럼 꽁꽁 얽어 놓았다. 비와 바람이 많은 자연환경을 극복하려는 제주선인들의 지혜가 담겨져 있습니다. 제주민가는 안마당을 중심으로 안거리와 밖거리가 배치되는데, 안거리에서만 제사를 준비하고 지냅니다. 아들이 결혼하면 안거리에는 부모세대가 살고 밖거리에 아들세대가 사는데 일정기간이 되면 서로 바꿔 삽니다. 그것은 '제사'의 주체가 부모세대에서 아들세대로 옮겨 갔다는 뜻입니다. 그정도로 안거리는 중요한 의미를 가지고 있기도 합니다.`,
    },
    {
      title: "돗통시",
      subText: `제주의 전통측간으로 바람과 외부 시선을 막는 낮은 돌담벽만 있고 지붕이 없습니다. 그래서 시원하게 주변을 조망하며 일을 볼 수 있는 쾌적한 화장실이었습니다. 게다가 여기엔 돼지우리를 겸하고 있어 돼지의 분뇨로 제주농사에 없어선 안될 기름진 거름이 되었습니다. 더할 나위 없는 환경정화 공간이자 자연퇴비 생산 공간이었던 돗통시는 오직 제주에서만 볼 수 있는 특출한 주거문화 요소 중 하나입니다.`,
    },
  ];

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
              {clothing.map((item) => (
                <div className="living-img-wrap">
                  <img src={item.img} alt="" />
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
              {food.map((item, idx) => (
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
                            <img src={slideItem.img} alt="" />
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
                      <img src={item.img} alt={item.title} />
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
                {house.map((item) => (
                  <div className="living-house-box">
                    <div className="living-house-title">
                      <p>{item.title}</p>
                      <p>{item.subText}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="living-bottom-con"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default History;
