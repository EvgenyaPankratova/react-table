import styles from "./Main.module.css";
import Search from "../Search/Search";
import { Table } from "../Table/Table";
import { Footer } from "../Footer/Footer";
import { useEffect, useState } from "react";


const Main = () => {
  const [users, setUsers] = useState([]); //храним пользователей
  const [isLoading, setLoading] = useState(true); //для отображения загрузки
  const [currentPage, setCurrentPage] = useState(1); //для текущей страницы
  const [usersPerPage] = useState(10); //храним кол-во элементов, которые нужно показать на каждой странице
  const [searchValue, setsearchValue] = useState(""); //для поиска
  const [order, setOrder] = useState("ASC"); //для сортировки

  const onChangeSearchValue = (event) => {
    setsearchValue(event.target.value);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json);
      })
      .catch((err) => {
        console.warn(err);
        alert("ой, что-то пошло не так");
      })
      .finally(() => setLoading(false));
  }, []);

  const initialPageNumbers = Array.from({ length: 10 }).map((_, index) => ({
    id: index + 1,
    isActive: false,
  }));

  const [pageActiveNumber, setpageActiveNumber] = useState(initialPageNumbers);

  const lastUserIndex = currentPage * usersPerPage;
  const firstUserIndex = lastUserIndex - usersPerPage;
  const currentUsers = users.slice(firstUserIndex, lastUserIndex);


  const paginate = (e, pageNumber, index) => {
    e.preventDefault();
    setCurrentPage(pageNumber.id);
  
    handleToggle(pageNumber);
  };

  const handleToggle = (elem) => {
    setpageActiveNumber((prev) =>
      prev.map((pageNum) => {
        return elem.id === pageNum.id
          ? { ...pageNum, isActive: !pageNum.isActive }
          : { ...pageNum, isActive: false }; 
      })
    );
  };

  const nextPage = () => {
    setCurrentPage((prev) => {
      if (prev === 10) {
        prev = 1;
        return prev;
      } else {
        
        setpageActiveNumber((previos) =>
          previos.map((pageNum) => {
            return prev === pageNum.id
              ? { ...pageNum, isActive: !pageNum.isActive }
              : { ...pageNum, isActive: false }; 
          })
        );
        
        return prev + 1;
      }
    });
  };

  const prevPage = () => {
    setCurrentPage((prev) => {
      if (prev === 1) {
        prev = 10;
        return prev;
      } else {
        return prev - 1;
      }
    });
  };

  const Sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...users].sort((a, b) => (a[col] > b[col] ? 1 : -1));
      setUsers(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...users].sort((a, b) => (a[col] < b[col] ? 1 : -1));
      setUsers(sorted);
      setOrder("ASC");
    }
  };

  return (
    <main className={styles.main}>
      <Search
        searchValue={searchValue}
        onChangeSearchValue={onChangeSearchValue}
      />

      <Table
        users={currentUsers}
        setUsers={setUsers}
        isLoading={isLoading}
        searchValue={searchValue}
        Sorting={Sorting}
      />

      <Footer
        usersPerPage={usersPerPage}
        paginate={paginate}
        nextPage={nextPage}
        prevPage={prevPage}
        pageActiveNumber={pageActiveNumber}
      />
    </main>
  );
};

export { Main };
