import style from './workTime.module.css';

function WorkTime({ onClose }) {
    return (
        <div className={style.overlay} onClick={onClose}>
            <div className={style.popup} onClick={(e) => e.stopPropagation()}>
                <button className={style.closeIcon} onClick={onClose}>×</button>
                <p className={style.text}>ساعت کاری: هر روز از۶ عصر تا ۱۲ شب </p>
            </div>
        </div>
    );
}

export default WorkTime;
