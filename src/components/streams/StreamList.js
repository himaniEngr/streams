import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
// const StreamList = () => {
//   return <div>StreamList</div>;
// };
class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }
  renderAdmin(stream) {
    // console.log(stream, "((((((((((((((((");
    if (stream.userId === this.props.currentUserId) {
      return <div>EDIT/DELETE</div>;
    }
    // console.log(this.props.currentUserId, "$$$$$$$$$$$$$$$$$$");
  }
  renderList() {
    return this.props.streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          <i className="large middle aligned icon camera" />
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
          {this.renderAdmin(stream)}
        </div>
      );
    });
  }
  render() {
    console.log(this.props.streams);
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state, "****************");
  return {
    streams: Object.values(state.streams),
    currentUserId: state.streams.id,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
