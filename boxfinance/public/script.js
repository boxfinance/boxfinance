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

  // Generate fake BTC address for demo
  btcAddress.innerText = "bc1q" + Math.random().toString(36).substring(2, 25);

  walletModal.style.display = "flex";
};

closeWallet.onclick = () => {
  walletModal.style.display = "none";
};

copyAddress.onclick = () => {
  navigator.clipboard.writeText(btcAddress.innerText);
  alert("Wallet address copied!");
};
