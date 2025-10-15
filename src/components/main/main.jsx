import { useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../loading/loading";
import WorkTime from "../workTime/worlTime";
import style from "./main.module.css";

function Main() {
  const [showPopup, setShowPopup] = useState(false);
  const [loadingFinished, setLoadingFinished] = useState(false);

  return (
    <div className={style.main}>
      {!loadingFinished && (
        <Loading onFinished={() => setLoadingFinished(true)} />
      )}

      {loadingFinished && (
        <>
          <div className={style.header}>
            <div className={style.logoWrapper}>
              <div className={style.img}>
                {/* 👇 حالا لوگو از public/images/logo2.png خونده میشه */}
                <img
                  src="/images/logo2.png"
                  alt="لوگو"
                  className={style.logo}
                />
              </div>
            </div>
          </div>

          <div className={style.name}>
            <span>پیتزا شاپ</span>
          </div>

          <Link to="/menu" className={style.linkWrapper}>
            <div className={style.main}>
              <div className={style.menu}>
                <div className={style.menuLogo}>
                  <div className={style.background}>
                    <div className={style.menuImg}>
                      <img src="/images/menulogo.png" alt="منو" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.detail}>
                <span>منو پیتزا شاپ</span>
              </div>
            </div>
          </Link>

          <a
            href="https://www.google.com/maps/place/Shop+Pizza+%D9%BE%DB%8C%D8%AA%D8%B2%D8%A7+%D8%B4%D8%A7%D9%BE%E2%80%AD/@32.6382365,51.6537258,20z"
            target="_blank"
            rel="noopener noreferrer"
            className={style.linkWrapper}
          >
            <div className={style.main}>
              <div className={style.menu}>
                <div className={style.menuLogo}>
                  <div className={style.background}>
                    <div className={style.menuImg}>
                      <img src="/images/address.png" alt="آدرس" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.detail}>
                <span>آدرس</span>
              </div>
            </div>
          </a>

          <div className={style.linkWrapper} onClick={() => setShowPopup(true)}>
            <div className={style.main}>
              <div className={style.menu}>
                <div className={style.menuLogo}>
                  <div className={style.background}>
                    <div className={style.menuImg}>
                      <img src="/images/time.png" alt="ساعات کاری" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.detail}>
                <span>ساعات کاری</span>
              </div>
            </div>
          </div>

          <a href="tel:03136241804" className={style.linkWrapper}>
            <div className={style.main}>
              <div className={style.menu}>
                <div className={style.menuLogo}>
                  <div className={style.background}>
                    <div className={style.menuImg}>
                      <img src="/images/call.png" alt="تماس" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.detail}>
                <span>شماره تماس</span>
              </div>
            </div>
          </a>

          {showPopup && <WorkTime onClose={() => setShowPopup(false)} />}
        </>
      )}
    </div>
  );
}

export default Main;
