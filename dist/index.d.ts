import { KyInstance } from 'ky';

interface JikanImages {
    jpg: JikanImagesCollection;
    webp?: JikanImagesCollection;
}
interface JikanImagesCollection {
    image_url: string;
    small_image_url?: string;
    medium_image_url?: string;
    large_image_url?: string;
    maximum_image_url?: string;
}

interface JikanPerson {
    mal_id: number;
    url: string;
    images: JikanImages;
    name: string;
}

interface CommonCharacter {
    character: CommonCharacterData & {
        name: string;
    };
    role: CharacterRole;
}
interface CommonCharacterData {
    mal_id: number;
    url: string;
    images: JikanImages;
}
interface CharacterVoiceActor {
    person: JikanPerson;
    language: string;
}
type CharacterRole = 'Main' | 'Supporting';

interface JikanMoreInfo {
    moreinfo: string;
}

interface JikanNews {
    mal_id: number;
    url: string;
    title: string;
    date: string;
    author_username: string;
    author_url: string;
    forum_url: string;
    images: JikanImages;
    comments: number;
    excerpt: string;
}

interface Recommendation {
    entry: RecommendationEntry;
}
interface RecommendationEntry {
    mal_id: number;
    url: string;
    images: JikanImages;
    title: string;
}

interface JikanRelation {
    relation: string;
    entry: RelationEntry[];
}
interface RelationEntry {
    mal_id: number;
    type: string;
    name: string;
    url: string;
}

interface JikanResource {
    mal_id: number;
    type: string;
    name: string;
    url: string;
}
interface JikanNamedResource {
    name: string;
    url: string;
}
interface JikanResourceTitle {
    type: string;
    title: string;
}
interface JikanResourcePeriod {
    from: string;
    to: string;
    prop: {
        from: {
            day: number;
            month: number;
            year: number;
        };
        to: {
            day: number;
            month: number;
            year: number;
        };
        string: string;
    };
}
interface JikanResourceRelation {
    relation: string;
    entry: JikanResource[];
}

interface SeasonsListData {
    year: number;
    seasons: AnimeSeason[];
}

interface Statistics {
    completed: number;
    on_hold: number;
    dropped: number;
    total: number;
    scores: StatisticsScore[];
}
interface StatisticsScore {
    score: number;
    votes: number;
    percentage: number;
}

interface JikanForum {
    mal_id: number;
    url: string;
    title: string;
    date: string;
    author_username: string;
    author_url: string;
    comments: number;
    last_comment: {
        url: string;
        author_username: string;
        author_url: string;
        date: string;
    };
}
type ForumFilter = 'all' | 'episode' | 'other';

interface JikanExternalLink {
    name: string;
    url: string;
}

interface AnimeCharacter extends CommonCharacter {
    voice_actors: CharacterVoiceActor[];
}

interface AnimeEpisode {
    mal_id: number;
    url: string;
    title: string;
    title_japanese: string;
    title_romanji: string;
    duration: number;
    aired: string;
    filler: boolean;
    recap: boolean;
    forum_url: string;
}

interface AnimePicture {
    images: JikanImages;
}

interface AnimeStaff {
    person: JikanPerson;
    positions: string[];
}

interface AnimeStatistics extends Statistics {
    watching: number;
    plan_to_watch: number;
}

interface AnimeVideos {
    promo: AnimePromoVideo[];
    episodes: AnimeEpisodeVideo[];
    music_videos: AnimeMusicVideo[];
}
interface AnimePromoVideo {
    title: string;
    trailer: AnimeYoutubeVideo;
}
interface AnimeYoutubeVideo {
    youtube_id: string;
    url: string;
    embed_url: string;
    images?: JikanImagesCollection;
}
interface AnimeEpisodeVideo {
    mal_id: number;
    url: string;
    title: string;
    episode: string;
    images: JikanImages;
}
interface AnimeMusicVideo {
    title: string;
    video: AnimeYoutubeVideo;
    meta: AnimeVideoMeta;
}
interface AnimeVideoMeta {
    title: string;
    author: string;
}

