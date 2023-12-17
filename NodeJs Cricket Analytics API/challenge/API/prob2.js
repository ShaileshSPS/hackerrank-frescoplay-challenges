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
      // Your logic to process deliveriesData for prob2 endpoint

      // Example placeholder response (replace this with your logic)
      const response = {
        '2013': {
          'Rajasthan Royals':
          {
            count4: 15, count6: 8, 'total runs': 250
          }
        },
        '2014': {
          'Deccan Chargers':
          {
            count4: 15, count6: 8, 'total runs': 250
          }
        },
        '2015': {
          'Deccan Chargers':
          {
            count4: 15, count6: 8, 'total runs': 250
          }
        },
        '2016': {
          'Deccan Chargers':
          {
            count4: 15, count6: 8, 'total runs': 250
          }
        },
        '2017': {
          'Deccan Chargers':
          {
            count4: 15, count6: 8, 'total runs': 250
          }

        }
      };

      res.json(response);
    });
};