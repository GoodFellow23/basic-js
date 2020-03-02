const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(!sampleActivity || !(typeof sampleActivity === "string") || isNaN(parseFloat(sampleActivity))) return false; 
  if(parseFloat(sampleActivity) >= MODERN_ACTIVITY || parseFloat(sampleActivity) <= 0) return false;
  return Math.ceil(Math.log(MODERN_ACTIVITY/parseFloat(sampleActivity))/(0.693/HALF_LIFE_PERIOD));
};
