import { AnimeClient } from './anime.client'
import { CharactersClient } from './characters.client'
import { GenresClient } from './genres.client'
import { MangaClient } from './manga.client'
import { RandomClient } from './random.client'
import { SchedulesClient } from './schedules.client'
import { SeasonsClient } from './seasons.client'
import { TopClient } from './top.client'
import type { KyInstance } from 'ky'

/**
 * **Jikan Client**
 *
 * The main client used to access all the Jikan Endpoints:
 *
 * See also: [Jikan Documentation](https://docs.api.jikan.moe/)
 */
export class JikanClient {
	public anime: AnimeClient
	public characters: CharactersClient
	public genres: GenresClient
	public manga: MangaClient
	public top: TopClient
	public schedules: SchedulesClient
	public seasons: SeasonsClient
	public random: RandomClient

	constructor(api: KyInstance) {
		this.anime = new AnimeClient(api)
		this.characters = new CharactersClient(api)
		this.genres = new GenresClient(api)
		this.manga = new MangaClient(api)
		this.top = new TopClient(api)
		this.schedules = new SchedulesClient(api)
		this.seasons = new SeasonsClient(api)
		this.random = new RandomClient(api)
	}
}
