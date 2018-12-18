import axios, { AxiosPromise, AxiosResponse, AxiosError } from 'axios';

import { AlbumsResponse } from '../music/music.model';
import { SecurityService } from './SecurityService';

export class MusicService {
  constructor(
    /**
     * search API url
     */
    private API_URL: string,
    private security: SecurityService
  ) { }

  searchAlbums(query: string) {
    return axios.get<AlbumsResponse>(this.API_URL, {
      headers: {
        Authorization: `Bearer ${this.security.getToken()}`
      },
      params: {
        type: 'album',
        q: query
      }
    })
      .then((res: AxiosResponse<AlbumsResponse>) => res.data.albums.items)
      .catch((error: AxiosError) => {
        if (error.response!.status === 401) {
          this.security.authorize();
        }

        return Promise.reject(error.response!.data.error);
      });
  }
}