import "../../assets/css/footer.css";

const Footer = () => {
  return (
    <div className="footer-wrap">
      <div className="footer-banner"></div>
      <div className="footer-bottom-wrap">
        <div className="footer-container">
          <div className="footer-top-text">
            <p>개인정보처리방침</p>
            <p>이용약관</p>
            <p>틀린정보 신고</p>
            <p>제주관광문의</p>
            <p>재주관광사진문의</p>
          </div>

          <div className="footer-bottom-con-wrap">
            <div className="footer-bottom-logo-wrap">
              <div className="footer-bottom-logo"></div>
              <div className="footer-logo-title">문화관광</div>
            </div>

            <div className="fooer-bottom-text">
              <p>(63122) 제주특별자치도 제주시 선덕로 23(연동) 제주웰컴센터</p>
              <p>
                관광문의 : 제주관광공사 Tel : 064-740-6000~1 FAX : 064-740-6090
                사업자등록번호 : 616-82-21432
              </p>
              <p>관광불편신고 : 제주안내 120콜센터(국번없이 120번)</p>
              <p>Copyright©Jeju Tourism Organization, All rights reserved.</p>
              <p>
                홈페이지에 게시된 이메일 주소가 자동수집되는 것을 거부하며,
                위반시 정보통신망법에 의해 처벌될 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
