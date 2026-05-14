const flowers = [
  {
    name: "Roses",
    color: "#f35f8e",
    accent: "#bf285b",
    center: "#ffd1dc",
    shape: "rose",
    asset: "assets/flowers/rose.svg",
    note: "One of her favorites. Soft, romantic, and very obviously in love.",
    meaning: "Roses are one of her favorites, so they belong here first. They say: you are adored, loudly and on purpose.",
    favorite: true,
  },
  {
    name: "Tulips",
    color: "#ff9f68",
    accent: "#e86f48",
    center: "#ffd6a7",
    shape: "tulip",
    asset: "assets/flowers/tulip.svg",
    note: "Her favorite kind of sweet, bright, soft little flower.",
    meaning: "Tulips are one of her favorites. They feel like spring in flower form: gentle, happy, and full of the soft excitement of choosing each other.",
    favorite: true,
  },
  {
    name: "Jasmine",
    color: "#fffdf8",
    accent: "#fff2a9",
    center: "#e8c45f",
    shape: "jasmine",
    asset: "assets/flowers/jasmine.svg",
    note: "Her favorite soft white flower, tiny and precious.",
    meaning: "Jasmine is one of her favorites: delicate, sweet, and quietly romantic, like love that stays gentle even across distance.",
    favorite: true,
  },
  {
    name: "Daisies",
    color: "#f2c94c",
    accent: "#ffffff",
    center: "#f3b91f",
    shape: "daisy",
    asset: "assets/flowers/blossom.svg",
    note: "For the way you make everything feel lighter.",
    meaning: "Daisies are innocent, cheerful, and sunny. They are for the way she makes simple moments feel easy to love.",
  },
  {
    name: "Lilies",
    color: "#a88cf4",
    accent: "#7756d8",
    center: "#ffe28a",
    shape: "lily",
    asset: "assets/flowers/hibiscus.svg",
    note: "Elegant, dreamy, and impossible to ignore.",
    meaning: "Lilies are graceful and dreamy. They are for beauty that feels calm, confident, and impossible to miss.",
  },
  {
    name: "Peonies",
    color: "#ff86a7",
    accent: "#f05286",
    center: "#ffe0e8",
    shape: "peony",
    asset: "assets/flowers/peony.svg",
    note: "Big birthday energy. Soft, extra, perfect.",
    meaning: "Peonies are romantic and full, like a celebration that decided to become a flower.",
  },
  {
    name: "Sunflowers",
    color: "#f6b938",
    accent: "#ffd95a",
    center: "#8b552e",
    shape: "sunflower",
    asset: "assets/flowers/sunflower.svg",
    note: "Because you are basically my favorite bit of sunshine.",
    meaning: "Sunflowers are loyalty, warmth, and joy. They face the light, which feels correct for someone who brings so much of it.",
  },
  {
    name: "Lavender",
    color: "#8c7ae6",
    accent: "#b7a7ff",
    center: "#e6ddff",
    shape: "lavender",
    asset: "assets/flowers/lavender.svg",
    note: "Calm, sweet, and made for slow dancing in the kitchen.",
    meaning: "Lavender is soft, calming, and intimate. It is for peaceful love and the comfort of being completely yourself.",
  },
  {
    name: "Cherry blossoms",
    color: "#ffb7c8",
    accent: "#ff86a7",
    center: "#ffe271",
    shape: "blossom",
    asset: "assets/flowers/cherry-blossom.svg",
    note: "Tiny petals for a million tiny reasons I adore you.",
    meaning: "Cherry blossoms are delicate and magical. They are for tiny beautiful moments that become unforgettable.",
  },
];

const messages = [
  "Even from far away, you still feel like home to me.",
  "I hope today reaches you with the same warmth I wish I could bring in person.",
  "You are my favorite notification, my softest place, and my best little plot twist.",
  "I love the way your smile makes the distance feel smaller.",
  "Today is yours. I hope it feels gentle, pretty, and completely loved.",
  "I would choose you in every city, every timezone, every version of us.",
];

