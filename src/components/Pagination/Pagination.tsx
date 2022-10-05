import usePagination from "@mui/material/usePagination";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAllUsers } from "../../hooks/useAllUsers";
import { searchParams } from "../../redux/actions/searchingParams";
import { ReduxState } from "../../types/redux";
import { List, Navigation, Page, SelectList } from "./Pagination.styles";

export default function UsePagination() {
  const dispatch = useDispatch()
  const [ perPage, setPerPage ] = useState<number>(5)
  const [ usersLength, setUsersLength ] = useState<number>();
  const params = useSelector((state: ReduxState) => state.searchReducer);
  
  const { items } = usePagination({
    count: usersLength,
    hideNextButton: true,
    onChange: (e) => dispatch(searchParams({...params, page: +(e.target as HTMLButtonElement).name })),
    hidePrevButton: true,
  });
  
  const {users} = useAllUsers()
  
  const countPages = (): void => {
    const perPage = params.perPage;
    const userLength = users?.data.length ?? 0;

    const result = Math.ceil(userLength / perPage);
    setUsersLength(result)
  }

  useEffect(() => {
    countPages()
  }, [users, params])

  return (
    <Navigation>
      <List>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;
          
          if (type === "start-ellipsis" || type === "end-ellipsis") children = "…";
          else if (type === "page") children = <Page name={String(page)} selected={selected} {...item}>{page}</Page>
          return <li key={index}>{children}</li>;
        })}
      </List>
      <SelectList value={perPage} onChange={(e) => {
        dispatch(searchParams({...params, perPage: +(e.target as HTMLSelectElement).value }))
        setPerPage(+(e.target as HTMLSelectElement).value)
      }}>
        <option>1</option>
        <option>2</option>
        <option>5</option>
      </SelectList>
    </Navigation>
  );
}
