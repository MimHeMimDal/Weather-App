import { PostData } from "@/library/PostData";
import { GetData } from "./GetData";
import { Routes } from "@/routes";
import Cookies from "js-cookie";

export const CheckRegister = function (e) {
  e.preventDefault();
  const { passwordRegister, rePasswordRegister, userNameRegister } =
    e.target.closest("form").elements;
  console.log(passwordRegister, rePasswordRegister);
  //   console.log(e.target.closest("form").elements);
  GetData(
    `http://localhost:3000/loginData?userName=${userNameRegister.value}`
  ).then((data) => {
    if (data.length !== 0) {
      userNameRegister.nextElementSibling.textContent =
        "* This user is already taken";
      console.log(userNameRegister);
      userNameRegister.addEventListener("keyup", (e) => {
        e.target.nextElementSibling.textContent = "";
      });
    } else {
      //   history.pushState(null, null, "/weather");
      //   Routes();
      if (passwordRegister.value !== rePasswordRegister.value) {
        rePasswordRegister.nextElementSibling.textContent =
          "Passwords Does Not Match";
        passwordRegister.nextElementSibling.textContent =
          "Passwords Does Not Match";
      } else {
        PostData({
          endPoint: "loginData",
          obj: {
            userName: userNameRegister.value,
            password: passwordRegister.value,
            id: crypto.randomUUID(),
          },
        });
        history.pushState(null, null, "/weather");
        Cookies.set("token", `${userNameRegister.value}token`);
        Routes();
        rePasswordRegister.nextElementSibling.textContent = "";
        passwordRegister.nextElementSibling.textContent = "";
        e.target.closest("form").reset();
      }
    }
  });
  //   PostData({ endPoint: "loginData" });
};
