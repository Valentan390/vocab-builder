import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ModalContainer from "./components/ModalContainer/ModalContainer";
import ModalContent from "./components/ModalContent/ModalContent";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppDispatch, useAppSelector } from "./hooks/useReduxHooks";
import { lazy, useEffect } from "react";
import { userRefresh } from "./redux/userAuth/operationsUserAuth";
import { statisticsThunk } from "./redux/word/operationsWord";
import { wordCategoriesThunk } from "./redux/filters/operationsFilter";
import { selectIsUserAuth } from "./redux/userAuth/userAuthSelectors";

const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const DictionaryPage = lazy(
  () => import("./pages/DictionaryPage/DictionaryPage")
);
const RecommendPage = lazy(() => import("./pages/RecommendPage/RecommendPage"));
const TrainingPage = lazy(() => import("./pages/TrainingPage/TrainingPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));

const App = () => {
  const dispatch = useAppDispatch();
  const isUserAuth = useAppSelector(selectIsUserAuth);

  useEffect(() => {
    dispatch(userRefresh()).unwrap();
    if (isUserAuth) {
      dispatch(statisticsThunk());
      dispatch(wordCategoriesThunk());
    }
  }, [dispatch, isUserAuth]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <RestrictedRoute
                redirectTo="/dictionary"
                component={RegisterPage}
              />
            }
          />

          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/dictionary"
                component={RegisterPage}
              />
            }
          />

          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/dictionary" component={LoginPage} />
            }
          />

          <Route
            path="/dictionary"
            element={
              <PrivateRoute redirectTo="/register" component={DictionaryPage} />
            }
          />

          <Route
            path="/recommend"
            element={
              <PrivateRoute redirectTo="/register" component={RecommendPage} />
            }
          />

          <Route
            path="/training"
            element={
              <PrivateRoute redirectTo="/register" component={TrainingPage} />
            }
          />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <ModalContainer>
        <ModalContent />
      </ModalContainer>

      <ToastContainer position="top-center" autoClose={5000} />
    </>
  );
};

export default App;