interface Anime {
    mal_id: number;
    url: string;
    images: JikanImages;
    trailer: AnimeYoutubeVideo;
    approved: boolean;
    titles: JikanResourceTitle[];
    title: string;
    title_english?: string;
    title_japanese: string;
    title_synonyms: string[];
    type: AnimeType;
    source: string;
    episodes: number;
    status: AnimeStatus;
    airing: boolean;
    aired: JikanResourcePeriod;
    duration: string;
    rating: AnimeRating;
    score: number;
    scored_by: number;
    rank: number;
    popularity: number;
    members: number;
    favorites: number;
    synopsis: string;
    background: string;
    season?: AnimeSeason;
    year: number;
    broadcast: AnimeBroadcast;
    producers: JikanResource[];
    licensors: JikanResource[];
    studios: JikanResource[];
    genres: JikanResource[];
    explicit_genres: JikanResource[];
    themes: JikanResource[];
    demographics: JikanResource[];
    relations?: JikanResourceRelation[];
    theme?: AnimeTheme;
    external?: JikanNamedResource[];
    streaming: JikanNamedResource[];
}
interface AnimeBroadcast {
    day: string;
    time: string;
    timezone: string;
    string: string;
}
interface AnimeTheme {
    openings: string[];
    endings: string[];
}
type AnimeType = 'TV' | 'Movie' | 'Ova' | 'Special' | 'Ona' | 'Music';
type AnimeStatus = 'Finished Airing' | 'Currently Airing' | 'Complete' | 'Not yet aired';
type AnimeRating = 'g' | 'pg' | 'pg13' | 'r17' | 'r' | 'rx';
type AnimeSeason = 'spring' | 'summer' | 'fall' | 'winter';

interface Character {
    mal_id: number;
    url: string;
    images: JikanImages;
    name: string;
    name_kanji: string;
    nicknames: string[];
    favorites: number;
    about: string;
}
interface CharacterFull extends Character {
    anime: CharacterAnime[];
    manga: CharacterManga[];
    voices: CharacterVoiceActor[];
}
interface CharacterAnime {
    role: CharacterRole;
    anime: CommonCharacterData & {
        title: string;
    };
}
interface CharacterManga {
    role: CharacterRole;
    manga: CommonCharacterData & {
        title: string;
    };
}

interface Genre extends JikanNamedResource {
    mal_id: number;
    count: number;
}

interface MangaStatistics extends Statistics {
    reading: number;
    plan_to_read: number;
}

interface Manga {
    mal_id: number;
    url: string;
    images: JikanImages;
    approved: boolean;
    titles: JikanResourceTitle[];
    title: string;
    title_english?: string;
    title_japanese: string;
    title_synonyms?: string[];
    type: MangaType;
    chapters: number;
    volumes: number;
    status: MangaStatus;
    publishing: boolean;
    published: JikanResourcePeriod;
    score: number;
    scored_by: number;
    rank: number;
    popularity: number;
    members: number;
    favorites: number;
    synopsis: string;
    background: string;
    authors: JikanResource[];
    serializations: JikanResource[];
    genres: JikanResource[];
    explicit_genres: JikanResource[];
    themes: JikanResource[];
    demographics: JikanResource[];
    relations?: JikanResourceRelation[];
    external?: JikanNamedResource[];
}
type MangaType = 'Manga' | 'Novel' | 'Lightnovel' | 'Oneshot' | 'Doujin' | 'Manhwa' | 'Manhua';
type MangaStatus = 'Publishing' | 'Complete' | 'On Hiatus' | 'Discontinued' | 'Upcoming';

type SortOptions = 'asc' | 'desc';
type SearchOrder = 'mal_id' | 'title' | 'start_date' | 'end_date' | 'score' | 'scored_by' | 'rank' | 'popularity' | 'members' | 'favorites';
type AnimeSearchOrder = 'type' | 'rating' | 'episodes' | SearchOrder;
type AnimeSearchStatus = 'airing' | 'complete' | 'upcoming';
type MangaSearchOrder = 'chapters' | 'volumes' | SearchOrder;
type MangaSearchStatus = 'publishing' | 'complete' | 'hiatus' | 'discontinued' | 'upcoming';
interface JikanSearchParams {
    q?: string;
    page?: number;
    limit?: number;
    score?: number;
    min_score?: number;
    max_score?: number;
    sfw?: boolean;
    genres?: string;
    genres_exclude?: string;
    sort?: SortOptions;
    letter?: string;
    producers?: string;
    start_date?: string;
    end_date?: string;
    unapproved?: boolean;
}
/**
 * QueryParams used in **getMangaSearch** call
 *
 * See also: [Jikan API Documentation](https://docs.api.jikan.moe/#tag/manga/operation/getMangaSearch)
 */
