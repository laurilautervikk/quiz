class Player {
  name;
  pointsTotal;
  markersFound;

  constructor(name) {
    this.name = name;
  }

  set pointsTotal(points) {
    this.pointsTotal += points;
  }

  set markersFound(amount) {
    this.markersFound += amount;
  }

  get pointsTotal() {
    return this.pointsTotal;
  }

  get markersFound() {
    return this.markersFound;
  }
}

export default Player;
