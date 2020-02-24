module.exports = function createDreamTeam(members) {  

  return Array.isArray(members)?
   (members.map(item =>(typeof item === "string") ? (item.match(/[A-Z]/i)[0]!=null ? item.match(/[A-Z]/i)[0] : '').toUpperCase() :'')).sort().join('') : false;
}