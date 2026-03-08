import React from "react";

export type Props = {
  title: string;
  count?: number;
};

export type State = {
  clicks: number;
};

class SimpleComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      clicks: 0,
    };
  }

  handleClick = (): void => {
    this.setState((prev) => ({
      clicks: prev.clicks + 1,
    }));
  };

  render(): React.ReactNode {
    const { title, count = 0 } = this.props;

    return (
      <div
        style={{ border: "1px solid #ccc", padding: "12px", margin: "10px" }}
      >
        <h2>{title}</h2>
        <p>Initial Count: {count}</p>
        <p>Clicks: {this.state.clicks}</p>

        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

export default SimpleComponent;
