import Basic from "./Sections/Basic/Basic";
import WithProps from "./Sections/WithProps/WithProps";
import ApiCall from "./Sections/ApiCall/ApiCall";
import ApiCallClick from "./Sections/ApiCallClick/ApiCallClick";
import ConditionalRendering from "./Sections/ConditionalRendering/ConditionalRendering";
import ClickEvents from "./Sections/ClickEvents/ClickEvents";
import CounterExample from "./Sections/CounterExample/CounterExample";
import DeepProps from "./Sections/DeepProps/DeepProps";
import FormExample from "./Sections/FormExample/FormExample";
import UsingState from "./Sections/UsingState/UsingState";

export const optionToShow = {
  basic: () => <Basic />,
  withProps: () => <WithProps />,
  apiCall: () => <ApiCall />,
  apiCallClick: () => <ApiCallClick />,
  conditionalRendering: () => <ConditionalRendering />,
  clickEvents: () => <ClickEvents />,
  counterExample: () => <CounterExample />,
  deepProps: () => <DeepProps />,
  formExample: () => <FormExample />,
  usingState: () => <UsingState />,
};
