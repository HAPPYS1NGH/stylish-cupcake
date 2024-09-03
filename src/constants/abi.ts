export const vendingMachineAbi = [
  {
    "type": "function",
    "name": "DAILY_CUPCAKE_ALLOCATION",
    "inputs": [],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "LEADERBOARD_SIZE",
    "inputs": [],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "addressToTelegramID",
    "inputs": [{ "name": "", "type": "address", "internalType": "address" }],
    "outputs": [{ "name": "", "type": "string", "internalType": "string" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "claimDailyCupcakes",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "getLeaderboard",
    "inputs": [],
    "outputs": [
      { "name": "", "type": "string[]", "internalType": "string[]" }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getUnclaimedCupcakes",
    "inputs": [
      { "name": "telegramID", "type": "string", "internalType": "string" }
    ],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getUserData",
    "inputs": [
      { "name": "telegramID", "type": "string", "internalType": "string" }
    ],
    "outputs": [
      { "name": "balance", "type": "uint256", "internalType": "uint256" },
      { "name": "received", "type": "uint256", "internalType": "uint256" },
      { "name": "registered", "type": "bool", "internalType": "bool" }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "leaderboard",
    "inputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "outputs": [{ "name": "", "type": "string", "internalType": "string" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "registerUser",
    "inputs": [
      { "name": "telegramID", "type": "string", "internalType": "string" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "sendCupcakes",
    "inputs": [
      {
        "name": "recipientTelegramID",
        "type": "string",
        "internalType": "string"
      },
      { "name": "amount", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "event",
    "name": "CupcakesSent",
    "inputs": [
      {
        "name": "from",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "recipientTelegramID",
        "type": "string",
        "indexed": false,
        "internalType": "string"
      },
      {
        "name": "amount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "LeaderboardUpdated",
    "inputs": [
      {
        "name": "telegramID",
        "type": "string",
        "indexed": false,
        "internalType": "string"
      },
      {
        "name": "newPosition",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "UserRegistered",
    "inputs": [
      {
        "name": "userAddress",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "telegramID",
        "type": "string",
        "indexed": false,
        "internalType": "string"
      }
    ],
    "anonymous": false
  }
]