import React from "react";
import VideoItem from "./VideoItem";

class VideoList extends React.Component {
  render() {
    const { videos, onVideoSelect } = this.props;
    const content = videos.map((video) => {
      return (
        <VideoItem
          key={video.id.videoId}
          video={video}
          onVideoSelect={onVideoSelect}
        />
      );
    });
    return <div className="ui relaxed divided list">{content}</div>;
  }
}

export default VideoList;
