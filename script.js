let emojis = [
  "😂",
  "✌",
  "😔",
  "😝",
  "😁",
  "😱",
  "👉",
  "🙌",
  "🍻",
  "🔥",
  "🌈",
  "☀",
  "🎈",
  "🌹",
  "💄",
  "🎀",
  "⚽",
  "🎾",
  "🏁",
  "😡",
  "👿",
  "🐻",
  "🐶",
  "🐬",
  "🐟",
  "🍀",
  "👀",
  "🚗",
  "🍎",
  "💝",
  "💙",
  "👌",
  "❤",
  "😍",
  "😉",
  "😓",
  "😳",
  "💪",
  "💩",
  "🍸",
  "🔑",
  "💖",
  "🌟",
  "🎉",
  "🌺",
  "🎶",
  "👠",
  "🏈",
  "⚾",
  "🏆",
  "👽",
  "💀",
  "🐵",
  "🐮",
  "🐩",
  "🐎",
  "💣",
  "👃",
  "👂",
  "🍓",
  "💘",
  "💜",
  "👊",
  "💋",
  "😘",
  "😜",
  "😵",
  "🙏",
  "👋",
  "🚽",
  "💃",
  "💎",
  "🚀",
  "🌙",
  "🎁",
  "⛄",
  "🌊",
  "⛵",
  "🏀",
  "🎱",
  "💰",
  "👶",
  "👸",
  "🐰",
  "🐷",
  "🐍",
  "🐫",
  "🔫",
  "👄",
  "🚲",
  "🍉",
  "💛",
  "💚",
];
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const emojiHTML = document.getElementsByClassName("container__emoji")[0];
let emojiIndex = 0;

emojiHTML.addEventListener("click", () => {

  emojiIndex = getRndInteger(0, 93);
  if (emojis[emojiIndex] === undefined) {
    emojiHTML.innerHTML = "😍";
  } else {
    emojiHTML.innerHTML = emojis[emojiIndex];
  }
});

const btn = document.getElementsByClassName("container__btn")[0];
btn.addEventListener("click", () => {
  startCOnfetti();
  navigator.clipboard.writeText(emojis[emojiIndex]);
  stopCOnfetti();
});

const startCOnfetti = (e) => {
  setTimeout(function () {
    confetti.startCOnfetti()
  }, 100);
};

const stopCOnfetti = (e) => {
  setTimeout(function () {
    confetti.stopCOnfetti()
  }, 1000);
};

