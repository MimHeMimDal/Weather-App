import ElementGenerator from "./library/ElementGernerator";
import Auth from "./screens/Auth";
function App() {
  return ElementGenerator({
    element: "div",
    child: Auth(),
  });
}

export default App;
