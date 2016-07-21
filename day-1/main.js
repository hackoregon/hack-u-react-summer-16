/**
 * App
 * -- Todos
 * ---- [Todo]
 */

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 'HELLO!!!',
      todos: [
        { name: 'Todo number one' },
        { name: 'Todo number Two' },
        { name: 'Todo number THREE' },
      ]
    };
  }

  onKeyDownHandler(e) {
    switch (e.key) {
      case "Enter": {
        if (e.target.value === '') {
          return;
        }
        const newTodos = this.state.todos.concat({ name: e.target.value });
        this.setState({
          todos: newTodos,
          inputValue: '',
        });
      }
    }
  }

  componentDidMount() {
    // Focus on the input.
    this.refs.ourInput.focus();
  }

  render() {
    return (
      <div>
        <input
          ref='ourInput'
          value={this.state.inputValue}
          type='text'
          onKeyDown={this.onKeyDownHandler.bind(this)}
          onChange={e => this.setState({ inputValue: e.target.value })} />
        <Todos items={this.state.todos} />
      </div>
    )
  }
}

class Todo extends React.Component {
  componentDidMount() {
    console.log('IM MOUNTED!', this);
  }

  render() {
    return <div>{this.props.name}</div>;
  }
}

class Todos extends React.Component {
  render() {
    const todos = this.props.
      items
      .map((item, idx) => <li key={item.name + idx}><Todo name={item.name} /></li>);

    return (
      <div>
        <ul>
          {todos}
        </ul>
      </div>
    );
  }
}

Todos.propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
}

ReactDOM.render(
  <App/>,
  document.getElementById('myRootNode')
);

