import type { ButtonGroupProps } from "../../../components/buttonGroup";

export const buttonGroupMock: ButtonGroupProps = {
  buttons: [
    {
      label: "Video on Image",
      variant: "secondary",
    },
    {
      label: "Video on Video",
      variant: "secondary",
    },
    {
      label: "Image on Video",
      variant: "secondary",
    },
  ],
  nogap: true,
};
