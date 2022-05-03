import StatusIndicator from "../../components/status-indicator";

export default {
  title: "Status Indicator",
  component: StatusIndicator,
  argTypes: {
    label: { control: "text" }
  }
};

const Template = args => <StatusIndicator {...args} />;

export const Ok = Template.bind({});
Ok.args = {
    variant: "ok",
    label: "Server Status"
}

export const Loading = Template.bind({});
Loading.args = {
    variant: "loading",
    label: "Server Status"
}

export const Error = Template.bind({});
Error.args = {
    variant: "error",
    label: "Server Status"
}
