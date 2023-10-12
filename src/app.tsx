import React, { MouseEvent, useState } from "react";

import { ButtonGroup } from "./components/buttonGroup";
import { VideoOnImage } from "./components/videoOnImage";
import { ImageOnVideo } from "./components/imageOnVideo";
import { VideoOnVideo } from "./components/videoOnVideo";

import { Views } from "./mocks/app";
import { buttonGroupMock } from "./mocks/components/buttonGroup";
import { videoOnImageMock } from "./mocks/components/videoOnImage";
import { imageOnVideoMock } from "./mocks/components/imageOnVideo";
import { videoOnVideoMock } from "./mocks/components/videoOnVideo";

import "./styles/_main.scss";
import { BlickBites } from "./components/blickBites";

const App = () => {
  const [selectedFeature, updateSelectedFeature] = useState<number>(1);
  const [title, updateTitle] = useState<string>("Video on Image");

  const handleButtonClick = (event: MouseEvent, label: string) => {
    const view = Views.get(label) || 1;
    updateTitle(label);
    updateSelectedFeature(view);
  };

  const renderView = () => {
    switch (selectedFeature) {
      case 1:
        return (
          <VideoOnImage
            background={`${process.env.PUBLIC_URL}/assets/background.png`}
            {...videoOnImageMock}
          />
        );
      case 2:
        return <VideoOnVideo {...videoOnVideoMock} />;
      case 3:
        return (
          <ImageOnVideo
            {...imageOnVideoMock}
            foregroundImage={`${process.env.PUBLIC_URL}/assets/itemImage.png`}
          />
        );
        case 4:
        return (
          <BlickBites/>
        );
      default:
        return <></>;
    }
  };

  return (
    <main className="app-main container-fluid">
      <section className="col-12">
        <div className="row mb-4">
          <ButtonGroup
            {...{
              ...buttonGroupMock,
              buttons: buttonGroupMock.buttons.map((button) => ({
                ...button,
                handleClick: handleButtonClick,
              })),
            }}
          />
        </div>
        <div className="row">
          <h2 className="app-title">{title}</h2>
          <section className="video-on-image-section">{renderView()}</section>
        </div>
      </section>
    </main>
  );
};

export default App;
