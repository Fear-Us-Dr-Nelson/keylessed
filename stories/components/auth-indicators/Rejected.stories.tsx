import { useState } from "react";
import { Rejected as RejectComponent} from "../../../components/auth-indicators";
import Feed from "../../../components/feed";

export default {
  title: "Auth Indicators/Rejected",
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

export const RejectedOverlay = args => {
  const [renderKey, setRenderKey] = useState(0);
  const replay = () => {
    setRenderKey(renderKey + 1);
  }
  
  return (
    <div>
      <div style={{
      }}>
        <Feed>
          <RejectComponent key={renderKey} {...args} />
        </Feed>
      </div>
      <button onClick={() => replay()}>Replay Animation</button>
    </div>
  );
}
