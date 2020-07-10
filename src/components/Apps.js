import React from "react";
import SearchBar from "./SearchBar";
import axiosApi from "../api/youtube";
import VideoList from "../components/VideoList";
import VideoDetail from "../components/VideoDetail";

class Apps extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onSearchSubmit("buildings");
  }

  onSearchSubmit = async (keywords) => {
    const response = await axiosApi.get("/search", {
      params: {
        q: keywords,
      },
    });

    this.setState({ videos: response.data.items });
    if (response.data.items.length > 0) {
      this.setState({ selectedVideo: response.data.items[0] });
    }
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Apps;
