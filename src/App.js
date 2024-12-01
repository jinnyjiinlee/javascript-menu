import { MainController } from './Controller/mainController.js';

class App {
  play() {
    new MainController().startProgram();
  }
}

export default App;
