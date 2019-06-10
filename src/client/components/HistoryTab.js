import React from 'react';

import {
  TabDetails
} from './Shared';

const HistoryTab = ({
  filenames, getFileDetails, generatedNumberData
}) => {
  return (
    <div className="hometab--container">
      <div className="tab--content">
        <div className="tab--content--left">
          <span className="history--list--title">Previously Generated Numbers</span>
          <ul className="history--list--container">
            {filenames.length ?
              filenames.map(filename =>
                <li
                  key={filename}
                  onClick={() => getFileDetails(filename)}
                >{filename}</li>
              ) : null
            }
          </ul>
        </div>
        <div className="tab--content--right">
          <div className="generated--title--container">
            <span className="history--list--title">{generatedNumberData.generatedPhoneNumberId}</span>
          </div>
          <TabDetails
            generatedNumberData={generatedNumberData}
          />
        </div>
      </div>
    </div>
  );
}

export default HistoryTab;
