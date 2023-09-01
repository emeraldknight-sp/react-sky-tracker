import { StyledButton } from "./Button.style";

interface ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	type?: "button" | "reset" | "submit";
	style: "contained" | "text" | "outlined";
	size: "xs" | "sm" | "md" | "lg";
	className?: string;
}

export const Button = ({
	children,
	type = "button",
	style = "contained",
	size = "md",
	onClick,
	className,
}: ButtonProps) => {
	const buttonClassName = `button button--${size} button--${style} ${className}`;

	return (
		<StyledButton type={type} className={buttonClassName} onClick={onClick}>
			{children}
		</StyledButton>
	);
};
