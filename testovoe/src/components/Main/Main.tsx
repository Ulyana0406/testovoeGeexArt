import styles from "./Main.module.scss";
import Divider from "@mui/material/Divider";
const Main = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.mainLeft}>
          <div className={styles.post}>
            <text className={styles.date}>
              Спортивная Борьба 12 марта, 2024 в 16:03
            </text>
            <h2 className={styles.postH}>
              Илья Бессонов дал интервью для телеканала Россия-1
            </h2>
            <text className={styles.postText}>
              Илья Бессонов дал интервью после большого перерыва, где поделился
              секретом своего успеха и рассказал <br></br>методики своих
              тренировок. Спортсмен сделал заявление, что возвращается в спорт и
              ...<text className={styles.readMore}>Читать больше</text>
            </text>
          </div>
          <div className={styles.pictures}>
            <div className={styles.pictures1}>
              <img src="post1.png" alt="" />
              <img src="post2.png" alt="" />
              <img src="post3.png" alt="" />
            </div>
            <div className={styles.pictures1}>
              <img src="post4.png" alt="" />
              <img src="post5.png" alt="" />
              <img src="post6.png" alt="" />
            </div>
          </div>
          <div className={styles.likes}>
            <div className={styles.likesSector}>
              <img src="eye.svg" alt="" />
              <text className={styles.likesText}>4.1 K</text>
            </div>
            <div className={styles.likesSector}>
              <img src="messege.svg" alt="" />
              <text className={styles.likesText}>4</text>
            </div>
          </div>
          <Divider />
          <div className={styles.reviews}>
            <div className={styles.review1}>
              <img className={styles.avatar} src="ava1.png" alt="" />
              <div className={styles.userinfo}>
                <div className={styles.mainInfo}>
                  <text className={styles.name}>Вадим Давыдов</text>
                  <text className={styles.rew}>
                    Наконец-то! Рад, что он вернулся в спорт
                  </text>
                </div>
                <div className={styles.reviewTime}>
                  <text className={styles.time}>15 минут назад</text>
                  <button className={styles.rewButton}>Ответить</button>
                </div>
              </div>
            </div>
            <div className={styles.review2}>
              <img className={styles.avatar} src="ava2.png" alt="" />

              <div className={styles.userinfo}>
                <div className={styles.mainInfo}>
                  <text className={styles.name}>Артем Еременко</text>
                  <text className={styles.rew}>
                    Вадим , согласен! Уже давно ждал интервью!
                  </text>
                </div>
                <div className={styles.reviewTime}>
                  <text className={styles.time}>30 секунд назад</text>
                  <button className={styles.rewButton}>Ответить</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mainRight}>
          <div className={styles.filter}>
            <h2 className={styles.filterH}>Фильтр ленты</h2>
            <div className={styles.filterButtons}>
              <button className={styles.filterButton}>
                {" "}
                <img className={styles.filterImg} src="filter1.svg" alt="" />
                Все
              </button>
              <button className={styles.filterButton}>
                <img className={styles.filterImg} src="filter2.svg" alt="" />
                Результаты соревнований
              </button>
              <button className={styles.filterButton}>
                <img className={styles.filterImg} src="filter3.svg" alt="" />
                Видео
              </button>
              <button className={styles.filterButton}>
                <img className={styles.filterImg} src="filter4.svg" alt="" />
                Достижения
              </button>
            </div>
          </div>
          <div className={styles.advertisment}>
            <div className={styles.advstroke}>
              <img src="logoadv.svg" alt="" />
              <div className={styles.bikeSport}>Велоспорт</div>
              <div className={styles.moscow}>
                <text className={styles.moscowtext}>Москва</text>
                <text className={styles.year}>2024</text>
              </div>
            </div>
            <div className={styles.advmain}>
              Тур Альп-2024 <br></br>Этап 3
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Main;
