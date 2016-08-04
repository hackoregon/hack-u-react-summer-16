import React, { Component } from 'react';

export default class CreateArticle extends Component {
  state = {
    title: '',
    author: '',
    body: '',
  };

  handleChange(key, e) {
    this.setState({ [key]: e.target.value });
  }

  render() {
    const formStyle = {
      padding: 5,
      border: '1px solid #333',
      display: this.props.isVisible ? 'block' : 'none',
    };

    return (
      <form
        style={formStyle}
        onSubmit={e => {
          e.preventDefault();
          this.props.onCreateArticle({
            title: this.state.title,
            body: this.state.body,
            author: this.state.author,
          });

          this.setState({
            title: '',
            body: '',
            author: '',
          });
        }}>
        <div className='form-group'>
          <input
            value={this.state.author}
            onChange={this.handleChange.bind(this, 'author')}
            type='text'
            placeholder='Author' />
        </div>
        <div className='form-group'>
          <input
            value={this.state.title}
            onChange={this.handleChange.bind(this, 'title')}
            type='text'
            placeholder='Title' />
        </div>
        <div className='form-group'>
          <textarea
            value={this.state.body}

            onChange={this.handleChange.bind(this, 'body')}
            placeholder='Body Content' />
        </div>
        <div>
          <button type='submit'>Submit!</button>
        </div>
      </form>
    );
  }
}
