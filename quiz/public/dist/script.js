const app = Vue.createApp({
  data() {
    return {
      index: 0,
      selectedAnswer: "",
      correctAnswer: 0,
      wrongAnswer: 0,
      count: 4,
      questions: [
        {
          question: "Wanna Play a Game?",
          answers: {
            a: "Hmmm, 🤔💭",
            b: "Gettat!!",
          },
          correctAnswer: "a",
        },
        {
          question: "Do you like me?",
          answers: {
            a: "Hmmm, 🤔💭",
            b: "Obvs! You are awesome 🤩... also, have you seen your butt?😏",
            c: "Naa..you no too get sense.",
            d: "Sometimes, when you've eaten.",
          },
          correctAnswer: "b",
        },
        {
          question: "When is my birthday?",
          answers: {
            a: "Jan 4",
            b: "Wetin be this wan?😏",
            c: "Aug 6",
            d: "Dec 25 with baby Jesus 👯",
          },
          correctAnswer: "c",
        },
        {
          question: "My Favorite color?",
          answers: {
            a: "Black",
            b: "Wo, gimmi any color.",
            c: "White",
            d: "Grey",
          },
          correctAnswer: "b",
        },
        {
          question: "Favorite food?",
          answers: {
            a: "I dont discriminate, food na food",
            b: "Starch and Banga",
            c: "Friedrice",
            d: "Hot fluffy rice and stew",
          },
          correctAnswer: "a",
        },
      ],
    };
  },
  methods: {
    answered(e) {
      this.selectedAnswer = e.target.value;
      if (this.selectedAnswer == this.questions[this.index]["correctAnswer"])
        this.correctAnswer++;
      else this.wrongAnswer++;
    },
    nextQuestion() {
      this.index++, (this.selectedAnswer = "");
    },
    showResults() {
      this.index++;
    },
    resetQuiz() {
      this.index = 0;
      this.selectedAnswer = "";
      this.correctAnswer = "";
      this.wrongAnswer = "";
    },
  },
});

app.mount("#app");
