import style from "./category.module.css";

function Category({ data, onClick, isSelected }) {
  return (
    <div className={style.main} onClick={() => onClick(data?.products)}>
      <div className={`${style.detail} ${isSelected ? style.selected : ""}`}>
        <span>{data?.category_name}</span>
      </div>
    </div>
  );
}

export default Category;
