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
      let dateString = <span>[{this.props.date}]</span>;
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

  class SupportApp extends React.Component {
    render() {
            return (
              <div>
                <div className="row">
                  <div className="medium-12 columns">BTSG YYC</div>
                </div>
                <div className="row">
                  <div className="medium-8 columns">Main Content</div>
                  <div className="medium-4 columns">
                    <List items={this.props.events} listTitle={"Events"} classInfo={"callout secondary"}/>
                    <List items={books} listTitle={"Books"} classInfo={"callout secondary"}/>
                  </div>
                </div>
              </div>
            );
    }
  }

ReactDOM.render(<SupportApp events={events}/>, document.getElementById('react-here'));
