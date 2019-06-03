import React from 'react';

import classnames from 'classnames';
import HomeTab from './components/HomeTab';
import HistoryTab from './components/HistoryTab';

import './App.css';

class App extends React.Component {
  state = {
    tabSelected: 'home',
    numberGenerated: false,
    totalAmountToGenerate: 0
  };

  generateRandomPhoneNumbers = () => {
    this.setState({ numberGenerated: true });
  }

  onTabChange = (tabSelected) => {
    this.setState({ tabSelected });
  }

  handleInputChange = (event) => {
    this.setState({ totalAmountToGenerate: event.target.value });
  }

  getPastDetails = () => {

  }

  render() {
    const {
      tabSelected, numberGenerated, totalAmountToGenerate
    } = this.state;

    return (
      <div className="app--container">
        <div className="tab--section">
          <nav className="tab--nav">
            <div
              className={classnames("nav--item", tabSelected === 'home' && "nav--item--selected")}
              onClick={() => this.onTabChange('home')}
            >Home</div>
            <div
              className={classnames("nav--item", tabSelected === 'history' && "nav--item--selected")}
              onClick={() => this.onTabChange('history')}
            >History</div>
          </nav>
          <div className="tab--card">
            {tabSelected === 'home' &&
              <HomeTab
                numberGenerated={numberGenerated}
                totalAmountToGenerate={totalAmountToGenerate}
                handleInputChange={this.handleInputChange}
                generateRandomPhoneNumbers={this.generateRandomPhoneNumbers}
              />
            }
            {tabSelected === 'history' &&
              <HistoryTab
                handleInputChange={this.handleInputChange}
                getPastDetails={this.getPastDetails}
              />
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
