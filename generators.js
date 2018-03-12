const testingTeam = {
  lead: 'Amanda',
  tester: 'Bill'
}

const engineeringTeam = {
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: ' Alex',
  engineer: 'Dave',
  testingTeam,
};

function* TeamEngineering(team){
  yield team.lead;
  yield team.manager;
  yield team.engineering;
  const testingTeamGenerator = TestingTeamIterator(team.testingTeam);
  yield testingTeamGenerator;
}

function*  TestingTeamIterator(team){
  yield team.lead;
  yield team.tester;
}

const team = [];

for(let each of TeamEngineering(engineeringTeam)){
  team.push(each);
}

console.log(team);
