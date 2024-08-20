import { createContext, useState } from "react";
import { mockUser } from "../mock/mockUser";

export const UserContext = createContext<UserContext>({
	user: mockUser,
	setUser: () => {},
});

export const UserProvider = ({ children }: UserContextProviderProps) => {
	const [user, setUser] = useState(mockUser);

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};
