import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import CreateArticle from './CreateArticle';

import { createArticleAction } from '../reducer';

@connect(
  state => ({
    articles: state.articles,
  }),
)
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCreating: false,
    };
  }

  render() {
    const buttonStyle = {
      display: this.state.isCreating ? 'none' : 'inherit',
    };

    return (
      <div>
        <button
          style={buttonStyle}
          onClick={() => this.setState({ isCreating: !this.state.isCreating })}>
          New Article
        </button>

        <CreateArticle
          onCreateArticle={(newArticle) => {
            newArticle.id = 'TEMP_' + this.props.articles.length + 1;
            this.setState({
              isCreating: false,
            });

            this.props.dispatch(createArticleAction(newArticle));

          }}
          isVisible={this.state.isCreating} />

        <ArticleLinkList articles={this.props.articles} />

      </div>
    );
  }
}

const ArticleLinkList = props => {
  return (
    <ul>
      {props.articles.map(article => {
        return (
          <li key={article.id}>
            <Link to={'/posts/' + article.id}>{article.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};
