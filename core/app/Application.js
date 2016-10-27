import React, { Component } from 'react';
import { connect } from "react-redux";
import {
    NetInfo,
    StyleSheet,
    Text,
    View
} from 'react-native';
import HabitGoal from './components/HabitGoalView';
import TopMenu from './components/TopMenu';
import Overlay from './components/Overlay';
import User from './components/UserView';

import { getContent, syncData } from './actions/index';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ddd',
        paddingTop: 20
    },
    topMenu: {

    },
    habitGoals: {

    },
    overlay: {
        position: 'absolute'
    }
});

class Application extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentView: '',
            contentToDisplay: [],
            networkConnection: 'none'
        };
        this.handleConnectionInfoChange = this.handleConnectionInfoChange.bind(this);
    }

    componentDidMount() {
        NetInfo.addEventListener(
            'change',
            this.handleConnectionInfoChange
        );
    }

    componentWillReceiveProps(props) {
        this.setState({
            currentView: props.currentView,
            contentToDisplay: props.currentView && props.content ? props.content[props.currentView] : []
        });
    }

    componentWillUnmount() {
        NetInfo.removeEventListener(
            'change',
            this.handleConnectionInfoChange
        );
    }

    handleConnectionInfoChange(connectionInfo) {
        this.setState({
            networkConnection: connectionInfo
        });
        if (!(connectionInfo === 'none' || connectionInfo === 'unknown')) {
            this.props.syncData();
        }
        this.props.getContent()
    }

    renderMainViewArea() {
        if (this.state.currentView === 'user') {
            console.log('here');
            return (
                <User content={this.state.contentToDisplay}/>
            );
        } else {
            console.log('there');
            return (
                <HabitGoal style={styles.habitGoals} content={this.state.contentToDisplay}/>
            );
        }
    }

    render() {
        return (
            <View>
                <Overlay style={styles.overlay}/>
                <View style={styles.container}>
                    <TopMenu currentView={this.state.currentView} style={styles.topMenu} />
                    {this.renderMainViewArea()}
                </View>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        content: state.applicationState.content,
        currentView: state.applicationState.currentView
    };
}

export default connect(mapStateToProps, { getContent, syncData })(Application);