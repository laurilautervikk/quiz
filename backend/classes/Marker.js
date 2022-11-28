class Marker {
  markerTitle; //string
  posX;
  posY;
  qrcode; //string
  question; //string
  answers = []; //array or object
  solutions = []; //array or object

  constructor(title) {
    this.title = title;
  }

  set qrcode(qrcode) {
    this.qrcode = qrcode;
  }

  set question(question) {
    this.question = question;
  }

  set answers(answer) {
    this.answers = () => {
      this.answers.push(answer);
    };
  }

  get title() {
    return this.title;
  }
}

export default Marker;

// markers = [
//   {
//     title: "marker1",
//     content: {
//       position: {
//         x: "55",
//         y: "44",
//       },
//       qrcode: "something.jpg",
//       quiz: {
//         question: "How many legs does a dog have?",
//         answers: {
//           0: {
//             text: "three",
//             isCorrect: false,
//           },
//           1: {
//             text: "four",
//             isCorrect: true,
//           },
//           2: {
//             text: "five",
//             isCorrect: false,
//           },
//         },
//       },
//     },
//   },
// ];
