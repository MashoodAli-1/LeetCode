// str = `pragma solidity >=0.5.0 <0.6.0;

// import "./ownable.sol";
// import "./safemath.sol";

// contract ZombieFactory is Ownable {

//   struct Zombie {
//         string name;
//         uint dna;
//         uint32 level;
//         uint32 readyTime;
//         uint16 winCount;
//         uint16 lossCount;
//     }
//   using SafeMath for uint256;
//   using SafeMath32 for uint32;
//   using SafeMath16 for uint16;

//   uint dnaDigits = 16;
//   uint dnaModulus = 10 ** dnaDigits;
//   uint cooldownTime = 1 days;

//   Zombie[] public zombies;

//   mapping (uint => address) public zombieToOwner;
//   mapping (address => uint) ownerZombieCount;

//   event NewZombie(uint zombieId, string name, uint dna);

//   function _createZombie(string memory _name, uint _dna) internal {
//     uint id = zombies.push(Zombie(_name, _dna, 1, uint32(now + cooldownTime), 0, 0)) - 1;
//     zombieToOwner[id] = msg.sender;
//     ownerZombieCount[msg.sender] = ownerZombieCount[msg.sender].add(1);
//     emit NewZombie(id, _name, _dna);
//   }

//   function _generateRandomDna(string memory _str) private view returns (uint) {
//     uint rand = uint(keccak256(abi.encodePacked(_str)));
//     return rand % dnaModulus;
//   }

//   function createRandomZombie(string memory _name) public {
//     require(ownerZombieCount[msg.sender] == 0);
//     uint randDna = _generateRandomDna(_name);
//     randDna = randDna - randDna % 100;
//     _createZombie(_name, randDna);
//   }

// }`;

// const functionRegex =
//   /(function\s+\w+\s*\([^)]*\)\s*(public|private|internal|external)?\s*\{[^}]*\})/g;
// const variableRegex = /(uint|uint32|uint16|address|string)\s+(\w+)\s*;/g;

// const functionsArray = str.match(functionRegex);
// const variablesArray = str.match(variableRegex);

// console.log("Functions Array:");
// console.log(functionsArray);

// console.log("Variables Array:");
// console.log(variablesArray);

// // console.log(str.length);
// // console.log(str.split(""));
// // str.split("");
// // for (var i = 0; i < 400; i++) {
// //   console.log(str[i]);
// // }

const strCode = `pragma solidity >=0.5.0 <0.6.0;

import "./ownable.sol";
import "./safemath.sol";

contract ZombieFactory is Ownable {

  struct Zombie {
    string name;
    uint dna;
    uint32 level;
    uint32 readyTime;
    uint16 winCount;
    uint16 lossCount;
  }

  using SafeMath for uint256;
  using SafeMath32 for uint32;
  using SafeMath16 for uint16;
  
  event NewZombie(uint zombieId, string name, uint dna);

  uint dnaDigits = 16;
  uint dnaModulus = 10 ** dnaDigits;
  uint cooldownTime = 1 days;

  Zombie[] public zombies;

  mapping (uint => address) public zombieToOwner;
  mapping (address => uint) ownerZombieCount;


  function _createZombie(string memory _name, uint _dna) internal {
    uint id = zombies.push(Zombie(_name, _dna, 1, uint32(now + cooldownTime), 0, 0)) - 1;
    zombieToOwner[id] = msg.sender;
    ownerZombieCount[msg.sender] = ownerZombieCount[msg.sender].add(1);
    emit NewZombie(id, _name, _dna);
  }

  function _generateRandomDna(string memory _str) private  view returns (uint) {
    uint rand = uint(keccak256(abi.encodePacked(_str)));
    return rand % dnaModulus;
  }


  function createRandomZombie(string memory _name) public {
    require(ownerZombieCount[msg.sender] == 0);
    uint randDna = _generateRandomDna(_name);
    randDna = randDna - randDna % 100;
    _createZombie(_name, randDna);
  }
}`;

// Regular expressions to match functions, variables with values, struct, and event
const functionRegex =
  /function\s+\w+\s*\([^)]*\)\s*(public|private|internal|external)?\s*(view|pure|payable)?\s*\{(?:[^{}]*\{[^{}]*\})*[^{}]*\}/g;
const returnFunctionRegex =
  /function\s+\w+\s*\([^)]*\)\s*(public|private|internal|external)?\s*(view|pure|payable)?\s*returns\s*\([^)]*\)\s*\{(?:[^{}]*\{[^{}]*\})*[^{}]*\}/g;
const variableRegex =
  /(uint|uint32|uint16|address|string)\s+(\w+)\s*=\s*(.*?);/g;
const structRegex = /struct\s+\w+\s*\{[^}]*\}/g;
const eventRegex = /event\s+\w+\s*\([^)]*\);/g;

// const functionsArray = strCode.match(functionRegex);
const functionsArray = Array.from(
  strCode.matchAll(functionRegex),
  (match) => match[0]
);
const retrunFunctionsArray = Array.from(
  strCode.matchAll(returnFunctionRegex),
  (match) => match[0]
);
const variablesArray = strCode.match(variableRegex);
const structArray = strCode.match(structRegex);
const eventArray = strCode.match(eventRegex);

console.log("Functions Array:");
console.log(functionsArray);

console.log("Variables with Values Array:");
console.log(variablesArray);

console.log("Struct Array:");
console.log(structArray);

console.log("Event Array:");
console.log(eventArray);

// can access any variable array
console.log(variablesArray[2]);

// Iterate through functionsArray and access each function individually
for (let i = 0; i < functionsArray.length; i++) {
  const currentFunction = functionsArray[i];
  console.log(`Function ${i + 1}:`);
  console.log(currentFunction);
  console.log("----------------------");
}

for (let i = 0; i < retrunFunctionsArray.length; i++) {
  const currentFunction = retrunFunctionsArray[i];
  console.log(`Function ${i + 1}:`);
  console.log(currentFunction);
  console.log("----------------------");
}
