export const STREAMS_API_KEY = "9c217d4ed871f6a5ddd2cff38675787f";
export const SEARCH_API_KEY = "9bfeb8850050f29a9564079ed5ac8d76";
export const SEARCH_PATH = "search";
export const HOME_PATH = "index.html";
export const GURU_VERTICAL_KEY = "knowledge_base";
export const V_PARAM_LIVE = "20230110";

export const getSearchProviderConfig = (locale: string) => ({
	apiKey: SEARCH_API_KEY,
	experienceKey: "yext-intranet",
	locale: locale,
	verticalKey: GURU_VERTICAL_KEY,
	experienceVersion: "PRODUCTION",
	headlessId: 'general',
	additionalQueryParams: {
	  source: "knowledge_base"
	}
});
