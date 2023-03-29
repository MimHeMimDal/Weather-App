import ElementGenerator from "@/library/ElementGernerator";

export const Modal = function ({ id, child, modalClass }) {
  return ElementGenerator({
    element: "div",
    id,
    onclick: (e) => {
      if (e.target.id === id) {
        e.target.remove();
      }
    },
    className:
      "absolute w-screen h-screen top-0 bg-slate-600 bg-opacity-40 z-10 flex items-center justify-center text-xl",
    child: [
      ElementGenerator({
        element: "div",
        className: `absolute w-1/3 h-1/2 z-20 rounded-md bg-slate-800 ${modalClass}`,
        child,
      }),
    ],
  });
};
