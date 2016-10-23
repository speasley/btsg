class List extends React.Component {
  render() {
    let items = this.props.items.map((item, index) => {
      return <ListEntry {...item} key={index}/>
    });

    return (
      <div className={this.props.classInfo}>
        <h3>{this.props.listTitle}</h3>
        <ul>
          {items}
        </ul>
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
        <li>{dateString}<a href={this.props.link}>{this.props.title}</a> <span>{this.props.description}</span>
</li>
      </div>
    );
  }
}

class NextMeeting extends React.Component {
  render() {
    return (
      <div>
        <h3>Next meeting:</h3>
        <h4>Wednesday, {this.props.date} {this.props.time}</h4>
        <p>Wellspring Calgary &mdash; 1404 Home Rd NW</p>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

class SupportApp extends React.Component {
  render() {
    return (
      <div id="content">
        <div className="row">
          <div className="primary callout medium-12 columns text-center">
            <NextMeeting date={meeting.date} time={meeting.time} description={meeting.description}/>
          </div>
        </div>
        <div className="row">
          <div className="medium-6 columns">
            <h3>Do you recall?</h3>
            <p>Someone asked about a thing. Do you know about the thing?</p>
          </div>
          <List items={this.props.events} listTitle={"Events"} classInfo={"medium-6 columns"}/>
        </div>
        <div className="row">
          <List items={books} listTitle={"Books"} classInfo={"medium-12 columns"}/>
        </div>
        <div className="row">
          <List items={links} listTitle={"Links & Videos"} classInfo={"medium-12 columns"}/>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<SupportApp events={events} meeting={meeting} />, document.getElementById('react'));
