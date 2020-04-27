import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import styles from './dashboardPageStyle';
import ScrollviewImage from 'horizontallist';
import Images from '../../assets/image/index';
import cinema from '../../jsonData/releaseMovie.json';
import cinemaInYourArea from '../../jsonData/cinemainYourArea.json';

export default class dashboardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayholder: cinema,
      arrayholderOriginal: cinema,
      searchText: null,
    };
  }

  static navigationOptions = {
    header: {visible: false},
  };

  searchFilterFunction = (text) => {
    const newData = this.state.arrayholderOriginal.filter((item) => {
      const itemData = `${item.title.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({arrayholder: newData});
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <View style={styles.oval}>
            <Text style={styles.welcomeText}>Welcome</Text>
          </View>
          <View style={styles.searchContainer}>
            <TextInput
              placeholder="Search Movie Title"
              style={styles.searchInput}
              onChangeText={this.searchFilterFunction}
            />
            <View style={styles.iconViewStyle}>
              <Image style={styles.imageStyle} source={Images.search} />
            </View>
          </View>
          <ScrollView>
            <View style={styles.textContainer}>
              <Text style={styles.labelStyle}>Cinema around your area</Text>
            </View>
            <View style={styles.scrollviewContainer}>
              <ScrollviewImage
                imageStyle={styles.imageContainerStyle}
                containerStyle={styles.containerStyle}
                showsHorizontalScrollIndicator={false}
                data={cinemaInYourArea}
              />
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.labelStyle}>New Releases</Text>
            </View>
            <View style={styles.scrollviewContainer}>
              {this.state.arrayholder && this.state.arrayholder.length ? (
                <ScrollviewImage
                  showsHorizontalScrollIndicator={false}
                  data={this.state.arrayholder}
                />
              ) : (
                <View style={styles.textContainer}>
                  <Text style={styles.nolabelStyle}>No Record found</Text>
                </View>
              )}
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
