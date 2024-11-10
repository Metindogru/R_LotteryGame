import logo from "./logo.svg";
import Lottery from "./Lottery";
import "./App.css";
import "./Ball.css";

function App() {
  return (
    <div className="App">
      <Lottery />
      <div className="second-change">
        <Lottery title="Rastgele!" maxBalls={6} maxNum={59} />
        <h2 className="info-change">
          Rastgele çıkan 10 sayıdan kaç tanesini bulabilirsin? Dene Şansını!
        </h2>
      </div>
    </div>
  );
}

export default App;
