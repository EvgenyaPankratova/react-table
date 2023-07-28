import styles from "./TableItem.module.css";

const TableItem = ({ users, searchValue }) => {
  return (
    <>
      {users
        .filter((obj) => {
          let full = (obj.id + obj.title + obj.body).toLowerCase();
          return (
            full.includes(searchValue.toLowerCase()) ||
            obj.body.toLowerCase().includes(searchValue.toLowerCase())
          );
        })

        .map((elem) => {
          return (
            <tr className={styles.table_item}>
              {" "}
              <td className={styles.table_item_id}>{elem.id}</td>
              <td className={styles.table_item_title}>{elem.title}</td>
              <td className={styles.table_item_body}>{elem.body}</td>
            </tr>
          );
        })}
    </>
  );
};

export default TableItem;
