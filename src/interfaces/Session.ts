export interface ConfigSession {
	email: string;
	password: string;
	remember: boolean;
	isLogged: boolean;
}

export interface SessionProviderProps {
	children: React.ReactNode;
}

export interface SessionContextProps {
	session: ConfigSession;
	setSession: (session: ConfigSession) => void;
}
