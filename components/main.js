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

  class SupportApp extends React.Component {
    render() {
            return (
              <div>
                <div className="row">
                  <div className="medium-12 columns">
                    <h2>BTSG YYC</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="medium-7 columns">
                    <p>This is the home for the YYC brain tumour support group, support site.  Our goal is to be a place to share resources that might be helpful to those attending support groups but just can't remember what book or website that someone has mentioned!  Happens to us pretty much everything we go!</p>
                    <p>
                    Please feel free to send us links, books, or other resources that you think might be helpful and we can try and get them up on the site.  If you are looking for a resource that was mentioned, send a request, we will publish it and hopefully someone remembers what it was.
                    </p>
                  </div>
                  <div className="medium-5 columns">
                    <List items={this.props.events} listTitle={"Events"} classInfo={"callout secondary"}/>
                    <List items={books} listTitle={"Books"} classInfo={"callout secondary"}/>
                    <List items={requests} listTitle={"Remember 4 Me"} classInfo={"callout secondary"}/>
                  </div>
                </div>
              </div>
            );
    }
  }

ReactDOM.render(<SupportApp events={events}/>, document.getElementById('react-here'));
