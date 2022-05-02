import { useState } from "react";
import { Authorized as AuthComponent } from "../../../components/auth-indicators";
import Feed from "../../../components/feed";

export default {
  title: "Auth Indicators/Authorized",
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

export const AuthorizedOverlay = args => {
  const [renderKey, setRenderKey] = useState(0);
  const replay = () => {
    setRenderKey(renderKey + 1);
  }
  
  return (
    <div>
      <div style={{
      }}>
        <Feed>
          <AuthComponent key={renderKey} {...args} />
        </Feed>
      </div>
      <button onClick={() => replay()}>Replay Animation</button>
    </div>
  );
}