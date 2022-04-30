import { useState } from "react";
import { Authorized as AuthComponent } from "../../../components/auth-indicators";

export default {
  title: "Auth Indicators/Animations/Authorized",
  component: AuthComponent,
};

export const Authorized = () => {
  const [renderKey, setRenderKey] = useState(0);
  const replay = () => {
    setRenderKey(renderKey + 1);
  }
  
  return (
    <div>
      <AuthComponent key={renderKey} />
      <button onClick={() => replay()}>Replay Animation</button>
    </div>
  )
}
