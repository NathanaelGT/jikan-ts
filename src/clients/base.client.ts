import type { KyInstance } from 'ky'
import type { JikanResponse } from '../models'

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
	): Promise<JikanResponse<T>> {
    for (const key in searchParams) {
      if (searchParams[key] === undefined) {
        delete searchParams[key]
      }
    }

		return (
			await this.api.get<JikanResponse<T>>(
				this.replacePathParams(endpoint, pathParams),
				{
					searchParams: searchParams as { [key in string]: string | number | boolean }
				}
			)
		).json()
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
