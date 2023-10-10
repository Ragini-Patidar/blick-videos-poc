export type VideoStretching = "uniform" | "exactfit" | "fill" | "none";

export interface VideoConfig {
  aspectratio?: string;
  controls?: boolean;
  displaydescription?: boolean;
  displayHeading?: boolean;
  displayPlaybackLabel?: boolean;
  displaytitle?: boolean;
  height?: number;
  horizontalVolumeSlider?: boolean;
  nextUpDisplay?: boolean;
  qualityLabels?: any[];
  renderCaptionsNatively?: boolean;
  stretching?: VideoStretching;
  width?: number | string;
  aboutlink?: string;
  abouttext?: string;
  allowFullscreen?: boolean;
  autostart?: boolean | string;
  defaultBandwidthEstimate?: number;
  generateSEOMetadata?: boolean;
  liveSyncDuration?: number;
  mute?: boolean;
  nextupoffset?: number | string;
  pipIcon?: "enabled" | "disabled";
  playbackRateControls?: boolean;
  playbackRates?: any[];
}

export interface VideoProps {
  playlist: string;
  library: string;
  config?: VideoConfig;
  onPlayHandler?: () => void;
  onPauseHandler?: () => void;
  onSeekHandler?: (currentTime: number) => void;
  onReplayHandler?: () => void;
}
