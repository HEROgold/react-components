import StyleSelector from "./components/style-selector";
import "./styles/theme.css";

export function App() {
  return (
    <div className="app">
      <h1>Bun + React</h1>
      <StyleSelector />
      <p className="inner">
        This is a simple React application using Bun as the runtime. You can change the theme color using the color picker above.
      </p>
      <p className="surface">
        This is a simple React application using Bun as the runtime. You can change the theme color using the color picker above.
      </p>
      <p className="accent">
        This is a simple React application using Bun as the runtime. You can change the theme color using the color picker above.
      </p>
    </div>
  );
}

export default App;
