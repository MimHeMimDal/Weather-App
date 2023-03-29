import { Button, Card, Header, IsLoading } from "@/components";
import { data, GetFromLocal, SetToLocal } from "@/data";
import ElementGenerator from "@/library/ElementGernerator";
import { GetData } from "@/library/GetData";
import { HandleLastSearch } from "@/library/HandleLastSearch";
import { Logout } from "@/library/Logout";
import { debounce } from "lodash";

export const Main = function () {
  return ElementGenerator({
    element: "div",
    className: "h-screen",
    child: [
      Header({
        child: [
          Button({ variant: "normal", child: "Logout", onclick: Logout }),
          ElementGenerator({
            element: "div",
            className: "relative",
            child: [
              ElementGenerator({
                element: "input",
                className: "px-2",
                onkeyup: debounce((e) => {
                  document.getElementById("cardsContainer").innerHTML = "";
                  if (e.target.value.trim() !== "") {
                    document
                      .getElementById("cardsContainer")
                      .append(IsLoading());
                    GetData(data.weatherApiUrl + `&q=${e.target.value}`).then(
                      (data) => {
                        document.getElementById("isLoading").remove();
                        if (!data.error) {
                          document
                            .getElementById("cardsContainer")
                            .append(Card(data));
                          const tempArr = GetFromLocal();
                          tempArr.push(data.location.name);
                          SetToLocal(tempArr);
                        } else {
                          document
                            .getElementById("cardsContainer")
                            .append(data.error.message);
                        }
                      }
                    );
                  }
                }, 800),
                onfocus: (e) => {
                  console.log(e.target);
                  document.getElementById("lastSearch").classList.remove("h-0");
                  document.getElementById("lastSearch").classList.add("h-40");
                  document
                    .getElementById("lastSearch")
                    .append(HandleLastSearch());
                },
                onblur: (e) => {
                  console.log(e.target);
                  document
                    .getElementById("lastSearch")
                    .classList.remove("h-40");
                  document.getElementById("lastSearch").classList.add("h-0");
                  document.getElementById("lastSearch").innerHTML = "";
                },
              }),
              ElementGenerator({
                element: "div",
                id: "lastSearch",
                className:
                  "absolute top-6 left-0 duration-300 h-0 w-full bg-red-600",
                // child: HandleLastSearch(),
              }),
            ],
          }),
        ],
      }),
      ElementGenerator({
        element: "main",
        id: "cardsContainer",
        className: "flex justify-center items-center h-2/3",
        // child: IsLoading(),
      }),
    ],
  });
};
