"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnboardingActionString = exports.RequestMethod = exports.LinkAction = exports.LinkType = exports.AffiliateApplicationStatuses = exports.AddressRestrictionType = exports.NftRevealType = exports.LeaguesExpectedOutcome = exports.LeaderboardPnlSortBy = exports.LeaderboardPnlPeriod = exports.AccountLeaderboardPnlPeriod = exports.SignatureTypes = exports.SigningMethod = exports.AccountAction = exports.OrderStatus = exports.PositionStatus = exports.TimeInForce = exports.OrderType = exports.CandleResolution = exports.MarketStatisticDay = exports.TransferAsset = exports.OrderSide = exports.Asset = exports.Market = void 0;
const starkex_lib_1 = require("@dydxprotocol/starkex-lib");
exports.Market = starkex_lib_1.DydxMarket;
exports.Asset = starkex_lib_1.DydxAsset;
exports.OrderSide = starkex_lib_1.StarkwareOrderSide;
var TransferAsset;
(function (TransferAsset) {
    TransferAsset["USDC"] = "USDC";
})(TransferAsset = exports.TransferAsset || (exports.TransferAsset = {}));
var MarketStatisticDay;
(function (MarketStatisticDay) {
    MarketStatisticDay["ONE"] = "1";
    MarketStatisticDay["SEVEN"] = "7";
    MarketStatisticDay["THIRTY"] = "30";
})(MarketStatisticDay = exports.MarketStatisticDay || (exports.MarketStatisticDay = {}));
var CandleResolution;
(function (CandleResolution) {
    CandleResolution["ONE_DAY"] = "1DAY";
    CandleResolution["FOUR_HOURS"] = "4HOURS";
    CandleResolution["ONE_HOUR"] = "1HOUR";
    CandleResolution["THIRTY_MINS"] = "30MINS";
    CandleResolution["FIFTEEN_MINS"] = "15MINS";
    CandleResolution["FIVE_MINS"] = "5MINS";
    CandleResolution["ONE_MIN"] = "1MIN";
})(CandleResolution = exports.CandleResolution || (exports.CandleResolution = {}));
var OrderType;
(function (OrderType) {
    OrderType["LIMIT"] = "LIMIT";
    OrderType["MARKET"] = "MARKET";
    OrderType["STOP_LIMIT"] = "STOP_LIMIT";
    OrderType["TRAILING_STOP"] = "TRAILING_STOP";
    OrderType["TAKE_PROFIT"] = "TAKE_PROFIT";
})(OrderType = exports.OrderType || (exports.OrderType = {}));
var TimeInForce;
(function (TimeInForce) {
    TimeInForce["GTT"] = "GTT";
    TimeInForce["FOK"] = "FOK";
    TimeInForce["IOC"] = "IOC";
})(TimeInForce = exports.TimeInForce || (exports.TimeInForce = {}));
var PositionStatus;
(function (PositionStatus) {
    PositionStatus["OPEN"] = "OPEN";
    PositionStatus["CLOSED"] = "CLOSED";
    PositionStatus["LIQUIDATED"] = "LIQUIDATED";
})(PositionStatus = exports.PositionStatus || (exports.PositionStatus = {}));
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["PENDING"] = "PENDING";
    OrderStatus["OPEN"] = "OPEN";
    OrderStatus["FILLED"] = "FILLED";
    OrderStatus["CANCELED"] = "CANCELED";
    OrderStatus["UNTRIGGERED"] = "UNTRIGGERED";
})(OrderStatus = exports.OrderStatus || (exports.OrderStatus = {}));
var AccountAction;
(function (AccountAction) {
    AccountAction["DEPOSIT"] = "DEPOSIT";
    AccountAction["WITHDRAWAL"] = "WITHDRAWAL";
})(AccountAction = exports.AccountAction || (exports.AccountAction = {}));
var SigningMethod;
(function (SigningMethod) {
    SigningMethod["Compatibility"] = "Compatibility";
    SigningMethod["UnsafeHash"] = "UnsafeHash";
    SigningMethod["Hash"] = "Hash";
    SigningMethod["TypedData"] = "TypedData";
    SigningMethod["MetaMask"] = "MetaMask";
    SigningMethod["MetaMaskLatest"] = "MetaMaskLatest";
    SigningMethod["CoinbaseWallet"] = "CoinbaseWallet";
    SigningMethod["Personal"] = "Personal";
})(SigningMethod = exports.SigningMethod || (exports.SigningMethod = {}));
var SignatureTypes;
(function (SignatureTypes) {
    SignatureTypes[SignatureTypes["NO_PREPEND"] = 0] = "NO_PREPEND";
    SignatureTypes[SignatureTypes["DECIMAL"] = 1] = "DECIMAL";
    SignatureTypes[SignatureTypes["HEXADECIMAL"] = 2] = "HEXADECIMAL";
    SignatureTypes[SignatureTypes["PERSONAL"] = 3] = "PERSONAL";
})(SignatureTypes = exports.SignatureTypes || (exports.SignatureTypes = {}));
var AccountLeaderboardPnlPeriod;
(function (AccountLeaderboardPnlPeriod) {
    AccountLeaderboardPnlPeriod["DAILY"] = "DAILY";
    AccountLeaderboardPnlPeriod["WEEKLY"] = "WEEKLY";
    AccountLeaderboardPnlPeriod["MONTHLY"] = "MONTHLY";
    AccountLeaderboardPnlPeriod["ALL_TIME"] = "ALL_TIME";
    AccountLeaderboardPnlPeriod["COMPETITION"] = "COMPETITION";
    AccountLeaderboardPnlPeriod["CELEBRITY_COMPETITION"] = "CELEBRITY_COMPETITION";
    AccountLeaderboardPnlPeriod["DAILY_COMPETITION"] = "DAILY_COMPETITION";
    AccountLeaderboardPnlPeriod["LEAGUES"] = "LEAGUES";
})(AccountLeaderboardPnlPeriod = exports.AccountLeaderboardPnlPeriod || (exports.AccountLeaderboardPnlPeriod = {}));
var LeaderboardPnlPeriod;
(function (LeaderboardPnlPeriod) {
    LeaderboardPnlPeriod["DAILY"] = "DAILY";
    LeaderboardPnlPeriod["WEEKLY"] = "WEEKLY";
    LeaderboardPnlPeriod["MONTHLY"] = "MONTHLY";
    LeaderboardPnlPeriod["ALL_TIME"] = "ALL_TIME";
    LeaderboardPnlPeriod["COMPETITION"] = "COMPETITION";
    LeaderboardPnlPeriod["CELEBRITY_COMPETITION"] = "CELEBRITY_COMPETITION";
    LeaderboardPnlPeriod["DAILY_COMPETITION"] = "DAILY_COMPETITION";
    LeaderboardPnlPeriod["BRONZE"] = "BRONZE";
    LeaderboardPnlPeriod["SILVER"] = "SILVER";
    LeaderboardPnlPeriod["GOLD"] = "GOLD";
    LeaderboardPnlPeriod["PLATINUM"] = "PLATINUM";
    LeaderboardPnlPeriod["DIAMOND"] = "DIAMOND";
})(LeaderboardPnlPeriod = exports.LeaderboardPnlPeriod || (exports.LeaderboardPnlPeriod = {}));
var LeaderboardPnlSortBy;
(function (LeaderboardPnlSortBy) {
    LeaderboardPnlSortBy["ABSOLUTE"] = "ABSOLUTE";
    LeaderboardPnlSortBy["PERCENT"] = "PERCENT";
})(LeaderboardPnlSortBy = exports.LeaderboardPnlSortBy || (exports.LeaderboardPnlSortBy = {}));
var LeaguesExpectedOutcome;
(function (LeaguesExpectedOutcome) {
    LeaguesExpectedOutcome["PROMOTION"] = "PROMOTION";
    LeaguesExpectedOutcome["DEMOTION"] = "DEMOTION";
    LeaguesExpectedOutcome["SAME_LEAGUE"] = "SAME_LEAGUE";
    // deprecated.
    LeaguesExpectedOutcome["RELEGATION"] = "RELEGATION";
})(LeaguesExpectedOutcome = exports.LeaguesExpectedOutcome || (exports.LeaguesExpectedOutcome = {}));
var NftRevealType;
(function (NftRevealType) {
    NftRevealType["DAY"] = "DAY";
    NftRevealType["WEEK"] = "WEEK";
})(NftRevealType = exports.NftRevealType || (exports.NftRevealType = {}));
var AddressRestrictionType;
(function (AddressRestrictionType) {
    AddressRestrictionType["RESTRICTED"] = "RESTRICTED";
    AddressRestrictionType["RESTRICTED_TRANSFER"] = "RESTRICTED_TRANSFER";
    AddressRestrictionType["RESTRICTED_WITHDRAWAL"] = "RESTRICTED_WITHDRAWAL";
    AddressRestrictionType["RESTRICTED_COUNTRY"] = "RESTRICTED_COUNTRY";
    AddressRestrictionType["FIRST_OFFENSE"] = "FIRST_OFFENSE";
    AddressRestrictionType["COMPLIED"] = "COMPLIED";
})(AddressRestrictionType = exports.AddressRestrictionType || (exports.AddressRestrictionType = {}));
var AffiliateApplicationStatuses;
(function (AffiliateApplicationStatuses) {
    AffiliateApplicationStatuses["APPROVED"] = "APPROVED";
    AffiliateApplicationStatuses["PENDING"] = "PENDING";
    AffiliateApplicationStatuses["REJECTED"] = "REJECTED";
    AffiliateApplicationStatuses["REJECTED_AND_BANNED"] = "REJECTED_AND_BANNED";
})(AffiliateApplicationStatuses = exports.AffiliateApplicationStatuses || (exports.AffiliateApplicationStatuses = {}));
var LinkType;
(function (LinkType) {
    LinkType["PRIMARY"] = "PRIMARY";
    LinkType["SECONDARY"] = "SECONDARY";
})(LinkType = exports.LinkType || (exports.LinkType = {}));
var LinkAction;
(function (LinkAction) {
    LinkAction["CREATE_SECONDARY_REQUEST"] = "CREATE_SECONDARY_REQUEST";
    LinkAction["DELETE_SECONDARY_REQUEST"] = "DELETE_SECONDARY_REQUEST";
    LinkAction["ACCEPT_PRIMARY_REQUEST"] = "ACCEPT_PRIMARY_REQUEST";
    LinkAction["REJECT_PRIMARY_REQUEST"] = "REJECT_PRIMARY_REQUEST";
    LinkAction["REMOVE"] = "REMOVE";
})(LinkAction = exports.LinkAction || (exports.LinkAction = {}));
var RequestMethod;
(function (RequestMethod) {
    RequestMethod["POST"] = "POST";
    RequestMethod["PUT"] = "PUT";
    RequestMethod["GET"] = "GET";
    RequestMethod["DELETE"] = "DELETE";
})(RequestMethod = exports.RequestMethod || (exports.RequestMethod = {}));
// ============ API Response Field Types ============
var MarketStatus;
(function (MarketStatus) {
    MarketStatus["ONLINE"] = "ONLINE";
    MarketStatus["OFFLINE"] = "OFFLINE";
    MarketStatus["POST_ONLY"] = "POST_ONLY";
    MarketStatus["CANCEL_ONLY"] = "CANCEL_ONLY";
    MarketStatus["INITIALIZING"] = "INITIALIZING";
})(MarketStatus || (MarketStatus = {}));
// ============ Ethereum Signing ============
var OnboardingActionString;
(function (OnboardingActionString) {
    OnboardingActionString["ONBOARDING"] = "dYdX Onboarding";
    OnboardingActionString["KEY_DERIVATION"] = "dYdX STARK Key";
})(OnboardingActionString = exports.OnboardingActionString || (exports.OnboardingActionString = {}));
//# sourceMappingURL=types.js.map