const grid = document.querySelector("#flower-grid");
const stage = document.querySelector("#bouquet-stage");
const heroBouquet = document.querySelector("#hero-bouquet");
const bouquetNote = document.querySelector("#bouquet-note");
const pickedList = document.querySelector("#picked-list");
const selectionCount = document.querySelector("#selection-count");
const wrapChooser = document.querySelector("#wrap-chooser");
const bouquetMessage = document.querySelector("#bouquet-message");
const wrapOptions = document.querySelectorAll(".wrap-option");
const messageCard = document.querySelector("#message-card");
const surpriseBtn = document.querySelector("#surprise-btn");
const resetBtn = document.querySelector("#reset-btn");
const cakeCard = document.querySelector("#cake-card");
const blowCandles = document.querySelector("#blow-candles");
const wishNote = document.querySelector("#wish-note");
const musicToggle = document.querySelector("#music-toggle");
const musicFile = document.querySelector("#music-file");
const songName = document.querySelector("#song-name");
const drawer = document.querySelector("#flower-drawer");
const drawerBackdrop = document.querySelector("#drawer-backdrop");
const drawerClose = document.querySelector("#drawer-close");
const drawerArt = document.querySelector("#drawer-art");
const drawerTitle = document.querySelector("#drawer-title");
const drawerCopy = document.querySelector("#drawer-copy");
const drawerToggle = document.querySelector("#drawer-toggle");
const revealScenes = document.querySelectorAll(".reveal-scene");
const storyLinks = document.querySelectorAll(".story-steps a");
const wishCards = document.querySelectorAll(".wish-card");
const wishResult = document.querySelector("#wish-result");
const couponCards = document.querySelectorAll(".coupon-card");
const couponResult = document.querySelector("#coupon-result");
const datePlanCards = document.querySelectorAll(".date-plan-card");
const datePlanResult = document.querySelector("#date-plan-result");
const windowConfetti = document.querySelector("#window-confetti");
const openWhenCards = document.querySelectorAll(".open-when-card");
const openWhenResult = document.querySelector("#open-when-result");
const secretLetterBtn = document.querySelector("#secret-letter-btn");
const secretLetterPaper = document.querySelector("#secret-letter-paper");
const dateDreamCards = document.querySelectorAll(".date-dream-card");
const dateDreamResult = document.querySelector("#date-dream-result");
const complimentButton = document.querySelector("#compliment-button");
const complimentOutput = document.querySelector("#compliment-output");
const loveJarButton = document.querySelector("#love-jar-button");
const loveJarNote = document.querySelector("#love-jar-note");
const tapDoodleBoard = document.querySelector("#tap-doodle-board");
const decreeButton = document.querySelector("#decree-button");
const decreeOutput = document.querySelector("#decree-output");
const dreamLanternButtons = document.querySelectorAll(".dream-lantern");
const dreamLanternNote = document.querySelector("#dream-lantern-note");
const moodButtons = document.querySelectorAll(".mood-grid button");
const moodResult = document.querySelector("#mood-result");
const holdHugButton = document.querySelector("#hold-hug-button");
const holdHugFill = document.querySelector("#hold-hug-fill");
const holdHugNote = document.querySelector("#hold-hug-note");
const girlPrev = document.querySelector("#girl-prev");
const girlNext = document.querySelector("#girl-next");
const girlReason = document.querySelector("#girl-reason");
const mapStops = document.querySelectorAll(".treasure-map button");
const mapNote = document.querySelector("#map-note");
const contractButton = document.querySelector("#contract-button");
const contractResult = document.querySelector("#contract-result");
const homeParts = document.querySelectorAll(".home-part");
const homeNote = document.querySelector("#home-note");
const goodStarButtons = document.querySelectorAll(".good-star-board button");
const starNote = document.querySelector("#star-note");
const fireworksButton = document.querySelector("#fireworks-button");
const fireworksMessage = document.querySelector("#fireworks-message");
const kissLane = document.querySelector("#kiss-lane");
const kissButton = document.querySelector("#kiss-button");
const playlistMoodButtons = document.querySelectorAll(".playlist-mood-grid button");
const playlistBuildNote = document.querySelector("#playlist-build-note");
const loveWheelButton = document.querySelector("#love-wheel-button");
const loveWheelResult = document.querySelector("#love-wheel-result");
const crownButtons = document.querySelectorAll(".crown-options button");
const crownNote = document.querySelector("#crown-note");
const miniCakeStage = document.querySelector("#mini-cake-stage");
const cakeToppingButtons = document.querySelectorAll(".cake-topping-buttons button");
const paintCanvas = document.querySelector("#paint-canvas");
const paintColorButtons = document.querySelectorAll(".paint-tools [data-color]");
const paintClear = document.querySelector("#paint-clear");
const giftBoxButton = document.querySelector("#gift-box-button");
const giftNote = document.querySelector("#gift-note");
const signalStage = document.querySelector("#signal-stage");
const signalButton = document.querySelector("#signal-button");
const flowerRainButton = document.querySelector("#flower-rain-button");
const promiseLockButtons = document.querySelectorAll(".promise-lock-grid button");
const promiseLockNote = document.querySelector("#promise-lock-note");
const bookstoreShelfButtons = document.querySelectorAll(".bookstore-shelves button");
const bookstoreDateNote = document.querySelector("#bookstore-date-note");
const dreamJarButtons = document.querySelectorAll(".dream-jar-grid button");
const dreamJarNote = document.querySelector("#dream-jar-note");
const badgeButtons = document.querySelectorAll(".badge-board button");
const badgeNote = document.querySelector("#badge-note");
const boardingButton = document.querySelector("#boarding-button");
const gateStatus = document.querySelector("#gate-status");
const loveLibraryBooks = document.querySelectorAll(".love-library-shelf button");
const loveLibraryNote = document.querySelector("#love-library-note");
const constellationButtons = document.querySelectorAll(".constellation");
const auroraNote = document.querySelector("#aurora-note");
const magicMirrorButton = document.querySelector("#magic-mirror-button");
const mirrorCompliment = document.querySelector("#mirror-compliment");
const fireflyButtons = document.querySelectorAll(".firefly");
const fireflyNote = document.querySelector("#firefly-note");
const coinButtons = document.querySelectorAll(".coin-buttons button");
const coinBank = document.querySelector("#coin-bank");
const fountainNote = document.querySelector("#fountain-note");
const shootingLetterButton = document.querySelector("#shooting-letter-button");
const shootingLetterSky = document.querySelector("#shooting-letter-sky");
const shootingLetterText = document.querySelector("#shooting-letter-text");
const gemButtons = document.querySelectorAll(".gem-buttons button");
const royalCrown = document.querySelector("#royal-crown");
const crownCeremonyNote = document.querySelector("#crown-ceremony-note");
const moonMailboxButtons = document.querySelectorAll(".moon-mailbox button");
const moonMailboxNote = document.querySelector("#moon-mailbox-note");
const promisePathButtons = document.querySelectorAll(".promise-path button");
const promisePathNote = document.querySelector("#promise-path-note");
const memoryGlobeButton = document.querySelector("#memory-globe-button");
const memoryGlobeNote = document.querySelector("#memory-globe-note");
const bookPageButtons = document.querySelectorAll(".book-page");
const flipLetterNote = document.querySelector("#flip-letter-note");
const polaroidButtons = document.querySelectorAll(".polaroid-string button");
const polaroidNote = document.querySelector("#polaroid-note");
const orbitPlanets = document.querySelectorAll(".orbit-planet");
const planetNote = document.querySelector("#planet-note");
const dreamCalendarButtons = document.querySelectorAll(".dream-calendar button");
const dreamCalendarNote = document.querySelector("#dream-calendar-note");
const blueprintPoints = document.querySelectorAll(".blueprint-point");
const blueprintNote = document.querySelector("#blueprint-note");
const comfortButton = document.querySelector("#comfort-button");
const comfortHeart = document.querySelector("#comfort-heart");
const comfortNote = document.querySelector("#comfort-note");
const loveLock = document.querySelector("#love-lock");
const loveLockForm = document.querySelector("#love-lock-form");
const lovePasscode = document.querySelector("#love-passcode");
const lockError = document.querySelector("#lock-error");
const studioToolButtons = document.querySelectorAll(".studio-tools button");
const studioDeskNote = document.querySelector("#studio-desk-note");
const bookmarkButtons = document.querySelectorAll(".bookmark-row button");
const readerNightNote = document.querySelector("#reader-night-note");
const trophyButtons = document.querySelectorAll(".trophy-wall button");
const trophyNote = document.querySelector("#trophy-note");
const rareButtons = document.querySelectorAll(".rare-museum button");
const rareNote = document.querySelector("#rare-note");
const buildButtons = document.querySelectorAll(".build-blocks button");
const futureBuildStage = document.querySelector("#future-build-stage");
const futureBuildNote = document.querySelector("#future-build-note");
const weatherButton = document.querySelector("#weather-button");
const weatherReport = document.querySelector("#weather-report");
const weatherTemp = document.querySelector("#weather-temp");
const passportButtons = document.querySelectorAll(".passport-book button");
const passportNote = document.querySelector("#passport-note");
const capsuleButtons = document.querySelectorAll(".time-capsule button");
const capsuleNote = document.querySelector("#capsule-note");
const careMenuButtons = document.querySelectorAll(".care-menu button");
const careOrderNote = document.querySelector("#care-order-note");
const loveMapPins = document.querySelectorAll(".love-map-pin");
const ninetyMapNote = document.querySelector("#ninety-map-note");
const proposalButton = document.querySelector("#proposal-button");
const proposalNote = document.querySelector("#proposal-note");
const ringBoxButton = document.querySelector("#ring-box-button");
const ringNote = document.querySelector("#ring-note");
const vowButtons = document.querySelectorAll(".vow-garden button");
const vowNote = document.querySelector("#vow-note");
const nestButtons = document.querySelectorAll(".forever-nest button");
const nestNote = document.querySelector("#nest-note");
const oldUsButton = document.querySelector("#old-us-button");
const oldUsNote = document.querySelector("#old-us-note");
const cityButtons = document.querySelectorAll(".dream-city button");
const cityNote = document.querySelector("#city-note");
const morningButtons = document.querySelectorAll("#morning-routine .routine-grid button");
const morningNote = document.querySelector("#morning-note");
const nightButtons = document.querySelectorAll("#night-routine .routine-grid button");
const nightNote = document.querySelector("#night-note");
const reasonBurstButton = document.querySelector("#reason-burst-button");
const reasonCloud = document.querySelector("#reason-cloud");
const hundredFireworksButton = document.querySelector("#hundred-fireworks-button");

const selected = new Map();
let selectedWrap = "blush";
let activeFlower;
let messageIndex = 0;
const audio = new Audio();
audio.loop = true;
const soundtrack = {
  navigation: {
    src: "assets/audio/navigation-love-story.mp3",
    label: "Golden Brown x Love Story",
  },
  flowers: {
    src: "assets/audio/flower-selection.mp3",
    label: "Choral Chambers",
  },
  cake: {
    src: "assets/audio/cake-wish-about-you.mp3",
    label: "About You",
  },
};
let currentTrack = "";
let soundtrackEnabled = false;
let customSongUrl = "";
let customSongActive = false;
let complimentIndex = 0;
let jarIndex = 0;
const compliments = [
  "You are my sweet, gorgeous, burgundy princess.",
  "You are cute in a way that makes the whole day softer.",
  "You are pretty, hot, amazing, and still somehow even sweeter than that.",
  "You are everything Mihruu wants in a girl.",
  "You are my queen, my highness, my good girl, my Salvuu.",
  "You make long distance feel worth fighting for.",
];
const jarNotes = [
  "Mihruu is proud of you today.",
  "Salvuu deserves softness, care, and flowers.",
  "February 13 is one of my favorite dates because it means us.",
  "Whatever we do, we do it together.",
  "One day this screen becomes your hand in mine.",
  "You are loved in every timezone.",
];
const tapDoodles = ["love", "buu buu", "queen", "forever", "mihruu + salvuu", "xoxo", "tulips", "my everything"];
const wheelResults = ["compliment: you are gorgeous", "hug: delivered tightly", "flower: jasmine for Salvuu", "future date: cafe and flowers", "kiss: sent from Mihruu", "nickname: potato princess"];
const giftNotes = [
  "Gift opened: one forehead kiss saved for Salvuu.",
  "Gift opened: one spicy food date with water nearby.",
  "Gift opened: one sweet dessert date for my princess.",
  "Gift opened: one long call where Mihruu listens to everything.",
  "Gift opened: one forever promise, no expiry date.",
];
const mirrorCompliments = [
  "The mirror says: Salvuu is gorgeous.",
  "The mirror says: my queen is glowing.",
  "The mirror says: reader girl, artist girl, perfect girl.",
  "The mirror says: Mihruu is very obviously obsessed.",
  "The mirror says: pretty, cute, hot, sweet, amazing.",
  "The mirror says: all or nothing with you."
];
const globeNotes = [
  "Snow globe memory: flowers swirling around our future hug.",
  "Snow globe memory: Feb 13 glowing inside the glass.",
  "Snow globe memory: Salvuu reading while Mihruu looks at her fondly.",
  "Snow globe memory: her architecture dreams becoming real buildings.",
  "Snow globe memory: resting on Mihruu's chest, warm and safe."
];
const weatherReports = [
  ["100%", "chance of Mihruu missing Salvuu with heavy flowers later."],
  ["28°C", "warm fuzzy weather because Salvuu exists."],
  ["4 yrs", "of choosing each other, with forever pressure rising."],
  ["May 28", "birthday sunshine with burgundy sparkles."],
  ["∞", "soft care, chest naps, books, art, and flowers ahead."]
];
const oldUsNotes = [
  "Old us: same nicknames, slower mornings, still laughing.",
  "Old us: Salvuu reading, Mihruu pretending not to stare.",
  "Old us: flowers in the kitchen and your hand in mine.",
  "Old us: still all or nothing, still my queen."
];
const finalReasons = [
  "beautiful", "pretty", "gorgeous", "kind", "hardworking", "rare soul",
  "warm presence", "artist", "future architect", "reader girl", "my queen",
  "my good girl", "everything I need", "soft heart", "forever girl"
];
let wheelIndex = 0;
let giftIndex = 0;
let paintColor = "#7b1736";
let painting = false;
let mirrorIndex = 0;
let globeIndex = 0;
let weatherIndex = 0;
let oldUsIndex = 0;
const decrees = [
  "By order of Mihruu: Salvuu must be spoiled today.",
  "Royal decree: the queen deserves flowers, cake, and zero sadness.",
  "Royal decree: Mihruu owes Salvuu unlimited care and soft words.",
  "Royal decree: potato princess must be reminded she is gorgeous.",
  "Royal decree: all roads lead to Mihruu and Salvuu together.",
];
const girlReasons = [
  "Your heart makes love feel safe.",
  "Your smile makes distance feel smaller.",
  "Your softness is my favorite kind of peace, and you are so damn beautiful, pretty, gorgeous, and everything I need in a girl.",
  "Your beauty still catches me every time.",
  "Your loyalty makes me want to choose you forever.",
  "The way you are you is everything I wanted.",
];

