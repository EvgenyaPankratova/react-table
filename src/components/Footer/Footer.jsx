import { Pagination } from "../../Pagination";
import styles from "./Footer.module.css";

const Footer = ({
  paginate,
  nextPage,
  prevPage,
  pageActiveNumber,
}) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.back} onClick={prevPage}>
        Назад
      </div>

      <Pagination
       
        paginate={paginate}
        pageActiveNumber={pageActiveNumber}
      />

      <div className={styles.next} onClick={nextPage}>
        Далее
      </div>
    </footer>
  );
};

export { Footer };
