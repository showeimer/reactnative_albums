import React, {Component} from 'react';
import {View, Text} from 'react-native';

class AlbumList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: []
    };
  }

  componentDidMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => response.json())
    .then(data => this.setState({albums: data}))
  }

  render() {
    return (
      <View>
        <Text>Album List!!!</Text>
      </View>
    );
  }
}

export default AlbumList;
