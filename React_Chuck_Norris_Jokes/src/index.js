import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

// Using default global configuration
axios.defaults.baseURL = "https://api.chucknorris.io/jokes";

import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
