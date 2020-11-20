const cryptos = [
    { name: 'Bitcoin', symbol: 'BTC' },
    { name: 'Ethereum', symbol: 'ETH' },
    { name: 'Tether', symbol: 'USDT' },
    { name: 'XRP', symbol: 'XRP' },
    { name: 'Litecoin', symbol: 'LTC' },
    { name: 'ChainLink', symbol: 'LINK' },
    { name: 'Bitcoin Cash', symbol: 'BCH' },
    { name: 'Polkadot', symbol: 'DOT' },
    { name: 'Binance Coin', symbol: 'BNB' },
    { name: 'Cardano', symbol: 'ADA' },
    { name: 'Bitcoin SV', symbol: 'BSV' },
    { name: 'USD Coin', symbol: 'USDC' },
    { name: 'EOS', symbol: 'EOS' },
    { name: 'Wrapped Bitcoin', symbol: 'WBTC' },
    { name: 'Monero', symbol: 'XMR' },
    { name: 'TRON', symbol: 'TRX' },
    { name: 'Stellar', symbol: 'XLM' },
    { name: 'Tezos', symbol: 'XTZ' },
    { name: 'Crypto.com Coin', symbol: 'CRO' },
    { name: 'UNUS SED LEO', symbol: 'LEO' },
    { name: 'NEO', symbol: 'NEO' },
    { name: 'Filecoin', symbol: 'FIL' },
    { name: 'Cosmos', symbol: 'ATOM' },
    { name: 'HEX', symbol: 'HEX' },
    { name: 'Dai', symbol: 'DAI' },
    { name: 'Aave', symbol: 'AAVE' },
    { name: 'Huobi Token', symbol: 'HT' },
    { name: 'Uniswap', symbol: 'UNI' },
    { name: 'yearn.finance', symbol: 'YFI' },
    { name: 'Dash', symbol: 'DASH' },
    { name: 'VeChain', symbol: 'VET' },
    { name: 'IOTA', symbol: 'MIOTA' },
    { name: 'Ethereum Classic', symbol: 'ETC' },
    { name: 'Zcash', symbol: 'ZEC' },
    { name: 'Theta Token', symbol: 'THETA' },
    { name: 'Waves', symbol: 'WAVES' },
    { name: 'Synthetix Network Token', symbol: 'SNX' },
    { name: 'Maker', symbol: 'MKR' },
    { name: 'Celsius', symbol: 'CEL' },
    { name: 'Compound', symbol: 'COMP' },
    { name: 'OmiseGO', symbol: 'OMG' },
    { name: 'Bitcoin Cash ABC', symbol: 'BCHA' },
    { name: 'UMA', symbol: 'UMA' },
    { name: 'Ontology', symbol: 'ONT' },
    { name: 'Dogecoin', symbol: 'DOGE' },
    { name: 'FTX Token', symbol: 'FTT' },
    { name: 'OKB', symbol: 'OKB' },
    { name: 'Kusama', symbol: 'KSM' },
    { name: 'renBTC', symbol: 'RENBTC' },
    { name: 'Creditcoin', symbol: 'CTC' },
    { name: 'Algorand', symbol: 'ALGO' },
    { name: 'Basic Attention Token', symbol: 'BAT' },
    { name: 'BitTorrent', symbol: 'BTT' },
    { name: 'DigiByte', symbol: 'DGB' },
    { name: 'Ren', symbol: 'REN' },
    { name: '0x', symbol: 'ZRX' },
    { name: 'TrueUSD', symbol: 'TUSD' },
    { name: 'NEAR Protocol', symbol: 'NEAR' },
    { name: 'Everipedia', symbol: 'IQ' },
    { name: 'Decred', symbol: 'DCR' },
    { name: 'TNC Coin', symbol: 'TNC' },
    { name: 'MINDOL', symbol: 'MIN' },
    { name: 'Paxos Standard Token', symbol: 'PAX' },
    { name: 'SushiSwap', symbol: 'SUSHI' },
    { name: 'Zilliqa', symbol: 'ZIL' },
    { name: 'Ocean Protocol', symbol: 'OCEAN' },
    { name: 'HedgeTrade', symbol: 'HEDG' },
    { name: 'Qtum', symbol: 'QTUM' },
    { name: 'Celo', symbol: 'CELO' },
    { name: 'Loopring', symbol: 'LRC' },
    { name: 'Reserve Rights', symbol: 'RSR' },
    { name: 'ICON', symbol: 'ICX' },
    { name: 'Hedera Hashgraph', symbol: 'HBAR' },
    { name: 'ABBC Coin', symbol: 'ABBC' },
    { name: 'Kyber Network', symbol: 'KNC' },
    { name: 'Quant', symbol: 'QNT' },
    { name: 'Vitae', symbol: 'VITAE' },
    { name: 'Augur', symbol: 'REP' },
    { name: 'Bitcoin Gold', symbol: 'BTG' },
    { name: 'Lisk', symbol: 'LSK' },
    { name: 'Blockstack', symbol: 'STX' },
    { name: 'THORChain', symbol: 'RUNE' },
    { name: 'LUNA', symbol: 'LUNA' },
    { name: 'Revain', symbol: 'REV' },
    { name: 'Aragon', symbol: 'ANT' },
    { name: 'Siacoin', symbol: 'SC' },
    { name: 'Nexo', symbol: 'NEXO' },
    { name: 'Band Protocol', symbol: 'BAND' },
    { name: 'Decentraland', symbol: 'MANA' },
    { name: 'Sologenic', symbol: 'SOLO' },
    { name: 'Enjin Coin', symbol: 'ENJ' },
    { name: 'DeFiChain', symbol: 'DFI' },
    { name: 'TerraKRW', symbol: 'KRT' },
    { name: 'SwissBorg', symbol: 'CHSB' },
    { name: 'Numeraire', symbol: 'NMR' },
    { name: 'Elrond', symbol: 'EGLD' },
    { name: 'Golem', symbol: 'GNT' },
    { name: 'Curve DAO Token', symbol: 'CRV' },
    { name: 'CyberVein', symbol: 'CVT' },
    { name: 'Nano', symbol: 'NANO' },
    { name: 'Bitcoin Diamond', symbol: 'BCD' },
    { name: 'Ravencoin', symbol: 'RVN' },
    { name: 'Sola Token', symbol: 'SOL' },
    { name: 'Balancer', symbol: 'BAL' },
    { name: 'Status', symbol: 'SNT' },
    { name: 'Orchid', symbol: 'OXT' },
    { name: 'Helium', symbol: 'HNT' },
    { name: 'Holo', symbol: 'HOT' },
    { name: 'Bitcoin BEP2', symbol: 'BTCB' },
    { name: 'Avalanche', symbol: 'AVAX' },
    { name: 'Bancor', symbol: 'BNT' },
    { name: 'DFI.Money', symbol: 'YFII' },
    { name: 'MonaCoin', symbol: 'MONA' },
    { name: 'Matic Network', symbol: 'MATIC' },
    { name: 'Bitmark', symbol: 'BTM' },
    { name: 'Kava', symbol: 'KAVA' },
    { name: 'Arweave', symbol: 'AR' },
    { name: 'iExec RLC', symbol: 'RLC' },
    { name: 'Neutrino USD', symbol: 'USDN' },
    { name: 'Swipe', symbol: 'SXP' },
    { name: 'PAX Gold', symbol: 'PAXG' },
    { name: 'IOStoken', symbol: 'IOST' },
    { name: 'IoTeX', symbol: 'IOTX' },
    { name: 'Verge', symbol: 'XVG' },
    { name: 'MaidSafeCoin', symbol: 'MAID' },
    { name: 'RIF Token', symbol: 'RIF' },
    { name: 'Nervos Network', symbol: 'CKB' },
    { name: 'Horizen', symbol: 'ZEN' },
    { name: 'Uquid Coin', symbol: 'UQC' },
    { name: 'Storj', symbol: 'STORJ' },
    { name: 'Gnosis', symbol: 'GNO' },
    { name: 'Velas', symbol: 'VLX' },
    { name: 'Civic', symbol: 'CVC' },
    { name: 'Steem', symbol: 'STEEM' },
    { name: 'Komodo', symbol: 'KMD' },
    { name: 'Serum', symbol: 'SRM' },
    { name: 'BitShares', symbol: 'BTS' },
    { name: 'OriginTrail', symbol: 'TRAC' },
    { name: 'UTRUST', symbol: 'UTK' },
    { name: 'Chiliz', symbol: 'CHZ' },
    { name: 'Ardor', symbol: 'ARDR' },
    { name: 'BOScoin', symbol: 'BOS' },
    { name: 'TomoChain', symbol: 'TOMO' },
    { name: 'aelf', symbol: 'ELF' },
    { name: 'Unibright', symbol: 'UBT' },
    { name: 'Kleros', symbol: 'PNK' },
    { name: 'Hive Blockchain', symbol: 'HIVE' },
    { name: 'WhiteCoin', symbol: 'XWC' },
    { name: 'Ankr', symbol: 'ANKR' },
    { name: 'JUST', symbol: 'JST' },
    { name: 'Wanchain', symbol: 'WAN' },
    { name: 'Ark', symbol: 'ARK' },
    { name: 'SUN', symbol: 'SUN' },
    { name: 'Centrality', symbol: 'CENNZ' },
    { name: 'BTU Protocol', symbol: 'BTU' },
    { name: 'WAX', symbol: 'WAXP' },
    { name: 'Bankera', symbol: 'BNK' },
    { name: 'IRISnet', symbol: 'IRIS' },
    { name: 'Tellor', symbol: 'TRB' },
    { name: 'Electroneum', symbol: 'ETN' },
];

// 160 cryptos listed

exports.CRYPTOS = cryptos;