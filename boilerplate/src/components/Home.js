import React, { Component } from 'react';

import Author from './Author';
import Content from './Content';
import ArticleTitle from './ArticleTitle';
import ArticleBody from './ArticleBody';
import CreateArticle from './CreateArticle';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCreating: false,
      articles: [
        {
          id: 3,
          author: 'Blah Bloba',
          title: 'How to food the thought',
          body: 'Article 3.',
        },
        {
          id: 1,
          author: 'Dan Schuman',
          title: 'How to cook the food',
          body: `Lorem ipsum Id dolore irure in in culpa
                amet eu dolore velit aliquip officia qui aliquip.`,
        },
        {
          id: 2,
          author: 'Bob Jones',
          title: 'How to food the cook',
          body: 'Article 2.',
        },
      ],
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
            newArticle.id = this.state.articles.length + 1;
            this.setState({
              isCreating: false,
              articles: [
                newArticle,
                ...this.state.articles,
              ],
            });
          }}
          isVisible={this.state.isCreating} />

        {this.state.articles.map(article => {
          return (
            <Content key={article.id}>
              <Author>
                {article.author}
              </Author>

              <ArticleTitle>
                {article.title}
              </ArticleTitle>

              <ArticleBody>
                {article.body}
              </ArticleBody>
            </Content>
          );
        })}
      </div>
    );
  }
}
