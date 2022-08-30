import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
   
     <App name="feedback-app" callback={() => console.log("App rendered")} />);

