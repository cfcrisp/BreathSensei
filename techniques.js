const methodContainer = document.getElementById('method-container');
const breathingMethods = [
  {
    name: "Wim Hof Method",
    seconds: [2, 3.2],
    scales: [.3, 1],
    breathsPerRound: 30,
    retention: 1,
  },
  // ... Add other methods here ...
  {
    name: "Box Breathing (4-4-4-4)",
    seconds: [5, 5, 5, 5],
    scales: [.2, 1, 1, .2],
    breathsPerRound: 25,
    retention: 0,
  },
  {
    name: "Diaphragmatic Breathing (Belly Breathing)",
    seconds: [4, 4],
    scales: [1, 0.7],
    breathsPerRound: 25,
    retention: 0,
  },
  {
    name: "Alternate Nostril Breathing (Nadi Shodhana Pranayama)",
    seconds: [4, 4, 4, 4],
    scales: [1, 0.7, 1, 0.7],
    breathsPerRound: 25,
    retention: 0,
  },
  {
    name: "Rapid Breathing (Buteyko Breathing)",
    seconds: [2, 2],
    scales: [.2, 1],
    breathsPerRound: 5,
    retention: 0,
  },
  // ... Add the remaining methods here ...
];

// Don't forget to include all the methods with their appropriate seconds and scales values.
// Breathing Methods:
    // Wim Hof Method
    const wimHofMethodSeconds = [4, 2]; // Adjust the times as needed
    const wimHofMethodScales = [1, 0.7];

    // Buteyko Breathing
    const buteykoBreathingSeconds = [5, 3]; // Adjust the times as needed
    const buteykoBreathingScales = [1, 0.9];

    // Apnea Training
    const apneaTrainingSeconds = [0]; // You'll need a more complex implementation for this method
    const apneaTrainingScales = [1];

    // CO2 Tables
    const co2TablesSeconds = [0]; // You'll need a more complex implementation for this method
    const co2TablesScales = [1];

    // O2 Tables
    const o2TablesSeconds = [0]; // You'll need a more complex implementation for this method
    const o2TablesScales = [1];

    // Box Breathing (4-4-4-4)
    const boxBreathingSeconds = [4, 4, 4, 4];
    const boxBreathingScales = [1, 1, 0, 0];

    // Diaphragmatic Breathing (Belly Breathing)
    const diaphragmaticBreathingSeconds = [4, 4]; // Adjust the times as needed
    const diaphragmaticBreathingScales = [1, 0];

    // Alternate Nostril Breathing
    const alternateNostrilBreathingSeconds = [4, 4, 4, 4]; // Adjust the times as needed
    const alternateNostrilBreathingScales = [1, 0, 1, 0];

    // Pursed-Lip Breathing
    const pursedLipBreathingSeconds = [2, 4]; // Adjust the times as needed
    const pursedLipBreathingScales = [1, 0];

    // Inspiratory Muscle Training
    const inspiratoryMuscleTrainingSeconds = [0]; // You'll need a device for this method
    const inspiratoryMuscleTrainingScales = [1];

    // Active Cycle of Breathing Techniques
    const activeCycleBreathingSeconds = [0]; // You'll need a more complex implementation for this method
    const activeCycleBreathingScales = [1];

    // 4-7-8 Breathing (Relaxing Breath)
    const fourSevenEightBreathingSeconds = [4, 7, 8];
    const fourSevenEightBreathingScales = [1, 1, 0];

    // Three-Part Breathing
    const threePartBreathingSeconds = [4, 4]; // Adjust the times as needed
    const threePartBreathingScales = [1, 0];

    // Humming Bee Breath
    const hummingBeeBreathSeconds = [4, 4]; // Adjust the times as needed
    const hummingBeeBreathScales = [1, 0];

    // Single Nostril Breathing
    const singleNostrilBreathingSeconds = [4, 4, 4, 4]; // Adjust the times as needed
    const singleNostrilBreathingScales = [1, 0, 1, 0];

    // Mindful Breathing
    const mindfulBreathingSeconds = [4, 4]; // Adjust the times as needed
    const mindfulBreathingScales = [1, 0];

    // Anappana Meditation
    const anapanaMeditationSeconds = [4, 4]; // Adjust the times as needed
    const anapanaMeditationScales = [1, 0];

    // Samavritti (Equal Breath)
    const samavrittiSeconds = [4, 4];
    const samavrittiScales = [1, 0];

    // Breath of Fire (Kapalabhati Pranayama)
    const breathOfFireSeconds = [1, 1]; // Adjust the times as needed
    const breathOfFireScales = [1, 0.9];

    // Holotropic Breathwork
    const holotropicBreathworkSeconds = [2, 2]; // Adjust the times as needed
    const holotropicBreathworkScales = [1, 0];

    // Oxygen Advantage Techniques
    const oxygenAdvantageSeconds = [4, 6]; // Adjust the times as needed
    const oxygenAdvantageScales = [1, 0];

    // Lamaze Breathing (Patterned Breathing)
    const lamazeBreathingSeconds = [4, 4]; // Adjust the times as needed
    const lamazeBreathingScales = [1, 0];

    // Grounding Breathing Techniques
    const groundingBreathingSeconds = [4, 6]; // Adjust the times as needed
    const groundingBreathingScales = [1, 0];

    //Apnea Training, CO2 Tables, O2 Tables, Inspiratory Muscle Training, and Active Cycle of Breathing Techniques, 
    //may require more complex implementations or additional devices. 
