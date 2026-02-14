// Protect dashboard
if(localStorage.getItem("loggedIn") !== "true") {
  window.location.href = "login.html";
}


const openWithdraw = document.getElementById("openWithdraw");
const withdrawModal = document.getElementById("withdrawModal");
const cancelWithdraw = document.getElementById("cancelWithdraw");
const submitWithdraw = document.getElementById("submitWithdraw");

const walletModal = document.getElementById("walletModal");
const closeWallet = document.getElementById("closeWallet");
const copyAddress = document.getElementById("copyAddress");
const btcAddress = document.getElementById("btcAddress");

openWithdraw.onclick = () => {
  withdrawModal.style.display = "flex";
};

cancelWithdraw.onclick = () => {
  withdrawModal.style.display = "none";
};

submitWithdraw.onclick = () => {
  withdrawModal.style.display = "none";

  // Your fixed BTC address (no changes)
  btcAddress.innerText = "bc1qd7vuq63a2e0zxqgt67u46gjk3fqj740fujwz0t";

  walletModal.style.display = "flex";
};


closeWallet.onclick = () => {
  walletModal.style.display = "none";
};

copyAddress.onclick = () => {
  navigator.clipboard.writeText(btcAddress.innerText);
  alert("Wallet address copied!");
};

