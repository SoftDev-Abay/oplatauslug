import { FC, useState, MouseEventHandler } from "react";

interface ControlButtonProps {
  title: string;
  description: string;
  initialState: boolean;
  className?: string;
  handleToggle: () => void;
}

const ControlButton: FC<ControlButtonProps> = ({
  title,
  description,
  initialState,
  className,
  handleToggle,
  ...rest
}) => {
  const [active, setActive] = useState(initialState);

  return (
    <div
      className={`control-button-container ${className ? className : ""}`}
      onClick={() => {
        setActive((prev) => !prev);
        handleToggle();
      }}
      {...rest}
    >
      <img src={!active ? "/img/3541892.png" : "/img/4943215.png"} alt="" />
      <h3
        style={{
          fontWeight: "600",
          fontSize: "16px",
          fontFamily: "Montserrat",
          lineHeight: "0",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: "Roboto",
          fontSize: "10px",
          color: "#929292",
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default ControlButton;
