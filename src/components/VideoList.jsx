// props.state = App.state

var VideoList = (props) => (
  <div className="video-list media">
  	
  	{props.videos.map(obj => <VideoListEntry video={obj} key={obj.etag} setVideo={props.setVideo} />)}

  </div>
);



// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;

// //var VideoList = (props) => (
//   <div className="video-list media">
  	
//   	<VideoListEntry />

//   </div>
// );

  //  {props.data.map(obj => <VideoListEntry img={obj} />)}
  //{console.log((props.data))}}