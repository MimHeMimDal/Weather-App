import { Button, Form, TextField } from "@/components";
import { CheckLogin } from "@/library/CheckLogin";
import ElementGenerator from "@/library/ElementGernerator";
import { Routes } from "@/routes";

export const LoginPage = function () {
  return ElementGenerator({
    element: "div",
    className:
      "absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 h-2/3 w-2/3 bg-[#2C74B3] border px-5",
    onsubmit: CheckLogin,
    child: [
      Form({
        id: "login-form",
        className: "flex flex-col items-center justify-between gap-2 py-5",
        child: [
          ElementGenerator({
            element: "div",
            className: "text-white",
            child: "Welcome",
          }),
          TextField({
            parentClass: "w-full",
            labelChild: "Username",
            id: "userNameLogin",
            type: "text",
          }),
          TextField({
            parentClass: "w-full",
            labelChild: "Password",
            id: "passwordLogin",
            type: "password",
          }),
          Button({
            type: "submit",
            child: "Login",
            variant: "normal",
          }),
        ],
      }),
      ElementGenerator({
        element: "div",
        className: "flex flex-col sm:flex-row gap-2",
        child: [
          ElementGenerator({ element: "span", child: "Dont have an account?" }),
          ElementGenerator({
            element: "span",
            child: "Sign up",
            className: "text-white hover:text-[#000] cursor-pointer",
            onclick: () => {
              history.pushState(null, null, "/register");
              Routes();
            },
          }),
        ],
      }),
    ],
  });
};
