import React, { PropTypes, Component } from 'react';

export default class BTCSorter extends Component {
  static propTypes = {
    onRefresh: PropTypes.func.isRequired,
    onUpdateSortOrder: PropTypes.func.isRequired,
    apiUrl: PropTypes.string.isRequired,
    sortOrder: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
  };

  state = {
    count: 5,
  };

  _doRefresh() {
    if (this.state.count > 0) {
      this.props.onRefresh(`${this.props.apiUrl}${this.state.count}/`);
    }
  }

  componentDidMount() {
    this._doRefresh();
  }

  onChangeInput(e) {
    if (e.target.value !== this.state.value) {
      this.setState({ count: e.target.value });
    }
  }

  render() {
    return (
      <div>
        <div className='form-group' style={{ width: '50%' }}>
          <label htmlFor='count'>Amount</label>
          <input
            id='count'
            className='form-control'
            value={this.state.count}
            onChange={this.onChangeInput.bind(this)}
            onBlur={this._doRefresh.bind(this)}
            onKeyDown={e => {
              switch (e.key) {
                case 'Enter': {
                  this._doRefresh();
                }
              }
            }}
            type='number' />
        </div>

        <table className='table'>
          <caption>
            BTC Payees Info (Toggle sort order:&nbsp;
            <a href='' onClick={e => {
              e.preventDefault();
              let newOrder = this.props.sortOrder === 'asc' ? 'desc' : 'asc';
              this.props.onUpdateSortOrder(newOrder);
            }}>
              {this.props.sortOrder}
            </a>)
          </caption>
          <thead>
            <tr>
              <th>Payee</th>
              <th>Sum</th>
            </tr>
          </thead>
          <tbody>
            {this.props.items
              .sort((a, b) =>
                this.props.sortOrder === 'asc'
                ? a.sum - b.sum
                : b.sum - a.sum
              )
              .map(item => {
                return (
                  <tr key={item.contributor_payee}>
                    <td>{item.contributor_payee}</td>
                    <td>{item.sum}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>

      </div>
    );
  }
}
