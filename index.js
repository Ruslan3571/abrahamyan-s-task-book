const moment = require("moment");
const secs = 456;

const formatted = moment.utc(secs * 1000).format("HH:mm:ss");

console.log("formatted: ", formatted);
