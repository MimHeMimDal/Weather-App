import Cookies from "js-cookie";
import { Routes } from "@/routes";
import { Button, Modal } from "@/components";
import ElementGenerator from "./ElementGernerator";

export const Logout = function (e) {
  e.preventDefault();
  document.body.append(
    Modal({
      modalClass: "text-white",
      id: "logout",
      child: ElementGenerator({
        element: "div",
        className: "h-full flex flex-col items-center justify-center gap-5",
        child: [
          ElementGenerator({
            element: "div",
            child: "Are you sure you want to logout?",
          }),
          ElementGenerator({
            element: "div",
            className: "flex gap-3 w-full justify-center",
            child: [
              Button({
                child: "Cancel",
                onclick: () => {
                  document.getElementById("logout").remove();
                },
              }),
              Button({
                child: "Yes",
                onclick: () => {
                  Cookies.remove("token");
                  history.pushState(null, null, "/");
                  Routes();
                  document.getElementById("logout").remove();
                },
              }),
            ],
          }),
        ],
      }),
    })
  );
};