function setupLoveLock() {
  if (!loveLock) return;
  const saved = window.localStorage.getItem("salvuuBirthdayUnlocked") === "yes";
  if (saved) {
    loveLock.classList.add("is-unlocked");
    document.body.classList.remove("is-locked");
    return;
  }
  document.body.classList.add("is-locked");
  window.setTimeout(() => lovePasscode?.focus(), 250);
}

function setupImageFallbacks() {
  document.querySelectorAll(".future-photo img, .polaroid-string img, .memory-photo img, .photo-card img").forEach((image) => {
    image.addEventListener("error", () => {
      image.hidden = true;
      image.closest("figure, .photo-card")?.classList.add("image-missing");
    }, { once: true });
  });
}

function unlockLoveSite(event) {
  event.preventDefault();
  const value = lovePasscode.value.trim().toUpperCase();
  if (value === "MIHRUSALVU") {
    window.localStorage.setItem("salvuuBirthdayUnlocked", "yes");
    loveLock.classList.add("is-unlocked");
    document.body.classList.remove("is-locked");
    launchWindowConfetti();
  } else {
    lockError.textContent = "Tiny key did not fit. Try Mihruu + Salvu together.";
    loveLock.classList.remove("is-wrong");
    window.setTimeout(() => loveLock.classList.add("is-wrong"), 20);
  }
}
let decreeIndex = 0;
let girlIndex = 0;
let holdProgress = 0;
let holdTimer;

function flowerSvg(flower) {
  const petal = flower.color;
  const accent = flower.accent;
  const center = flower.center;

  const svgs = {
    rose: `
      <svg class="illustrated-flower" viewBox="0 0 120 120" aria-hidden="true">
        <path class="inked" d="M60 13 C78 25 100 27 104 48 C108 72 88 91 60 106 C32 91 12 72 16 48 C20 27 42 25 60 13 Z" fill="${petal}"/>
        <path class="inked" d="M60 29 C74 26 87 37 84 51 C82 65 68 68 60 60 C52 68 38 65 36 51 C33 37 46 26 60 29 Z" fill="${accent}" opacity=".78"/>
        <path class="fine" d="M43 50 C50 42 68 38 78 50 M47 70 C57 79 73 75 82 64"/>
        <path class="inked" d="M60 44 C70 42 75 53 67 60 C59 68 47 62 51 51 C53 47 56 45 60 44 Z" fill="${center}"/>
      </svg>`,
    tulip: `
      <svg class="illustrated-flower" viewBox="0 0 120 120" aria-hidden="true">
        <path class="inked" d="M24 25 C40 38 49 23 60 12 C71 23 80 38 96 25 C95 69 82 96 60 102 C38 96 25 69 24 25 Z" fill="${petal}"/>
        <path class="inked" d="M41 31 C50 42 55 56 60 82 C65 56 70 42 79 31 C83 57 77 82 60 96 C43 82 37 57 41 31 Z" fill="${accent}" opacity=".72"/>
        <path class="fine" d="M38 43 C45 60 50 78 60 96 M82 43 C75 60 70 78 60 96"/>
      </svg>`,
    daisy: `
      <svg class="illustrated-flower" viewBox="0 0 120 120" aria-hidden="true">
        <g fill="${accent}">
          <ellipse class="inked" cx="60" cy="24" rx="13" ry="25"/>
          <ellipse class="inked" cx="60" cy="96" rx="13" ry="25"/>
          <ellipse class="inked" cx="24" cy="60" rx="25" ry="13"/>
          <ellipse class="inked" cx="96" cy="60" rx="25" ry="13"/>
          <ellipse class="inked" cx="35" cy="35" rx="13" ry="25" transform="rotate(-45 35 35)"/>
          <ellipse class="inked" cx="85" cy="35" rx="13" ry="25" transform="rotate(45 85 35)"/>
          <ellipse class="inked" cx="35" cy="85" rx="13" ry="25" transform="rotate(45 35 85)"/>
          <ellipse class="inked" cx="85" cy="85" rx="13" ry="25" transform="rotate(-45 85 85)"/>
        </g>
        <circle class="inked" cx="60" cy="60" r="20" fill="${center}"/>
        <path class="fine" d="M52 58 C56 62 65 62 69 57"/>
      </svg>`,
    lily: `
      <svg class="illustrated-flower" viewBox="0 0 120 120" aria-hidden="true">
        <g fill="${petal}">
          <path class="inked" d="M60 12 C73 37 72 55 60 74 C48 55 47 37 60 12 Z"/>
          <path class="inked" d="M23 37 C51 40 63 50 67 72 C42 68 28 57 23 37 Z"/>
          <path class="inked" d="M97 37 C69 40 57 50 53 72 C78 68 92 57 97 37 Z"/>
          <path class="inked" d="M37 101 C41 75 50 63 68 57 C72 84 61 98 37 101 Z"/>
          <path class="inked" d="M83 101 C79 75 70 63 52 57 C48 84 59 98 83 101 Z"/>
        </g>
        <circle class="inked" cx="60" cy="65" r="7" fill="${center}"/>
        <path d="M60 65 L48 42 M60 65 L72 42 M60 65 L60 38" stroke="${accent}" stroke-width="3" stroke-linecap="round"/>
      </svg>`,
    peony: `
      <svg class="illustrated-flower" viewBox="0 0 120 120" aria-hidden="true">
        <g fill="${petal}">
          <circle class="inked" cx="60" cy="28" r="24"/>
          <circle class="inked" cx="32" cy="50" r="24"/>
          <circle class="inked" cx="88" cy="50" r="24"/>
          <circle class="inked" cx="43" cy="84" r="24"/>
          <circle class="inked" cx="77" cy="84" r="24"/>
        </g>
        <g fill="${accent}" opacity=".72">
          <circle class="inked" cx="50" cy="52" r="20"/>
          <circle class="inked" cx="70" cy="52" r="20"/>
          <circle class="inked" cx="60" cy="72" r="20"/>
        </g>
        <circle class="inked" cx="60" cy="62" r="14" fill="${center}"/>
      </svg>`,
    sunflower: `
      <svg class="illustrated-flower" viewBox="0 0 120 120" aria-hidden="true">
        <g fill="${accent}">
          <path class="inked" d="M60 4 L72 36 L60 50 L48 36 Z"/>
          <path class="inked" d="M60 116 L72 84 L60 70 L48 84 Z"/>
          <path class="inked" d="M4 60 L36 48 L50 60 L36 72 Z"/>
          <path class="inked" d="M116 60 L84 48 L70 60 L84 72 Z"/>
          <path class="inked" d="M21 21 L52 35 L55 55 L35 52 Z"/>
          <path class="inked" d="M99 21 L85 52 L65 55 L68 35 Z"/>
          <path class="inked" d="M21 99 L35 68 L55 65 L52 85 Z"/>
          <path class="inked" d="M99 99 L68 85 L65 65 L85 68 Z"/>
        </g>
        <circle class="inked" cx="60" cy="60" r="27" fill="${center}"/>
        <circle cx="51" cy="54" r="3" fill="#5f351e"/>
        <circle cx="66" cy="52" r="3" fill="#5f351e"/>
        <circle cx="59" cy="67" r="3" fill="#5f351e"/>
      </svg>`,
    lavender: `
      <svg class="illustrated-flower" viewBox="0 0 120 120" aria-hidden="true">
        <path class="inked" d="M60 106 C58 75 58 44 62 14" fill="none" stroke="#5f9b75" stroke-width="5" stroke-linecap="round"/>
        <g fill="${petal}">
          <ellipse class="inked" cx="53" cy="32" rx="12" ry="8" transform="rotate(-32 53 32)"/>
          <ellipse class="inked" cx="70" cy="42" rx="12" ry="8" transform="rotate(30 70 42)"/>
          <ellipse class="inked" cx="50" cy="54" rx="12" ry="8" transform="rotate(-32 50 54)"/>
          <ellipse class="inked" cx="69" cy="66" rx="12" ry="8" transform="rotate(30 69 66)"/>
          <ellipse class="inked" cx="48" cy="78" rx="12" ry="8" transform="rotate(-32 48 78)"/>
        </g>
      </svg>`,
    jasmine: `
      <svg class="illustrated-flower" viewBox="0 0 120 120" aria-hidden="true">
        <g fill="${petal}">
          <path class="inked" d="M60 17 C72 31 70 48 60 58 C50 48 48 31 60 17 Z"/>
          <path class="inked" d="M101 48 C96 65 80 72 64 63 C69 46 84 39 101 48 Z"/>
          <path class="inked" d="M84 100 C67 106 54 94 60 75 C78 72 91 84 84 100 Z"/>
          <path class="inked" d="M36 100 C29 84 42 72 60 75 C66 94 53 106 36 100 Z"/>
          <path class="inked" d="M19 48 C36 39 51 46 56 63 C40 72 24 65 19 48 Z"/>
        </g>
        <circle class="inked" cx="60" cy="64" r="12" fill="${center}"/>
        <circle cx="54" cy="60" r="3" fill="${accent}"/>
        <circle cx="66" cy="60" r="3" fill="${accent}"/>
        <circle cx="60" cy="70" r="3" fill="${accent}"/>
        <path class="fine" d="M60 64 C56 57 56 49 60 42 M60 64 C69 59 75 54 80 47 M60 64 C51 59 45 54 40 47"/>
      </svg>`,
    blossom: `
      <svg class="illustrated-flower" viewBox="0 0 120 120" aria-hidden="true">
        <g fill="${petal}">
          <path class="inked" d="M60 18 C76 28 76 48 60 58 C44 48 44 28 60 18 Z"/>
          <path class="inked" d="M100 48 C96 67 78 73 63 62 C67 44 84 38 100 48 Z"/>
          <path class="inked" d="M84 101 C66 107 53 92 60 74 C79 72 91 84 84 101 Z"/>
          <path class="inked" d="M36 101 C29 84 41 72 60 74 C67 92 54 107 36 101 Z"/>
          <path class="inked" d="M20 48 C36 38 53 44 57 62 C42 73 24 67 20 48 Z"/>
        </g>
        <circle class="inked" cx="60" cy="64" r="12" fill="${center}"/>
        <path class="fine" d="M60 64 L54 56 M60 64 L68 57 M60 64 L60 75"/>
      </svg>`,
  };

  return svgs[flower.shape];
}

