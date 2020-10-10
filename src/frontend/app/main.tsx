import * as React from "react";
import * as ReactDom from "react-dom";
import HelloComponent from "./components/hello";

function bootstrap() {
  const appRoot = document.getElementById("app");
  const Root = () => <HelloComponent />;
  ReactDom.render(<Root />, appRoot);
}

bootstrap();
