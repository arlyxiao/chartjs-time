import * as React from 'react';
import Iframe from 'react-iframe';


class App extends React.Component<{}> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
			<Iframe
				url="http://localhost:3000/horizontal-bar/demo1"
				width="450px"
				height="450px"
				id="myId"
				className="myClassname"
				display="initial"
				position="relative"
				allowFullScreen
			/>
		)
  }
}

export default App;
