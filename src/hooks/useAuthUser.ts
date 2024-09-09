import { useAppSelector } from "./useReduxHooks";
import {
  selectError,
  selectIsRefreshing,
  selectIsUserAuth,
  selectToken,
  selectUser,
} from "../redux/userAuth/userAuthSelectors";

const useAuthUser = () => {
  const user = useAppSelector(selectUser);
  const token = useAppSelector(selectToken);
  const isAuthUser = useAppSelector(selectIsUserAuth);
  const isRefreshing = useAppSelector(selectIsRefreshing);
  const error = useAppSelector(selectError);

  return { user, token, isAuthUser, isRefreshing, error };
};

export default useAuthUser;
