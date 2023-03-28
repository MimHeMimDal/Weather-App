import { Button, Form, TextField } from "@/components";
import { CheckRegister } from "@/library/CheckRegister";
import ElementGenerator from "@/library/ElementGernerator";

export const RegisterPage = function () {
  return ElementGenerator({
    element: "div",
    className:
      "absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 h-2/3 w-2/3 bg-[#2C74B3] border px-5",
    onsubmit: CheckRegister,
    child: [
      Form({
        id: "register-form",
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
            id: "userNameRegister",
            type: "text",
          }),
          TextField({
            parentClass: "w-full",
            labelChild: "Password",
            id: "passwordRegister",
            type: "password",
          }),
          TextField({
            parentClass: "w-full",
            labelChild: "Reapat Password",
            id: "rePasswordRegister",
            type: "password",
          }),
          Button({
            type: "submit",
            child: "Register",
            variant: "normal",
          }),
        ],
      }),
      ElementGenerator({
        element: "div",
        child: [
          ElementGenerator({ element: "span", child: "You have an account?" }),
          ElementGenerator({ element: "span", child: "Sign in" }),
        ],
      }),
    ],
  });
};
