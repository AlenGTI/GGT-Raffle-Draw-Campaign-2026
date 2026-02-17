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
    "Retail": { /* full data omitted for brevity; copy from HTML */ },
    "Semi-Wholesale": { /* full data omitted for brevity; copy from HTML */ },
    "Wholesale": { /* full data omitted for brevity; copy from HTML */ }
  };

  // --- 3️⃣ Raffle Criteria ---
  const raffleCriteria = {
    "Retail": { /* full data omitted for brevity; copy from HTML */ },
    "Semi-Wholesale": { /* full data omitted for brevity; copy from HTML */ },
    "Wholesale": { /* full data omitted for brevity; copy from HTML */ }
  };

  // --- 4️⃣ Update Targets ---
  function updateTargets() {
    const region = document.getElementById("region").value;
    const customerType = document.getElementById("customerType").value;
    if (!region || !customerType) return;

    document.querySelectorAll("#bagTable tbody tr").forEach(row => {
      const product = row.children[0].innerText.trim();

      let bagValue = defaultBags[product] || 0;
      if (bagCriteria[customerType]?.[region]?.[product] != null) {
        bagValue = bagCriteria[customerType][region][product];
      }
      row.querySelector(".bag").innerText = bagValue;

      let raffleValue = "–";
      if (raffleCriteria[customerType]?.[region]?.[product] != null) {
        raffleValue = raffleCriteria[customerType][region][product];
      }
      row.querySelector(".raffleTarget").innerText = raffleValue;
    });

    const raffleHeader = document.querySelector("#bagTable th:nth-child(3)");
    const resultHeader = document.querySelector(".result-table th:nth-child(2)");
    const orderPlacedHeader = document.querySelector("#bagTable th:nth-child(4)");

    if (customerType === "Wholesale") {
      raffleHeader.innerText = "Target Master Cartons for Raffle";
      resultHeader.innerText = "Qualified Master Cartons";
      orderPlacedHeader.innerText = "Order Placed (Master Cartons)";
    } else {
      raffleHeader.innerText = "Target Outer for Raffle";
      resultHeader.innerText = "Qualified Outers";
      orderPlacedHeader.innerText = "Order Placed (Outers)";
    }
  }

  document.getElementById("region").addEventListener("change", updateTargets);
  document.getElementById("customerType").addEventListener("change", updateTargets);

  // --- 5️⃣ Calculate Button ---
  const calculateBtn = document.getElementById("calculate");

  calculateBtn.addEventListener("click", function () {
    calculateBtn.classList.remove("clicked");
    void calculateBtn.offsetWidth;
    calculateBtn.classList.add("clicked");

    const region = document.getElementById("region").value;
    const customerType = document.getElementById("customerType").value;
    if (!region) return alert("Please select region");
    if (!customerType) return alert("Please select customer type");

    const rows = document.querySelectorAll("#bagTable tbody tr");
    let orders = [], bags = [], allOrdered = true;

    rows.forEach(r => {
      const orderQty = +r.querySelector(".order").value || 0;
      orders.push(orderQty);
      const bagValue = +r.querySelector(".bag").innerText || 0;
      bags.push(bagValue);
      if (orderQty <= 0) allOrdered = false;
    });

    let mhrOuters = 0, mhrBags = 0, indOuters = 0, indBags = 0;

    if (customerType !== "Wholesale") {
      if (allOrdered && orders.length > 0) {
        const minOrder = Math.min(...orders);
        mhrOuters = orders.reduce((sum) => sum + minOrder, 0);
        const bonus = minOrder * 2;
        mhrBags = bonus + bags.reduce((sum, val) => sum + (minOrder * val), 0);

        orders.forEach((o, i) => {
          const excess = o - Math.min(...orders);
          if (excess > 0) {
            indOuters += excess;
            indBags += excess * bags[i];
          }
        });
      } else {
        orders.forEach((o, i) => {
          indOuters += o;
          indBags += o * bags[i];
        });
      }
    }

    // Update hidden and result fields
    if (customerType === "Wholesale") {
      document.getElementById("mhrOuters").innerText = "Not Applicable";
      document.getElementById("indOuters").innerText = "Not Applicable";
      document.getElementById("mhrBags").innerText = 0;
      document.getElementById("indBags").innerText = 0;
      document.getElementById("totalOuters").innerHTML = "<b>0</b>";
      document.getElementById("totalBags").innerHTML = "<b>0</b>";
      document.getElementById("maxBags").innerText = 0;
    } else {
      document.getElementById("mhrOuters").innerText = mhrOuters || "Not Eligible";
      document.getElementById("mhrOuters").style.color = mhrOuters ? "black" : "red";
      document.getElementById("mhrBags").innerText = mhrBags;
      document.getElementById("indOuters").innerText = indOuters || 0;
      document.getElementById("indBags").innerText = indBags;
      document.getElementById("totalOuters").innerHTML = `<b>${mhrOuters + indOuters}</b>`;
      document.getElementById("totalBags").innerHTML = `<b>${mhrBags + indBags}</b>`;
      document.getElementById("maxBags").innerText = mhrBags + indBags;
    }

    // Raffle tickets
    let tickets = [];
    rows.forEach(r => {
      const product = r.children[0].innerText.trim();
      if (raffleCriteria[customerType]?.[region]?.[product]) {
        const ordered = +r.querySelector(".order").value || 0;
        tickets.push(Math.floor(ordered / raffleCriteria[customerType][region][product]));
      }
    });
    const totalTickets = tickets.length ? Math.min(...tickets) : 0;
    document.getElementById("raffleStatus").innerText = totalTickets > 0 ? "Eligible" : "Not Eligible";
    document.getElementById("raffleStatus").className = totalTickets > 0 ? "eligible" : "not-eligible-text";
    document.getElementById("raffleTickets").innerText = totalTickets;
    document.getElementById("maxTickets").innerText = totalTickets;
  });

});
