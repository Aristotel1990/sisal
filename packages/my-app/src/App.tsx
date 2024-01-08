import { ReactNode } from "react";

interface ChildrenProps {
  children: ReactNode;
}

function App({ children }:ChildrenProps) {
  return <div>{children}</div>;
}

export default App;
