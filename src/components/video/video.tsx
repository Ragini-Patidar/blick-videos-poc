import React, { forwardRef } from "react";
import JWPlayer from "@jwplayer/jwplayer-react";
import type { VideoProps } from ".";

export const Video = forwardRef<HTMLDivElement, VideoProps>(
  (
    {
      playlist,
      library,
      config,
      onPlayHandler,
      onPauseHandler,
      onSeekHandler,
      onReplayHandler,
    },
    ref
  ) => {
    const onPlay = () => {
      onPlayHandler?.();
    };

    const onSeek = (seekOptions: any) => {
      onSeekHandler?.(seekOptions?.currentTime);
    };

    const onPause = () => {
      onPauseHandler?.();
    };

    const onReplay = () => {
      onReplayHandler?.();
    };
    return (
      <div ref={ref}>
        <JWPlayer
          playlist={playlist}
          library={library}
          config={config}
          onPlay={onPlay}
          onSeek={onSeek}
          onPause={onPause}
          onReplay={onReplay}
        />
      </div>
    );
  }
);

Video.displayName = "Video";
