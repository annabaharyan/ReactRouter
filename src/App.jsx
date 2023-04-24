import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import OrderConfirmed from "./components/OrderConfirmed";
import ErrorPage from "./components/ErrorPage";
import Products from "./components/Products";
import Featured from "./components/Featured";
import New from "./components/New";
import User from "./components/User";
import Users from "./components/Users";
import AdminUser from "./components/AdminUser";
import { AuthProvider } from "./utils/auth";
import "./App.css";
import Profile from "./components/profile";
import Login from "./components/Login";
import RequireAuth from "./components/RequireAuth";

const LazyAbout = lazy(() => import("./components/About"));

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="about"
          element={
            <Suspense fallback="Loading...">
              <LazyAbout />
            </Suspense>
          }
        />
        <Route path="confirmed" element={<OrderConfirmed />} />
        <Route
          path="products"
          element={
            <RequireAuth>
              <Products />
            </RequireAuth>
          }
        >
          <Route index element={<Featured />} />
          <Route path="featured" element={<Featured />} />
          <Route path="new" element={<New />} />
        </Route>
        <Route
          path="users"
          element={
            <RequireAuth>
              <Users />
            </RequireAuth>
          }
        >
          <Route path=":id" element={<User />} />
          <Route path="admin" element={<AdminUser />} />
        </Route>
        <Route
          path="profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
