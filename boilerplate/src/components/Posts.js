import React, { Component } from 'react';
import { connect } from 'react-redux';

import Author from './Author';
import Content from './Content';
import ArticleTitle from './ArticleTitle';
import ArticleBody from './ArticleBody';

@connect(
  (state, ownProps) => {
    const articleId = ownProps.params.id;
    const foundArticle =
      state.articles.find(
        article => article.id.toString() === articleId.toString()
      );

    return {
      article: foundArticle,
    };
  },
)
export default class Posts extends Component {
  render() {
    return (
      <Content key={this.props.article.id}>
        <ArticleTitle>
          {this.props.article.title}
        </ArticleTitle>

       <Author>
          {this.props.article.author}
        </Author>

        <ArticleBody>
          {this.props.article.body}
        </ArticleBody>
      </Content>
    );
  }
}