function flowerArt(flower) {
  return `
    <span class="flower-stem" aria-hidden="true"></span>
    ${flowerImage(flower)}
  `;
}

function flowerImage(flower) {
  return `<img class="noto-flower" src="${flower.asset}" alt="" loading="lazy" decoding="async" />`;
}

function renderFlowers() {
  grid.innerHTML = flowers
    .map(
      (flower) => `
        <button class="flower-option ${flower.favorite ? "favorite-flower" : ""}" type="button" aria-pressed="false" data-flower="${flower.name}">
          <span class="flower-icon">${flowerImage(flower)}</span>
          ${flower.favorite ? `<span class="favorite-tag">Her favorite</span>` : ""}
          <h3>${flower.name}</h3>
          <p>${flower.note}</p>
        </button>
      `,
    )
    .join("");
}

function makeFlowerElement(flower, index, total = 6) {
  const bloom = document.createElement("div");
  const layouts = {
    1: [[50, 10, 0, 1.03, 5]],
    2: [[42, 12, -10, 1, 5], [58, 12, 10, 1, 5]],
    3: [[50, 2, 0, 1.06, 6], [35, 17, -15, 0.96, 5], [65, 17, 15, 0.96, 5]],
    4: [[47, 2, -3, 1.05, 7], [57, 6, 8, 1.02, 6], [34, 20, -17, 0.94, 5], [69, 20, 17, 0.94, 5]],
    5: [[50, 0, 0, 1.08, 8], [38, 9, -11, 1.02, 7], [62, 9, 11, 1.02, 7], [29, 23, -20, 0.92, 5], [72, 23, 20, 0.92, 5]],
    6: [[50, 0, 0, 1.08, 8], [39, 8, -10, 1.02, 7], [61, 8, 10, 1.02, 7], [30, 22, -20, 0.93, 5], [70, 22, 20, 0.93, 5], [50, 25, 0, 0.9, 6]],
    7: [[50, 0, 0, 1.08, 8], [39, 7, -10, 1.03, 7], [61, 7, 10, 1.03, 7], [29, 21, -21, 0.93, 5], [71, 21, 21, 0.93, 5], [42, 25, -7, 0.9, 6], [58, 25, 7, 0.9, 6]],
    8: [[50, 0, 0, 1.08, 8], [40, 7, -9, 1.03, 7], [60, 7, 9, 1.03, 7], [30, 20, -20, 0.93, 5], [70, 20, 20, 0.93, 5], [23, 30, -26, 0.86, 4], [77, 30, 26, 0.86, 4], [50, 26, 0, 0.9, 6]],
  };
  const positions = layouts[Math.min(Math.max(total, 1), 8)] || layouts[6];
  const [left, top, tilt, scale, layer] = positions[index % positions.length];

  bloom.className = `bouquet-flower bouquet-flower-${flower.shape}`;
  bloom.style.left = `${left}%`;
  bloom.style.top = `${top}%`;
  bloom.style.setProperty("--tilt", `${tilt}deg`);
  bloom.style.setProperty("--flower-scale", scale);
  bloom.style.zIndex = layer;
  bloom.style.animationDelay = `${index * 45}ms`;
  bloom.innerHTML = flowerArt(flower);
  return bloom;
}

function renderHeroBouquet() {
  heroBouquet.innerHTML = "";
  const heroFlowers = ["Roses", "Tulips", "Jasmine", "Roses", "Tulips"]
    .map((name) => flowers.find((flower) => flower.name === name))
    .filter(Boolean);
  heroFlowers.forEach((flower, index) => {
    heroBouquet.appendChild(makeFlowerElement(flower, index, heroFlowers.length));
  });
}

function updateBouquet() {
  stage.innerHTML = "";
  stage.classList.remove("wrap-blush", "wrap-sky", "wrap-cream", "wrap-lavender");
  stage.classList.add(`wrap-${selectedWrap}`);
  bouquetMessage.classList.remove("is-opened");
  [...selected.values()].forEach((flower, index) => {
    stage.appendChild(makeFlowerElement(flower, index, selected.size));
  });
  stage.appendChild(makeBouquetWrap());
  selectionCount.textContent = `${selected.size} ${selected.size === 1 ? "flower" : "flowers"} picked`;
  pickedList.innerHTML = [...selected.keys()]
    .map((name) => `<span class="picked-chip">${name}</span>`)
    .join("");

  if (selected.size === 0) {
    bouquetNote.textContent = "Tap any flower above and I'll build your bouquet here.";
    pickedList.innerHTML = `<span class="picked-chip">Waiting for her choices</span>`;
    wrapChooser.hidden = true;
    bouquetMessage.textContent = "Choose flowers and I will turn them into a little long-distance bouquet message.";
    return;
  }

  const names = [...selected.keys()];
  wrapChooser.hidden = false;
  bouquetNote.textContent = `You chose ${names.join(", ")}. Now pick the wrapping style for her bouquet.`;
  bouquetMessage.textContent = `Wrapped in ${wrapLabel(selectedWrap)}, this bouquet carries ${names.join(", ")} across the distance to salvaachi.`;
}

