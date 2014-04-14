require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"tIFt53":[function(require,module,exports){
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

},{}],"probe":[function(require,module,exports){
module.exports=require('tIFt53');
},{}]},{},[])