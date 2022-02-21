const agent = 
{
  "first_name":"Zonko",
  "last_name":"Bogdan",
  "players" :[25, 26, 7, 33]
};
console.log(agent);
var index = agent.players.indexOf(7);

agent.players.splice(index,1, 2333220);

console.log(agent);
