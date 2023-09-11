// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Content for board documents
 */
interface BoardDocumentData {
  /**
   * name field in *board*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: board.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * image field in *board*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: board.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * brand field in *board*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: board.brand
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  brand: prismic.KeyTextField;

  /**
   * type field in *board*
   *
   * - **Field Type**: Select
   * - **Placeholder**: Selecteer een type
   * - **API ID Path**: board.type
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  type: prismic.SelectField<
    "Distance" | "Surfskate" | "Street" | "Dancer" | "Hybrid" | "Cruiser"
  >;

  /**
   * length field in *board*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: board.length
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  length: prismic.NumberField;

  /**
   * width field in *board*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: board.width
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  width: prismic.NumberField;

  /**
   * wheelbase field in *board*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: board.wheelbase
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  wheelbase: prismic.NumberField;

  /**
   * trucks field in *board*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: board.trucks
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  trucks: prismic.KeyTextField;

  /**
   * wheels field in *board*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: board.wheels
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  wheels: prismic.KeyTextField;
}

/**
 * board document from Prismic
 *
 * - **API ID**: `board`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BoardDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<BoardDocumentData>, "board", Lang>;

type HomeDocumentDataSlicesSlice = BoardListSlice;

/**
 * Content for Home documents
 */
interface HomeDocumentData {
  /**
   * intro field in *Home*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.intro
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  intro: prismic.RichTextField;

  /**
   * Slice Zone field in *Home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomeDocumentDataSlicesSlice>
  /**
   * Meta Description field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<HomeDocumentData>, "home", Lang>;

export type AllDocumentTypes = BoardDocument | HomeDocument;

/**
 * Primary content in *BoardList → Primary*
 */
export interface BoardListSliceDefaultPrimary {
  /**
   * title field in *BoardList → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: board_list.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;
}

/**
 * Primary content in *BoardList → Items*
 */
export interface BoardListSliceDefaultItem {
  /**
   * board field in *BoardList → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: board_list.items[].board
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  board: prismic.ContentRelationshipField<"board">;
}

/**
 * Default variation for BoardList Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BoardListSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<BoardListSliceDefaultPrimary>,
  Simplify<BoardListSliceDefaultItem>
>;

/**
 * Slice variation for *BoardList*
 */
type BoardListSliceVariation = BoardListSliceDefault;

/**
 * BoardList Shared Slice
 *
 * - **API ID**: `board_list`
 * - **Description**: BoardList
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BoardListSlice = prismic.SharedSlice<
  "board_list",
  BoardListSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      BoardDocument,
      BoardDocumentData,
      HomeDocument,
      HomeDocumentData,
      HomeDocumentDataSlicesSlice,
      AllDocumentTypes,
      BoardListSlice,
      BoardListSliceDefaultPrimary,
      BoardListSliceDefaultItem,
      BoardListSliceVariation,
      BoardListSliceDefault,
    };
  }
}