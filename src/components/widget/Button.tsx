import React from "react";
import Color from "../../util/Color";

type ButtonProps = {
  rounded: boolean;
  filled: boolean;
  color: Color;
  text: string;
};

const Button = ({ rounded, filled, color, text }: ButtonProps) => {
  //const colorHex: string = color === 'primary' ? '#FF_FF_FF_A8' : color === 'secondary' ? '#000000' : color;
  const colorHex: string = color.toHex();

  return (
    <button
      style={{
        borderRadius: rounded ? 5 : 0,
        borderStyle: "solid",
        borderColor: colorHex,
        backgroundColor: filled ? colorHex : Color.TRANSPERANT.toHexWithAlpha(), // filled ? colorHex : new Color(0, 0, 0, 0).toHex(),
        color: filled
          ? color === Color.WHITE
            ? Color.BLACK.toHex()
            : Color.WHITE.toHex()
          : colorHex,
        padding: "15px",
        fontSize: "20px",
      }}
    >
      {text.toUpperCase()}
    </button>
  );
};

export default Button;
