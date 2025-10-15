import { useEffect, useState } from 'react';
import style from './loading.module.css';

function Loading({ onFinished }) {
    const [fadeOut, setFadeOut] = useState(false);
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setFadeOut(true);
        }, 3500);

        const timer2 = setTimeout(() => {
            setHidden(true);
            if (onFinished) onFinished();  // وقتی کاملا مخفی شد به والد اطلاع بده
        }, 6000);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, [onFinished]);

    if (hidden) return null;

    return (
        <div className={`${style.container} ${fadeOut ? style.fadeOut : ''}`}>
            <img src="images/logo2.PNG" alt="Logo" className={style.logo} />
            <p className={style.text}>در حال بارگذاری...</p>
            <div className={style.spinner}></div>
        </div>
    );
}

export default Loading;
