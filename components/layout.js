import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../store/actions/themeActions";
import MainAppBar from "./appbar";

export default function Layout({ children, page }) {
  const dark = useSelector((state) => state.theme.dark);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTheme());
  }, [dispatch]);

  return (
    <div
      style={{
        minWidth: "100vw",
        minHeight: "100vh",
        borderRadius: 0,
      }}
    >
      <MainAppBar />
      <div>{children}</div>
    </div>
  );
}
