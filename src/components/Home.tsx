import * as React from 'react';

interface IHomeProps {

}

class Home extends React.PureComponent<IHomeProps> {

  public constructor(props: IHomeProps) {
    super(props);
  }

  public render() {
    return (
      <h1>Hello World!</h1>
    );
  }

}

export default Home;