const csv = require('csv-parser');
const fs = require('fs');

module.exports = function (req, res) {
  const deliveriesData = [];

  // Read DELIVERIES.CSV file
  fs.createReadStream('./deliveries.csv')
    .pipe(csv())
    .on('data', (row) => {
      deliveriesData.push(row);
    })
    .on('end', () => {
      // Your logic to process deliveriesData for prob3 endpoint

      // Example placeholder response (replace this with your logic)
      const response = {
        '2016': [
          ['Bowler A', { economy: '6.72' }],
          ['Bowler B', { economy: '7.20' }],
          // Add more entries as needed
        ],
        '2017': [
          ['Bowler C', { economy: '5.40' }],
          ['Bowler D', { economy: '6.00' }],
          // Add more entries as needed
        ]
      };

      res.json(response);
    });
};


