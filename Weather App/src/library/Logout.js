import Cookies from "js-cookie";
import { Routes } from "@/routes";

export const Logout = function (e) {
  e.preventDefault();
  Cookies.remove("token");
  history.pushState(null, null, "/");
  Routes();
};
