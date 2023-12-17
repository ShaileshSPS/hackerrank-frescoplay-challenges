/* const csv = require('csv-parser');
const fs = require('fs');

var matchObj = {}
var finalObj = {}
var nfinalObj = {}
var batsman_runs = 0;
var total_runs = 0;
var temp_4 = 0;
var temp_6 = 0;

var count = 1;

module.exports = function (req, res) {


} */


/* const csv = require('csv-parser');
const fs = require('fs');

module.exports = function (req, res) {
  const deliveriesData = [];
  const matchesData = [];

  // Read the DELIVERIES.CSV file
  fs.createReadStream('DELIVERIES.CSV')
    .pipe(csv())
    .on('data', (row) => {
      deliveriesData.push(row);
    })
    .on('end', () => {
      // Read the MATCHES.CSV file
      fs.createReadStream('MATCHES.CSV')
        .pipe(csv())
        .on('data', (row) => {
          matchesData.push(row);
        })
        .on('end', () => {
          // Calculate Net Run Rate (NRR) for each team with respect to the year
          const netRunRate = {};

          deliveriesData.forEach((delivery) => {
            const matchId = delivery.MATCH_ID;
            const battingTeam = delivery.BATTING_TEAM;
            const bowlingTeam = delivery.BOWLING_TEAM;
            const runs = parseInt(delivery.TOTAL_RUNS, 10);
            const overs = parseFloat(delivery.OVER);

            // Perform calculations for NRR here based on the formula mentioned earlier
            // Update netRunRate object
            // ...
          });

          // Find the team with the highest NRR for each year
          const teamWithHighestNRR = {};
          Object.keys(netRunRate).forEach((matchId) => {
            Object.keys(netRunRate[matchId]).forEach((team) => {
              // Update teamWithHighestNRR object to find the highest NRR team for each year
              // ...
            });
          });

          // Format the response according to the specified JSON structure
          const response = Object.keys(teamWithHighestNRR).map((team) => ({
            team,
            year: teamWithHighestNRR[team].year,
            nrr: teamWithHighestNRR[team].nrr.toFixed(2), // Limiting to 2 decimal places
          }));

          // Find the team with the highest NRR across years
          const highestNRRTeam = response.reduce((prev, current) => (prev.nrr > current.nrr) ? prev : current);

          res.json(highestNRRTeam);
        });
    });
}; */



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

      // Your logic to process deliveriesData for prob4 endpoint

      // Example placeholder response (replace this with your logic)
      const response = {
        '2016': { team: 'Team A', netRunRate: '0.83' },
        '2017': { team: 'Team B', netRunRate: '1.25' },
      };

      res.json(response);
    });
};