function makeBouquetWrap() {
  const wrap = document.createElement("div");
  wrap.className = `bouquet-wrap leaf-wrap wrap-style-${selectedWrap}`;
  wrap.innerHTML = `
    <span class="leaf-fan leaf-fan-back"></span>
    <span class="leaf-fan leaf-fan-left"></span>
    <span class="leaf-fan leaf-fan-right"></span>
    <span class="leaf-fan leaf-fan-front"></span>
    <span class="leaf-band"></span>
    <span class="wrap-style-glow"></span>
    <img class="wrap-ribbon-asset" src="assets/icons/ribbon.svg" alt="" loading="lazy" />
  `;
  return wrap;
}

function wrapLabel(wrap) {
  const labels = {
    blush: "a blush cone wrap",
    sky: "a clear sky glass sleeve",
    cream: "a cream kraft wrap",
    lavender: "soft lavender folded paper",
  };
  return labels[wrap] || labels.blush;
}

function chooseWrap(button) {
  selectedWrap = button.dataset.wrap;
  wrapOptions.forEach((option) => option.classList.toggle("is-selected", option === button));
  updateBouquet();
}

function chooseFlower(button) {
  const flower = flowers.find((item) => item.name === button.dataset.flower);
  if (!flower) return;

  if (selected.has(flower.name)) {
    selected.delete(flower.name);
    button.setAttribute("aria-pressed", "false");
  } else {
    selected.set(flower.name, flower);
    button.setAttribute("aria-pressed", "true");
  }

  updateBouquet();
  updateDrawerButton();
}

function toggleFlower(flower) {
  const button = grid.querySelector(`[data-flower="${flower.name}"]`);
  if (button) chooseFlower(button);
}

function openDrawer(flower) {
  activeFlower = flower;
  drawerArt.innerHTML = "";
  drawerArt.appendChild(makeFlowerElement(flower, 0));
  drawerTitle.textContent = flower.name;
  drawerCopy.textContent = flower.meaning;
  drawer.classList.add("is-open");
  drawerBackdrop.classList.add("is-open");
  drawer.setAttribute("aria-hidden", "false");
  updateDrawerButton();
}

function closeDrawer() {
  drawer.classList.remove("is-open");
  drawerBackdrop.classList.remove("is-open");
  drawer.setAttribute("aria-hidden", "true");
}

function updateDrawerButton() {
  if (!activeFlower) return;
  drawerToggle.textContent = selected.has(activeFlower.name)
    ? "Remove from bouquet"
    : "Add to bouquet";
}

function resetBouquet() {
  selected.clear();
  selectedWrap = "blush";
  grid.querySelectorAll(".flower-option").forEach((button) => {
    button.setAttribute("aria-pressed", "false");
  });
  wrapOptions.forEach((option) => {
    option.classList.toggle("is-selected", option.dataset.wrap === selectedWrap);
  });
  updateBouquet();
  updateDrawerButton();
}

function makeWish() {
  playSoundtrack("cake", { restart: true });
  cakeCard.classList.remove("wish-made");
  cakeCard.classList.add("candles-out");
  wishNote.textContent = "Wish made. The cake says it loves you too.";
  blowCandles.querySelector("span:last-child").textContent = "Wish made";
  blowCandles.disabled = true;
  launchWindowConfetti();

  window.setTimeout(() => {
    cakeCard.classList.add("wish-made");
  }, 80);
}

function launchWindowConfetti() {
  const colors = ["#f35f8e", "#ffb889", "#fff4a8", "#bde8f2", "#c9b7ff", "#5f9b75"];
  windowConfetti.innerHTML = "";

  for (let index = 0; index < 180; index += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    if (index % 5 === 0) piece.classList.add("heart-piece");
    if (index % 7 === 0) piece.classList.add("flower-piece");
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.setProperty("--confetti-color", colors[index % colors.length]);
    piece.style.setProperty("--drift", `${Math.random() * 360 - 180}px`);
    piece.style.setProperty("--spin", `${Math.random() * 760 - 380}deg`);
    piece.style.setProperty("--fall-time", `${2.2 + Math.random() * 1.7}s`);
    piece.style.animationDelay = `${Math.random() * 0.35}s`;
    windowConfetti.appendChild(piece);
  }

  window.setTimeout(() => {
    windowConfetti.innerHTML = "";
  }, 4600);
}

function chooseTinyWish(card) {
  wishCards.forEach((item) => item.classList.remove("is-picked"));
  card.classList.add("is-picked");
  wishResult.textContent = `${card.textContent.trim()} is officially saved as a birthday promise.`;
}

function chooseCoupon(card) {
  couponCards.forEach((item) => item.classList.remove("is-picked"));
  card.classList.add("is-picked");
  couponResult.textContent = `${card.textContent.trim()} has been claimed. No expiry date.`;
}

function chooseDatePlan(card) {
  datePlanCards.forEach((item) => item.classList.remove("is-picked"));
  card.classList.add("is-picked");
  datePlanResult.textContent = `${card.textContent.trim()} is now our long-distance birthday date.`;
}

function openWhen(card) {
  openWhenCards.forEach((item) => item.classList.remove("is-open"));
  card.classList.add("is-open");
  openWhenResult.textContent = card.dataset.message;
}

function unlockSecretLetter() {
  secretLetterPaper.hidden = false;
  secretLetterBtn.textContent = "Letter unlocked for Salvuu";
  secretLetterBtn.disabled = true;
  secretLetterPaper.scrollIntoView({ behavior: "smooth", block: "center" });
}

function chooseDateDream(card) {
  dateDreamCards.forEach((item) => item.classList.remove("is-picked"));
  card.classList.add("is-picked");
  dateDreamResult.textContent = card.dataset.date;
}

function showCompliment() {
  complimentIndex = (complimentIndex + 1) % compliments.length;
  complimentOutput.textContent = compliments[complimentIndex];
  complimentOutput.classList.remove("is-popping");
  window.setTimeout(() => complimentOutput.classList.add("is-popping"), 20);
}

function pullLoveNote() {
  loveJarNote.textContent = jarNotes[jarIndex % jarNotes.length];
  jarIndex += 1;
  loveJarButton.classList.remove("is-shaking");
  loveJarNote.classList.remove("is-popping");
  window.setTimeout(() => {
    loveJarButton.classList.add("is-shaking");
    loveJarNote.classList.add("is-popping");
  }, 20);
}

function addTapDoodle(event) {
  const rect = tapDoodleBoard.getBoundingClientRect();
  const doodle = document.createElement("span");
  doodle.className = "tap-doodle";
  doodle.textContent = tapDoodles[Math.floor(Math.random() * tapDoodles.length)];
  doodle.style.left = `${event.clientX - rect.left}px`;
  doodle.style.top = `${event.clientY - rect.top}px`;
  doodle.style.setProperty("--doodle-tilt", `${Math.random() * 28 - 14}deg`);
  tapDoodleBoard.appendChild(doodle);
  window.setTimeout(() => doodle.remove(), 3600);
}

function nextDecree() {
  decreeIndex = (decreeIndex + 1) % decrees.length;
  decreeOutput.textContent = decrees[decreeIndex];
  decreeOutput.classList.remove("is-popping");
  window.setTimeout(() => decreeOutput.classList.add("is-popping"), 20);
}

function setPickedButton(buttons, picked) {
  buttons.forEach((button) => button.classList.toggle("is-picked", button === picked));
}

function startHoldHug() {
  holdProgress = 0;
  holdHugNote.textContent = "Hold... Mihruu hug charging.";
  window.clearInterval(holdTimer);
  holdTimer = window.setInterval(() => {
    holdProgress = Math.min(100, holdProgress + 4);
    holdHugFill.style.width = `${holdProgress}%`;
    if (holdProgress >= 100) {
      endHoldHug(true);
    }
  }, 50);
}

