import _ from 'lodash';
import { Text } from 'react-native';
import React from 'react';

import common from './common';
import BackBtn from '../components/common/buttons/back.btn.stateless';

import WalletAddIndex from '../pages/wallet/dashboard/add.index';
import Dashboard from '../pages/wallet/dashboard/dashboard';
import WalletSelectCurrency from '../pages/wallet/select.currency';
import WalletRecovery from '../pages/wallet/recovery';
import RecoveryPhrase from '../pages/wallet/recovery.phrase';
import WalletList from '../pages/wallet/dashboard/list';
import VerifyPhrase from '../pages/wallet/verify.phrase';
import VerifyPhraseSuccess from '../pages/wallet/verify.phrase.success';
import Transfer from '../pages/wallet/transfer';
import TransferCompleted from '../pages/wallet/transfer.completed';
import WalletReceive from '../pages/wallet/receive';
import WalletHistory from '../pages/wallet/history';
import SelectWallet from '../pages/wallet/select.wallet';
import Scan from '../pages/wallet/scan';
import WalletConnectPage from '../pages/wallet/wallet.connect';
import Transaction from '../pages/wallet/transaction';
import Swap from '../pages/wallet/swap/swap';
import SwapSelection from '../pages/wallet/swap/swap.selection';
import SwapCompleted from '../pages/wallet/swap.completed';
import AddToken from '../pages/wallet/add.token';
import AddCustomToken from '../pages/wallet/add.custom.token';
import AddCustomTokenConfirm from '../pages/wallet/add.custom.token.confirm';
import StartPage from '../pages/start/start';
import TermsPage from '../pages/start/terms';
import MineIndex from '../pages/mine/index';
import ExchangeIndex from '../pages/wallet/swap';
import ResetPasscodeSuccess from '../pages/mine/reset.passcode.success';
import Language from '../pages/mine/language';
import Currency from '../pages/mine/currency';
import TwoFactorAuth from '../pages/mine/two.factor.auth';
import KeySettings from '../pages/mine/key.settings';
import KeyName from '../pages/mine/key.name';
import Rename from '../pages/mine/rename';
import DAppIndex from '../pages/dapp/index';
import DAppList from '../pages/dapp/list';
import DAppBrowser from '../pages/dapp/browser';
import RnsCreateName from '../pages/wallet/rns/create';
import RnsStatus from '../pages/wallet/rns/status';
import AddReadOnlyWallet from '../pages/wallet/readonly/add';
import AddReadOnlyWalletConfirmation from '../pages/wallet/readonly/confirm';
import CreateMultisigAddress from '../pages/wallet/multisig/create';
import JoinMultisigAddress from '../pages/wallet/multisig/join';
import ImportMultisigAddress from '../pages/wallet/multisig/import';
import MultisigAddressInvitation from '../pages/wallet/multisig/invitation';
import MultisigProposalDetail from '../pages/wallet/multisig/proposalDetail';
import SharedWalletIndex from '../pages/wallet/dashboard/shared.wallet.index';
import CreateProposalSuccess from '../pages/wallet/multisig/create.proposal.success';

const defaultNavigationOptions = () => ({ navigation }) => {
  common.currentNavigation = navigation;
  return {
    headerTitle: '',
    headerRight: <Text />,
    headerLeft: <BackBtn navigation={navigation} />,
    headerForceInset: {
      top: 'always', // always/显示、never/隐藏
    },
    headerTitleStyle: {
      alignSelf: 'center',
      textAlign: 'center',
      flex: 1,
    },
  };
};

