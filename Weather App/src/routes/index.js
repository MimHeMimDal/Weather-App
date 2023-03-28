import { LoginPage, RegisterPage } from "@/screens/Auth";
import { Main } from "@/screens/Main";
import Cookies from "js-cookie";

export const Routes = function () {
  const app = document.getElementById("app");
  app.innerHTML = "";

  switch (location.pathname) {
    case "/":
      if (Cookies.get("token")) {
        history.pushState(null, null, "/weather");
        return Routes();
      } else {
        history.pushState(null, null, "/login");
      }
      return Routes();

    case "/login":
      app.append(LoginPage());
      return;
    case "/register":
      app.append(RegisterPage());
      return;

    case "/weather":
      if (Cookies.get("token")) {
        app.append(Main());
      } else {
        app.innerHTML = "Login First";
      }
      break;

    default:
      app.innerHTML = "Page not found";
      break;
  }
};
