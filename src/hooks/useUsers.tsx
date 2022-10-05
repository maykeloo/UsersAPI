import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { store } from "../redux";
import { ReduxState } from "../types/redux";
import { GetUserPayload } from "../types/user";

interface Payload {
  users: GetUserPayload | null;
  refetch: (linkParams: Record<string, string>) => Promise<void>;
}

export const useUsers = (): Payload => {
  const [users, setUsers] = useState<GetUserPayload | null>(null);

  const fetchData = async (linkParams: any): Promise<void> => {
    const url: URL = new URL(
      `http://api.ultimate.systems/public/index.php/api/v1/auth/users`
    );
    const params = new URLSearchParams(linkParams);
    url.search = params.toString();

    try {
      const data: Response = await fetch(url);
      const jsonData = await data.json();
      setUsers(jsonData);
    } catch {
      throw new Error("Can't reach users.");
    }
  };

  // SELECTORS
  const params = useSelector((state: ReduxState) => state.searchReducer);
  useEffect(() => {
    fetchData(store.getState().searchReducer);
  }, [params]);

  return {
    users: users ? users : null,
    refetch: fetchData,
  };
};
