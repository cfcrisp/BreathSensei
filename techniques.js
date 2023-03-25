const methodContainer = document.getElementById('method-container');
const breathingMethods = [
  {
    name: "Wim Hof Method",
    seconds: [1.2, 2],
    scales: [.3, 1],
    breathsPerRound: 30,
    retention: 1,
  },
  {
    name: "Box Breathing (5-5-5-5)",
    seconds: [5, 5, 6, 5],
    scales: [1, 1, .2, .2],
    breathsPerRound: 25,
    retention: 0,
  },
  {
    name: "Diaphragmatic Breathing (Belly Breathing)",
    seconds: [4, 4],
    scales: [.2, 1],
    breathsPerRound: 25,
    retention: 0,
  },
  {
    name: "Alternate Nostril Breathing (Nadi Shodhana Pranayama)",
    seconds: [4, 4, 4, 4],
    scales: [.2, 1, .2, 1],
    breathsPerRound: 25,
    retention: 0,
  },
  {
    name: "Rapid Breathing (Buteyko Breathing)",
    seconds: [2, 2],
    scales: [.2, 1],
    breathsPerRound: 25,
    retention: 0,
  },
  {
    name: "4-7-8 Breathing (Relaxing Breath)",
    seconds: [4, 7, 8],
    scales: [1, 1, .2],
    breathsPerRound: 15,
    retention: 0,
  },
  // ... Add the remaining methods here ...
];
