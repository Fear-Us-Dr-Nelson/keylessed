import { useState } from "react";
import { Rejected as RejectComponent} from "../../../components/auth-indicators";

export default {
  title: "Auth Indicators/Animations/Rejected",
  component: RejectComponent,
};

export const Rejected = () => {
  const [renderKey, setRenderKey] = useState(0);
  const replay = () => {
    setRenderKey(renderKey + 1);
  }
  
  return (
    <div>
      <RejectComponent key={renderKey} />
      <button onClick={() => replay()}>Replay Animation</button>
    </div>
  )
}
