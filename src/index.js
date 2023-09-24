import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import stories from "./sample_news_stories.json";

function App() {
  return (
    <div>
      <h1>My news Feed</h1>
      {stories.results.map(Card)}
    </div>
  );
}

function Card(props) {
  return (
    <div>
      <div>
        <img src={props.image_url}></img>
      </div>
      <div>
        <a href={props.links}>
          <h3>{props.title}</h3>
          <p>
            <span>By:{props.creator}</span>
          </p>
        </a>
      </div>
      <h6>{props.description}</h6>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
