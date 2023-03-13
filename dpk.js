const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate = "";
    
  //Check event and partitionKey, If it is then assign it to the Candidate else create new key
  if (event && event.partitionKey) {
    candidate = event.partitionKey;
  } else {
    candidate = crypto.createHash("sha3-512").update("").digest("hex");
  }

  //Validate of key has a datatype is string or not and length else return 0
  if (typeof candidate === "string" && candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  }else{
    return "0";
  }

  return candidate;
};