import React from 'react';
import classnames from 'classnames';

const TabDetails = ({
  generatedNumberData: {
    totalPhoneNumbersGenerated, min, max, generatedPhoneNumbers = []
  }
}) => {
  return (
    <div className="details--container">
      <div className="tab--details--section">
        <div className="section--info">
          <span className="details--label">Total</span>
          <div className="tab--details--container">{totalPhoneNumbersGenerated}</div>
        </div>
        <div className="section--info">
          <span className="details--label">Min number</span>
          <div className="tab--details--container">{min}</div>
        </div>
        <div className="section--info">
          <span className="details--label">Max number</span>
          <div className="tab--details--container">{max}</div>
        </div>
      </div>
      <div className={classnames("section--info", "tab--list--container")}>
        <span className="details--label">Numbers generated</span>
        <div className={classnames("tab--details--container", "h-100")}>
          {generatedPhoneNumbers.length ?
            generatedPhoneNumbers.map(generatedPhoneNumber =>
              <div
                key={generatedPhoneNumber}
                className="db"
              >
                {generatedPhoneNumber}
              </div>) :
            null
          }
        </div>
      </div>
    </div>
  );
}

export default TabDetails;
