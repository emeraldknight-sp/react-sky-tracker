import { Dispatch, SetStateAction, createContext, useState } from "react";
import { mockUser } from "../mock/mockUser";

export interface UserDataContext {
	userData: typeof mockUser;
	setUserData: Dispatch<SetStateAction<typeof mockUser>>;
}

export const UserDataContext = createContext<UserDataContext>({
	userData: mockUser,
	setUserData: () => {},
});

interface UserDataContextProviderProps {
	children: React.ReactNode;
}

export const UserDataProvider = ({
	children,
}: UserDataContextProviderProps) => {
	const [userData, setUserData] = useState(mockUser);

	return (
		<UserDataContext.Provider value={{ userData, setUserData }}>
			{children}
		</UserDataContext.Provider>
	);
};
