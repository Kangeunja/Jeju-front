import { useState } from "react";
import "../../assets/css/safeContent.css";

import SafeImg1 from "../../assets/img/tour/safe-img1.png";
import SafeImg2 from "../../assets/img/tour/safe-img2.png";
import SafeImg3 from "../../assets/img/tour/safe-img3.png";
import SafeImg4 from "../../assets/img/tour/safe-img4.png";
import SafeImg5 from "../../assets/img/tour/safe-img5.png";
import SafeImg6 from "../../assets/img/tour/safe-img6.png";

const SafeContent = () => {
  // 현재 선택된 탭
  const [currentTab, setCurrentTab] = useState("안심숙소 체크가이드");

  // 안전 안심가이드 네비게이션 데이터
  const tabs = [
    "안심숙소 체크가이드",
    "안전한 여행 Tip",
    "안전인증민박",
    "어플리케이션",
  ];

  // 안심숙소 체크가이드 데이터
  const checkData = [
    {
      title: "1. 사전에 숙소의 위치를 체크하기!!",
      subText:
        "숙소가 안전한 위치에 있는지 체크하기! 시내를 벗어날 경우에는 외진 곳에 떨어져 있는 곳보다는 집들이 모여 있는 마을 안에 있는지 확인하고 포털 사이트의 로드뷰를 확인해 숙소의 위치와 주위 건물 등의 여부를 먼저 확인하는 것이 좋습니다.",
    },
    {
      title: "2. 파티와 만남이 있는 곳은 주의하기!!",
      subText:
        "파티와 만남을 주선하는 숙박업소가 여행객들 사이에선 인기를 끌고 있는 추세입니다! 혼자 온 여행객들을 대상으로 친목을 도모하는 차원에서 열리는 이벤트지만 이를 악용하는 사례들이 생기고 있으니 항상 주의해야하는 것이 좋습니다.",
    },
    {
      title: "3. 후기를 꼼꼼히 살피기!",
      subText:
        "숙소에 다녀온 사람들이 써놓은 후기가 모든 것을 말해주지 않지만 숙소에 대해 어느정도의 정보를 받을수는 있습니다. 후기를 잘보고 피해를 입지않도록 주의해야 하고 조금 의심이 가거나 맘에 안드는 부분이 있다면 과감히 포기하고 다른곳으로 예약하는것은 어떨까요!",
    },
    {
      title: "4. 남녀 객실이 구분되어 있는지 확인하기!",
      subText:
        "간혹 외국여행을 자주 다녀본 사람들은 남녀가 한방에 머물수 있게 해놓은 숙소에 익숙할지 모르지만 이곳에서는 그런 문화가 없으니 남녀 객실이 구분되어 있는지 반드시 확인하고 넘어가는 것이 좋습니다.",
    },
    {
      title: "5. 농어촌민박 안전인증을 받은 민박을 이용한다",
      subText:
        "제주에서는 농어촌 민박 안전인증제도를 도입해 관광객들이 안심하며 숙소를 이용할수 있는 장치를 마련했습니다. 잠금장치 상태 유무, CCTV설치상태 유무, 객실및 공용시설 비상벨 설치 여부등 20개 항목에서 모두 적합할시 인증이 되기때문에 안심하고 이용가능 합니다!",
    },
    {
      title: "6. 창문과 방에 잠금장치가 있는지 체크하기!",
      subText:
        "숙소 창문이나 방에 잠금장치가 있는지 확인하고 외부에서 객실로 침입이 가능한지 창문 등을 확인하는 것도 좋은 방법입니다. 또한 숙소 주의에 CCTV가 있는지도 확인해보세요!",
    },
    {
      title: "7. 숙소 이름과 위치를 지인들에게 알리기!",
      subText:
        "내가 현재 어디에 있고, 어디로 갈 것인지에 대한 정보를 지인들에게 상시 알리고 자신이 머무는 숙소또한 어디인지 가족들이나 지인에게 알려주세요! 숙소이름과 여행일정 전체를 알려주는 것도 좋은 방법중에 하나입니다.",
    },
  ];

  // 안전한 여행 Tip 데이터
  const tipData = [
    {
      title: "1. 인적이 드문 곳에 혼자 가지 않고 가급적 2인 이상 동행",
      subText:
        "인적이 드문 곳은 반드시 믿을만한 사람과 동행하는 것이 좋다. 인적이 드문 곳은 비상 상황이 생겼을 때 대응할 수 있는 방법이 많지 않기 때문이다. 특히, 야간에 인적이 드문 곳에 혼자 가는 것은 절대 금지다. 또한 길을 걸을 때 이어폰으로 음악을 듣는 것은 자제하자. 외부로부터의 소리가 차단되어 주위에 무슨 일이 일어나고 있는지 파악하지 못할 경우가 많아 위험에 대비할 수가 없다.",
    },
    {
      title: "2. 반드시 여행지에 대해 사전조사를 한다",
      subText:
        "사람들이 많이 모이는 여행지나 관광지 이외에 트레킹을 하거나 알려지지 않은 해변이나 오름 등을 여행할 경우에는 반드시 사전에 조사하여 위험 요소가 없는지 확인하는 것이 좋다. 포털사이트에는 로드뷰 같은 프로그램이 있으므로 가고자 하는 곳을 미리 살펴보는 것도 좋다.",
    },
    {
      title: "3. 캠핑은 지정된 곳에서만, ‘낭만캠핑’은 없다",
      subText:
        "허가된 야영장이 아닌, 방파제나 바닷가 등 아무 곳에서 캬라반 등을 이용한 ‘낭만캠핑’을 하지 않는다. 현재(2018년 8월 기준) 제주에 야영장업으로 등록된 곳은 48곳, 해수욕장 야영장은 곽지과물, 금능, 김녕, 이호테우, 표선, 함덕, 협재 등 7곳이 있다. 캠핑을 하고 싶다면 지정된 곳을 이용, 스스로 안전을 챙기자.",
    },
    {
      title: "4. 지나친 음주를 하지 않는다",
      subText:
        "음주는 크고 많은 사고를 불러온다. 여행지에 와서 음주를 즐기며 스트레스를 풀고 자유로움을 만끽하는 것은 좋지만 술은 늘 사건사고의 원인이 된다는 점을 명심하자. 홀로 떨어진 여행지에서 당신을 보호해야할 책임이 가장 큰 사람은 바로 당신이다. 모르는 사람들과의 술자리를 피하고, 꼭 하고 싶다면 적당히 마실 것.",
    },
    {
      title: "5. 자신의 위치를 가족들이나 지인에게 알린다",
      subText:
        "지인이나 가족들과 문자나 모바일 메신저 등을 사용해 지속적으로 소통하는 것이 좋다. 여행하며 찍은 사진도 보여주니 풍경의 즐거움을 나눌 수 있어 좋고, 또 가족들이나 지인들은 어디서 어떻게 여행하고 있다는 것을 보고 안심할 수 있으니 좋다. 또는 여행하고 있는 곳을 SNS에 사진을 찍어 올리는 것도 추천한다. 조심해서 여행하고 있더라도 언제 어떤 일이 일어날지 예측할 수 없기 때문에, 이렇게 올린 사진 한 장이 만약의 상황에서 중요한 역할을 할 수 있기 때문이다.",
    },
  ];

  // 안전인증민박 헤더 테이블 데이터
  const headers = [
    {
      text: "No.",
      key: "index",
    },
    {
      text: "지역",
      key: "region",
    },
    {
      text: "읍면동",
      key: "county",
    },
    {
      text: "상호명",
      key: "business",
    },
    {
      text: "민박 소재지",
      key: "location",
    },
    {
      text: "연락처",
      key: "phone",
    },
  ];

  // 인전인증민박 바디 테이블 데이터
  const body = [
    {
      region: "제주시",
      county: "구좌읍",
      business: "두두다민박",
      location: "제주시 도두봉6길 9-4(도두일동)",
      phone: "010-3693-8553",
    },
    {
      region: "제주시",
      county: "구좌읍",
      business: "두두다민박",
      location: "제주시 도두봉6길 9-4(도두일동)",
      phone: "010-3693-8553",
    },

    {
      region: "제주시",
      county: "구좌읍",
      business: "두두다민박",
      location: "제주시 도두봉6길 9-4(도두일동)",
      phone: "010-3693-8553",
    },
    {
      region: "제주시",
      county: "구좌읍",
      business: "두두다민박",
      location: "제주시 도두봉6길 9-4(도두일동)",
      phone: "010-3693-8553",
    },
    {
      region: "제주시",
      county: "구좌읍",
      business: "두두다민박",
      location: "제주시 도두봉6길 9-4(도두일동)",
      phone: "010-3693-8553",
    },
    {
      region: "제주시",
      county: "구좌읍",
      business: "두두다민박",
      location: "제주시 도두봉6길 9-4(도두일동)",
      phone: "010-3693-8553",
    },
    {
      region: "제주시",
      county: "구좌읍",
      business: "두두다민박",
      location: "제주시 도두봉6길 9-4(도두일동)",
      phone: "010-3693-8553",
    },
    {
      region: "제주시",
      county: "구좌읍",
      business: "두두다민박",
      location: "제주시 도두봉6길 9-4(도두일동)",
      phone: "010-3693-8553",
    },
    {
      region: "제주시",
      county: "구좌읍",
      business: "두두다민박",
      location: "제주시 도두봉6길 9-4(도두일동)",
      phone: "010-3693-8553",
    },
    {
      region: "제주시",
      county: "구좌읍",
      business: "두두다민박",
      location: "제주시 도두봉6길 9-4(도두일동)",
      phone: "010-3693-8553",
    },
    {
      region: "제주시",
      county: "구좌읍",
      business: "두두다민박",
      location: "제주시 도두봉6길 9-4(도두일동)",
      phone: "010-3693-8553",
    },
    {
      region: "제주시",
      county: "구좌읍",
      business: "두두다민박",
      location: "제주시 도두봉6길 9-4(도두일동)",
      phone: "010-3693-8553",
    },
  ];

  // 어플리케이션 데이터
  const applicationData = [
    {
      img: SafeImg1,
      title: "112  긴급신고 앱",
      subText:
        "112긴급신고 앱은 납치ㆍ성범죄와 같은 위급한 범죄상황에서 112로 전화하여 신고하기 어려울 경우 신속하게 경찰에 신고 할 수 있는 서비스로 긴급신고시 위치서비스(GPS 등)를 켜 두시면 보다 정확하게 신고자의 위치를 파악가능합니다!",
    },
    {
      img: SafeImg2,
      title: "119 신고 앱",
      subText:
        "화재가 일어나거나 구조가 필요한 상황에서 빠르게 신고할 수 있다. 신고 버튼을 누르면 현재 위치 정보가 포함된 신고문자가 가까운 소방상황실로 전송되어, 정확하고 신속하게 도움을 받을 수 있습니다!",
    },
    {
      img: SafeImg3,
      title: "스마트 구조대 앱",
      subText:
        "재난, 범죄 등 상황에 따라 필요한 기관에 신고할 수 있도록 하는 앱입니다. 경찰청, 소방청, 해양경찰청, 국정원으로 바로 연결할수 있어 정확한 신고가 가능합니다! 그리고 위기상황시 대처요령, 생활안전 수칙들이 나와 있어 일상생활에서도 유용하게 사용가능합니다!",
    },
    {
      img: SafeImg4,
      title: "안심 제주 앱",
      subText:
        "제주의 치안을 비롯해 날씨, 재난 등 폭넓은 의미의 안전을 살피는 앱입니다. 여성안심구역, 시장, 교통 화재, 침수 등 항목별 위험도를 표시한 생활안전지도, 재난속보, 112 긴급신고 등이 있습니다!",
    },
    {
      img: SafeImg5,
      title: "안전海 앱",
      subText:
        "해양수산부에서 제작한 어플로 실시간 해양 관측, 해파리, 위험지역등의 정보를 손쉽게 파악할수 있다. 또한 현재 위치 조회 및 전송기능도 이용할수 있습니다!",
    },
    {
      img: SafeImg6,
      title: "골든타임(GoldenTime) 앱",
      subText:
        "보호가 필요한 시간과 안전을 확인할 시간 주기를 설정하고 시작 버튼을 누른 후 안전 확인 주기나 종료 시간에 사용자가 미리 설정한 비밀 암호에 대하여 응답이 없거나 틀리면 위급 상황으로 간주하고 사용자 대신 자동으로 도움 요청(자동신고)을 합니다!",
    },
  ];

  return (
    <div>
      <div className="safe-subTitle">
        {tabs.map((item) => (
          <div
            key={item}
            className={`safe-subTitle-box ${
              currentTab === item ? "safeTabColor" : ""
            }`}
            onClick={() => setCurrentTab(item)}
          >
            {item}
          </div>
        ))}
      </div>

      {currentTab === "안심숙소 체크가이드" && (
        <div className="safe-check-wrap">
          {checkData.map((item) => (
            <div className="safe-title-wrap">
              <p>{item.title}</p>
              <p>{item.subText}</p>
            </div>
          ))}
        </div>
      )}

      {currentTab === "안전한 여행 Tip" && (
        <div className="safe-tip-wrap">
          {tipData.map((item) => (
            <div className="safe-title-wrap">
              <p>{item.title}</p>
              <p>{item.subText}</p>
            </div>
          ))}
        </div>
      )}

      {currentTab === "안전인증민박" && (
        <div className="safe-house-wrap">
          <p>
            농어촌 민박 안전인증제란 제주도가 전국 최초로 시행하는 제도로서 최근
            급속히 증가하고 있는 민박업소에 대해 안전하고 청결한 민박환경을
            조성하고 여행객들의 안전과 서비스 향상을 위해 마련된 제도입니다!
          </p>
          <table className="safe-table">
            <thead>
              <tr>
                {headers.map((item) => (
                  <th key={item.text}>{item.text}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {body.map((item, idx) => (
                <tr key={idx}>
                  {headers.map((header) => {
                    const value =
                      header.key === "index"
                        ? body.length - idx
                        : item[header.key as keyof typeof item];
                    return <td>{value}</td>;
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {currentTab === "어플리케이션" && (
        <div className="safe-application-wrap">
          <p>
            위급한 상황에서 몇번의 터치로 빠르고 정확하게 신고할수 있는 어플과
            안전을 위한 유용한 정보들을 제공해 사고예방하거나 현명하게 대처할수
            있도록 도와주는 어플을 소개합니다!
          </p>
          {applicationData.map((item) => (
            <div className="safe-application-con">
              <div className="safe-application-left">
                <img src={item.img} alt="" />
              </div>
              <div className="safe-application-right">
                <div className="safe-application-text">
                  <p>{item.title}</p>
                  <p>{item.subText}</p>
                </div>

                <div className="safe-application-icon">
                  <button className="safe-application-icon1">구글플레이</button>
                  <button className="safe-application-icon2">앱스토어</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SafeContent;