interface MangaSearchParams extends JikanSearchParams {
    type?: MangaType;
    status?: MangaSearchStatus;
    order_by?: MangaSearchOrder;
    magazines?: string;
}
/**
 * QueryParams used in **getAnimeSearch** call
 *
 * See also: [Jikan API Documentation](https://docs.api.jikan.moe/#tag/anime/operation/getAnimeSearch)
 */
interface AnimeSearchParams extends JikanSearchParams {
    type?: AnimeType;
    status?: AnimeSearchStatus;
    rating?: AnimeRating;
    order_by?: AnimeSearchOrder;
}

interface CharactersSearchParams {
    page?: number;
    limit?: number;
    q?: string;
    order_by?: CharactersSearchOrder;
    sort?: SortOptions;
    letter?: string;
}
type CharactersSearchOrder = 'mal_id' | 'name' | 'favorites';

type GenresFilter = 'genres' | 'explicit_genres' | 'themes' | 'demographics';

interface SchedulesParams {
    page?: number;
    limit?: number;
    filter?: SchedulesFilter;
    kids?: boolean;
    sfw?: boolean;
    unapproved?: boolean;
}
type SchedulesFilter = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'unknown' | 'other';

interface JikanSeasonsParams {
    page?: number;
    limit?: number;
    filter?: AnimeType;
}
/**
 * QueryParams used in **getSeasonNow** call
 */
type SeasonNowParams = Omit<JikanSeasonsParams, 'filter'>;

type TopFilter = 'upcoming' | 'bypopularity' | 'favorite';
type TopAnimeFilter = 'airing' | TopFilter;
type TopMangaFilter = 'publishing' | TopFilter;
interface JikanTopParams {
    page?: number;
    limit?: number;
}
/**
 * QueryParams used in **getTopAnime** call
 *
 * See also: [Jikan API Documentation](https://docs.api.jikan.moe/#tag/top/operation/getTopAnime)
 */
interface AnimeTopParams extends JikanTopParams {
    type?: AnimeType;
    filter?: TopAnimeFilter;
}
/**
 * QueryParams used in **getTopManga** call
 *
 * See also: [Jikan API Documentation](https://docs.api.jikan.moe/#tag/top/operation/getTopManga)
 */
interface MangaTopParams extends JikanTopParams {
    type?: MangaType;
    filter?: TopMangaFilter;
}

interface JikanPagination {
    last_visible_page: number;
    has_next_page: boolean;
    items?: JikanPaginationItems;
}
interface JikanPaginationItems {
    count: number;
    total: number;
    per_page: number;
}
interface JikanResponse<T> {
    data: T;
    pagination?: JikanPagination;
}
interface JikanResponseHeader {
    'Access-Control-Allow-Origin': string;
    'Cache-Control': string;
    'Content-Encoding': string;
    'Content-Type': 'application/json';
    'Date': string;
    'Expires': string;
    'Last-Modified': string;
    'Server': string;
    'Vary': string;
    'X-Cache-Status': string;
    'X-Powered-By': 'the-power-of-friendship';
    'X-Request-Fingerprint': string | null;
}
interface JikanResponseFull<T> extends JikanResponse<T> {
    header: Omit<Headers, 'get' | 'has'> & {
        get<TName extends keyof JikanResponseHeader | (string & {})>(name: TName): TName extends keyof JikanResponseHeader ? JikanResponseHeader[TName] : string | null;
        has(name: keyof JikanResponseHeader | (string & {})): boolean;
    };
}

/**
 * **Base Client**
 *
 * This client is responsible for creating an Ky Instance and the cache and logging configurations
 */
declare abstract class BaseClient {
    private api;
    constructor(api: KyInstance);
    protected getResource<T>(endpoint: string, pathParams?: {
        [key in string]: unknown;
    }, searchParams?: {
        [key in string]: string | number | boolean | undefined;
    }): Promise<JikanResponseFull<T>>;
    private replacePathParams;
}

