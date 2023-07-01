import { ReactNode } from "react";
import { StyledClimateItem } from "./ClimateItem.style";

interface ClimateItemProps {
	children: ReactNode;
}

export const ClimateItem = ({ children }: ClimateItemProps) => {
	return <StyledClimateItem>{children}</StyledClimateItem>;
};
