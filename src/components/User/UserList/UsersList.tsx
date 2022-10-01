import { useEffect, useState } from "react";
import { useUsers } from "../../../hooks/useUsers";
import {  User } from "../../../types/user";
import PaginationOutlined from "../../Pagination/Pagination";
import { UserBox } from "../UserBox/UserBox";
import { ListWrapper } from "./UserList.styles";
import { PaginationWrapper } from "../../Pagination/Pagination.styles";
import { ReactComponent as Loader } from "../../../assets/svg/loader.svg";
import { SortLabel } from "../../Sort/SortLabel";
import { FilterLabel } from "../../Filter/FilterLabel";

export const UsersList = () => {
  const [users, setUsers] = useState<User[]>();
  const { users: hookUsers} = useUsers();

  useEffect(() => {
    setUsers(hookUsers?.data);
  }, [hookUsers?.data]);

  return (
    <>
    <ListWrapper>
      <FilterLabel/>
      <SortLabel/>
      {users ? users.map((user, i) => (
        <UserBox user={user} key={i}/>
      )) : <Loader/>}
      <PaginationWrapper>
        <PaginationOutlined/>
      </PaginationWrapper>
    </ListWrapper>
    </>
  );
};