function endHoldHug(completed = false) {
  window.clearInterval(holdTimer);
  if (completed || holdProgress >= 100) {
    holdHugFill.style.width = "100%";
    holdHugNote.textContent = "Mihruu hug delivered. Salvuu is fully wrapped in love.";
    launchWindowConfetti();
  } else {
    holdHugNote.textContent = "Tiny hug sent. Hold longer for the big one.";
  }
}

function changeGirlReason(direction) {
  girlIndex = (girlIndex + direction + girlReasons.length) % girlReasons.length;
  girlReason.textContent = girlReasons[girlIndex];
  girlReason.classList.remove("is-popping");
  window.setTimeout(() => girlReason.classList.add("is-popping"), 20);
}

function signContract() {
  const boxes = document.querySelectorAll(".contract-card input");
  boxes.forEach((box) => {
    box.checked = true;
  });
  contractResult.textContent = "Signed with love: Mihruu and Salvuu choose each other.";
  launchWindowConfetti();
}

function launchLoveFireworks() {
  const colors = ["#7b1736", "#d93d71", "#ff8dac", "#fff4a8", "#c9b7ff", "#bde8f2"];
  windowConfetti.innerHTML = "";
  windowConfetti.classList.add("is-fireworks");
  for (let burst = 0; burst < 12; burst += 1) {
    const originX = 10 + Math.random() * 80;
    const originY = 10 + Math.random() * 55;
    const burstColor = colors[burst % colors.length];
    const core = document.createElement("span");
    const ring = document.createElement("span");
    const trail = document.createElement("span");
    core.className = "firework-core";
    ring.className = "firework-ring";
    trail.className = "firework-trail";
    [core, ring, trail].forEach((element) => {
      element.style.left = `${originX}%`;
      element.style.top = `${originY}%`;
      element.style.setProperty("--confetti-color", burstColor);
      element.style.animationDelay = `${burst * 0.16}s`;
      windowConfetti.appendChild(element);
    });
    for (let index = 0; index < 48; index += 1) {
      const piece = document.createElement("span");
      piece.className = "confetti-piece firework-piece glow-spark";
      if (index % 9 === 0) piece.classList.add("heart-piece");
      if (index % 7 === 0) piece.classList.add("flower-piece");
      piece.style.left = `${originX}%`;
      piece.style.top = `${originY}%`;
      piece.style.setProperty("--confetti-color", colors[(index + burst) % colors.length]);
      const angle = (Math.PI * 2 * index) / 48;
      const distance = 95 + Math.random() * 220;
      piece.style.setProperty("--drift", `${Math.cos(angle) * distance}px`);
      piece.style.setProperty("--rise", `${Math.sin(angle) * distance}px`);
      piece.style.setProperty("--spin", `${Math.random() * 900 - 450}deg`);
      piece.style.animationDelay = `${burst * 0.16 + Math.random() * 0.08}s`;
      windowConfetti.appendChild(piece);
    }
  }
  fireworksMessage.textContent = "Happy birthday my salvaachi. Mihruu loves you forever.";
  window.setTimeout(() => {
    windowConfetti.innerHTML = "";
    windowConfetti.classList.remove("is-fireworks");
  }, 7600);
}

function sendKiss() {
  const kiss = document.createElement("span");
  kiss.className = "flying-kiss";
  kiss.textContent = "kiss";
  kissLane.appendChild(kiss);
  window.setTimeout(() => kiss.remove(), 1800);
}

function spinLoveWheel() {
  wheelIndex = (wheelIndex + 1) % wheelResults.length;
  loveWheelButton.style.setProperty("--wheel-spin", `${720 + wheelIndex * 54}deg`);
  loveWheelResult.textContent = wheelResults[wheelIndex];
}

function addCakeTopping(type) {
  const charmLayer = miniCakeStage.querySelector(".smile-card-charms");
  if (charmLayer) {
    const notes = {
      proud: ["Proud of you", "I see how hard you try", "my good girl"],
      voice: ["I love your voice", "soft call saved", "say Mihruu again"],
      flower: ["tulips + roses", "jasmine kiss", "burgundy ribbon"],
      queen: ["my queen", "my highness", "potato princess"],
      forever: ["all or nothing", "grow old with me", "together always"]
    };
    const icons = {
      proud: "star",
      voice: "song",
      flower: "flower",
      queen: "crown",
      forever: "promise"
    };
    const charm = document.createElement("span");
    const choices = notes[type] || notes.forever;
    charm.className = `smile-charm ${type}`;
    charm.textContent = `${icons[type] || "heart"} - ${choices[Math.floor(Math.random() * choices.length)]}`;
    charmLayer.appendChild(charm);
    if (charmLayer.children.length > 8) {
      charmLayer.firstElementChild.remove();
    }
    return;
  }

  const topping = document.createElement("span");
  topping.className = `cake-topper ${type}`;
  topping.textContent = type === "candle" ? "" : type;
  topping.style.left = `${20 + Math.random() * 60}%`;
  topping.style.top = `${18 + Math.random() * 38}%`;
  miniCakeStage.appendChild(topping);
}

function setupPaintCanvas() {
  if (!paintCanvas) return;
  const ctx = paintCanvas.getContext("2d");
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.lineWidth = 8;

  function point(event) {
    const rect = paintCanvas.getBoundingClientRect();
    return {
      x: ((event.clientX - rect.left) / rect.width) * paintCanvas.width,
      y: ((event.clientY - rect.top) / rect.height) * paintCanvas.height,
    };
  }

  paintCanvas.addEventListener("pointerdown", (event) => {
    painting = true;
    const p = point(event);
    ctx.beginPath();
    ctx.moveTo(p.x, p.y);
  });
  paintCanvas.addEventListener("pointermove", (event) => {
    if (!painting) return;
    const p = point(event);
    ctx.strokeStyle = paintColor;
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
  });
  ["pointerup", "pointerleave", "pointercancel"].forEach((name) => {
    paintCanvas.addEventListener(name, () => {
      painting = false;
    });
  });
}

function openGiftBox() {
  giftBoxButton.classList.add("is-open");
  giftNote.textContent = giftNotes[giftIndex % giftNotes.length];
  giftIndex += 1;
  window.setTimeout(() => giftBoxButton.classList.remove("is-open"), 1200);
}

function sendSignal() {
  const heart = document.createElement("span");
  heart.className = "signal-heart";
  heart.style.top = `${34 + Math.random() * 34}%`;
  heart.style.setProperty("--signal-travel", `${Math.max(signalStage.clientWidth - 190, 160)}px`);
  signalStage.appendChild(heart);
  window.setTimeout(() => heart.remove(), 1800);
}

function startFlowerRainLegacy() {
  const flowersToRain = ["🌷", "🌹", "✿", "jasmine"];
  for (let index = 0; index < 70; index += 1) {
    const petal = document.createElement("span");
    petal.className = "confetti-piece flower-rain-piece";
    petal.textContent = flowersToRain[index % flowersToRain.length];
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.setProperty("--drift", `${Math.random() * 220 - 110}px`);
    petal.style.setProperty("--spin", `${Math.random() * 540 - 270}deg`);
    petal.style.setProperty("--fall-time", `${3 + Math.random() * 2}s`);
    petal.style.animationDelay = `${Math.random() * 0.7}s`;
    windowConfetti.appendChild(petal);
  }
  window.setTimeout(() => {
    windowConfetti.innerHTML = "";
  }, 5800);
}

function startFlowerRain() {
  const flowersToRain = [
    "assets/flowers/tulip.svg",
    "assets/flowers/rose.svg",
    "assets/flowers/jasmine.svg",
    "assets/flowers/peony.svg"
  ];
  for (let index = 0; index < 76; index += 1) {
    const petal = document.createElement("span");
    const flower = document.createElement("img");
    petal.className = "confetti-piece flower-rain-piece";
    flower.src = flowersToRain[index % flowersToRain.length];
    flower.alt = "";
    petal.appendChild(flower);
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.setProperty("--drift", `${Math.random() * 260 - 130}px`);
    petal.style.setProperty("--spin", `${Math.random() * 540 - 270}deg`);
    petal.style.setProperty("--fall-time", `${3.3 + Math.random() * 2.2}s`);
    petal.style.animationDelay = `${Math.random() * 0.7}s`;
    windowConfetti.appendChild(petal);
  }
  window.setTimeout(() => {
    windowConfetti.innerHTML = "";
  }, 6200);
}

