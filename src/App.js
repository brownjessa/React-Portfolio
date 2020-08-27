import React from 'react';
import './App.css';

class App extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      title: 'Jessamine Brown',
      headerLinks: [
        { title: 'Home', paht: '/' },
        { title: 'About', path: '/about'},
        { title: 'Contact', path: '/contact' }
      ],
      
    }

  }

  render (
    return (
      <div> Hello From React </div>

    );
  )
}

export default App;
