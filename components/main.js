class List extends React.Component {
  render() {
    let items = this.props.items.map((item, index) => {
      return <ListEntry {...item} key={index}/>
    });

    return (
      <div className={this.props.classInfo}>
      <h4>{this.props.listTitle}</h4>
      <dl>
        {items}
      </dl>
    </div>
    );
  }
}

class ListEntry extends React.Component {
  render() {
    let dateString = <span>[{this.props.date}]&nbsp;</span>;
    if(this.props.date === null) {
      dateString = <span></span>;
    }
    return (
      <div>
        <dt>{dateString}<a href={this.props.link}>{this.props.title}</a></dt>
        <dd>{this.props.description}</dd>
      </div>
    );
  }
}

class NextMeeting extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="small-12 columns text-center">
          <div className="callout">
            <h6>Next meeting:</h6>
            <h5>Wednesday, {this.props.date} {this.props.time}</h5>
            <p>Wellspring Calgary &mdash; 1404 Home Rd NW</p>
            <p>{this.props.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

class SupportApp extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="small-12 medium-6 columns">
          <List items={this.props.events} listTitle={"Events"} classInfo={"callout"}/>
        </div>
        <div className="small-12 medium-6 columns">
          <List items={books} listTitle={"Books"} classInfo={"callout"}/>
        </div>
        <div className="small-12 columns">
          <List items={requests} listTitle={"Remember 4 Me"} classInfo={"callout"}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<NextMeeting date={meeting.date} time={meeting.time} description={meeting.description} />, document.getElementById('next-meeting'));
ReactDOM.render(<SupportApp events={events}/>, document.getElementById('react-here'));
