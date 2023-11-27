import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Weather />
        <footer className="mt-5">
          Open-sourse project,{" "}
          <a
            href="https://github.com/sophxmia/react-weather-app"
            target="_blank"
            rel="noreferrer"
            title="GitHub link"
          >
            hosted on GitHub
          </a>
          , written by{" "}
          <a
            href="https://brilliant-meerkat-d49135.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Sofiia Maliarenko
          </a>
        </footer>
      </div>
    </div>
  );
}
