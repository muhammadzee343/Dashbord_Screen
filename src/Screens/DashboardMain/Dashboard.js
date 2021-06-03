import React, {PureComponent} from 'react';
import {Dimensions, Image, ImageBackground, Text, View} from 'react-native';
import MenuIcon from '../../Assest/icons/MenuIcons';
import MenuOptonIcon from '../../Assest/icons/MenuOptionIcon';
import MoreIcon from '../../Assest/icons/MoreIcon';
import styles from './style';

class Dashboard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      orientation: null,
    };
  }

  getOrientation() {
    {
      if (Dimensions.get('window').width < Dimensions.get('window').height) {
        this.setState({orientation: 'portrait'});
      } else {
        this.setState({orientation: 'landscape'});
      }
    }
  }
  componentDidMount() {
    this.getOrientation();

    Dimensions.addEventListener('change', () => {
      this.getOrientation();
    });
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={
            this.state.orientation === 'portrait'
              ? styles.headerContainerStylePortrait
              : styles.headerContainerStyleLandscap
          }>
          <ImageBackground
            style={styles.headBGImgStylePortrait}
            source={require('../../Assest/images/BGImg.jpg')}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row', marginLeft: 10}}>
                <MenuOptonIcon iconColor="white" />
                <Text style={{color: 'white', fontSize: 15, marginLeft: 10}}>
                  Timeline
                </Text>
              </View>
              <View style={{marginRight: 10}}>
                <MoreIcon iconColor="white" />
              </View>
            </View>
            <View
              style={
                this.state.orientation === 'portrait'
                  ? styles.headerProfileContainerPortrait
                  : styles.headerProfileContainerLandscap
              }>
              <Image
                style={
                  this.state.orientation === 'portrait'
                    ? styles.headerProfileImgPortrait
                    : styles.headerProfileImgLandscap
                }
                source={require('../../Assest/images/profilePic.jpg')}
              />
              <View
                style={
                  this.state.orientation === 'portrait'
                    ? styles.headerProfileTextContainerPortrait
                    : styles.headerProfileTextContainerLandscape
                }>
                <Text style={{color: 'white', fontSize: 15}}>
                  Muhammad Zeesshan
                </Text>
                <Text style={{color: 'white'}}>Developer</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View
          style={
            this.state.orientation === 'portrait'
              ? styles.descriptionContainerStylePortrait
              : styles.descriptionContainerStyleLandscap
          }>
          <View style={{marginLeft: 30}}>
            <View style={styles.verticalLineDescription} />

            <View
              style={{
                position: 'absolute',
                left: '9.8%',
                top: 20,
                transform: [{rotateZ: '-6deg'}],
              }}>
              <Text
                style={
                  this.state.orientation === 'portrait'
                    ? styles.titleStylePortrait
                    : styles.titleStyleLandscape
                }>
                MY TASK
              </Text>
              <Text
                style={
                  this.state.orientation === 'portrait'
                    ? styles.subTitleStylePortrait
                    : styles.subTitleStyleLandscape
                }>
                JUNE 2, 2021
              </Text>
            </View>

            <View
              style={
                this.state.orientation === 'portrait'
                  ? styles.greenDotStylePortrait
                  : styles.greenDotStyleLandscape
              }
            />

            <View
              style={
                this.state.orientation === 'portrait'
                  ? styles.taskDescription_GreenDotContainerPortrait
                  : styles.taskDescription_GreenDotContainerLandscape
              }>
              <View>
                <Text>Catch up with Brain</Text>
                <Text style={{fontSize: 11, color: 'gray', marginTop: -4}}>
                  Mobile project
                </Text>
              </View>
              <Text style={{fontSize: 11, color: 'gray'}}>5pm</Text>
            </View>

            <View
              style={
                this.state.orientation === 'portrait'
                  ? styles.pinkDotStylePortrait
                  : styles.pinkDotStyleLandscape
              }
            />

            <View
              style={
                this.state.orientation === 'portrait'
                  ? styles.taskDescription_PinkDotContainerPortrait
                  : styles.taskDescription_PinkDotContainerLandscape
              }>
              <View>
                <Text>Make new icons</Text>
                <Text style={{fontSize: 11, color: 'gray', marginTop: -4}}>
                  Web App
                </Text>
              </View>
              <Text style={{fontSize: 11, color: 'gray'}}>12am</Text>
            </View>

            <View
              style={
                this.state.orientation === 'portrait'
                  ? styles.yellowDotStylePortrait
                  : styles.yellowDotStyleLandscape
              }
            />

            <View
              style={
                this.state.orientation === 'portrait'
                  ? styles.taskDescription_yellowDotContainerPortrait
                  : styles.taskDescription_yellowDotContainerLandscape
              }>
              <View>
                <Text>Design Exploration</Text>
                <Text style={{fontSize: 11, color: 'gray', marginTop: -4}}>
                  Company website
                </Text>
              </View>
              <Text style={{fontSize: 11, color: 'gray', marginLeft: -10}}>9am</Text>
            </View>
            
          </View>
        </View>

        <View
          style={
            this.state.orientation === 'portrait'
              ? styles.alignBtnCenterPortrait
              : styles.alignBtnCenterLandscap
          }>
          <MenuIcon iconColor="white" />
        </View>
      </View>
    );
  }
}

export default Dashboard;
