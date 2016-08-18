import React, { Component } from 'react';
import { connect } from 'react-redux';

import Author from './Author';
import Content from './Content';
import ArticleTitle from './ArticleTitle';
import ArticleBody from './ArticleBody';
import CreateArticle from './CreateArticle';

import { editArticle } from '../reducer';

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
  state = {
    isEditing: false,
  };

  render() {
    const toggleEditState = () => {
      this.setState({ isEditing: !this.state.isEditing });
    };

    const toggleEdit = (
      <ToggleEditing onToggle={toggleEditState} />
    );

    if (!this.props.article) {
      return <div>No article found!</div>;
    }

    if (this.state.isEditing) {
      return (
        <div>
          <CreateArticle
            article={this.props.article}
            isVisible={true}
            onCreateArticle={(createdArticle) => {

              this.props.dispatch(editArticle({
                ...this.props.article,
                ...createdArticle,
              }));

              toggleEditState();
            }} />

          {toggleEdit}
        </div>
      );
    }

    return (
      <div>
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
        {toggleEdit}
      </div>
    );
  }
}

class ToggleEditing extends Component {
  render() {
    return (
      <button onClick={this.props.onToggle}>Toggle Editing</button>
    );
  }
}
