import { useState } from "react";
import { Rejected as RejectComponent} from "../../../components/auth-indicators";

export default {
  title: "Auth Indicators/Animations/Rejected",
  component: RejectComponent,
  argTypes: {
    label: {
      control: "text"
    }
  }
};

export const Rejected = args => {
  const [renderKey, setRenderKey] = useState(0);
  const replay = () => {
    setRenderKey(renderKey + 1);
  }
  
  return (
    <div>
      <RejectComponent key={renderKey} {...args} />
      <button onClick={() => replay()}>Replay Animation</button>
    </div>
  );
}
