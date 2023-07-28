import styles from "./Table.module.css";
import { Skeleton } from "../.././Skeleton";
import TableHeader from "../TableHeader/TableHeader";
import TableItem from "../TableItem/TableItem";

const Table = ({ users, setUsers, isLoading, searchValue, Sorting }) => {
  return (
    <div>
      <table className="main_table table table-bordered">
        <TableHeader Sorting={Sorting} />
        <tbody>
          {isLoading ? (
            <tr className="skeleton">
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </tr>
          ) : (
            <TableItem
              users={users}
              setUsers={setUsers}
              isLoading={isLoading}
              searchValue={searchValue}
            />
          )}
        </tbody>
      </table>
    </div>
  );
};

export { Table };
