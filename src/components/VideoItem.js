import React from "react";
import "./VideoItem.css";

class VideoItem extends React.Component {
  render() {
    const { video, onVideoSelect } = this.props;
    return (
      <div className="item video-item" onClick={() => onVideoSelect(video)}>
        <img
          className="ui small image"
          alt={video.snippet.title}
          src={video.snippet.thumbnails.medium.url}
        />
        <div className="content">
          <div className="header">{video.snippet.title}</div>
          <div className="meta small">{video.snippet.publishedAt}</div>
        </div>
      </div>
    );
  }
}

export default VideoItem;
