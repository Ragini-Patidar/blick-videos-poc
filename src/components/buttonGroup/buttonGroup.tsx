import React, { FC } from "react";
import { Button, ButtonProps } from "../button";
import { clsx } from "clsx";
import "./buttonGroup.scss";

export interface ButtonGroupProps {
  buttons: ButtonProps[];
  nogap?: boolean;
}

export const ButtonGroup: FC<ButtonGroupProps> = ({
  buttons,
  nogap = false,
}: ButtonGroupProps) => {
  const buttonClassName = (index: number) =>
    clsx({
      "no-gap": nogap,
      "is-first": !index && nogap,
      "is-last": index === buttons?.length - 1 && nogap,
    });

  const containerClassList = clsx("button-group", {
    "button-group-no-gap": nogap,
  });
  return (
    <div className={containerClassList}>
      {!!buttons &&
        buttons?.length > 0 &&
        buttons.map((button: ButtonProps, index: number) => (
          <Button
            {...button}
            key={index}
            customClass={buttonClassName(index)}
          />
        ))}
    </div>
  );
};
