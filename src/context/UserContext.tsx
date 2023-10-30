import { createContext, useState } from "react";
import { mockUser } from '../mock/mockUser';
import { User } from "../interfaces/User";

export interface UserContext {
	user: User;
	setUser: (user: User) => void;
}

export const UserContext = createContext<UserContext>({
	user: mockUser,
	setUser: () => {},
});

interface UserContextProviderProps {
	children: React.ReactNode;
}

export const UserProvider = ({
	children,
}: UserContextProviderProps) => {
	const [user, setUser] = useState(mockUser);

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};
