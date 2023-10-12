import type { ListProps } from "../../../components/carousel";

export const blickBitesMocks: ListProps[] = [
  {
    image: `${process.env.PUBLIC_URL}/assets/image1.png`,
    text: "US Open",
    videoUrl: "https://cdn.jwplayer.com/v2/playlists/XxKbQID3?format=json",
    isCurrent: false,
  },
  {
    image: `${process.env.PUBLIC_URL}/assets/image2.png`,
    text: "Schweizer Team",
    videoUrl: "https://cdn.jwplayer.com/v2/playlists/X2bMBUIY?format=json",
    isCurrent: false,
  },
  {
    image: `${process.env.PUBLIC_URL}/assets/image3.png`,
    text: "Apple",
    videoUrl: "https://cdn.jwplayer.com/v2/playlists/nYV6v3Sc?format=json",
    isCurrent: false,
  }
]