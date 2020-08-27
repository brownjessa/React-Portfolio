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
      home: {
        title: 'Be Determined'
        subTitle: 'Projects that inspire'
        text: 'Checkout my projects below'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Let\'s Talk'
      }
    }

  }

  render (
    return (
      <div> Hello From React </div>

    );
  )
}

export default App;
