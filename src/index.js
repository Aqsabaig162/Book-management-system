import React from "react";
import { createRoot } from 'react-dom/client';
import AppRouter from "./router/AppRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";
import store from "./store/store";
import { Provider } from "react-redux";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
<Provider store={store}>
    <AppRouter />
</Provider>
);