/**
 * **Anime Client**
 *
 * Client used to access the Anime Endpoints:
 *
 * See also: [Jikan Documentation](https://docs.api.jikan.moe/)
 */
declare class AnimeClient extends BaseClient {
    /**
     * Get complete anime resource data
     * @param id anime id
     */
    getAnimeFullById(id: number): Promise<JikanResponseFull<Anime>>;
    /**
     * Get anime resource
     * @param id anime id
     */
    getAnimeById(id: number): Promise<JikanResponseFull<Anime>>;
    /**
     * Get characters of a specific anime
     * @param id anime id
     */
    getAnimeCharacters(id: number): Promise<JikanResponseFull<AnimeCharacter[]>>;
    /**
     * Get staff of a specific Anime
     * @param id anime id
     */
    getAnimeStaff(id: number): Promise<JikanResponseFull<AnimeStaff[]>>;
    /**
     * Get a list of all the episodes of a specific anime
     * @param id anime id
     * @param page page number
     */
    getAnimeEpisodes(id: number, page?: number): Promise<JikanResponseFull<AnimeEpisode[]>>;
    /**
     * Get a single episode of a specific anime by its id
     * @param anime_id anime id
     * @param episode_id episode id
     */
    getAnimeEpisodeById(anime_id: number, episode_id: number): Promise<JikanResponseFull<AnimeEpisode>>;
    /**
     * Get a list of news articles related to the anime
     * @param id anime id
     * @param page page number
     */
    getAnimeNews(id: number, page: number): Promise<JikanResponseFull<JikanNews[]>>;
    /**
     * Get a list of forum topics related to the anime
     * @param id anime id
     * @param filter filter topics
     */
    getAnimeForum(id: number, filter?: ForumFilter): Promise<JikanResponseFull<JikanForum[]>>;
    /**
     * Get videos related to the anime
     * @param id anime id
     */
    getAnimeVideos(id: number): Promise<JikanResponseFull<AnimeVideos>>;
    /**
     * Get episode videos related to the anime
     * @param id anime id
     * @param page page number
     */
    getAnimeEpisodeVideos(id: number, page?: number): Promise<JikanResponseFull<AnimeEpisodeVideo[]>>;
    /**
     * Get pictures related to the Anime
     * @param id anime id
     */
    getAnimePictures(id: number): Promise<JikanResponseFull<AnimePicture[]>>;
    /**
     * Get statistics related to the Anime
     * @param id anime id
     */
    getAnimeStatistics(id: number): Promise<JikanResponseFull<AnimeStatistics>>;
    /**
     * Get more info related to the anime
     * @param id anime id
     */
    getAnimeMoreInfo(id: number): Promise<JikanResponseFull<JikanMoreInfo>>;
    /**
     * Get recommendations based on the anime
     * @param id anime id
     */
    getAnimeRecommendations(id: number): Promise<JikanResponseFull<Recommendation[]>>;
    /**
     * Get anime relations
     * @param id anime id
     */
    getAnimeRelations(id: number): Promise<JikanResponseFull<JikanRelation[]>>;
    /**
     * Get anime external links
     * @param id anime id
     */
    getAnimeExternal(id: number): Promise<JikanResponseFull<JikanExternalLink[]>>;
    /**
     * Get all the Animes within the given filter. Returns all the Animes if no filters are given.
     * @param searchParams Filter parameters
     */
    getAnimeSearch(searchParams?: Partial<AnimeSearchParams>): Promise<JikanResponseFull<Anime[]>>;
}

/**
 * **Characters Client**
 *
 * Client used to access the Character Endpoints:
 *
 * See also: [Jikan Documentation](https://docs.api.jikan.moe/)
 */
