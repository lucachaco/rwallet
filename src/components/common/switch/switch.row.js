import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import PropTypes from 'prop-types';
import Switch from './switch';
import appActions from '../../../redux/app/actions';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  questionIcon: {
    fontSize: 17,
  },
  leftColumn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

class SwitchRow extends Component {
  onPressed = () => {
    const { questionNotification, addNotification } = this.props;
    if (!questionNotification) {
      return;
    }
    addNotification(questionNotification);
  }

  render() {
    const {
      text, value, onValueChange, disabled, questionNotification,
    } = this.props;
    return (
      <View style={styles.row}>
        <View style={styles.leftColumn}>
          <Text>{text}</Text>
          {questionNotification && (
            <TouchableOpacity style={{ marginLeft: 5 }} onPress={this.onPressed}>
              <AntDesign style={styles.questionIcon} name="questioncircleo" />
            </TouchableOpacity>
          ) }
        </View>
        <Switch
          style={styles.switch}
          value={value}
          onValueChange={onValueChange}
          disabled={disabled}
        />
      </View>
    );
  }
}

SwitchRow.propTypes = {
  text: PropTypes.string,
  value: PropTypes.bool,
  onValueChange: PropTypes.func,
  disabled: PropTypes.bool,
  questionNotification: PropTypes.shape({}),
  addNotification: PropTypes.func.isRequired,
};

SwitchRow.defaultProps = {
  text: undefined,
  value: false,
  onValueChange: () => {},
  disabled: false,
  questionNotification: undefined,
};

const mapDispatchToProps = (dispatch) => ({
  addNotification: (notification) => dispatch(appActions.addNotification(notification)),
});

export default connect(null, mapDispatchToProps)(SwitchRow);
