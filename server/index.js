const server = require("./src/server");
const chargeCountryDb = require('./src/initial/chargeCountryDb')
const { conn } = require('./src/db.js');
const PORT = 3001;

conn.sync({ alter: true }).then(() => {
chargeCountryDb() ;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))


