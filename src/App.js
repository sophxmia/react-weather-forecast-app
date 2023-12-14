import Weather from "./Weather";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.css";

export default function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Weather defaultCity="Kyiv" />
        <footer className="mt-5">
          Open-sourse project,{" "}
          <a
            href="https://github.com/sophxmia/react-weather-forecast-app"
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
            title="Netlify link to the project"
          >
            Sofiia Maliarenko
          </a>
        </footer>
      </div>
    </div>
  );
}
