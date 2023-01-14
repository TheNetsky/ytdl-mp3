import { SearchResult } from './types';
export default function fetchSearchResults(searchTerm: string): Promise<SearchResult[] | Error>;
