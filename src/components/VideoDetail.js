import React from "react";

class VideoDetail extends React.Component {
  render() {
    const { video } = this.props;

    if (video) {
      return (
        <div>
          <div className="ui embed">
            <iframe
              title={video.snippet.title}
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="ui segment">
            <h4 className="ui header">{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default VideoDetail;
