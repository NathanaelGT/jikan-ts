var C="https://api.jikan.moe/v4";var a={animeFullById:"/anime/{id}/full",animeById:"/anime/{id}",animeCharacters:"/anime/{id}/characters",animeStaff:"/anime/{id}/staff",animeEpisodes:"/anime/{id}/episodes",animeEpisodeById:"/anime/{id}/episodes/{episode}",animeNews:"/anime/{id}/news",animeForum:"/anime/{id}/forum",animeVideos:"/anime/{id}/videos",animeVideosEpisodes:"/anime/{id}/videos/episodes",animePictures:"/anime/{id}/pictures",animeStatistics:"/anime/{id}/statistics",animeMoreInfo:"/anime/{id}/moreinfo",animeRecommendations:"/anime/{id}/recommendations",animeUserUpdates:"/anime/{id}/userupdates",animeReviews:"/anime/{id}/reviews",animeRelations:"/anime/{id}/relations",animeThemes:"/anime/{id}/themes",animeExternal:"/anime/{id}/external",animeStreaming:"/anime/{id}/streaming",animeSearch:"/anime"};var s={characterFullById:"/characters/{id}/full",characterById:"/characters/{id}",characterAnime:"/characters/{id}/anime",charactersManga:"/characters/{id}/manga",characterVoiceActors:"/characters/{id}/voices",characterPictures:"/characters/{id}/pictures",characterSearch:"/characters"};var A={animeGenres:"/genres/anime",mangaGenres:"/genres/manga"};var n={mangaSearch:"/manga",mangaFullById:"/manga/{id}/full",mangaById:"/manga/{id}",mangaCharacters:"/manga/{id}/characters",mangaNews:"manga/{id}/news",mangaTopics:"/manga/{id}/forum",mangaPictures:"/manga/{id}/pictures",mangaStatistics:"/manga/{id}/statistics",mangaMoreInfo:"/manga/{id}/moreinfo",mangaRelations:"manga/{id}/relations",mangaExternal:"/manga/{id}/external",mangaRecommendations:"/manga/{id}/recommendations"};var m={season:"/seasons/{year}/{season}",seasonNow:"/seasons/now",seasonsList:"/seasons",seasonUpcoming:"/seasons/upcoming"};var p={topAnime:"/top/anime",topManga:"/top/manga",topCharacters:"/top/characters"};var u={randomAnime:"/random/anime",randomManga:"/random/manga",randomCharacters:"/random/characters"};import P from"xior";var t=class{api;constructor(e={}){this.api=P.create({baseURL:e.baseURL??C,headers:{"Content-Type":"application/json"}})}async getResource(e,r={},o={}){return(await this.api.get(this.replacePathParams(e,r),{params:o})).data}replacePathParams(e,r){let o=e;for(let c of Object.keys(r)){if(!RegExp(`{${c}}`).exec(o))throw new Error(`Path does not contain "${c}" parameter.`);o=o.replace(`{${c}}`,String(r[c]))}return o}};var g=class extends t{getAnimeFullById(e){return this.getResource(a.animeFullById,{id:e})}getAnimeById(e){return this.getResource(a.animeById,{id:e})}getAnimeCharacters(e){return this.getResource(a.animeCharacters,{id:e})}getAnimeStaff(e){return this.getResource(a.animeStaff,{id:e})}getAnimeEpisodes(e,r=1){return this.getResource(a.animeEpisodes,{id:e},{page:r})}getAnimeEpisodeById(e,r){return this.getResource(a.animeEpisodeById,{id:e,episode:r})}getAnimeNews(e,r){return this.getResource(a.animeNews,{id:e},{page:r})}getAnimeForum(e,r){return this.getResource(a.animeForum,{id:e},r?{filter:r}:void 0)}getAnimeVideos(e){return this.getResource(a.animeVideos,{id:e})}getAnimeEpisodeVideos(e,r=1){return this.getResource(a.animeVideosEpisodes,{id:e},{page:r})}getAnimePictures(e){return this.getResource(a.animePictures,{id:e})}getAnimeStatistics(e){return this.getResource(a.animeStatistics,{id:e})}getAnimeMoreInfo(e){return this.getResource(a.animeMoreInfo,{id:e})}getAnimeRecommendations(e){return this.getResource(a.animeRecommendations,{id:e})}getAnimeRelations(e){return this.getResource(a.animeRelations,{id:e})}getAnimeExternal(e){return this.getResource(a.animeExternal,{id:e})}getAnimeSearch(e){return this.getResource(a.animeSearch,{},e)}};var l=class extends t{getCharacterFullById(e){return this.getResource(s.characterFullById,{id:e})}getCharacterById(e){return this.getResource(s.characterById,{id:e})}getCharacterAnime(e){return this.getResource(s.characterAnime,{id:e})}getCharacterManga(e){return this.getResource(s.charactersManga,{id:e})}getCharacterVoiceActors(e){return this.getResource(s.characterVoiceActors,{id:e})}getCharacterPictures(e){return this.getResource(s.characterPictures,{id:e})}getCharacterSearch(e){return this.getResource(s.characterSearch,{},e)}};var d=class extends t{getAnimeGenres(e){return this.getResource(A.animeGenres,{},{filter:e})}getMangaGenres(e){return this.getResource(A.mangaGenres,{},{filter:e})}};var h=class extends t{getMangaFullById(e){return this.getResource(n.mangaFullById,{id:e})}getMangaById(e){return this.getResource(n.mangaById,{id:e})}getMangaCharacters(e){return this.getResource(n.mangaCharacters,{id:e})}getMangaNews(e){return this.getResource(n.mangaNews,{id:e})}getMangaTopics(e,r){return this.getResource(n.mangaTopics,{id:e},r?{filter:r}:void 0)}getMangaPictures(e){return this.getResource(n.mangaPictures,{id:e})}getMangaStatistics(e){return this.getResource(n.mangaStatistics,{id:e})}getMangaMoreInfo(e){return this.getResource(n.mangaMoreInfo,{id:e})}getMangaRecommendations(e){return this.getResource(n.mangaRecommendations,{id:e})}getMangaRelations(e){return this.getResource(n.mangaRelations,{id:e})}getMangaExternal(e){return this.getResource(n.mangaExternal,{id:e})}getMangaSearch(e){return this.getResource(n.mangaSearch,{},e)}};var f=class extends t{getRandomAnime(){return this.getResource(u.randomAnime)}getRandomManga(){return this.getResource(u.randomManga)}getRandomCharacters(){return this.getResource(u.randomCharacters)}};var S={schedules:"/schedules"};var x=class extends t{getSchedules(e){return this.getResource(S.schedules,{},e)}};var b=class extends t{getSeason(e,r,o){return this.getResource(m.season,{year:e,season:r},o)}getSeasonNow(e){return this.getResource(m.seasonNow,{},e)}getSeasonsList(){return this.getResource(m.seasonsList)}getSeasonUpcoming(e){return this.getResource(m.seasonUpcoming,{},e)}};var R=class extends t{getTopAnime(e){return this.getResource(p.topAnime,{},e)}getTopManga(e){return this.getResource(p.topManga,{},e)}getTopCharacters(e){return this.getResource(p.topCharacters,{},e)}};var M=class{anime;characters;genres;manga;top;schedules;seasons;random;constructor(e){this.anime=new g(e),this.characters=new l(e),this.genres=new d(e),this.manga=new h(e),this.top=new R(e),this.schedules=new x(e),this.seasons=new b(e),this.random=new f(e)}};export{g as AnimeClient,a as AnimeEndpoints,t as BaseClient,C as BaseURL,l as CharactersClient,s as CharactersEndpoints,d as GenresClient,A as GenresEndpoints,M as JikanClient,h as MangaClient,n as MangaEndpoints,f as RandomClient,u as RandomEndpoints,x as SchedulesClient,b as SeasonsClient,m as SeasonsEndpoints,R as TopClient,p as TopEndpoints};