declare class CharactersClient extends BaseClient {
    /**
     * Get complete Character data
     * @param id The Character ID
     */
    getCharacterFullById(id: number): Promise<JikanResponseFull<CharacterFull>>;
    /**
     * Get Character data
     * @param id The Character ID
     */
    getCharacterById(id: number): Promise<JikanResponseFull<Character>>;
    /**
     * Get Character anime data
     * @param id The Character ID
     */
    getCharacterAnime(id: number): Promise<JikanResponseFull<CharacterAnime[]>>;
    /**
     * Get Character manga data
     * @param id The Character ID
     */
    getCharacterManga(id: number): Promise<JikanResponseFull<CharacterManga[]>>;
    /**
     * Get Character voices data
     * @param id The Character ID
     */
    getCharacterVoiceActors(id: number): Promise<JikanResponseFull<CharacterVoiceActor[]>>;
    /**
     * Get Character pictures data
     * @param id The Character ID
     */
    getCharacterPictures(id: number): Promise<JikanResponseFull<JikanImagesCollection[]>>;
    /**
     * Get all the Characters within the given filter. Returns all Characters if no filters are given.
     * @param searchParams Filter parameters
     */
    getCharacterSearch(searchParams: Partial<CharactersSearchParams>): Promise<JikanResponseFull<Character[]>>;
}

/**
 * **Genres Client**
 *
 * Client used to access the Genres Endpoints:
 *
 * See also: [Jikan Documentation](https://docs.api.jikan.moe/)
 */
declare class GenresClient extends BaseClient {
    /**
     * Get Anime genres
     * @param filter Type of the desired genres
     */
    getAnimeGenres(filter?: GenresFilter): Promise<JikanResponseFull<Genre[]>>;
    /**
     * Get Manga genres
     * @param filter Type of the desired genres
     */
    getMangaGenres(filter?: GenresFilter): Promise<JikanResponseFull<Genre[]>>;
}

/**
 * **Manga Client**
 *
 * Client used to access the Manga Endpoints:
 *
 * See also: [Jikan Documentation](https://docs.api.jikan.moe/)
 */
declare class MangaClient extends BaseClient {
    /**
     * Get a Manga with full information by its ID
     * @param id The Manga ID
     */
    getMangaFullById(id: number): Promise<JikanResponseFull<Manga>>;
    /**
     * Get a Manga by its ID
     * @param id The Manga ID
     */
    getMangaById(id: number): Promise<JikanResponseFull<Manga>>;
    /**
     * Get Characters of a specific Manga
     * @param id The Manga ID
     */
    getMangaCharacters(id: number): Promise<JikanResponseFull<CommonCharacter[]>>;
    /**
     * Get a list of manga news
     * @param id The Manga ID
     */
    getMangaNews(id: string): Promise<JikanResponseFull<JikanNews[]>>;
    /**
     * Get a list og manga forum topics
     * @param id The manga ID
     * @param filter Filter topics
     */
    getMangaTopics(id: string, filter?: ForumFilter): Promise<JikanResponseFull<JikanForum[]>>;
    /**
     * Get Pictures related to a specific Manga
     * @param id The Manga ID
     */
    getMangaPictures(id: number): Promise<JikanResponseFull<JikanImages[]>>;
    /**
     * Get Statistics related to a specific Manga
     * @param id The Manga ID
     */
    getMangaStatistics(id: number): Promise<JikanResponseFull<MangaStatistics>>;
    /**
     * Get more info related to the manga
     * @param id manga id
     */
    getMangaMoreInfo(id: number): Promise<JikanResponseFull<JikanMoreInfo>>;
    /**
     * Get Recommendations related to a specific Manga
     * @param id The Manga ID
     */
    getMangaRecommendations(id: number): Promise<JikanResponseFull<Recommendation[]>>;
    /**
     * Get anime Relations
     * @param id manga id
     */
    getMangaRelations(id: number): Promise<JikanResponseFull<JikanRelation[]>>;
    /**
     * Get manga external links
     * @param id manga id
     */
    getMangaExternal(id: number): Promise<JikanResponseFull<JikanExternalLink[]>>;
    /**
     * Get all the filtered Mangas. Returns all the Mangas if no filters are given.
     * @param searchParams Filter parameters
     */
    getMangaSearch(searchParams?: Partial<MangaSearchParams>): Promise<JikanResponseFull<Manga[]>>;
}

/**
 * **Random Client**
 *
 * Client used to access the Random Endpoints:
 *
 * See also: [Jikan Documentation](https://docs.api.jikan.moe/)
 */
