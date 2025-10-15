import { useEffect, useState } from "react";
import style from "./detail.module.css";

function Detail({ onClose, data }) {
  const [visible, setVisible] = useState(false);

  const product = data; // محصول مستقیم از props

  useEffect(() => {
    setTimeout(() => setVisible(true), 10); // برای انیمیشن باز شدن
  }, []);

  const handleClose = () => {
    setVisible(false);
    if (onClose) setTimeout(onClose, 300); // اجازه دادن برای انیمیشن بسته شدن
  };

  if (!product) return <p>محصولی یافت نشد</p>;

  return (
    <div className={style.backdrop} onClick={handleClose}>
      <div
        className={`${style.sheet} ${
          visible ? style.sheetOpen : style.sheetClose
        }`}
        onClick={(e) => e.stopPropagation()} // جلوگیری از بسته شدن هنگام کلیک داخل پنل
      >
        <button className={style.closeButton} onClick={handleClose}>
          ×
        </button>

        <img
          src={product.image || "/images/logo2.PNG"}
          alt={product.name || "Detail Image"}
          className={style.foodImage}
        />

        <div className={style.detail}>
          <h2>{product.name || "نام نامشخص"}</h2>
          <p>{product.description || "توضیحی موجود نیست"}</p>
        </div>

        <div className={style.price}>
          {product.price !== undefined
            ? `${product.price.toLocaleString()} تومان`
            : "قیمت نامشخص"}
        </div>
      </div>
    </div>
  );
}

export default Detail;
