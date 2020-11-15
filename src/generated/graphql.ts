import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Civilization = {
  __typename?: 'Civilization';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  expansion?: Maybe<Scalars['String']>;
  army_type?: Maybe<Scalars['String']>;
  unique_unit?: Maybe<Array<Maybe<Scalars['String']>>>;
  uniqueUnit?: Maybe<Array<Maybe<Unit>>>;
  unique_tech?: Maybe<Array<Maybe<Scalars['String']>>>;
  team_bonus?: Maybe<Scalars['String']>;
  civilization_bonus?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Query = {
  __typename?: 'Query';
  civilizations?: Maybe<Array<Maybe<Civilization>>>;
};

export type Unit = {
  __typename?: 'Unit';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  expansion?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['String']>;
  created_in?: Maybe<Scalars['String']>;
  cost?: Maybe<Cost>;
  build_time?: Maybe<Scalars['Int']>;
  reload_time?: Maybe<Scalars['Float']>;
  attack_delay?: Maybe<Scalars['Float']>;
  movement_rate?: Maybe<Scalars['Float']>;
  line_of_sight?: Maybe<Scalars['Int']>;
  range?: Maybe<Scalars['String']>;
  attacK?: Maybe<Scalars['Int']>;
  armor?: Maybe<Scalars['String']>;
  attack_bonus?: Maybe<Array<Maybe<Scalars['String']>>>;
  armor_bonus?: Maybe<Array<Maybe<Scalars['String']>>>;
  search_radius?: Maybe<Scalars['Int']>;
  accuracy?: Maybe<Scalars['String']>;
  blast_radius?: Maybe<Scalars['Float']>;
};

export type Cost = {
  __typename?: 'Cost';
  Wood?: Maybe<Scalars['Int']>;
  Food?: Maybe<Scalars['Int']>;
  Stone?: Maybe<Scalars['Int']>;
  Gold?: Maybe<Scalars['Int']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Civilization: ResolverTypeWrapper<Civilization>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Query: ResolverTypeWrapper<{}>;
  Unit: ResolverTypeWrapper<Unit>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Cost: ResolverTypeWrapper<Cost>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Civilization: Civilization;
  ID: Scalars['ID'];
  String: Scalars['String'];
  Query: {};
  Unit: Unit;
  Int: Scalars['Int'];
  Float: Scalars['Float'];
  Cost: Cost;
  Boolean: Scalars['Boolean'];
}>;

export type CivilizationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Civilization'] = ResolversParentTypes['Civilization']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expansion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  army_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unique_unit?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  uniqueUnit?: Resolver<Maybe<Array<Maybe<ResolversTypes['Unit']>>>, ParentType, ContextType>;
  unique_tech?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  team_bonus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  civilization_bonus?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  civilizations?: Resolver<Maybe<Array<Maybe<ResolversTypes['Civilization']>>>, ParentType, ContextType>;
}>;

export type UnitResolvers<ContextType = any, ParentType extends ResolversParentTypes['Unit'] = ResolversParentTypes['Unit']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expansion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  age?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_in?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cost?: Resolver<Maybe<ResolversTypes['Cost']>, ParentType, ContextType>;
  build_time?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  reload_time?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  attack_delay?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  movement_rate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  line_of_sight?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  range?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attacK?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  armor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attack_bonus?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  armor_bonus?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  search_radius?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  accuracy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  blast_radius?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CostResolvers<ContextType = any, ParentType extends ResolversParentTypes['Cost'] = ResolversParentTypes['Cost']> = ResolversObject<{
  Wood?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  Food?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  Stone?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  Gold?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Civilization?: CivilizationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Unit?: UnitResolvers<ContextType>;
  Cost?: CostResolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
