import React,{Component} from 'react';
import { connect } from "react-redux";
import {
    Animated,
    Image,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View
} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

var styles = StyleSheet.create({

});

class User extends Component{
    render() {
        return (
            <View>
                <Text>Hello {this.props.content.name.first}</Text>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {

    };
}

export default connect(mapStateToProps, {})(User);