const transmission = "a7XZtGeo9Bc";
function analyzeFluxEvents(transmission) {
  let count = 0;

  for (let i = 0; i < transmission.length; i++) {
    if (transmission[i] >= "a" && transmission[i] <= "z") {
      count++;
    }
  }
  return count;
}

const resault = analyzeFluxEvents(transmission);
// console.log(resault);

if (resault > 0) {
  console.log(`Detected ${resault} high-voltage anomalies in signal stream.`);
} else {
  console.log("Stream stable: no dominant flux events recorded.");
}