declare class RandomClient extends BaseClient {
    /**
     * Get random anime
     */
    getRandomAnime(): Promise<JikanResponseFull<Anime>>;
    /**
     * Get random manga
     */
    getRandomManga(): Promise<JikanResponseFull<Manga>>;
    /**
     * Get random character
     */
    getRandomCharacters(): Promise<JikanResponseFull<Character>>;
}

/**
 * **Schedules Client**
 *
 * Client used to access the Schedules Endpoints
 *
 * See also: [Jikan Documentation](https://docs.api.jikan.moe/)
 */
declare class SchedulesClient extends BaseClient {
    /**
     * Returns weekly schedule
     * @param searchParams Filter parameters
     */
    getSchedules(searchParams?: Partial<SchedulesParams>): Promise<JikanResponseFull<Anime[]>>;
}

/**
 * **Seasons Client**
 *
 * Client used to access the Seasons Endpoints
 *
 * See also: [Jikan Documentation](https://docs.api.jikan.moe/)
 */
declare class SeasonsClient extends BaseClient {
    /**
     * Get the seasonal anime by year and season
     * @param year Season year
     * @param season Season value
     * @param searchParams Filter parameters
     */
    getSeason(year: number, season: AnimeSeason, searchParams?: Partial<JikanSeasonsParams>): Promise<JikanResponseFull<Anime[]>>;
    /**
     * Get current seasonal anime
     * @param searchParams Filter parameters
     */
    getSeasonNow(searchParams?: Partial<SeasonNowParams>): Promise<JikanResponseFull<Anime[]>>;
    /**
     * Get available list of seasons
     */
    getSeasonsList(): Promise<JikanResponseFull<SeasonsListData[]>>;
    /**
     * Get upcoming season's anime
     * @param searchParams Filter parameters
     */
    getSeasonUpcoming(searchParams?: Partial<JikanSeasonsParams>): Promise<JikanResponseFull<Anime[]>>;
}

/**
 * **Top Client**
 *
 * Client used to access the Top Endpoints:
 *
 * See also: [Jikan Documentation](https://docs.api.jikan.moe/)
 */
declare class TopClient extends BaseClient {
    /**
     * Get the top Animes
     * @param searchParams Filter parameters
     */
    getTopAnime(searchParams?: Partial<AnimeTopParams>): Promise<JikanResponseFull<Anime[]>>;
    /**
     * Get the top Mangas
     * @param searchParams Filter parameters
     */
    getTopManga(searchParams?: Partial<MangaTopParams>): Promise<JikanResponseFull<Manga[]>>;
    /**
     * Get the top Characters
     * @param searchParams Filter parameters
     */
    getTopCharacters(searchParams?: Partial<JikanTopParams>): Promise<JikanResponseFull<Character[]>>;
}

/**
 * **Jikan Client**
 *
 * The main client used to access all the Jikan Endpoints:
 *
 * See also: [Jikan Documentation](https://docs.api.jikan.moe/)
 */
declare class JikanClient {
    anime: AnimeClient;
    characters: CharactersClient;
    genres: GenresClient;
    manga: MangaClient;
    top: TopClient;
    schedules: SchedulesClient;
    seasons: SeasonsClient;
    random: RandomClient;
    constructor(api: KyInstance);
}

declare const BaseURL = "https://api.jikan.moe/v4";

declare const AnimeEndpoints: {
    readonly animeFullById: "anime/{id}/full";
    readonly animeById: "anime/{id}";
    readonly animeCharacters: "anime/{id}/characters";
    readonly animeStaff: "anime/{id}/staff";
    readonly animeEpisodes: "anime/{id}/episodes";
    readonly animeEpisodeById: "anime/{id}/episodes/{episode}";
    readonly animeNews: "anime/{id}/news";
    readonly animeForum: "anime/{id}/forum";
    readonly animeVideos: "anime/{id}/videos";
    readonly animeVideosEpisodes: "anime/{id}/videos/episodes";
    readonly animePictures: "anime/{id}/pictures";
    readonly animeStatistics: "anime/{id}/statistics";
    readonly animeMoreInfo: "anime/{id}/moreinfo";
    readonly animeRecommendations: "anime/{id}/recommendations";
    readonly animeUserUpdates: "anime/{id}/userupdates";
    readonly animeReviews: "anime/{id}/reviews";
    readonly animeRelations: "anime/{id}/relations";
    readonly animeThemes: "anime/{id}/themes";
    readonly animeExternal: "anime/{id}/external";
    readonly animeStreaming: "anime/{id}/streaming";
    readonly animeSearch: "anime";
};

