// src/components/menuCard/menuCard.js
import { useState } from "react";
import style from "./menuCard.module.css";
import Detail from "../detail/detail";

function MenuCard({ data }) {
  const [showDetail, setShowDetail] = useState(false);

  const handleClick = () => {
    setShowDetail(true);
  };

  const handleClose = () => {
    setShowDetail(false);
  };

  return (
    <>
      <div className={style.cardcontainer} onClick={handleClick}>
        <div className={style.imageplaceholder}>
          {data.image ? (
            // ✅ تصویر از فایل public/images یا مسیر داده محلی
            <img
              src={data.image.startsWith("http") ? data.image : data.image}
              alt={data.name || "food"}
            />
          ) : (
            <img src={"/images/logo2.PNG"} alt={data.name || "food"} />
          )}
        </div>

        <div className={style.cardcontent}>
          <div className={style.cardtitle}>
            <span>{data.name || "نامشخص"}</span>
          </div>

          <div className={style.carddesc}>
            <span>{data.description || "توضیحی موجود نیست"}</span>
          </div>

          <div className={style.cardprice}>
            <span>
              قیمت:{" "}
              {data.price !== undefined
                ? data.price.toLocaleString()
                : "نامشخص"}{" "}
              تومان
            </span>
          </div>
        </div>
      </div>

      {showDetail && <Detail onClose={handleClose} data={data} />}
    </>
  );
}

export default MenuCard;
