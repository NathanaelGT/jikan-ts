export interface JikanPagination {
	last_visible_page: number
	has_next_page: boolean
	items?: JikanPaginationItems
}

export interface JikanPaginationItems {
	count: number
	total: number
	per_page: number
}

export interface JikanResponse<T> {
	data: T
	pagination?: JikanPagination
}

export interface JikanResponseHeader {
  'Access-Control-Allow-Origin': string,
  'Cache-Control': string,
  'Content-Encoding': string,
  'Content-Type': 'application/json',
  'Date': string,
  'Expires': string,
  'Last-Modified': string,
  'Server': string,
  'Vary': string,
  'X-Cache-Status': string,
  'X-Powered-By': 'the-power-of-friendship',
  'X-Request-Fingerprint': string | null,
}

export interface JikanResponseFull<T> extends JikanResponse<T> {
  header: Omit<Headers, 'get' | 'has'> & {
    get<TName extends keyof JikanResponseHeader | (string & {})>(
      name: TName
    ): TName extends keyof JikanResponseHeader
      ? JikanResponseHeader[TName]
      : string | null
    has(name: keyof JikanResponseHeader | (string & {})): boolean
  }
}
