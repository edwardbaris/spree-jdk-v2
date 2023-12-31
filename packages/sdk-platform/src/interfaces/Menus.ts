import type {
  JsonApiDocument,
  JsonApiListResponse,
  JsonApiSingleResponse,
  IRelationships,
  ResultResponse,
  WithCommonOptions
} from '@spree/core-api-v2-sdk'

export interface MenuAttr {
  name: string
  location: 'header' | 'footer' | string
  locale: string
  created_at: string
  updated_at: string
}

export interface MenuData extends JsonApiDocument {
  type: string
  id: string
  attributes: MenuAttr
  relationships: IRelationships
}

export interface MenuParams {
  menu: {
    name: string
    location: 'header' | 'footer' | string
    locale: string
  }
}

export interface IMenu extends JsonApiSingleResponse {
  data: MenuData
}

export interface IMenus extends JsonApiListResponse {
  data: MenuData[]
}

export interface IMenuResult extends ResultResponse<IMenu> {}

export interface IMenusResult extends ResultResponse<IMenus> {}

export type ListOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true }
>

export type ShowOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  { id: string }
>

export type CreateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  MenuParams
>

export type UpdateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  MenuParams & { id: string }
>

export type RemoveOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  { id: string }
>
