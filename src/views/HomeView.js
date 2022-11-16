import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import ArtistList from '../components/ArtistList.js';
import { getTopArtists } from '../services/api-client.js';

export default class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: null
    };
  }

  componentDidMount() {
    getTopArtists().then(data => {
      this.setState({ artists: data })
    });
  }

  render() {
    const artists = this.state.artists;

    return (
      <View style={styles.container}>
        {artists && <ArtistList artists={artists} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray'
  }
});