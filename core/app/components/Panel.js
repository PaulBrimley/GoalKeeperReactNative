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
import Icon from 'react-native-vector-icons/FontAwesome';

var styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginBottom:10,
        overflow: 'hidden'
    },
    title: {
        color:'#2a2f43',
        fontWeight:'bold',
        textAlign: 'left'
    },
    titleContainer: {
        flexDirection: 'row',
        padding: 10
    },
    titleHolder: {
        flex: 1,
    },
    body: {
        padding: 10,
        paddingTop: 0
    }
});

const activeOpacity = {
    full: 0,
    half: 0.5,
    none: 1,
};

class Panel extends Component{
    constructor(props){
        super(props);
        this.state = {
            animation: new Animated.Value(),
            expanded: false,
            opacity: 0,
            title: ''
        };
    }

    renderIcon() {
        if (this.state.expanded) {
            return (
                <Icon name="chevron-up" size={15} color="#900" />
            )
        } else {
            return (
                <Icon name="chevron-down" size={15} color="#900" />
            )
        }
    }

    setMaxHeight(event) {
        this.setState({
            maxHeight: event.nativeEvent.layout.height,
            opacity: 1
        });
    }

    setMinHeight(event) {
        this.setState({
            minHeight: event.nativeEvent.layout.height
        });
        this.state.animation.setValue(event.nativeEvent.layout.height);
    }


    toggle(){
        let initialValue = this.state.expanded? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
            finalValue = this.state.expanded? this.state.minHeight : this.state.maxHeight + this.state.minHeight;

        this.setState({
            expanded : !this.state.expanded
        });

        this.state.animation.setValue(initialValue);
        Animated.spring(     //Step 4
            this.state.animation,
            {
                toValue: finalValue
            }
        ).start();
    }

    render(){
        return (
            <Animated.View style={[styles.container, {height: this.state.animation}]}>
                <View style={styles.titleContainer} onLayout={this.setMinHeight.bind(this)}>
                    <TouchableOpacity
                        style={styles.titleHolder}
                        onPress={this.toggle.bind(this)}
                        activeOpacity={activeOpacity.half}>
                        <Text style={styles.title}>{this.props.title}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.toggle.bind(this)}
                        activeOpacity={activeOpacity.none}>
                        {this.renderIcon()}
                    </TouchableOpacity>
                </View>
                <View style={styles.body} onLayout={this.setMaxHeight.bind(this)}>
                    {this.props.children}
                </View>
            </Animated.View>
        );
    }
}

function mapStateToProps(state) {
    return {

    };
}

export default connect(mapStateToProps, {})(Panel);