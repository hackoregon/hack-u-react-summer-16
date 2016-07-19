class MyWordList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  clickHandler(e) {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    const wordList = ['world', 'dog', 'dog', 'cat'].map((word, idx) => {
      return (
        <li key={idx}>{this.props.prefix} Hello {word}!</li>
      );
    });

    const onChangeHandler = (e) => {
      console.log('New value:', e.target.value);
      this.setState({ count: this.state.count + 1 });
    };

    return (
      <div
        style={{ border: '1px solid black', margin: 5 }}
        onClick={this.clickHandler.bind(this)}>

        The count is <input type='checkbox' checked={this.state.count % 2 === 0} onChange={onChangeHandler}/> {this.state.count}.

        <ul style={{ backgroundColor: '#44f' }}>
          {wordList}
        </ul>
      </div>
    );
  }
}

MyWordList.propTypes = {
  prefix: React.PropTypes.string.isRequired,
};

function getElement() {
  return (
    <div>
      <MyWordList prefix='Uhhhhhh'/>
      <MyWordList prefix='Bahhh'/>
      <MyWordList prefix='Deee'/>


    </div>
  );
}

const rootNode = document.getElementById('myRootNode');
ReactDOM.render(getElement(), rootNode);

