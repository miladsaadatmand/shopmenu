import { useEffect, useState } from "react";
import { ArrowRight } from "iconsax-reactjs";
import style from "./menu.module.css";
import { useNavigate } from "react-router-dom";
import Category from "../category/category";
import MenuCard from "../menuCard/menuCard";
import Loading from "../loading/loading";

// ✅ اضافه کن:
import categoriesData from "../../data/product";

function Menu() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [visibleCards, setVisibleCards] = useState(true);

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    // ✅ داده‌ها از فایل لوکال گرفته می‌شوند
    try {
      setCategories(categoriesData);

      if (categoriesData.length > 0) {
        setMenuItems(categoriesData[0].products || []);
        setSelectedCategoryId(categoriesData[0].id);
      }
    } catch (error) {
      console.error("❌ خطا در بارگذاری داده‌ها:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleCategoryClick = (products, id) => {
    setVisibleCards(false);
    setSelectedCategoryId(id);

    setTimeout(() => {
      setMenuItems(products || []);
      setVisibleCards(true);
    }, 300);
  };

  if (loading) return <Loading />;

  return (
    <div className={style.main}>
      <div className={style.top}></div>

      <div className={style.header}>
        <div className={style.name}>
          <span>پیتزا شاپ</span>
          <ArrowRight
            size="34"
            color="#000000ff"
            onClick={goBack}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>

      <div className={style.logo}>
        <div className={style.logoR}>
          <img src="images/logo2.png" alt="" />
        </div>
        <div className={style.logoL}>
          <span>اولین پیتزا فروشی در اصفهان</span>
          <span>۱۳۵۸</span>
        </div>
      </div>

      <div className={style.category}>
        {categories.map((cat) => (
          <Category
            key={cat.id}
            data={cat}
            isSelected={selectedCategoryId === cat.id}
            onClick={(products) => handleCategoryClick(products, cat.id)}
          />
        ))}
      </div>

      <div className={style.menuList}>
        {visibleCards && menuItems.length > 0 ? (
          menuItems.map((item, index) => (
            <MenuCard key={item.id || index} data={item} />
          ))
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default Menu;
