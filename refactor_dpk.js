const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {  
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate = "";
  event = event ? event : {};

  if (event && event.partitionKey) {
    candidate = event.partitionKey;
  } else {    
    candidate = crypto.createHash("sha3-512").update(JSON.stringify(event)).digest("hex");
  }

  if (typeof candidate === "string" && candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  }else{
    return "0";
  }

  return candidate;
};