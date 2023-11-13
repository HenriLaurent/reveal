import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import GameDifficulty from "./pages/game-difficulty";
import Game from "./pages/game";
import "../index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/difficulty", element: <GameDifficulty /> },
  { path: "/game", element: <Game /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
