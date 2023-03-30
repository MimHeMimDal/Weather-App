import App from "./src/App";
import "flowbite";
import { Routes } from "./src/routes";

const root = document.getElementById("app");

root.append(App());

Routes();