declare const CharactersEndpoints: {
    readonly characterFullById: "characters/{id}/full";
    readonly characterById: "characters/{id}";
    readonly characterAnime: "characters/{id}/anime";
    readonly charactersManga: "characters/{id}/manga";
    readonly characterVoiceActors: "characters/{id}/voices";
    readonly characterPictures: "characters/{id}/pictures";
    readonly characterSearch: "characters";
};

declare const GenresEndpoints: {
    readonly animeGenres: "genres/anime";
    readonly mangaGenres: "genres/manga";
};

declare const MangaEndpoints: {
    readonly mangaSearch: "manga";
    readonly mangaFullById: "manga/{id}/full";
    readonly mangaById: "manga/{id}";
    readonly mangaCharacters: "manga/{id}/characters";
    readonly mangaNews: "manga/{id}/news";
    readonly mangaTopics: "manga/{id}/forum";
    readonly mangaPictures: "manga/{id}/pictures";
    readonly mangaStatistics: "manga/{id}/statistics";
    readonly mangaMoreInfo: "manga/{id}/moreinfo";
    readonly mangaRelations: "manga/{id}/relations";
    readonly mangaExternal: "manga/{id}/external";
    readonly mangaRecommendations: "manga/{id}/recommendations";
};

declare const SeasonsEndpoints: {
    readonly season: "seasons/{year}/{season}";
    readonly seasonNow: "seasons/now";
    readonly seasonsList: "seasons";
    readonly seasonUpcoming: "seasons/upcoming";
};

declare const TopEndpoints: {
    readonly topAnime: "top/anime";
    readonly topManga: "top/manga";
    readonly topCharacters: "top/characters";
};

declare const RandomEndpoints: {
    readonly randomAnime: "random/anime";
    readonly randomManga: "random/manga";
    readonly randomCharacters: "random/characters";
};

export { type Anime, type AnimeBroadcast, type AnimeCharacter, AnimeClient, AnimeEndpoints, type AnimeEpisode, type AnimeEpisodeVideo, type AnimeMusicVideo, type AnimePicture, type AnimePromoVideo, type AnimeRating, type AnimeSearchOrder, type AnimeSearchParams, type AnimeSearchStatus, type AnimeSeason, type AnimeStaff, type AnimeStatistics, type AnimeStatus, type AnimeTheme, type AnimeTopParams, type AnimeType, type AnimeVideoMeta, type AnimeVideos, type AnimeYoutubeVideo, BaseClient, BaseURL, type Character, type CharacterAnime, type CharacterFull, type CharacterManga, type CharacterRole, type CharacterVoiceActor, CharactersClient, CharactersEndpoints, type CharactersSearchOrder, type CharactersSearchParams, type CommonCharacter, type CommonCharacterData, type ForumFilter, type Genre, GenresClient, GenresEndpoints, type GenresFilter, JikanClient, type JikanExternalLink, type JikanForum, type JikanImages, type JikanImagesCollection, type JikanMoreInfo, type JikanNamedResource, type JikanNews, type JikanPagination, type JikanPaginationItems, type JikanPerson, type JikanRelation, type JikanResource, type JikanResourcePeriod, type JikanResourceRelation, type JikanResourceTitle, type JikanResponse, type JikanResponseFull, type JikanResponseHeader, type JikanSearchParams, type JikanSeasonsParams, type JikanTopParams, type Manga, MangaClient, MangaEndpoints, type MangaSearchOrder, type MangaSearchParams, type MangaSearchStatus, type MangaStatistics, type MangaStatus, type MangaTopParams, type MangaType, RandomClient, RandomEndpoints, type Recommendation, type RecommendationEntry, type RelationEntry, SchedulesClient, type SchedulesFilter, type SchedulesParams, type SearchOrder, type SeasonNowParams, SeasonsClient, SeasonsEndpoints, type SeasonsListData, type SortOptions, type Statistics, type StatisticsScore, type TopAnimeFilter, TopClient, TopEndpoints, type TopMangaFilter };
