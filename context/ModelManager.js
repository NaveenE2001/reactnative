import { useContext } from "react";
import { ModuleContext } from "./Modelcontext";

// import ApiCallDialog from '../../components/dialog/ApiCallDialog';
// import AdviceDialog from '../../components/dialog/advice/AdviceDialog';
// import InvestigationDialog from '../../components/dialog/investigation/InvestigationDialog';
// imp
const model = { ApiCallDialog, AdviceDialog, InvestigationDialog };

const ModelManager = (props) => {
  const { currentmodel, setCurrentmodel } = useContext(ModuleContext);

  const closemodel = () => setCurrentmodel(null);
  if (currentmodel) {
    const ModelComponet = model[currentmodel.name];
    return <ModelComponet closemodel={closemodel} props={currentmodel.props} />;
  }
  return null;
};
export default ModelManager;
