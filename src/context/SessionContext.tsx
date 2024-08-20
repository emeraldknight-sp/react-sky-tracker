import { createContext, useState } from "react";
import { mockSession } from "../mock/mockSession";

export const SessionContext = createContext<SessionContextProps>({
	session: mockSession,
	setSession: () => {},
});

export const SessionProvider = ({ children }: SessionProviderProps) => {
	const [session, setSession] = useState<ConfigSession>(mockSession);

	return (
		<SessionContext.Provider value={{ session, setSession }}>
			{children}
		</SessionContext.Provider>
	);
};
