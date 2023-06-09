import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Chat from "./pages/Chat";
import { UserContextProvider } from "./assets/Context/UserContext";
import ErrorBoundary from "./assets/ErrorBoundary";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="chat" element={<Chat />} />
    </Route>
  )
);

function App({ routes }) {
  return (
    <>
      <ErrorBoundary>
        <UserContextProvider>
          <RouterProvider router={router} />
        </UserContextProvider>
      </ErrorBoundary>
    </>
  );
}

export default App;
