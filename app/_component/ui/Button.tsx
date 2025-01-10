// app/ui/Button.tsx
import React from 'react';

// Define the types for the props
interface ButtonProps {
  onClick?: () => void;           // Optional onClick handler
  children: React.ReactNode;      // Content of the button
  className?: string;             // Optional class name for styling
  type?: 'button' | 'submit' | 'reset'; // Button type
}

// Create the Button component
const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className = '',
  type = 'button',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn py-3 px-6 rounded-full ${className}`} 
    >
      {children}
    </button>
  );
};

export default Button;