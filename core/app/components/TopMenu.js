
import React, { Component } from 'react';
import { connect } from "react-redux";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { setCurrentView } from '../actions/index';

const styles = StyleSheet.create({
    topMenu: {
        flexDirection: 'row'
    },
    menuItem: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: 'rgba(255, 255, 255, 0)'
    },
    menuItemSelected: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#eee',
        borderWidth: 2,
        borderColor: '#fff'
    },
    menuItemTextSelected: {
        color:'#2a2f43',
        textAlign: 'center',
        fontWeight:'bold'
    },
    menuItemText: {
        color:'#2a2f43',
        textAlign: 'center',
        fontWeight:'normal'
    }
});
const activeOpacity = 0.5;

class TopMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentWillMount() {
        this.props.setCurrentView('habits');
    }

    render() {
        return (
            <View style={styles.topMenu}>
                <TouchableOpacity style={this.props.currentView === 'user' ? styles.menuItemSelected: styles.menuItem} activeOpacity={activeOpacity} onPress={() => this.props.setCurrentView('user')}>
                    <Text style={this.props.currentView === 'user' ? styles.menuItemTextSelected : styles.menuItemText}>
                        User Info
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={this.props.currentView === 'habits' ? styles.menuItemSelected: styles.menuItem} activeOpacity={activeOpacity} onPress={() => this.props.setCurrentView('habits')}>
                    <Text style={this.props.currentView === 'habits' ? styles.menuItemTextSelected : styles.menuItemText}>
                        Habits
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={this.props.currentView === 'personalGoals' ? styles.menuItemSelected: styles.menuItem} activeOpacity={activeOpacity} onPress={() => this.props.setCurrentView('personalGoals')}>
                    <Text style={this.props.currentView === 'personalGoals' ? styles.menuItemTextSelected : styles.menuItemText}>
                        Personal Goals
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={this.props.currentView === 'groupGoals' ? styles.menuItemSelected: styles.menuItem} activeOpacity={activeOpacity} onPress={() => this.props.setCurrentView('groupGoals')}>
                    <Text style={this.props.currentView === 'groupGoals' ? styles.menuItemTextSelected : styles.menuItemText}>
                        Group Goals
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentView: state.applicationState.currentView
    }
}

export default connect(mapStateToProps, { setCurrentView })(TopMenu);