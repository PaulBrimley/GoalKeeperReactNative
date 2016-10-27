import React, { Component } from 'react';
import { connect } from "react-redux";
import {
    Animated,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Dimensions from 'Dimensions';

let windowHeight = Dimensions.get('window').height;
let windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    overlay: {
        height: windowHeight,
        width: windowWidth,
        backgroundColor: 'blue',
    }
})

class Overlay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initial: true,
            overlayOpacity: new Animated.Value(1),
            removeOverlayDisplay: false
        };
    }

    componentWillReceiveProps(props) {
        if (props.content && this.state.initial) {
            this.setState({
                initial: false
            });
            Animated.timing(
                this.state.overlayOpacity,
                {
                    toValue: 0,
                    delay: 1000,
                    duration: 1000
                }
            ).start(() => {
                this.setState({
                    removeOverlayDisplay: true
                })
            });
        }
    }

    render() {
        if (this.state.removeOverlayDisplay) {
            return (null);
        } else {
            return (
                <Animated.View style={[styles.overlay, {opacity: this.state.overlayOpacity}]}>
                    <Text>
                        Welcome!
                    </Text>
                </Animated.View>
            )
        }

    }
}

function mapStateToProps(state) {
    return {
        content: state.applicationState.content,
    };
}

export default connect(mapStateToProps, {})(Overlay);