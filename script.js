function random(max) {
  return Math.floor(Math.random() * max);
}

function generate() {
  const requests = random(10000);
  const storage = random(500);
  const bill = (requests * 0.001 + storage * 0.02).toFixed(2);

  document.getElementById("requests").innerText = requests;
  document.getElementById("storage").innerText = storage + " GB";
  document.getElementById("bill").innerText = bill;
}
