import "./style.css";
import { ReactNode } from "react";
import { Button } from "antd";
interface ButtonProps {
  type?: "primary" | "dashed" | "link" | "text" | "default";
  variant?: "outlined" | "dashed" | "solid" | "filled" | "text" | "link";
  color?: "primary" | "danger";
  size?: "small" | "middle" | "large";
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
  children?: ReactNode;
}

function CustomButton({ type, variant, color, size, onClick,children }: ButtonProps) {
  return (
    <Button onClick={onClick} variant={variant} color={color} size={size} type={type}>
      {children}
    </Button>
  );
}

export default CustomButton;
