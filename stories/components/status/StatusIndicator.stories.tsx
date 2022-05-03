import {StatusIndicator} from "../../../components/status";

export default {
  title: "Status/Indicator",
  component: StatusIndicator
};

export const Indicator = args => <StatusIndicator {...args} />;
Indicator.args = {
  variant: "loading",
  label: "Server Status"
}
