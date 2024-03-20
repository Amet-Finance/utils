/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export declare namespace Types {
  export type BondFeeDetailsStruct = {
    purchaseRate: BigNumberish;
    earlyRedemptionRate: BigNumberish;
    referrerRewardRate: BigNumberish;
    isInitiated: boolean;
  };

  export type BondFeeDetailsStructOutput = [number, number, number, boolean] & {
    purchaseRate: number;
    earlyRedemptionRate: number;
    referrerRewardRate: number;
    isInitiated: boolean;
  };

  export type ReferrerRecordStruct = {
    quantity: BigNumberish;
    claimed: BigNumberish;
  };

  export type ReferrerRecordStructOutput = [number, number] & {
    quantity: number;
    claimed: number;
  };
}

export interface VaultInterface extends utils.Interface {
  functions: {
    "acceptOwnership()": FunctionFragment;
    "claimReferralRewards(address)": FunctionFragment;
    "getBondFeeDetails(address)": FunctionFragment;
    "getReferrerData(address,address)": FunctionFragment;
    "initialBondFeeDetails()": FunctionFragment;
    "initializeBond(address)": FunctionFragment;
    "isAddressRestricted(address)": FunctionFragment;
    "issuanceFee()": FunctionFragment;
    "issuerAddress()": FunctionFragment;
    "owner()": FunctionFragment;
    "pendingOwner()": FunctionFragment;
    "recordReferralPurchase(address,address,uint40)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updateBondFeeDetails(address,uint8,uint8,uint8)": FunctionFragment;
    "updateIssuanceFee(uint256)": FunctionFragment;
    "updateRestrictionStatus(address,bool)": FunctionFragment;
    "withdraw(address,address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "acceptOwnership"
      | "claimReferralRewards"
      | "getBondFeeDetails"
      | "getReferrerData"
      | "initialBondFeeDetails"
      | "initializeBond"
      | "isAddressRestricted"
      | "issuanceFee"
      | "issuerAddress"
      | "owner"
      | "pendingOwner"
      | "recordReferralPurchase"
      | "renounceOwnership"
      | "transferOwnership"
      | "updateBondFeeDetails"
      | "updateIssuanceFee"
      | "updateRestrictionStatus"
      | "withdraw"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "acceptOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "claimReferralRewards",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getBondFeeDetails",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getReferrerData",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "initialBondFeeDetails",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initializeBond",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isAddressRestricted",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "issuanceFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "issuerAddress",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "recordReferralPurchase",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateBondFeeDetails",
    values: [string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateIssuanceFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateRestrictionStatus",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimReferralRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBondFeeDetails",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReferrerData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initialBondFeeDetails",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initializeBond",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isAddressRestricted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "issuanceFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "issuerAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "recordReferralPurchase",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateBondFeeDetails",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateIssuanceFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateRestrictionStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "BondFeeDetailsUpdated(address,uint8,uint8,uint8)": EventFragment;
    "FeesWithdrawn(address,address,uint256)": EventFragment;
    "IssuanceFeeChanged(uint256)": EventFragment;
    "OwnershipTransferStarted(address,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "ReferralRecord(address,address,uint40)": EventFragment;
    "ReferrerRewardClaimed(address,address,uint256)": EventFragment;
    "RestrictionStatusUpdated(address,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BondFeeDetailsUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FeesWithdrawn"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "IssuanceFeeChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferStarted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReferralRecord"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReferrerRewardClaimed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RestrictionStatusUpdated"): EventFragment;
}

export interface BondFeeDetailsUpdatedEventObject {
  bondAddress: string;
  purchaseRate: number;
  earlyRedemptionRate: number;
  referrerRewardRate: number;
}
export type BondFeeDetailsUpdatedEvent = TypedEvent<
  [string, number, number, number],
  BondFeeDetailsUpdatedEventObject
>;

export type BondFeeDetailsUpdatedEventFilter =
  TypedEventFilter<BondFeeDetailsUpdatedEvent>;

export interface FeesWithdrawnEventObject {
  token: string;
  to: string;
  amount: BigNumber;
}
export type FeesWithdrawnEvent = TypedEvent<
  [string, string, BigNumber],
  FeesWithdrawnEventObject
>;

export type FeesWithdrawnEventFilter = TypedEventFilter<FeesWithdrawnEvent>;

export interface IssuanceFeeChangedEventObject {
  fee: BigNumber;
}
export type IssuanceFeeChangedEvent = TypedEvent<
  [BigNumber],
  IssuanceFeeChangedEventObject
>;

export type IssuanceFeeChangedEventFilter =
  TypedEventFilter<IssuanceFeeChangedEvent>;

export interface OwnershipTransferStartedEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferStartedEvent = TypedEvent<
  [string, string],
  OwnershipTransferStartedEventObject
>;

export type OwnershipTransferStartedEventFilter =
  TypedEventFilter<OwnershipTransferStartedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface ReferralRecordEventObject {
  bondAddress: string;
  referrer: string;
  quantity: number;
}
export type ReferralRecordEvent = TypedEvent<
  [string, string, number],
  ReferralRecordEventObject
>;

export type ReferralRecordEventFilter = TypedEventFilter<ReferralRecordEvent>;

export interface ReferrerRewardClaimedEventObject {
  bondAddress: string;
  referrer: string;
  amount: BigNumber;
}
export type ReferrerRewardClaimedEvent = TypedEvent<
  [string, string, BigNumber],
  ReferrerRewardClaimedEventObject
>;

export type ReferrerRewardClaimedEventFilter =
  TypedEventFilter<ReferrerRewardClaimedEvent>;

export interface RestrictionStatusUpdatedEventObject {
  referrer: string;
  isBlocked: boolean;
}
export type RestrictionStatusUpdatedEvent = TypedEvent<
  [string, boolean],
  RestrictionStatusUpdatedEventObject
>;

export type RestrictionStatusUpdatedEventFilter =
  TypedEventFilter<RestrictionStatusUpdatedEvent>;

export interface Vault extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VaultInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    acceptOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    claimReferralRewards(
      bondAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    getBondFeeDetails(
      bondAddress: string,
      overrides?: CallOverrides
    ): Promise<[Types.BondFeeDetailsStructOutput]>;

    getReferrerData(
      bondAddress: string,
      referrerAddress: string,
      overrides?: CallOverrides
    ): Promise<
      [Types.ReferrerRecordStructOutput] & {
        referrerData: Types.ReferrerRecordStructOutput;
      }
    >;

    initialBondFeeDetails(
      overrides?: CallOverrides
    ): Promise<
      [number, number, number, boolean] & {
        purchaseRate: number;
        earlyRedemptionRate: number;
        referrerRewardRate: number;
        isInitiated: boolean;
      }
    >;

    initializeBond(
      bondAddress: string,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    isAddressRestricted(
      referrerAddress: string,
      overrides?: CallOverrides
    ): Promise<[boolean] & { isRestricted: boolean }>;

    issuanceFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    issuerAddress(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pendingOwner(overrides?: CallOverrides): Promise<[string]>;

    recordReferralPurchase(
      operator: string,
      referrer: string,
      quantity: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    renounceOwnership(overrides?: CallOverrides): Promise<[void]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    updateBondFeeDetails(
      bondAddress: string,
      purchaseRate: BigNumberish,
      earlyRedemptionRate: BigNumberish,
      referrerRewardRate: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    updateIssuanceFee(
      fee: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    updateRestrictionStatus(
      referrer: string,
      status: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    withdraw(
      token: string,
      toAddress: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  acceptOwnership(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  claimReferralRewards(
    bondAddress: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  getBondFeeDetails(
    bondAddress: string,
    overrides?: CallOverrides
  ): Promise<Types.BondFeeDetailsStructOutput>;

  getReferrerData(
    bondAddress: string,
    referrerAddress: string,
    overrides?: CallOverrides
  ): Promise<Types.ReferrerRecordStructOutput>;

  initialBondFeeDetails(
    overrides?: CallOverrides
  ): Promise<
    [number, number, number, boolean] & {
      purchaseRate: number;
      earlyRedemptionRate: number;
      referrerRewardRate: number;
      isInitiated: boolean;
    }
  >;

  initializeBond(
    bondAddress: string,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  isAddressRestricted(
    referrerAddress: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  issuanceFee(overrides?: CallOverrides): Promise<BigNumber>;

  issuerAddress(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  pendingOwner(overrides?: CallOverrides): Promise<string>;

  recordReferralPurchase(
    operator: string,
    referrer: string,
    quantity: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  renounceOwnership(overrides?: CallOverrides): Promise<void>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  updateBondFeeDetails(
    bondAddress: string,
    purchaseRate: BigNumberish,
    earlyRedemptionRate: BigNumberish,
    referrerRewardRate: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  updateIssuanceFee(
    fee: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  updateRestrictionStatus(
    referrer: string,
    status: boolean,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  withdraw(
    token: string,
    toAddress: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    acceptOwnership(overrides?: CallOverrides): Promise<void>;

    claimReferralRewards(
      bondAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    getBondFeeDetails(
      bondAddress: string,
      overrides?: CallOverrides
    ): Promise<Types.BondFeeDetailsStructOutput>;

    getReferrerData(
      bondAddress: string,
      referrerAddress: string,
      overrides?: CallOverrides
    ): Promise<Types.ReferrerRecordStructOutput>;

    initialBondFeeDetails(
      overrides?: CallOverrides
    ): Promise<
      [number, number, number, boolean] & {
        purchaseRate: number;
        earlyRedemptionRate: number;
        referrerRewardRate: number;
        isInitiated: boolean;
      }
    >;

    initializeBond(
      bondAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isAddressRestricted(
      referrerAddress: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    issuanceFee(overrides?: CallOverrides): Promise<BigNumber>;

    issuerAddress(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    pendingOwner(overrides?: CallOverrides): Promise<string>;

    recordReferralPurchase(
      operator: string,
      referrer: string,
      quantity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateBondFeeDetails(
      bondAddress: string,
      purchaseRate: BigNumberish,
      earlyRedemptionRate: BigNumberish,
      referrerRewardRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updateIssuanceFee(
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updateRestrictionStatus(
      referrer: string,
      status: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(
      token: string,
      toAddress: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "BondFeeDetailsUpdated(address,uint8,uint8,uint8)"(
      bondAddress?: null,
      purchaseRate?: null,
      earlyRedemptionRate?: null,
      referrerRewardRate?: null
    ): BondFeeDetailsUpdatedEventFilter;
    BondFeeDetailsUpdated(
      bondAddress?: null,
      purchaseRate?: null,
      earlyRedemptionRate?: null,
      referrerRewardRate?: null
    ): BondFeeDetailsUpdatedEventFilter;

    "FeesWithdrawn(address,address,uint256)"(
      token?: null,
      to?: null,
      amount?: null
    ): FeesWithdrawnEventFilter;
    FeesWithdrawn(
      token?: null,
      to?: null,
      amount?: null
    ): FeesWithdrawnEventFilter;

    "IssuanceFeeChanged(uint256)"(fee?: null): IssuanceFeeChangedEventFilter;
    IssuanceFeeChanged(fee?: null): IssuanceFeeChangedEventFilter;

    "OwnershipTransferStarted(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferStartedEventFilter;
    OwnershipTransferStarted(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferStartedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "ReferralRecord(address,address,uint40)"(
      bondAddress?: null,
      referrer?: null,
      quantity?: null
    ): ReferralRecordEventFilter;
    ReferralRecord(
      bondAddress?: null,
      referrer?: null,
      quantity?: null
    ): ReferralRecordEventFilter;

    "ReferrerRewardClaimed(address,address,uint256)"(
      bondAddress?: null,
      referrer?: null,
      amount?: null
    ): ReferrerRewardClaimedEventFilter;
    ReferrerRewardClaimed(
      bondAddress?: null,
      referrer?: null,
      amount?: null
    ): ReferrerRewardClaimedEventFilter;

    "RestrictionStatusUpdated(address,bool)"(
      referrer?: null,
      isBlocked?: null
    ): RestrictionStatusUpdatedEventFilter;
    RestrictionStatusUpdated(
      referrer?: null,
      isBlocked?: null
    ): RestrictionStatusUpdatedEventFilter;
  };

  estimateGas: {
    acceptOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    claimReferralRewards(
      bondAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    getBondFeeDetails(
      bondAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReferrerData(
      bondAddress: string,
      referrerAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialBondFeeDetails(overrides?: CallOverrides): Promise<BigNumber>;

    initializeBond(
      bondAddress: string,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    isAddressRestricted(
      referrerAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    issuanceFee(overrides?: CallOverrides): Promise<BigNumber>;

    issuerAddress(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;

    recordReferralPurchase(
      operator: string,
      referrer: string,
      quantity: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    updateBondFeeDetails(
      bondAddress: string,
      purchaseRate: BigNumberish,
      earlyRedemptionRate: BigNumberish,
      referrerRewardRate: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    updateIssuanceFee(
      fee: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    updateRestrictionStatus(
      referrer: string,
      status: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    withdraw(
      token: string,
      toAddress: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    claimReferralRewards(
      bondAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    getBondFeeDetails(
      bondAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReferrerData(
      bondAddress: string,
      referrerAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialBondFeeDetails(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initializeBond(
      bondAddress: string,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    isAddressRestricted(
      referrerAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    issuanceFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    issuerAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    recordReferralPurchase(
      operator: string,
      referrer: string,
      quantity: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    updateBondFeeDetails(
      bondAddress: string,
      purchaseRate: BigNumberish,
      earlyRedemptionRate: BigNumberish,
      referrerRewardRate: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    updateIssuanceFee(
      fee: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    updateRestrictionStatus(
      referrer: string,
      status: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    withdraw(
      token: string,
      toAddress: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}