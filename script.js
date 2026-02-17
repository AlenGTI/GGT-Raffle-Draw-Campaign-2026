document.addEventListener("DOMContentLoaded", function () {

  // --- 1️⃣ Default Plastic Bags ---
  const defaultBags = {
    "Milano Fan Pack New York": 2,
    "Milano Fan Pack London": 2,
    "Milano Queen Furious Red": 2,
    "Milano Nano Las Vegas Black": 1,
    "Mond QS Red": 1,
    "Mond Nano Blue": 2,
    "Mond Nano White": 2,
    "Momento Nano Black Jet Wave": 1
  };

  // --- 2️⃣ Bag Criteria ---
  const bagCriteria = {
    "Retail": {
      Kabul: { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
      Herat: { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
      Kandahar: { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
      Jalalabad: { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
      Mazar: { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
      Helmand: { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
      Ghazni: { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
      Konduz: { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
      Jozjan: { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
      Khost: { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
      "Poli Khomre": { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
      Parwan: { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
      Badakhshan: { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 }
    },
    "Semi-Wholesale": {
      Kabul: { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
      Herat: { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
      Kandahar: { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
      Jalalabad: { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
      Mazar: { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
      Helmand: { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
      Ghazni: { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
      Konduz: { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
      Jozjan: { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
      Khost: { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
      "Poli Khomre": { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
      Parwan: { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 },
      Badakhshan: { "Mond Nano Blue": 2, "Milano Queen Furious Red": 2, "Mond Nano White": 2, "Milano Fan Pack New York": 2, "Milano Fan Pack London": 2, "Milano Nano Las Vegas Black": 1, "Mond QS Red": 1, "Momento Nano Black Jet Wave": 1 }
    },
    "Wholesale": {
      Kabul: { "Mond Nano Blue": 0, "Milano Queen Furious Red": 0, "Mond Nano White": 0, "Milano Fan Pack New York": 0, "Milano Fan Pack London": 0, "Milano Nano Las Vegas Black": 0, "Mond QS Red": 0, "Momento Nano Black Jet Wave": 0 },
      Herat: { "Mond Nano Blue": 0, "Milano Queen Furious Red": 0, "Mond Nano White": 0, "Milano Fan Pack New York": 0, "Milano Fan Pack London": 0, "Milano Nano Las Vegas Black": 0, "Mond QS Red": 0, "Momento Nano Black Jet Wave": 0 },
      Kandahar: { "Mond Nano Blue": 0, "Milano Queen Furious Red": 0, "Mond Nano White": 0, "Milano Fan Pack New York": 0, "Milano Fan Pack London": 0, "Milano Nano Las Vegas Black": 0, "Mond QS Red": 0, "Momento Nano Black Jet Wave": 0 },
      Jalalabad: { "Mond Nano Blue": 0, "Milano Queen Furious Red": 0, "Mond Nano White": 0, "Milano Fan Pack New York": 0, "Milano Fan Pack London": 0, "Milano Nano Las Vegas Black": 0, "Mond QS Red": 0, "Momento Nano Black Jet Wave": 0 },
      Mazar: { "Mond Nano Blue": 0, "Milano Queen Furious Red": 0, "Mond Nano White": 0, "Milano Fan Pack New York": 0, "Milano Fan Pack London": 0, "Milano Nano Las Vegas Black": 0, "Mond QS Red": 0, "Momento Nano Black Jet Wave": 0 },
      Helmand: { "Mond Nano Blue": 0, "Milano Queen Furious Red": 0, "Mond Nano White": 0, "Milano Fan Pack New York": 0, "Milano Fan Pack London": 0, "Milano Nano Las Vegas Black": 0, "Mond QS Red": 0, "Momento Nano Black Jet Wave": 0 },
      Ghazni: { "Mond Nano Blue": 0, "Milano Queen Furious Red": 0, "Mond Nano White": 0, "Milano Fan Pack New York": 0, "Milano Fan Pack London": 0, "Milano Nano Las Vegas Black": 0, "Mond QS Red": 0, "Momento Nano Black Jet Wave": 0 },
      Konduz: { "Mond Nano Blue": 0, "Milano Queen Furious Red": 0, "Mond Nano White": 0, "Milano Fan Pack New York": 0, "Milano Fan Pack London": 0, "Milano Nano Las Vegas Black": 0, "Mond QS Red": 0, "Momento Nano Black Jet Wave": 0 },
      Jozjan: { "Mond Nano Blue": 0, "Milano Queen Furious Red": 0, "Mond Nano White": 0, "Milano Fan Pack New York": 0, "Milano Fan Pack London": 0, "Milano Nano Las Vegas Black": 0, "Mond QS Red": 0, "Momento Nano Black Jet Wave": 0 },
      Khost: { "Mond Nano Blue": 0, "Milano Queen Furious Red": 0, "Mond Nano White": 0, "Milano Fan Pack New York": 0, "Milano Fan Pack London": 0, "Milano Nano Las Vegas Black": 0, "Mond QS Red": 0, "Momento Nano Black Jet Wave": 0 },
      "Poli Khomre": { "Mond Nano Blue": 0, "Milano Queen Furious Red": 0, "Mond Nano White": 0, "Milano Fan Pack New York": 0, "Milano Fan Pack London": 0, "Milano Nano Las Vegas Black": 0, "Mond QS Red": 0, "Momento Nano Black Jet Wave": 0 },
      Parwan: { "Mond Nano Blue": 0, "Milano Queen Furious Red": 0, "Mond Nano White": 0, "Milano Fan Pack New York": 0, "Milano Fan Pack London": 0, "Milano Nano Las Vegas Black": 0, "Mond QS Red": 0, "Momento Nano Black Jet Wave": 0 },
      Badakhshan: { "Mond Nano Blue": 0, "Milano Queen Furious Red": 0, "Mond Nano White": 0, "Milano Fan Pack New York": 0, "Milano Fan Pack London": 0, "Milano Nano Las Vegas Black": 0, "Mond QS Red": 0, "Momento Nano Black Jet Wave": 0 }
    }
  };

  // --- 3️⃣ Raffle Criteria ---
  const raffleCriteria = {
    Kabul: { "Retail": 50, "Semi-Wholesale": 40, "Wholesale": 0 },
    Herat: { "Retail": 40, "Semi-Wholesale": 35, "Wholesale": 0 },
    Kandahar: { "Retail": 35, "Semi-Wholesale": 30, "Wholesale": 0 },
    Jalalabad: { "Retail": 30, "Semi-Wholesale": 25, "Wholesale": 0 },
    Mazar: { "Retail": 30, "Semi-Wholesale": 25, "Wholesale": 0 },
    Helmand: { "Retail": 25, "Semi-Wholesale": 20, "Wholesale": 0 },
    Ghazni: { "Retail": 25, "Semi-Wholesale": 20, "Wholesale": 0 },
    Konduz: { "Retail": 20, "Semi-Wholesale": 15, "Wholesale": 0 },
    Jozjan: { "Retail": 20, "Semi-Wholesale": 15, "Wholesale": 0 },
    Khost: { "Retail": 15, "Semi-Wholesale": 10, "Wholesale": 0 },
    "Poli Khomre": { "Retail": 15, "Semi-Wholesale": 10, "Wholesale": 0 },
    Parwan: { "Retail": 10, "Semi-Wholesale": 5, "Wholesale": 0 },
    Badakhshan: { "Retail": 10, "Semi-Wholesale": 5, "Wholesale": 0 }
  };

  // --- 4️⃣ Update Targets Function ---
  function updateTargets() {
    const channel = document.getElementById("channel").value;
    const region = document.getElementById("region").value;

    // Update bag counts
    const bags = bagCriteria[channel][region];
    for (const [bag, count] of Object.entries(bags)) {
      const input = document.getElementById(bag.replace(/\s+/g, "_"));
      if (input) input.value = count;
    }

    // Update raffle tickets
    const raffleInput = document.getElementById("raffle");
    raffleInput.value = raffleCriteria[region][channel] || 0;
  }

  // --- 5️⃣ Event Listeners ---
  document.getElementById("channel").addEventListener("change", updateTargets);
  document.getElementById("region").addEventListener("change", updateTargets);

  // --- 6️⃣ Initial Call ---
  updateTargets();

  // --- 7️⃣ Calculate Button ---
  document.getElementById("calculate").addEventListener("click", function () {
    let totalBags = 0;
    for (const bag of Object.keys(defaultBags)) {
      const input = document.getElementById(bag.replace(/\s+/g, "_"));
      totalBags += parseInt(input.value) || 0;
    }
    const raffle = parseInt(document.getElementById("raffle").value) || 0;
    document.getElementById("total").textContent = totalBags + raffle;
  });

});
