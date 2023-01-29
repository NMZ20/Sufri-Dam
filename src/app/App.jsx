import "./App.css";
import TitlePanel from "./panels/title-panel/index";
import ProgressPanel from "./panels/progress-panel/ProgressPanel";
import SlideShow from "./components/slideshow/SlideShow";
import FooterPanel from "./panels/footer-panel/FooterPanel";
import Map from "./components/map/Map";

const data = {
  stage: 1,
  total: 4600,
  current: 4600,
};

function App() {
  return (
    <div className="app-container">
      <div className="panel">
        <TitlePanel />
      </div>
      <div className="panel">
        <ProgressPanel
          stage={data.stage}
          total={data.total}
          current={data.current}
        />
        <div style={{ marginBottom: "50px" }}>
          <SlideShow />
        </div>
        <Map />
        <div>
          <FooterPanel />
        </div>
      </div>
    </div>
  );
}

export default App;
