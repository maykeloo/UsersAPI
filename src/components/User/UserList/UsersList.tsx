import { useEffect, useState } from "react";
import { useUsers } from "../../../hooks/useUsers";
import { User } from "../../../types/user";
import PaginationOutlined from "../../Pagination/Pagination";
import { UserBox } from "../UserBox/UserBox";
import { ListContent, ListWrapper } from "./UserList.styles";
import { PaginationWrapper } from "../../Pagination/Pagination.styles";
import { SortLabel } from "../../Sort/SortLabel";
import { FilterLabel } from "../../Filter/FilterLabel";
import { EditUser } from "../../EditUser/EditUser";
import Loader from "../../Reusable/Loader";

export const UsersList = () => {
  const [users, setUsers] = useState<User[]>();
  const { users: hookUsers } = useUsers();

  useEffect(() => {
    setUsers(hookUsers?.data);
  }, [hookUsers?.data]);

  return (
    <>
    <ListContent>
        <FilterLabel />
        <EditUser />
        <SortLabel />
      <ListWrapper>
        {users ? (
          users.map((user, i) => <UserBox user={user} key={i} />)
        ) : (
          <Loader />
        )}
      </ListWrapper>
        <PaginationWrapper>
          <PaginationOutlined />
        </PaginationWrapper>
      </ListContent>
    </>
  );
};
