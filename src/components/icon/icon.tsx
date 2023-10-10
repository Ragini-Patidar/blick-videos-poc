import React, { FC } from "react";
import { IconNames } from "./icon.constants";

export interface IconProps {
  iconName: IconNames;
}

export const Icon: FC<IconProps> = ({ iconName }: IconProps) => {
  const renderIcon = () => {
    switch (iconName) {
      case IconNames.Circle:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="10"
            viewBox="0 0 11 10"
            fill="none"
          >
            <circle cx="5.49951" cy="4.5" r="3" fill="white" />
          </svg>
        );
      case IconNames.Play:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M3.99951 2.66685V13.3335C3.99948 13.4521 4.03109 13.5686 4.0911 13.6709C4.1511 13.7733 4.23732 13.8577 4.34086 13.9156C4.4444 13.9735 4.56151 14.0027 4.6801 14.0002C4.7987 13.9978 4.91448 13.9637 5.01551 13.9015L13.6822 8.56819C13.7792 8.50854 13.8594 8.42502 13.915 8.32558C13.9706 8.22614 13.9998 8.11412 13.9998 8.00019C13.9998 7.88626 13.9706 7.77423 13.915 7.6748C13.8594 7.57536 13.7792 7.49183 13.6822 7.43219L5.01551 2.09885C4.91448 2.0367 4.7987 2.00262 4.6801 2.00015C4.56151 1.99767 4.4444 2.02688 4.34086 2.08476C4.23732 2.14265 4.1511 2.22711 4.0911 2.32943C4.03109 2.43175 3.99948 2.54823 3.99951 2.66685Z"
              fill="white"
            />
          </svg>
        );
      default:
        return <></>;
    }
  };

  return <>{renderIcon()}</>;
};
