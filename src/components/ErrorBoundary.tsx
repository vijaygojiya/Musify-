import React, {Component, PropsWithChildren} from 'react';
import {Dimensions, Image, Text, View} from 'react-native';

import {Images} from '../theme';

const {height, width} = Dimensions.get('window');

interface ErrorBoundaryState {
  hasError: boolean;
}

interface ErrorBoundaryStateProps {
  isLoad?: boolean;
}

type ErrorBoundaryProps = PropsWithChildren<ErrorBoundaryStateProps>;

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {hasError: false};
  }

  public componentDidCatch() {
    // Display fallback UI
    this.setState({hasError: true});
  }

  public render() {
    if (this.state.hasError) {
      return this._renderErrorState();
    }
    return this.props.children;
  }

  public _renderErrorState() {
    const backgroundHeight = (width / 1125) * 774;
    return (
      <View
        style={{
          backgroundColor: 'white',
          flexDirection: 'column',
          alignItems: 'center',
          height,
        }}>
        <Image
          source={Images.ic_error}
          style={{
            width: 244,
            height: 244,
            resizeMode: 'cover',
            marginTop: -(backgroundHeight * 0.7),
          }}
        />
        <View style={{height: 40}} />
        <Text style={{alignSelf: 'flex-start', paddingHorizontal: 20}}>
          {'Oops!'}
        </Text>
        <View style={{height: 10}} />
        <Text style={{alignSelf: 'flex-start', paddingHorizontal: 20}}>
          {
            'It seems that something went wrong.\nPlease make sure your app is up-to-date, then try again.'
          }
        </Text>
      </View>
    );
  }
}

export default ErrorBoundary;
