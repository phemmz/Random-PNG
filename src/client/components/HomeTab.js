import React from 'react';
import classnames from 'classnames';

import {
  PngButton,
  TabDetails
} from './Shared';

const HomeTab = ({
  numberGenerated, handleInputChange, generateRandomPhoneNumbers,
  totalAmountToGenerate, onClick, isGenerating, errorMessage, generatedNumberData
}) => {
  return (
    <div className="hometab--container">
      {numberGenerated ?
        <div className="tab--content">
          <div className="tab--content--left">
            <span className="tab--input--amount--label">Amount</span>
            <div className="tab--input--container">
              <input
                name="totalAmountToGenerate"
                type="number"
                className="tab--input"
                onChange={handleInputChange}
                value={totalAmountToGenerate}
              />
            </div>
            <PngButton
              classNames="w-100"
              btnText={isGenerating ? "Generating..." : "Generate"}
              loading={isGenerating}
              handleClick={generateRandomPhoneNumbers}
            />
            {errorMessage ? <span className="error--message">{errorMessage}</span> : null}
          </div>
          <div className="tab--content--right">
            <TabDetails generatedNumberData={generatedNumberData} />
          </div>
        </div> :
        <div className={classnames("tab--content", "tab--content--active")}>
          <span className="tab--title"><span className="tab--title--bold">Random-PNG</span> is the app that generates random phone numbers for you. Each number is unique and has a 10 digit length.</span>
          <PngButton
            btnText="Generate Phone Numbers"
            handleClick={onClick}
          />
        </div>
      }
    </div>
  );
}

export default HomeTab;
