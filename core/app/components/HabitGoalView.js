import React, { Component } from 'react';
import { connect } from "react-redux";
import {
    NetInfo,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Panel from './Panel';

const styles = StyleSheet.create({
    habitGoals: {
        marginTop: 10
    }
});


class HabitGoal extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        if (this.props.content && this.props.content.length > 0) {
            return (
                <ScrollView style={styles.habitGoals}>
                    {this.props.content.map((theThing, index) => {
                        return (
                            <Panel key={index} title={theThing.title} index={index}>
                                <Text>{theThing.description}</Text>
                            </Panel>
                        )
                    })}
                </ScrollView>
            );
        } else if (this.props.content && this.props.content.length === 0) {
            return (
                <View>
                    <Text>No content available.</Text>
                </View>
            )
        } else {
            return (
                <View>
                    <Text>Loading...</Text>
                </View>
            )
        }
    }
}

function mapStateToProps(state) {
    return {

    };
}

export default connect(mapStateToProps, {})(HabitGoal);