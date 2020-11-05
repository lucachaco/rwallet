/** Actions related to Wallet functions */

const actions = {
  // Constants definition
  SET_WALLET_MANAGER: 'SET_WALLET_MANAGER',

  GET_PRICE: 'GET_PRICE',
  GET_PRICE_RESULT: 'GET_PRICE_RESULT',

  FETCH_TOKENS: 'FETCH_TOKENS',
  FETCH_TOKENS_RESULT: 'FETCH_TOKENS_RESULT',
  RESET_TOKENS_UPDATED: 'RESET_TOKENS_UPDATED',

  FETCH_TRANSACTIONS: 'FETCH_TRANSACTIONS',
  FETCH_TRANSACTIONS_RESULT: 'FETCH_TRANSACTIONS_RESULT',
  UPDATE_TRANSACTION: 'UPDATE_TRANSACTION',

  FETCH_LATEST_BLOCK_HEIGHT: 'FETCH_LATEST_BLOCK_HEIGHT',
  FETCH_LATEST_BLOCK_HEIGHT_RESULT: 'FETCH_LATEST_BLOCK_HEIGHT_RESULT',
  UPDATE_LATEST_BLOCK_HEIGHT: 'UPDATE_LATEST_BLOCK_HEIGHT',

  DELETE_KEY: 'DELETE_KEY',
  RENAME_KEY: 'RENAME_KEY',
  CREATE_KEY: 'CREATE_KEY',

  UPDATE_ASSET_VALUE: 'UPDATE_ASSET_VALUE',
  WALLETS_UPDATED: 'WALLETS_UPDATED',
  UPDATE_WALLETS_DETAIL: 'UPDATE_WALLETS_DETAIL',

  RESET_WALLETS_UPDATED: 'RESET_WALLETS_UPDATED',
  WALLET_NAME_UPDATED: 'WALLET_NAME_UPDATED',
  RESET_WALLET_NAME_UPDATED: 'RESET_WALLET_NAME_UPDATED',

  SET_SWAP_SOURCE: 'SET_SWAP_SOURCE',
  SET_SWAP_DEST: 'SET_SWAP_DEST',
  RESET_SWAP_SOURCE: 'RESET_SWAP_SOURCE',
  RESET_SWAP_DEST: 'RESET_SWAP_DEST',
  SWITCH_SWAP: 'SWITCH_SWAP',

  ADD_TOKEN: 'ADD_CUSTOM_TOKEN',
  SET_ADD_TOKEN_RESULT: 'SET_ADD_TOKEN_RESULT',
  RESET_ADD_TOKEN_RESULT: 'RESET_ADD_TOKEN_RESULT',
  DELETE_TOKEN: 'DELETE_TOKEN',

  GET_SWAP_RATE: 'GET_SWAP_RATE',
  GET_SWAP_RATE_RESULT: 'GET_SWAP_RATE_RESULT',
  SET_SWAP_RATE_RESULT_ERROR: 'GET_SWAP_RATE_RESULT_ERROR',
  RESET_SWAP_RATE_RESULT_ERROR: 'RESET_SWAP_RATE_RESULT_ERROR',

  INIT_LIVE_QUERY_TOKENS: 'INIT_LIVE_QUERY_TOKENS',
  SET_TOKENS_CHANNEL: 'SET_TOKENS_CHANNEL',

  INIT_LIVE_QUERY_TRANSACTIONS: 'INIT_LIVE_QUERY_TRANSACTIONS',
  SET_TRANSACTIONS_CHANNEL: 'SET_TRANSACTIONS_CHANNEL',

  INIT_LIVE_QUERY_BLOCK_HEIGHTS: 'INIT_LIVE_QUERY_BLOCK_HEIGHTS',
  SET_BLOCK_HEIGHTS_CHANNEL: 'SET_BLOCK_HEIGHT_CHANNEL',

  INIT_LIVE_QUERY_PENDING_PROPOSALS: 'INIT_LIVE_QUERY_PENDING_PROPOSALS',
  SET_PENDING_PROPOSAL_CHANNEL: 'SET_PENDING_PROPOSAL_CHANNEL',
  FETCH_PENDING_PROPOSALS: 'FETCH_PENDING_PROPOSALS',
  FETCH_PROPOSAL: 'FETCH_PROPOSAL',
  UPDATE_PROPOSAL: 'UPDATE_PROPOSAL',

  SET_SUBDOMAINS: 'SET_SUBDOMAINS',
  GET_BALANCE: 'GET_BALANCE',

  CREATE_READ_ONLY_WALLET: 'CREATE_READ_ONLY_WALLET',

  ADD_MULTISIG_BTC: 'ADD_MULTISIG_BTC',
  SET_MULTISIG_BTC_ADDRESS: 'SET_MULTISIG_BTC_ADDRESS',

  CREATE_SHARED_WALLET: 'CREATE_SHARED_WALLET',
  JOIN_SHARED_WALLET: 'JOIN_SHARED_WALLET',
  IMPORT_SHARED_WALLET: 'IMPORT_SHARED_WALLET',
  SET_SHARED_WALLET_CREATION_ERROR: 'SET_SHARED_WALLET_CREATION_ERROR',

  UPDATE_TOKEN_BALANCE: 'UPDATE_TOKEN_BALANCE',

  // Functions definition
  getPrice: (symbols, currencies) => ({
    type: actions.GET_PRICE,
    payload: {
      symbols,
      currencies,
    },
  }),
  fetchBalance: (walletManager) => ({
    type: actions.FETCH_BALANCE,
    payload: walletManager,
  }),
  resetTokensUpdated: () => ({
    type: actions.RESET_TOKENS_UPDATED,
  }),
  fetchTransactions: (params) => ({
    type: actions.FETCH_TRANSACTIONS,
    payload: params,
  }),
  updateAssetValue: (currency, prices) => ({
    type: actions.UPDATE_ASSET_VALUE,
    payload: { currency, prices },
  }),
  deleteKey: (key, walletManager) => ({
    type: actions.DELETE_KEY,
    payload: {
      key,
      walletManager,
    },
  }),
  renameKey: (key, name, walletManager) => ({
    type: actions.RENAME_KEY,
    payload: {
      key,
      name,
      walletManager,
    },
  }),
  createKey: (name, phrase, coins, walletManager, derivationPaths) => ({
    type: actions.CREATE_KEY,
    payload: {
      name,
      phrase,
      coins,
      walletManager,
      derivationPaths,
    },
  }),

  resetWalletsUpdated: () => ({
    type: actions.RESET_WALLETS_UPDATED,
  }),
  resetWalletNameUpdated: () => ({
    type: actions.RESET_WALLET_NAME_UPDATED,
  }),
  setSwapSource: (walletName, coin) => ({
    type: actions.SET_SWAP_SOURCE,
    payload: {
      walletName,
      coin,
    },
  }),
  setSwapDest: (walletName, coin) => ({
    type: actions.SET_SWAP_DEST,
    payload: {
      walletName,
      coin,
    },
  }),
  resetSwapSource: () => ({ type: actions.RESET_SWAP_SOURCE }),
  resetSwapDest: () => ({ type: actions.RESET_SWAP_DEST }),
  switchSwap: () => ({ type: actions.SWITCH_SWAP }),
  addToken: (walletManager, wallet, token) => ({
    type: actions.ADD_TOKEN,
    payload: {
      walletManager, wallet, token,
    },
  }),
  deleteToken: (walletManager, wallet, token) => ({
    type: actions.DELETE_TOKEN,
    payload: {
      walletManager, wallet, token,
    },
  }),
  resetAddTokenResult: () => ({
    type: actions.RESET_ADD_TOKEN_RESULT,
  }),
  addMultisigBTC: (wallet, invitationCode, type) => ({
    type: actions.ADD_MULTISIG_BTC,
    payload: {
      wallet, invitationCode, type,
    },
  }),
  setMultisigBTCAddress: (token, address) => ({
    type: actions.SET_MULTISIG_BTC_ADDRESS,
    payload: { token, address },
  }),
  getSwapRate: (sourceCoinId, destCoinId) => ({
    type: actions.GET_SWAP_RATE,
    payload: { sourceCoinId, destCoinId },
  }),
  resetSwapRateResultError: () => ({
    type: actions.RESET_SWAP_RATE_RESULT_ERROR,
  }),
  initLiveQueryTokens: (tokens) => ({
    type: actions.INIT_LIVE_QUERY_TOKENS,
    tokens,
  }),
  initLiveQueryTransactions: (tokens) => ({
    type: actions.INIT_LIVE_QUERY_TRANSACTIONS,
    tokens,
  }),
  initLiveQueryBlockHeights: () => ({
    type: actions.INIT_LIVE_QUERY_BLOCK_HEIGHTS,
  }),
  initLiveQueryPendingProposals: () => ({
    type: actions.INIT_LIVE_QUERY_PENDING_PROPOSALS,
  }),
  setSubdomains: (subdomains) => ({
    type: actions.SET_SUBDOMAINS,
    subdomains,
  }),
  getBalance: ({
    symbol, type, address, needFetch,
  }) => ({
    type: actions.GET_BALANCE,
    payload: {
      symbol, type, address, needFetch,
    },
  }),
  createReadOnlyWallet: (chain, type, address, coins) => ({
    type: actions.CREATE_READ_ONLY_WALLET,
    payload: {
      chain, type, address, coins,
    },
  }),
  createSharedWallet: (phrase, coin, multisigParams) => ({
    type: actions.CREATE_SHARED_WALLET,
    payload: {
      phrase, coin, multisigParams,
    },
  }),
  joinSharedWallet: (phrase, multisigParams) => ({
    type: actions.JOIN_SHARED_WALLET,
    payload: {
      phrase, multisigParams,
    },
  }),
  importSharedWallet: (phrase, multisigParams) => ({
    type: actions.IMPORT_SHARED_WALLET,
    payload: {
      phrase, multisigParams,
    },
  }),
  setSharedWalletCreationError: (error) => ({
    type: actions.SET_SHARED_WALLET_CREATION_ERROR,
    error,
  }),
  fetchPendingProposals: (tokens) => ({
    type: actions.FETCH_PENDING_PROPOSALS,
    payload: { tokens },
  }),
  setPendingProposalsChannel: (channel) => ({
    type: actions.SET_PENDING_PROPOSAL_CHANNEL,
    value: channel,
  }),
  updateProposal: (proposal) => ({
    type: actions.UPDATE_PROPOSAL,
    proposal,
  }),
  fetchProposal: (token) => ({
    type: actions.FETCH_PROPOSAL,
    payload: { token },
  }),
  updateTokenBalance: (tokens) => ({
    type: actions.UPDATE_TOKEN_BALANCE,
    tokens,
  }),
};

export default actions;