function createTinyBurst(source) {
  const rect = source.getBoundingClientRect();
  for (let index = 0; index < 12; index += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece flower-piece";
    piece.style.left = `${rect.left + rect.width / 2}px`;
    piece.style.top = `${rect.top + rect.height / 2}px`;
    piece.style.setProperty("--confetti-color", ["#7b1736", "#d93d71", "#ff8dac", "#fff4a8"][index % 4]);
    piece.style.setProperty("--drift", `${Math.random() * 160 - 80}px`);
    piece.style.setProperty("--spin", `${Math.random() * 360}deg`);
    piece.style.setProperty("--fall-time", `${1.3 + Math.random() * 0.8}s`);
    windowConfetti.appendChild(piece);
  }
  window.setTimeout(() => {
    [...windowConfetti.querySelectorAll(".flower-piece")].forEach((piece) => piece.remove());
  }, 2400);
}

function askMagicMirror() {
  mirrorCompliment.textContent = mirrorCompliments[mirrorIndex % mirrorCompliments.length];
  magicMirrorButton.classList.remove("is-glowing");
  window.setTimeout(() => magicMirrorButton.classList.add("is-glowing"), 20);
  mirrorIndex += 1;
}

function tossWishCoin(button) {
  const coin = document.createElement("span");
  coin.className = "wish-coin";
  coin.style.left = `${20 + Math.random() * 60}%`;
  coinBank.appendChild(coin);
  fountainNote.textContent = button.dataset.wish;
  createTinyBurst(button);
  window.setTimeout(() => coin.remove(), 2200);
}

function sendShootingLetter() {
  const star = document.createElement("span");
  star.className = "letter-shooting-star";
  shootingLetterSky.appendChild(star);
  shootingLetterText.classList.add("is-written");
  shootingLetterText.textContent = "Happy birthday my salvaachi";
  createTinyBurst(shootingLetterButton);
  window.setTimeout(() => star.remove(), 2100);
}

function addCrownGem(button) {
  const gem = document.createElement("span");
  const placed = royalCrown.querySelectorAll(".crown-gem").length;
  gem.className = `crown-gem gem-${placed % 5}`;
  gem.textContent = "";
  royalCrown.appendChild(gem);
  crownCeremonyNote.textContent = `${button.dataset.gem} gem placed: Salvuu's crown is brighter.`;
  button.classList.add("is-picked");
}

function shakeMemoryGlobe() {
  memoryGlobeButton.classList.remove("is-shaking");
  window.setTimeout(() => memoryGlobeButton.classList.add("is-shaking"), 20);
  memoryGlobeNote.textContent = globeNotes[globeIndex % globeNotes.length];
  globeIndex += 1;
  createTinyBurst(memoryGlobeButton);
}

function startComfortHeartbeat() {
  comfortHeart.classList.toggle("is-beating");
  comfortNote.textContent = comfortHeart.classList.contains("is-beating")
    ? "Heartbeat on: Salvuu can rest here, safe and loved."
    : "Heartbeat paused, but Mihruu is still right here.";
}

function addFutureBuildBlock(button) {
  const block = document.createElement("span");
  const count = futureBuildStage.querySelectorAll(".future-built-block").length;
  block.className = `future-built-block block-${count % 5}`;
  block.textContent = button.dataset.build;
  block.style.setProperty("--i", count);
  futureBuildStage.appendChild(block);
  futureBuildNote.textContent = `${button.dataset.build} added: whatever we build, we build together.`;
  button.classList.add("is-picked");
}

function changeLoveWeather() {
  weatherIndex = (weatherIndex + 1) % weatherReports.length;
  weatherTemp.textContent = weatherReports[weatherIndex][0];
  weatherReport.textContent = weatherReports[weatherIndex][1];
}

function showOldUs() {
  oldUsNote.textContent = oldUsNotes[oldUsIndex % oldUsNotes.length];
  oldUsIndex += 1;
  createTinyBurst(oldUsButton);
}

function makeReasonsSparkle() {
  reasonCloud.innerHTML = "";
  finalReasons.forEach((reason, index) => {
    const chip = document.createElement("span");
    chip.textContent = reason;
    chip.style.setProperty("--delay", `${index * 45}ms`);
    reasonCloud.appendChild(chip);
  });
  createTinyBurst(reasonBurstButton);
}

function updateScrollMotion() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
  document.documentElement.style.setProperty("--scroll-y", progress.toFixed(4));
}

function setActiveStoryStep(id) {
  storyLinks.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
  });
  if (id === "garden") {
    playSoundtrack("flowers");
  } else if (id !== "cake") {
    playSoundtrack("navigation");
  }
}

function setupScrollReveals() {
  if (!("IntersectionObserver" in window)) {
    revealScenes.forEach((scene) => scene.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          if (entry.target.id) {
            setActiveStoryStep(entry.target.id);
          }
        }
      });
    },
    { threshold: 0.22 },
  );

  revealScenes.forEach((scene) => observer.observe(scene));
}

function showNextMessage() {
  messageIndex = (messageIndex + 1) % messages.length;
  messageCard.textContent = messages[messageIndex];
  const names = [...selected.keys()];
  if (names.length > 0) {
    bouquetMessage.textContent = `${messages[messageIndex]} This ${wrapLabel(selectedWrap)} bouquet of ${names.join(", ")} is my little delivery of love to you.`;
  } else {
    bouquetMessage.textContent = messages[messageIndex];
  }
  bouquetMessage.classList.remove("is-opened");
  window.setTimeout(() => bouquetMessage.classList.add("is-opened"), 20);
  bouquetMessage.scrollIntoView({ behavior: "smooth", block: "center" });
}

async function toggleMusic() {
  if (audio.paused) {
    soundtrackEnabled = true;
    if (!audio.src) {
      playSoundtrack(activeTrackName(), { restart: true });
    } else {
      await audio.play();
      updateMusicButton();
    }
  } else {
    soundtrackEnabled = false;
    audio.pause();
    updateMusicButton();
  }
}

function activeTrackName() {
  const activeLink = [...storyLinks].find((link) => link.classList.contains("is-active"));
  const activeId = activeLink?.getAttribute("href")?.replace("#", "");
  return activeId === "garden" ? "flowers" : "navigation";
}

function updateMusicButton() {
  musicToggle.querySelector("span:last-child").textContent = audio.paused
    ? "Play music"
    : "Pause music";
}

async function playSoundtrack(trackName, options = {}) {
  if (!soundtrackEnabled || customSongActive) return;

  const track = soundtrack[trackName] || soundtrack.navigation;
  if (!track) return;

  if (currentTrack !== trackName) {
    audio.src = track.src;
    currentTrack = trackName;
  }

  if (options.restart) {
    audio.currentTime = 0;
  }

  songName.textContent = `Now playing: ${track.label}`;

  try {
    await audio.play();
  } catch (error) {
    soundtrackEnabled = false;
    songName.textContent = "Tap Play music to start the birthday soundtrack.";
  }

  updateMusicButton();
}

function chooseSong() {
  const [file] = musicFile.files;
  if (!file) return;

  if (customSongUrl) {
    URL.revokeObjectURL(customSongUrl);
  }

  customSongUrl = URL.createObjectURL(file);
  customSongActive = true;
  soundtrackEnabled = true;
  currentTrack = "custom";
  audio.src = customSongUrl;
  songName.textContent = `Custom song: ${file.name}`;
  audio.play();
  updateMusicButton();
}

renderFlowers();
renderHeroBouquet();
updateBouquet();
setupScrollReveals();
updateScrollMotion();
setActiveStoryStep("garden");

grid.addEventListener("click", (event) => {
  const button = event.target.closest(".flower-option");
  if (!button) return;
  const flower = flowers.find((item) => item.name === button.dataset.flower);
  if (flower) openDrawer(flower);
});

