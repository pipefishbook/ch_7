simTransport = function(movies, simDelay, probeDelay) { 
  movies.reset(); 
  movies.delayedFetch(simDelay); 
  window.setTimeout(function() { 
    console.log('Simulated delay: ' + simDelay + ' milliseconds.');
    console.log('Probe delay: ' + probeDelay + ' milliseconds.');
    console.log('Collection size: ' + movies.size());
  }, probeDelay);
}
module.exports = simTransport;
