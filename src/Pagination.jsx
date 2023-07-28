
import styles from "./components/Footer/Footer.module.css";


const Pagination = ({
  paginate,
  pageActiveNumber
}) => {
  console.log(pageActiveNumber);
  return (
    <div>
      <ul className={styles.footer__list}>
        {pageActiveNumber.map((elem, index) => {
          return (
            <>
              <li key={elem.id}>
                <a
                  className={
                    elem.isActive
                      ? `${styles.footer__list_active}`
                      : `${styles.footer__list_link}`
                  }
                  onClick={(e) => paginate(e, elem, index)}
                  href="!#"
                >
                  {elem.id}
                </a>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};



export { Pagination };
