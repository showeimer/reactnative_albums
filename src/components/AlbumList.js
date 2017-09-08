import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import AlbumDetail from './AlbumDetail';

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
    .then(data => this.setState({ albums: data }))
  }

  render() {
    const renderAlbums = this.state.albums.map(album => {
      return <AlbumDetail key={album.title} album={album} />
    });

    return (
      <ScrollView>
        {renderAlbums}
      </ScrollView>
    );
  }
}

export default AlbumList;
