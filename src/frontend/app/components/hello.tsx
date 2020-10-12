import * as React from "react";

export default class Hello extends React.Component {
  constructor(props: Record<string, unknown>) {
    super(props);
  }
  render(): JSX.Element {
    return <div>HELLO</div>;
  }
}
