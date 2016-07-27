import React, { Component } from 'react';

import BTCSorter from './BTCSorter';

export default class App extends Component {
  state = {
    ind: {
      items: [],
      sortOrder: 'desc',
    },
    biz: {
      items: [],
      sortOrder: 'desc',
    },
  };

  render() {
    return (
      <div className='container'>
        <h1>BTC Data Viewer</h1>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
          <div style={{
            border: '1px solid #ddd',
            width: '49%',
            padding: 5,
          }}>
            <h2>Individuals</h2>

            <BTCSorter
              items={this.state.ind.items}
              sortOrder={this.state.ind.sortOrder}
              apiUrl='http://54.213.83.132/hackoregon/http/oregon_individual_contributors/'
              onRefresh={async url => {
                let response = await fetch(url);
                let data = await response.json();
                let newInd = this.state.ind;
                newInd.items = data;
                this.setState({ ind: newInd });
              }}
              onUpdateSortOrder={order => {
                let newInd = this.state.ind;
                newInd.sortOrder = order;
                this.setState({ ind: newInd });
              }}
            />
          </div>
          <div style={{
            border: '1px solid #ddd',
            width: '49%',
            padding: 5,
          }}>
            <h2>Businesses</h2>
            <BTCSorter
              items={this.state.biz.items}
              sortOrder={this.state.biz.sortOrder}
              apiUrl='http://54.213.83.132/hackoregon/http/oregon_business_contributors/'
              onRefresh={async url => {
                let response = await fetch(url);
                let data = await response.json();
                this.setState({ biz: { ...this.state.biz, items: data } });
              }}
              onUpdateSortOrder={order => {
                this.setState({ biz: { ...this.state.biz, sortOrder: order } });
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}
