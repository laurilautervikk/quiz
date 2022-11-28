//https://attacomsian.com/blog/mongoose-es6-classes
class GamePlan {
  gameTitle = "Untitled game";
  ownerId;
  markers = [];

  constructor() {}

  set title(title) {
    this.title = title;
  }

  set ownerId(ownerId) {
    this.ownerId = ownerId;
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

export default GamePlan;
