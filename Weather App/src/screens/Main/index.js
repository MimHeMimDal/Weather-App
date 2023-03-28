import { Button, Header } from "@/components";
import ElementGenerator from "@/library/ElementGernerator";
import { Logout } from "@/library/Logout";

export const Main = function () {
  return ElementGenerator({
    element: "div",
    child: [
      Header({
        child: Button({ variant: "normal", child: "Logout", onclick: Logout }),
      }),
      ElementGenerator({ element: "div", className: "bg-red-500 h-10" }),
    ],
  });
};
