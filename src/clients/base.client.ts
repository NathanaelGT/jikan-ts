import type { KyInstance } from 'ky'
import type { JikanResponseFull, JikanResponse } from '../models'

/**
 * **Base Client**
 *
 * This client is responsible for creating an Ky Instance and the cache and logging configurations
 */
export abstract class BaseClient {
	constructor(private api: KyInstance) {}

	protected async getResource<T>(
		endpoint: string,
		pathParams: { [key in string]: unknown } = {},
		searchParams: { [key in string]: string | number | boolean | undefined } = {}
	): Promise<JikanResponseFull<T>> {
    for (const key in searchParams) {
      if (searchParams[key] === undefined) {
        delete searchParams[key]
      }
    }

		const response = await this.api.get<JikanResponse<T>>(
      this.replacePathParams(endpoint, pathParams),
      {
        searchParams: searchParams as {
          [key in string]: string | number | boolean
        },
      }
    )

    const result = await response.json() as JikanResponseFull<T>

    result.header = response.headers as typeof result.header

    return result
	}

	private replacePathParams(
		path: string,
		params: { [key in string]: unknown }
	): string {
		let endpoint = path
		for (const param of Object.keys(params)) {
			if (!RegExp(`{${param}}`).exec(endpoint))
				throw new Error(`Path does not contain "${param}" parameter.`)
			endpoint = endpoint.replace(`{${param}}`, String(params[param]))
		}
		return endpoint
	}
}
