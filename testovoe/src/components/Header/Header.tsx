 import styles from './Header.module.scss'
 const Header = () =>{
return(
    <div className={styles.header}>
          <img className={styles.logo} src="Layer_1.svg" alt="" />
          <div className={styles.links}>
            <div className={styles.link}>
              <img className={styles.icon} src="home.svg" alt="" />
              <a className={styles.linkPoint} href="">
                Лента
              </a>
            </div>
            <div className={styles.link}>
              <img className={styles.icon} src="bag.svg" alt="" />
              <a className={styles.linkA} href="">
                Маркетплейс
              </a>
            </div>
            <div className={styles.link}>
              <img className={styles.icon} src="users.svg" alt="" />
              <a className={styles.linkA} href="">
                Рейтинги
              </a>
            </div>
            <div className={styles.link}>
              <img className={styles.icon} src="trophy.svg" alt="" />
              <a className={styles.linkA} href="">
                Cоревнования
              </a>
            </div>
            <div className={styles.link}>
              <img className={styles.icon} src="build.svg" alt="" />
              <a className={styles.linkA} href="">
                Организации
              </a>
            </div>
          </div>
          <div className={styles.profil}>
            <div className={styles.langChoce}>
              <img src="ru.png" alt="" />
              <text>RU</text>
              <img src="arrow.svg" alt="" />
            </div>
            <div className={styles.auth}>
              <img src="ava.svg" alt="" />
            </div>
          </div>
        </div>
)
 }
 export default Header