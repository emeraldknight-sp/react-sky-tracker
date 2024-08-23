import { Account } from "./pages/Account";
import { Activities } from "./pages/Activities";
import { Home } from "./pages/Home";
import { LoadingLottie } from "./components/animations/LoadingLottie";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Here we have the configuration of the application routes.
// This is the recommended router for all React Router web projects.
// It uses the DOM History API to update the URL and manage the history stack.

const router = createBrowserRouter([
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
	{
		path: "/activities",
		element: <Activities />,
	},
]);

// All data router objects are passed to this component
// to render your app and enable the rest of the data APIs.

export const App = () => {
	return <RouterProvider router={router} fallbackElement={<LoadingLottie />} />;
};
