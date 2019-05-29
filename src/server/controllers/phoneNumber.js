import fs from 'fs';
import path from 'path';

const generatePhoneNumbers = (req, res) => {
  try {
    const { totalPhoneNumbersToGenerate } = req.body;
    let counter = 0;
    const generatedPhoneNumbers = new Set();
    const totalNumbers = totalPhoneNumbersToGenerate && totalPhoneNumbersToGenerate <= 10000 ? totalPhoneNumbersToGenerate : 10000;

    while(counter < totalNumbers) {
      const randomPhoneNumber = `0${Math.floor(Math.random() * (999999999 - 100000000)) + 100000000}`;

      generatedPhoneNumbers.add(randomPhoneNumber);
      counter++;
    }

    const sortedGeneratedPhoneNumbers = [...generatedPhoneNumbers].sort();
    const generatedNumberData = {
      generatedPhoneNumbers: sortedGeneratedPhoneNumbers,
      generatedPhoneNumberId: `number-${new Date().getTime()}`,
      min: sortedGeneratedPhoneNumbers[0],
      max: sortedGeneratedPhoneNumbers[totalPhoneNumbersToGenerate - 1],
      totalPhoneNumbersGenerated: totalNumbers
    }

    const filePath = `db/number-${new Date().getTime()}.json`;

    fs.writeFileSync(path.join(__dirname, '..', filePath), JSON.stringify(generatedNumberData));
    res.status(201).json({
      generatedNumberData,
      success: true,
      message: 'Phone numbers generated successfully',
    });
  } catch(error) {
    res.status(500).json({
      success: false,
      message: 'Failed to generate phone numbers',
      error
    });
  }
};

export {
  generatePhoneNumbers
};
