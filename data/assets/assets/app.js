let currentUser = null;

const userSelect = document.getElementById("userSelect");
const activeUserEl = document.getElementById("activeUser");
const debugLog = document.getElementById("debugLog");

// Populate dropdown
window.onload = () => {
  Object.keys(USERS).forEach(key => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = key;
    userSelect.appendChild(option);
  });

  log("Page loaded");
};

function applyUser() {
  const selected = userSelect.value;
  currentUser = USERS[selected];

  localStorage.setItem("testUser", JSON.stringify(currentUser));

  activeUserEl.textContent = JSON.stringify(currentUser, null, 2);
  log("User applied: " + selected);
}

function openChat() {
  if (window.Genesys) {
    Genesys("command", "Messenger.open");
    log("Chat opened");
  } else {
    log("Genesys not loaded");
  }
}

function resetSession() {
  localStorage.clear();
  sessionStorage.clear();
  log("Session reset");
}

function log(message) {
  const time = new Date().toLocaleTimeString();
  debugLog.textContent += `[${time}] ${message}\n`;
}
