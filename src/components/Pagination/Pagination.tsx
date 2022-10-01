import usePagination from "@mui/material/usePagination";
import { useDispatch, useSelector } from "react-redux";
import { searchParams } from "../../redux/actions/searchingParams";
import { ReduxState } from "../../types/redux";
import { List, Page } from "./Pagination.styles";

export default function UsePagination() {
  const dispatch = useDispatch()
  const params = useSelector((state: ReduxState) => state.searchReducer);
  const { items } = usePagination({
    count: 5,
    hideNextButton: true,
    onChange: (e) => dispatch(searchParams({...params, page: +(e.target as HTMLButtonElement).name })),
    hidePrevButton: true,
  });


  return (
    <nav>
      <List>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;
          
          if (type === "start-ellipsis" || type === "end-ellipsis") children = "…";
          else if (type === "page") children = <Page name={String(page)} selected={selected} {...item}>{page}</Page>
          return <li key={index}>{children}</li>;
        })}
      </List>
    </nav>
  );
}
