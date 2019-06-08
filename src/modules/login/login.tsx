import React, {Component} from 'react';

interface Props {
  testNumber?: number
}

export default class Login extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const {testNumber} = this.props;
    return (
      <div className="box">login page with test number {testNumber};</div>
    );
  }
}