surpriseBtn.addEventListener("click", showNextMessage);
resetBtn.addEventListener("click", resetBouquet);
wrapOptions.forEach((button) => {
  button.addEventListener("click", () => chooseWrap(button));
});
blowCandles.addEventListener("click", makeWish);
wishCards.forEach((card) => {
  card.addEventListener("click", () => chooseTinyWish(card));
});
couponCards.forEach((card) => {
  card.addEventListener("click", () => chooseCoupon(card));
});
datePlanCards.forEach((card) => {
  card.addEventListener("click", () => chooseDatePlan(card));
});
openWhenCards.forEach((card) => {
  card.addEventListener("click", () => openWhen(card));
});
secretLetterBtn.addEventListener("click", unlockSecretLetter);
dateDreamCards.forEach((card) => {
  card.addEventListener("click", () => chooseDateDream(card));
});
complimentButton.addEventListener("click", showCompliment);
loveJarButton.addEventListener("click", pullLoveNote);
tapDoodleBoard.addEventListener("click", addTapDoodle);
tapDoodleBoard.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    const rect = tapDoodleBoard.getBoundingClientRect();
    addTapDoodle({ clientX: rect.left + rect.width / 2, clientY: rect.top + rect.height / 2 });
  }
});
decreeButton.addEventListener("click", nextDecree);
dreamLanternButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setPickedButton(dreamLanternButtons, button);
    dreamLanternNote.textContent = button.dataset.dream;
  });
});
moodButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setPickedButton(moodButtons, button);
    moodResult.textContent = button.dataset.mood;
  });
});
holdHugButton.addEventListener("pointerdown", startHoldHug);
holdHugButton.addEventListener("pointerup", () => endHoldHug());
holdHugButton.addEventListener("pointerleave", () => endHoldHug());
holdHugButton.addEventListener("pointercancel", () => endHoldHug());
girlPrev.addEventListener("click", () => changeGirlReason(-1));
girlNext.addEventListener("click", () => changeGirlReason(1));
mapStops.forEach((button) => {
  button.addEventListener("click", () => {
    setPickedButton(mapStops, button);
    mapNote.textContent = button.dataset.stop;
  });
});
contractButton.addEventListener("click", signContract);
homeParts.forEach((button) => {
  button.addEventListener("click", () => {
    setPickedButton(homeParts, button);
    homeNote.textContent = button.dataset.home;
  });
});
goodStarButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setPickedButton(goodStarButtons, button);
    starNote.textContent = button.dataset.star;
  });
});
fireworksButton.addEventListener("click", launchLoveFireworks);
kissButton.addEventListener("click", sendKiss);
playlistMoodButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setPickedButton(playlistMoodButtons, button);
    playlistBuildNote.textContent = button.dataset.songNote;
  });
});
loveWheelButton.addEventListener("click", spinLoveWheel);
crownButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setPickedButton(crownButtons, button);
    crownNote.textContent = button.dataset.crown;
  });
});
cakeToppingButtons.forEach((button) => {
  button.addEventListener("click", () => addCakeTopping(button.dataset.topping));
});
setupPaintCanvas();
paintColorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    paintColor = button.dataset.color;
    setPickedButton(paintColorButtons, button);
  });
});
paintClear.addEventListener("click", () => {
  paintCanvas.getContext("2d").clearRect(0, 0, paintCanvas.width, paintCanvas.height);
});
giftBoxButton.addEventListener("click", openGiftBox);
signalButton.addEventListener("click", sendSignal);
flowerRainButton.addEventListener("click", startFlowerRain);
promiseLockButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setPickedButton(promiseLockButtons, button);
    button.classList.add("is-unlocked");
    promiseLockNote.textContent = button.dataset.promise;
  });
});
bookstoreShelfButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setPickedButton(bookstoreShelfButtons, button);
    bookstoreDateNote.textContent = button.dataset.bookDate;
  });
});
dreamJarButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.add("is-open");
    dreamJarNote.textContent = button.dataset.jar;
    createTinyBurst(button);
  });
});
badgeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.add("is-earned");
    badgeNote.textContent = button.dataset.badge;
  });
});
boardingButton.addEventListener("click", () => {
  boardingButton.classList.add("is-stamped");
  gateStatus.textContent = "stamped: coming to love you properly";
});
loveLibraryBooks.forEach((button) => {
  button.addEventListener("click", () => {
    setPickedButton(loveLibraryBooks, button);
    loveLibraryNote.textContent = button.dataset.book;
  });
});
constellationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setPickedButton(constellationButtons, button);
    auroraNote.textContent = button.dataset.aurora;
    createTinyBurst(button);
  });
});
magicMirrorButton.addEventListener("click", askMagicMirror);
fireflyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.add("is-caught");
    fireflyNote.textContent = button.dataset.firefly;
  });
});
coinButtons.forEach((button) => {
  button.addEventListener("click", () => tossWishCoin(button));
});
shootingLetterButton.addEventListener("click", sendShootingLetter);
gemButtons.forEach((button) => {
  button.addEventListener("click", () => addCrownGem(button));
});
moonMailboxButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setPickedButton(moonMailboxButtons, button);
    moonMailboxNote.textContent = button.dataset.moonLetter;
  });
});
promisePathButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    button.classList.add("is-lit");
    promisePathNote.textContent = button.dataset.path;
    promisePathButtons.forEach((stone, stoneIndex) => {
      if (stoneIndex <= index) stone.classList.add("is-lit");
    });
  });
});
memoryGlobeButton.addEventListener("click", shakeMemoryGlobe);
bookPageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setPickedButton(bookPageButtons, button);
    flipLetterNote.textContent = button.dataset.page;
  });
});
polaroidButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setPickedButton(polaroidButtons, button);
    polaroidNote.textContent = button.dataset.polaroid;
  });
});
orbitPlanets.forEach((button) => {
  button.addEventListener("click", () => {
    setPickedButton(orbitPlanets, button);
    planetNote.textContent = button.dataset.planet;
  });
});
dreamCalendarButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setPickedButton(dreamCalendarButtons, button);
    dreamCalendarNote.textContent = button.dataset.dateNote;
  });
});
blueprintPoints.forEach((button) => {
  button.addEventListener("click", () => {
    setPickedButton(blueprintPoints, button);
    blueprintNote.textContent = button.dataset.blueprint;
  });
});
comfortButton.addEventListener("click", startComfortHeartbeat);
loveLockForm.addEventListener("submit", unlockLoveSite);
setupLoveLock();
setupImageFallbacks();
studioToolButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setPickedButton(studioToolButtons, button);
    studioDeskNote.textContent = button.dataset.studio;
  });
});
bookmarkButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setPickedButton(bookmarkButtons, button);
    readerNightNote.textContent = button.dataset.bookmark;
  });
});
trophyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.add("is-earned");
    trophyNote.textContent = button.dataset.trophy;
  });
});
rareButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setPickedButton(rareButtons, button);
    rareNote.textContent = button.dataset.rare;
  });
});
buildButtons.forEach((button) => {
  button.addEventListener("click", () => addFutureBuildBlock(button));
});
weatherButton.addEventListener("click", changeLoveWeather);
passportButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.add("is-stamped");
    passportNote.textContent = button.dataset.passport;
  });
});
capsuleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setPickedButton(capsuleButtons, button);
    capsuleNote.textContent = button.dataset.capsule;
  });
});
careMenuButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setPickedButton(careMenuButtons, button);
    careOrderNote.textContent = button.dataset.care;
  });
});
loveMapPins.forEach((button) => {
  button.addEventListener("click", () => {
    setPickedButton(loveMapPins, button);
    ninetyMapNote.textContent = button.dataset.loveMap;
    createTinyBurst(button);
  });
});
proposalButton.addEventListener("click", () => {
  proposalButton.classList.add("is-open");
  proposalNote.textContent = "Tiny future opened: marry soon, grow old softly, and choose each other every day.";
  createTinyBurst(proposalButton);
});
ringBoxButton.addEventListener("click", () => {
  ringBoxButton.classList.toggle("is-open");
  ringNote.textContent = ringBoxButton.classList.contains("is-open")
    ? "Someday ring sparkle: not just a website, a promise Mihruu means."
    : "Ring box closed, promise still open.";
});
vowButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.add("is-planted");
    vowNote.textContent = button.dataset.vow;
  });
});
nestButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setPickedButton(nestButtons, button);
    nestNote.textContent = button.dataset.nest;
  });
});
oldUsButton.addEventListener("click", showOldUs);
cityButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setPickedButton(cityButtons, button);
    cityNote.textContent = button.dataset.city;
  });
});
morningButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setPickedButton(morningButtons, button);
    morningNote.textContent = button.dataset.routine;
  });
});
nightButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setPickedButton(nightButtons, button);
    nightNote.textContent = button.dataset.routine;
  });
});
reasonBurstButton.addEventListener("click", makeReasonsSparkle);
hundredFireworksButton.addEventListener("click", launchLoveFireworks);
musicToggle.addEventListener("click", toggleMusic);
musicFile.addEventListener("change", chooseSong);
audio.addEventListener("ended", updateMusicButton);
audio.addEventListener("pause", updateMusicButton);
audio.addEventListener("play", updateMusicButton);
drawerClose.addEventListener("click", closeDrawer);
drawerBackdrop.addEventListener("click", closeDrawer);
drawerToggle.addEventListener("click", () => {
  if (activeFlower) toggleFlower(activeFlower);
});
window.addEventListener("scroll", updateScrollMotion, { passive: true });
