import axios from 'axios';
import { SearchResult } from './types';

export default async function fetchSearchResults(
  searchTerm: string
): Promise<SearchResult[] | Error> {
  const url = new URL('https://itunes.apple.com/search?');
  url.searchParams.set('media', 'music');
  url.searchParams.set('term', searchTerm);

  try {
    const response = await axios.get(url.href);

    if (response.data.resultCount === 0) {
      return new Error('Call to iTunes API did not return any results');
    }

    return response.data.results;

  } catch (error) {
    return new Error(error as any);
  }
}
