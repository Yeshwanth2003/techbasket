import Event from "events";

class Triggers extends Event.EventEmitter {
  constructor() {
    super();
  }
}
const triggers = new Triggers();

export default triggers;
