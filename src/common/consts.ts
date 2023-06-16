// export const STREAMS_API_KEY = "9c217d4ed871f6a5ddd2cff38675787f";
// export const SEARCH_API_KEY = "9bfeb8850050f29a9564079ed5ac8d76";
// export const SEARCH_PATH = "search";
// export const HOME_PATH = "index.html";
// export const GURU_VERTICAL_KEY = "knowledge_base";
// export const V_PARAM_LIVE = "20230110";

export const STREAMS_API_KEY = "e79b94b0fc927d04154863a23ee3428d"; //Check this
export const SEARCH_API_KEY = "5b76ac601826e19e070973375eb7d602";
export const SEARCH_PATH = "search"; //Check this
export const HOME_PATH = "index.html";
export const GURU_VERTICAL_KEY = "cards"; //Delete GURU and this is just vertical key
export const V_PARAM_LIVE = "20230110";

export const getSearchProviderConfig = (locale: string) => ({
	apiKey: SEARCH_API_KEY,
	experienceKey: "knowledge-base-starter-search", //this was knowledge_base
	locale: locale,
	verticalKey: GURU_VERTICAL_KEY,
	experienceVersion: "PRODUCTION",
	headlessId: 'general',
	additionalQueryParams: {
	  source: "knowledge_base"
	}
});
