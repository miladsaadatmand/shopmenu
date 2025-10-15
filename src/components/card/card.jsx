import { Link } from 'react-router-dom';
import style from './card.module.css';

function Card() {
    return (
        <Link to="/menu" className={style.linkWrapper}>
            <div className={style.main}>
                <div className={style.menu}>
                    <div className={style.menuLogo}>
                        <div className={style.background}>
                            <div className={style.menuImg}>
                                <img src="images/menuLogo.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.detail}>
                    <span>منو پیتزا شاپ</span>
                </div>
            </div>
        </Link>
    );
}

export default Card;
