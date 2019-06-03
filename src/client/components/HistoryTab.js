import React from 'react';

import {
  TabDetails
} from './Shared';

const HistoryTab = ({ getPastDetails }) => {
  return (
    <div className="hometab--container">
      <div className="tab--content">
        <div className="tab--content--left">
          <span className="history--list--title">Previously Generated Numbers</span>
          <ul>
            <li onClick={getPastDetails}>18298192.txt</li>
            <li onClick={getPastDetails}>18298192.txt</li>
            <li onClick={getPastDetails}>18298192.txt</li>
          </ul>
        </div>
        <div className="tab--content--right">
          <span className="history--list--title">18298192.txt</span>
          <TabDetails />
        </div>
      </div>
    </div>
  );
}

export default HistoryTab;
