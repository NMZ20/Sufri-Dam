import "./App.css";
import TitlePanel from "./panels/title-panel/index";
import ProgressPanel from "./panels/progress-panel/ProgressPanel";
import SlideShow from "./components/slideshow/SlideShow";
import FooterPanel from "./panels/footer-panel/FooterPanel";

const data = {
  stage: 1,
  total: 4600,
  current: 2346,
};

function App() {
  return (
    <div className="app-container">
      <div className="panel">
        <TitlePanel />
      </div>
      <div>
        <ProgressPanel
          stage={data.stage}
          total={data.total}
          current={data.current}
        />
      </div>
      <div className="panel">
        <SlideShow />
      </div>
      <div>
        <FooterPanel />
      </div>
    </div>
  );
}

export default App;
