import { GetFromLocal } from "@/data";
import ElementGenerator from "./ElementGernerator";

export const HandleLastSearch = function (e) {
  //   console.log(e.target);
  const ul = ElementGenerator({ element: "ul", className: "h-full" });
  GetFromLocal().map((item) =>
    ul.append(
      ElementGenerator({ element: "li", className: "h-1/6", child: item })
    )
  );
  return ul;
};
