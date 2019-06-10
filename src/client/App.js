import React from 'react';

import classnames from 'classnames';
import HomeTab from './components/HomeTab';
import HistoryTab from './components/HistoryTab';
import makeApiRequest from './helpers/makeApiRequest';

import './App.css';

class App extends React.Component {
  state = {
    tabSelected: 'home',
    numberGenerated: false,
    isGenerating: false,
    generatedNumberData: {},
    errorMessage: '',
    totalAmountToGenerate: 1000,
    filenames: [],
    selectedFile: ''
  };

  onClick = () => {
    this.setState({ numberGenerated: true });
  }

  generateRandomPhoneNumbers = async () => {
    this.setState({ isGenerating: true, errorMessage: '' });
    const response = await makeApiRequest('generate-numbers', 'POST', {
      totalPhoneNumbersToGenerate: this.state.totalAmountToGenerate
    });

    if (response && response.success) {
      this.setState({
        generatedNumberData: response.generatedNumberData,
        isGenerating: false,
        errorMessage: ''
      });
    } else {
      this.setState({
        errorMessage: 'Failed to generate phone numbers! Please try again!!',
        isGenerating: false
      });
    }
  }

  onTabChange = (tabSelected) => {
    if (tabSelected === 'history') {
      this.getHistory();
    }

    this.setState({ tabSelected });
  }

  getHistory = async () => {
    const response = await makeApiRequest('get-saved-filenames', 'GET');

    if (response && response.success) {
      this.setState({
        filenames: [...response.filenames].reverse(),
      });
    } else {
      this.setState({
        errorMessage: 'Failed to get saved filenames',
      });
    }
  }

  getFileDetails = async (filename) => {
    const response = await makeApiRequest(`get-file-details/${filename}`, 'GET');

    if (response && response.success) {
      this.setState({
        generatedNumberData: response.fileDetails,
      });
    } else {
      this.setState({
        errorMessage: 'Failed to get file details',
      });
    }
  }

  handleInputChange = (event) => {
    this.setState({ totalAmountToGenerate: event.target.value });
  }

  getPastDetails = () => {

  }

  render() {
    const {
      tabSelected, numberGenerated, totalAmountToGenerate, isGenerating,
      errorMessage, generatedNumberData, filenames, selectedFile
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
                onClick={this.onClick}
                isGenerating={isGenerating}
                errorMessage={errorMessage}
                generatedNumberData={generatedNumberData}
              />
            }
            {tabSelected === 'history' &&
              <HistoryTab
                filenames={filenames}
                handleInputChange={this.handleInputChange}
                getFileDetails={this.getFileDetails}
                generatedNumberData={generatedNumberData}
                selectedFile={selectedFile}
              />
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
