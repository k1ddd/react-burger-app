import LeftAside from "./LeftAside/index";
import MainContent from "./MainContent/index";
import RighAside from "./RighAside/index";
import "./main.css";
const Main = () => {
  return (
    <div className="main">
      <LeftAside />
      <MainContent />
      <RighAside />
    </div>
  );
};

export default Main;
