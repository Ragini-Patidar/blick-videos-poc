import { VideoProps } from "../../../components/video";

const videoSourceOptions = {
  library: "https://cdn.jwplayer.com/libraries/mX1HQB9j.js",
  playlist: "https://cdn.jwplayer.com/v2/playlists/rjmyTGWl?format=json",
};

interface VideoOnVideoMock {
  backgroundVideoDetails: VideoProps;
  foregroundVideoDetails: VideoProps;
}

export const videoOnVideoMock: VideoOnVideoMock = {
  backgroundVideoDetails: {
    ...videoSourceOptions,
    config: {
      mute: true,
      autostart: false,
      controls: false,
    },
  },
  foregroundVideoDetails: {
    ...videoSourceOptions,
    config: {
      autostart: false,
      mute: true,
    },
  },
};
