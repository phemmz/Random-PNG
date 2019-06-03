import React from 'react';
import classnames from 'classnames';

const TabDetails = ({
  totalPhoneNumbersGenerated, minNumber, maxNumber, numberList
}) => {
  return (
    <div className="details--container">
      <div className="tab--details--section">
        <div className="section--info">
          <span className="details--label">Total</span>
          <div className="tab--details--container">200</div>
        </div>
        <div className="section--info">
          <span className="details--label">Min number</span>
          <div className="tab--details--container">0123557679</div>
        </div>
        <div className="section--info">
          <span className="details--label">Max number</span>
          <div className="tab--details--container">0808898787</div>
        </div>
      </div>
      <div className={classnames("section--info", "tab--list--container")}>
        <span className="details--label">Numbers generated</span>
        <div className={classnames("tab--details--container", "h-100")}></div>
      </div>
    </div>
  );
}

export default TabDetails;
