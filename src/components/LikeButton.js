import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Spinner } from './common';
import {
  likePendingForAuthAction,
  likeSaveAction,
  likeRemoveAction,
} from '../actions';
import { checkLike } from '../utils';

class LikeButton extends Component {
  componentDidUpdate() {
    const {
      isLogged,
      isPendingForAuth,
      pendingImgUrl,
      imgUrl,
      likes,
      likeSave,
    } = this.props;

    if (isLogged) {
      const isLiked = checkLike(likes, imgUrl);
      if (!isLiked && isPendingForAuth && pendingImgUrl === imgUrl) {
        likeSave({
          urls: { regular: pendingImgUrl },
        });
      }
    }
  }

  render() {
    const {
      isLogged,
      loginScreen,
      imgUrl,
      likes,
      loading,
      error,
      likePendingForAuth,
      likeSave,
      likeRemove,
    } = this.props;

    if (error) return alert(error);

    if (loading) return <Spinner size={25} color="#2d87f5" />;

    if (isLogged) {
      const isLiked = checkLike(likes, imgUrl);
      if (isLiked)
        return (
          <View style={styles.buttonView}>
            <Icon.Button
              name="heart"
              backgroundColor="red"
              onPress={() => {
                likeRemove({
                  url: imgUrl,
                });
              }}
              style={styles.button}
              iconStyle={styles.icon}
              borderRadius={0}
            />
          </View>
        );

      if (!isLiked)
        return (
          <View style={styles.buttonView}>
            <Icon.Button
              name="heart"
              backgroundColor="black"
              onPress={() => {
                likeSave({
                  urls: { regular: imgUrl },
                });
              }}
              style={styles.button}
              iconStyle={styles.icon}
              borderRadius={0}
            />
          </View>
        );
    }

    if (!isLogged)
      return (
        <View style={styles.buttonView}>
          <Icon.Button
            name="heart"
            backgroundColor="black"
            onPress={() => {
              loginScreen('Login', imgUrl);
              likePendingForAuth(imgUrl);
            }}
            style={styles.button}
            iconStyle={styles.icon}
            borderRadius={0}
          />
        </View>
      );
  }
}

const styles = StyleSheet.create({
  buttonView: {
    alignItems: 'center',
  },
  button: {
    flex: 1,
  },
  icon: {
    marginRight: 6,
    marginLeft: 6,
  },
});

const mapStateToProps = state => ({
  isLogged: state.auth.user,
  isPendingForAuth: state.likes.pending,
  pendingImgUrl: state.likes.pendingUrl,
  imgUrl: state.img.url,
  likes: state.likes.data,
  loading: state.likes.loading,
  error: state.likes.error,
});

const mapDispatchToProps = dispatch => ({
  loginScreen: (routeName, likedImage) =>
    dispatch(NavigationActions.navigate({ routeName, likedImage })),
  likePendingForAuth: imgUrl => dispatch(likePendingForAuthAction(imgUrl)),
  likeSave: data => dispatch(likeSaveAction(data)),
  likeRemove: data => dispatch(likeRemoveAction(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LikeButton);
