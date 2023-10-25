import {
	StyledContent,
	StyledDivider,
	StyledDividerGroup,
} from "./Divider.style";

export interface DividerProps {
	children?: string;
}

export const Divider = ({ children }: DividerProps) => {
	return (
		<StyledDividerGroup>
			<StyledDivider />
			<StyledContent>{children}</StyledContent>
			<StyledDivider />
		</StyledDividerGroup>
	);
};
