import _ from 'lodash';
import React, { Component } from 'react';
import {
  View, StyleSheet, ScrollView, Text, Linking, Image,
} from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Header from '../../components/common/misc/header';
import screenHelper from '../../common/screenHelper';
import flex from '../../assets/styles/layout.flex';
import Loc from '../../components/common/misc/loc';
import common from '../../common/common';
import { strings } from '../../common/i18n';

const sending = require('../../assets/images/icon/sending.png');

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  sectionContainer: {
    paddingHorizontal: 25,
    marginTop: 15,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
    marginBottom: 10,
  },
  state: {
    fontSize: 17,
    fontWeight: '600',
  },
  memo: {
    fontSize: 13,
    fontWeight: '300',
  },
  link: {
    color: '#00B520',
    fontSize: 17,
    alignSelf: 'center',
  },
  linkView: {
    marginTop: 20,
  },
  amount: {
    fontSize: 40,
    fontWeight: '400',
  },
  amountView: {
    flexDirection: 'row',
  },
  symbol: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginTop: 5,
  },
  stateIcon: {
    alignSelf: 'center',
    right: 0,
    position: 'absolute',
  },
});

const getStateIcon = (state) => {
  let icon = null;
  if (state === 'Sent') {
    icon = <SimpleLineIcons name="arrow-up-circle" size={45} style={[{ color: '#6875B7' }]} />;
  } else if (state === 'Received') {
    icon = <SimpleLineIcons name="arrow-down-circle" size={45} style={[{ color: '#6FC062' }]} />;
  } else if (state === 'Receiving') {
    icon = <SimpleLineIcons name="arrow-down-circle" size={45} style={[{ color: '#6FC062' }]} />;
  } else if (state === 'Sending') {
    icon = <Image source={sending} style={{ width: 37, height: 37 }} />;
  } else if (state === 'Failed') {
    icon = <MaterialIcons name="error-outline" size={50} style={[{ color: '#E73934' }]} />;
  }
  return icon;
};

class Transaction extends Component {
  static navigationOptions = () => ({
    header: null,
  });

  static processViewData(transation) {
    console.log('transation: ', transation);
    const { rawTransaction } = transation;
    let amountText = null;
    if (!_.isNil(rawTransaction.value)) {
      const amount = common.convertUnitToCoinAmount(rawTransaction.symbol, rawTransaction.value);
      amountText = common.getBalanceString(rawTransaction.symbol, amount);
    }
    let datetimeText = null;
    if (!_.isNil(transation.datetime)) {
      datetimeText = moment(transation.datetime).format('DD/MM/YYYY hh:mm a');
    }
    const stateIcon = getStateIcon(transation.state);
    return {
      transactionState: transation.state,
      transactionId: rawTransaction.hash,
      amount: amountText,
      symbol: rawTransaction.symbol,
      stateIcon,
      datetime: datetimeText,
      confirmations: '0',
      memo: strings('No memo'),
      title: `${transation.state} Funds`,
    };
  }

  constructor(props) {
    super(props);
    const { navigation } = this.props;
    const transation = navigation.state.params;
    this.state = Transaction.processViewData(transation);
    this.onLinkPress = this.onLinkPress.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { navigation } = nextProps;
    const transation = navigation.state.params;
    this.setState(Transaction.processViewData(transation));
  }

  onLinkPress() {
    const { navigation } = this.props;
    const transation = navigation.state.params;
    const { rawTransaction } = transation;
    const url = common.getExplorerUrl(rawTransaction.symbol, rawTransaction.type, rawTransaction.hash);
    Linking.openURL(url);
  }

  render() {
    const { navigation } = this.props;
    const {
      transactionState, transactionId, amount, symbol, datetime, memo, confirmations, title, stateIcon,
    } = this.state;
    return (
      <View style={[flex.flex1]}>
        <ScrollView>
          <Header title={title} goBack={() => { navigation.goBack(); }} />
          <View style={[screenHelper.styles.body, styles.body]}>
            <View style={styles.sectionContainer}>
              <Loc style={[styles.sectionTitle, styles.state]} text={transactionState} />
              <View style={styles.amountView}>
                <Text style={styles.amount}>{amount}</Text>
                <Text style={styles.symbol}>{symbol}</Text>
                <View style={styles.stateIcon}>{stateIcon}</View>
              </View>
            </View>
            <View style={styles.sectionContainer}>
              <Loc style={[styles.sectionTitle]} text="Date" />
              <Text>{datetime}</Text>
            </View>
            <View style={styles.sectionContainer}>
              <Loc style={[styles.sectionTitle]} text="Confirmations" />
              <Text>{confirmations}</Text>
            </View>
            <View style={styles.sectionContainer}>
              <Loc style={[styles.sectionTitle, memo]} text="Memo" />
              <Text>{memo}</Text>
            </View>
            <View style={styles.sectionContainer}>
              <Loc style={[styles.sectionTitle]} text="Transaction ID" />
              <Text numberOfLines={1}>{transactionId}</Text>
            </View>
            <View style={styles.sectionContainer}>
              <TouchableOpacity style={styles.linkView} onPress={this.onLinkPress}>
                <Loc style={styles.link} text="View on blockchain" />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

Transaction.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
    state: PropTypes.object.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  updateTimestamp: state.Wallet.get('updateTimestamp'),
  currentLocale: state.App.get('language'),
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Transaction);
