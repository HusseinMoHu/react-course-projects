class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision App";
    const subtitle = "Put your life in the hands of a computer";
    const options = ["Thing One", "Thing Two", "Thing Three"];

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    alert("handlePick");
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should i do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  // override the constructor of the parent class, to fix this-keyword binding issue
  constructor(props) {
    super(props);
    // constructor is not an event handler, so context is correct by default
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll() {
    // this is an event handler, so it will lose its context, so we need to bind it
    console.log(this.props.options);
  }
  render() {
    // render is not an event handler, so it's not gonna lose its context
    return (
      <ol>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        {this.props.options.map((option) => (
          <Option key={option} optionText={option} />
        ))}
      </ol>
    );
  }
}

class Option extends React.Component {
  render() {
    return <li>{this.props.optionText}</li>;
  }
}

class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();

    // get input by name="option"
    // trim input to remove spaces
    const option = e.target.elements.option.value.trim();
    if (option) {
      alert(option);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
