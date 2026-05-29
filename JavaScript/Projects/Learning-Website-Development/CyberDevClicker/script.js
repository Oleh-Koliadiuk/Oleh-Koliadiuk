const player = {
  score: 0,
  clickPower: 1,
  passiveIncome: 0,
  aiCost: 10,

  isMidlle: false,
  isSenior: false,
  isTeamLead: false,
  isST: false,
  isCTO: false,
  isVPOF: false,

  click() {
    this.score += this.clickPower;
    this.updateUI();
    this.save();
  },

  buyAI() {
    if (this.score >= this.aiCost) {
      this.score -= this.aiCost;
      this.passiveIncome += 1;
      this.aiCost = Math.round(this.aiCost * 1.5);
      this.updateUI();
      this.save();
    } else {
      alert("Not enough lines of code to buy AI!");
    }
  },

  save() {
    const dataToSave = {
      score: this.score,
      clickPower: this.clickPower,
      passiveIncome: this.passiveIncome,
      aiCost: this.aiCost,
      isMidlle: this.isMidlle,
      isSenior: this.isSenior,
      isTeamLead: this.isTeamLead,
      isST: this.isST,
      isCTO: this.isCTO,
      isVPOF: this.isVPOF,
    };
    localStorage.setItem("cyberDevSave", JSON.stringify(dataToSave));
  },

  load() {
    const savedData = localStorage.getItem("cyberDevSave");
    if (savedData) {
      const parsedData = JSON.parse(savedData);

      this.score = parsedData.score;
      this.clickPower = parsedData.clickPower;
      this.passiveIncome = parsedData.passiveIncome;
      this.aiCost = parsedData.aiCost;
      this.isMidlle = parsedData.isMidlle;
      this.isSenior = parsedData.isSenior;
      this.isTeamLead = parsedData.isTeamLead;
      this.isST = parsedData.isST;
      this.isCTO = parsedData.isCTO;
      this.isVPOF = parsedData.isVPOF;
    }
  },

  updateUI() {
    scoreDisplay.textContent = this.score;
    costDisplay.textContent = "Cost: " + this.aiCost;

    let currentRank = "Junior Developer";

    if (this.score >= 30000 || this.isVPOF) {
      if (!this.isVPOF) {
        alert("Congratulations! You are VP of Engineering now!");
        this.isVPOF = true;
        this.passiveIncome += 200;
        this.clickPower = 64;
      }
      currentRank = "VP of Engineering";
    } else if (this.score >= 15000 || this.isCTO) {
      if (!this.isCTO) {
        alert("Congratulations! You are a Chief Technology Officer now!");
        this.isCTO = true;
        this.passiveIncome += 100;
        this.clickPower = 32;
      }
      currentRank = "Chief Technology Officer";
    } else if (this.score >= 5000 || this.isST) {
      if (!this.isST) {
        alert("Congratulations! You are a Software Architect now!");
        this.isST = true;
        this.passiveIncome += 50;
        this.clickPower = 16;
      }
      currentRank = "Software Architect";
    } else if (this.score >= 1500 || this.isTeamLead) {
      if (!this.isTeamLead) {
        alert("Congratulations! You are a TeamLead now!");
        this.isTeamLead = true;
        this.passiveIncome += 25;
        this.clickPower = 8;
      }
      currentRank = "Team Lead";
    } else if (this.score >= 500 || this.isSenior) {
      if (!this.isSenior) {
        alert("Congratulations! You are a Senior Developer now!");
        this.isSenior = true;
        this.passiveIncome += 15;
        this.clickPower = 4;
      }
      currentRank = "Senior Developer";
    } else if (this.score >= 200 || this.isMidlle) {
      if (!this.isMidlle) {
        alert("Congratulations! You are a Middle Developer now!");
        this.isMidlle = true;
        this.passiveIncome += 10;
        this.clickPower = 2;
      }
      currentRank = "Middle Developer";
    }

    linesOfCode.textContent = currentRank;
  },
};

const scoreDisplay = document.getElementById("linesOfCode");
const clickBtn = document.getElementById("Clicker");
const hireAiBtn = document.getElementById("hire_btn");
const costDisplay = document.getElementById("cost");
const linesOfCode = document.getElementById("name");
const info = document.getElementById("Info");

player.load();
player.updateUI();

clickBtn.addEventListener("click", () => {
  player.click();
});

hireAiBtn.addEventListener("click", () => {
  player.buyAI();
});

info.addEventListener("click", () => {
  alert(
    "GAMEPLAY & CAREER PROGRESSION\n\n• Middle Developer (200 LoC)\n  +10 Passive Income / +2 Click Power\n\n• Senior Developer (500 LoC)\n  +15 Passive Income / +4 Click Power\n\n• Team Lead (1,500 LoC)\n  +25 Passive Income / +8 Click Power\n\n• Software Architect (5,000 LoC)\n  +50 Passive Income / +16 Click Power\n\n• Chief Technology Officer (15,000 LoC)\n  +100 Passive Income / +32 Click Power\n\n• VP of Engineering (30,000 LoC)\n  +200 Passive Income / +64 Click Power",
  );
});

setInterval(() => {
  player.score += player.passiveIncome;
  player.updateUI();
  player.save();
}, 1000);
