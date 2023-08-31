import { StyledButton } from "./Button.style";

export const Button = ({
	children,
	...rest
}: {
	children: React.ReactNode;
}) => {
	return <StyledButton {...rest}>{children}</StyledButton>;
};
