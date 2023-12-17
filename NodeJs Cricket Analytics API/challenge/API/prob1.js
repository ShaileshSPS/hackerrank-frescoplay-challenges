const csv = require('csv-parser');
const fs = require('fs');

module.exports = function (req, res) {
  const deliveriesData = [];
  const matchesData = [];

  // Read DELIVERIES.CSV file
  fs.createReadStream('./deliveries.csv')
    .pipe(csv())
    .on('data', (row) => {
      deliveriesData.push(row);
    })
    .on('end', () => {
      // Read MATCHES.CSV file
      fs.createReadStream('./matches.csv')
        .pipe(csv())
        .on('data', (row) => {
          matchesData.push(row);
        })
        .on('end', () => {
          // Your logic to process deliveriesData and matchesData for prob1 endpoint
          var arr2016 = [];
          var arr2017 = [];
          matchesData.map(item => {
            if ((item.SEASON === '2016') &&
              item.TOSS_DECISION === 'field') {
              arr2016.push(item)
            }
            if ((item.SEASON === '2017') &&
              item.TOSS_DECISION === 'field') {
              arr2017.push(item)
            }
          })

          // Example placeholder response (replace this with your logic)
          const response = {
            '2016': {
              '0': arr2016
            },
            '2017': {
              '0': arr2017
            }
          };

          res.json(response);
        });
    });
};