const routeConfigMap = {
  home: {
    WalletAddIndex: {
      screen: WalletAddIndex,
      path: 'WalletAddIndex',
      navigationOptions: () => ({
        headerTitle: 'Add Wallet',
      }),
    },
    Dashboard: {
      screen: Dashboard,
      path: 'Dashboard',
      navigationOptions: () => ({
        headerTitle: 'Dashboard',
      }),
    },
    WalletSelectCurrency: {
      screen: WalletSelectCurrency,
      path: 'WalletSelectCurrency',
      navigationOptions: () => ({
        headerTitle: 'Select Wallet Currency',
      }),
    },
    WalletRecovery: {
      screen: WalletRecovery,
      path: 'WalletRecovery',
      navigationOptions: () => ({
        headerTitle: 'Recovery Wallet',
      }),
    },
    RecoveryPhrase: {
      screen: RecoveryPhrase,
      path: 'RecoveryPhrase',
      navigationOptions: () => ({
        headerTitle: 'Recovery Phrase',
      }),
    },
    WalletList: {
      screen: WalletList,
      path: 'WalletList',
      navigationOptions: () => ({
        headerTitle: 'Wallet List',
      }),
    },
    SelectWallet: {
      screen: SelectWallet,
      path: 'SelectWallet',
      navigationOptions: () => ({
        headerTitle: 'Select Wallet',
      }),
    },
    WalletConnectPage: {
      screen: WalletConnectPage,
      path: 'WalletConnectPage',
      navigationOptions: () => ({
        headerTitle: 'WalletConnectPage',
      }),
    },
    StartPage: {
      screen: StartPage,
      path: 'StartPage',
      navigationOptions: () => ({
        headerTitle: 'StartPage',
      }),
    },
    TermsPage: {
      screen: TermsPage,
      path: 'TermsPage',
      navigationOptions: () => ({
        headerTitle: 'TermsPage',
      }),
    },
    VerifyPhrase: {
      screen: VerifyPhrase,
      path: 'VerifyPhrase',
      navigationOptions: () => ({
        headerTitle: 'VerifyPhrase',
      }),
    },
    VerifyPhraseSuccess: {
      screen: VerifyPhraseSuccess,
      path: 'VerifyPhraseSuccess',
      navigationOptions: () => ({
        headerTitle: 'VerifyPhraseSuccess',
      }),
    },
    Transfer: {
      screen: Transfer,
      path: 'Transfer',
      navigationOptions: () => ({
        headerTitle: 'Transfer',
      }),
    },
    TransferCompleted: {
      screen: TransferCompleted,
      path: 'TransferCompleted',
      navigationOptions: () => ({
        headerTitle: 'TransferCompleted',
      }),
    },
    WalletReceive: {
      screen: WalletReceive,
      path: 'WalletReceive',
      navigationOptions: () => ({
        headerTitle: 'WalletReceive',
      }),
    },
    WalletHistory: {
      screen: WalletHistory,
      path: 'WalletHistory',
      navigationOptions: () => ({
        headerTitle: 'WalletHistory',
      }),
    },
    Scan: {
      screen: Scan,
      path: 'Scan',
      navigationOptions: () => ({
        headerTitle: 'Scan',
      }),
    },
    Transaction: {
      screen: Transaction,
      path: 'Transaction',
      navigationOptions: () => ({
        headerTitle: 'Transaction',
      }),
    },
    Swap: {
      screen: Swap,
      path: 'Swap',
      navigationOptions: () => ({
        headerTitle: 'Swap',
      }),
    },
    SwapSelection: {
      screen: SwapSelection,
      path: 'SwapSelection',
      navigationOptions: () => ({
        headerTitle: 'SwapSelection',
      }),
    },
    SwapCompleted: {
      screen: SwapCompleted,
      path: 'SwapCompleted',
      navigationOptions: () => ({
        headerTitle: 'SwapCompleted',
      }),
    },
    AddToken: {
      screen: AddToken,
      path: 'AddToken',
      navigationOptions: () => ({
        headerTitle: 'AddToken',
      }),
    },
    AddCustomToken: {
      screen: AddCustomToken,
      path: 'AddCustomToken',
      navigationOptions: () => ({
        headerTitle: 'AddCustomToken',
      }),
    },
    AddCustomTokenConfirm: {
      screen: AddCustomTokenConfirm,
      path: 'AddCustomTokenConfirm',
      navigationOptions: () => ({
        headerTitle: 'AddCustomTokenConfirm',
      }),
    },
    AddReadOnlyWallet: {
      screen: AddReadOnlyWallet,
      path: 'AddReadOnlyWallet',
      navigationOptions: () => ({
        headerTitle: 'AddReadOnlyWallet',
      }),
    },
    AddReadOnlyWalletConfirmation: {
      screen: AddReadOnlyWalletConfirmation,
      path: 'AddReadOnlyWalletConfirmation',
      navigationOptions: () => ({
        headerTitle: 'AddReadOnlyWalletConfirmation',
      }),
    },
    CreateMultisigAddress: {
      screen: CreateMultisigAddress,
      path: 'CreateMultisigAddress',
      navigationOptions: () => ({
        headerTitle: 'CreateMultisigAddress',
      }),
    },
    JoinMultisigAddress: {
      screen: JoinMultisigAddress,
      path: 'JoinMultisigAddress',
      navigationOptions: () => ({
        headerTitle: 'JoinMultisigAddress',
      }),
    },
    ImportMultisigAddress: {
      screen: ImportMultisigAddress,
      path: 'ImportMultisigAddress',
      navigationOptions: () => ({
        headerTitle: 'ImportMultisigAddress',
      }),
    },
    MultisigAddressInvitation: {
      screen: MultisigAddressInvitation,
      path: 'MultisigAddressInvitation',
      navigationOptions: () => ({
        headerTitle: 'MultisigAddressInvitation',
      }),
    },
    MultisigProposalDetail: {
      screen: MultisigProposalDetail,
      path: 'MultisigProposalDetail',
      navigationOptions: () => ({
        headerTitle: 'MultisigProposalDetail',
      }),
    },
    SharedWalletIndex: {
      screen: SharedWalletIndex,
      path: 'SharedWalletIndex',
      navigationOptions: () => ({
        headerTitle: 'SharedWalletIndex',
      }),
    },
    CreateProposalSuccess: {
      screen: CreateProposalSuccess,
      path: 'CreateProposalSuccess',
      navigationOptions: () => ({
        headerTitle: 'CreateProposalSuccess',
      }),
    },
  },
  exchange: {
    ExchangeIndex: {
      screen: ExchangeIndex,
      path: 'ExchangeIndex',
      navigationOptions: () => ({
        header: null,
      }),
    },
  },
  mine: {
    MineIndex: {
      screen: MineIndex,
      path: 'MineIndex',
      navigationOptions: () => ({
        headerTitle: 'Mine',
      }),
    },
    Language: {
      screen: Language,
      path: 'Language',
      navigationOptions: () => ({
        headerTitle: 'Language',
      }),
    },
    Currency: {
      screen: Currency,
      path: 'Currency',
      navigationOptions: () => ({
        headerTitle: 'Currency',
      }),
    },
    TwoFactorAuth: {
      screen: TwoFactorAuth,
      path: 'TwoFactorAuth',
      navigationOptions: () => ({
        headerTitle: 'TwoFactorAuth',
      }),
    },
    ResetPasscodeSuccess: {
      screen: ResetPasscodeSuccess,
      path: 'ResetPasscodeSuccess',
      navigationOptions: () => ({
        headerTitle: 'ResetPasscode',
      }),
    },
    KeySettings: {
      screen: KeySettings,
      path: 'KeySettings',
      navigationOptions: () => ({
        headerTitle: 'KeySettings',
      }),
    },
    KeyName: {
      screen: KeyName,
      path: 'KeyName',
      navigationOptions: () => ({
        headerTitle: 'KeyName',
      }),
    },
    Rename: {
      screen: Rename,
      path: 'Rename',
      navigationOptions: () => ({
        headerTitle: 'Rename',
      }),
    },
    RnsCreateName: {
      screen: RnsCreateName,
      path: 'RnsCreateName',
      navigationOptions: () => ({
        headerTitle: 'RnsCreateName',
      }),
    },
    RnsStatus: {
      screen: RnsStatus,
      path: 'RnsStatus',
      navigationOptions: () => ({
        headerTitle: 'RnsStatus',
      }),
    },
  },
  app: {
    DAppIndex: {
      screen: DAppIndex,
      path: 'DAppIndex',
      navigationOptions: () => ({
        headerTitle: 'DAppIndex',
      }),
    },
    DAppList: {
      screen: DAppList,
      path: 'DAppList',
      navigationOptions: () => ({
        headerTitle: 'DAppList',
      }),
    },
    DAppBrowser: {
      screen: DAppBrowser,
      path: 'DAppBrowser',
      navigationOptions: () => ({
        headerTitle: 'DAppBrowser',
      }),
    },
  },
};

function hasEqualKey(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const equalKeys = _.intersection(keys1, keys2);
  if (equalKeys.length === 0) {
    return false;
  }
  return equalKeys[0];
}

const routeConfigMaps = (() => {
  let ret = {};
  const keys = Object.keys(routeConfigMap);
  _.each(keys, (key) => {
    const crt = routeConfigMap[key];
    const equalKey = hasEqualKey(ret, crt);
    if (equalKey) {
      console.error(`导航配置地图错误，定义了相同名称:${equalKey}`);
    }
    ret = { ...ret, ...crt };
  });
  return ret;
})();

export { defaultNavigationOptions, routeConfigMaps };
