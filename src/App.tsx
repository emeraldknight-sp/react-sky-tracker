import {
	RouterProvider,
	RouteObject,
	createBrowserRouter,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Account } from "./pages/Account";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

const routes: RouteObject[] = [
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/account",
		element: <Account />,
	},
	{
		path: "/register",
		element: <Register />,
	},
	{
		path: "/login",
		element: <Login />,
	},
];

const router = createBrowserRouter(routes);

export const App = () => {
	return <RouterProvider router={router} />;
};
