import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home/Home";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
]);

export const App = () => {
	return <RouterProvider router={router} />;
};
