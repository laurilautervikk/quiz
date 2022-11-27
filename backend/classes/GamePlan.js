//https://attacomsian.com/blog/mongoose-es6-classes
class GamePlan {
  title = "Untitled game";
  ownerId;
  timed = true;
  markers = [];

  //   markers = [
  //     {
  //       title: "marker1",
  //       content: {
  //         qrcode: "something.jpg",
  //         quiz: {
  //           question: "How many legs does a dog have?",
  //           answers: {
  //             a: "three",
  //             b: "five",
  //             c: "four",
  //           },
  //           solution: answers.c,
  //         },
  //       },
  //     },
  //     {
  //       title: "marker2",
  //       content: {
  //         qrcode: "something.jpg",
  //         quiz: {
  //           question: "How many legs does a dog have?",
  //           answers: {
  //             a: "three",
  //             b: "five",
  //             c: "four",
  //           },
  //           solution: answers.c,
  //         },
  //       },
  //     },
  //   ];

  constructor() {}

  set title(title) {
    this.title = title;
  }

  set ownerId(ownerId) {
    this.ownerId = ownerId;
  }

  set timed(timed) {
    this.timed = timed;
  }

  set markers(marker) {
    this.markers = () => {
      this.markers.push(marker);
    };
  }

  get title() {
    return this.title;
  }

  get ownerId() {
    return this.ownerId;
  }

  get timed() {
    return this.timed;
  }

  get markers() {
    return this.markers;
  }

  getMarker(index) {
    return this.markers[index];
  }

  //   static findByOwnerId() {
  //     return this.find({ ownerId: ownerId });
  //   }
}
