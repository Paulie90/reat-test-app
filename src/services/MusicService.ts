import axios, { AxiosResponse, AxiosError } from 'axios';

import { AlbumsResponse } from '../music/music.model';
import { SecurityService } from './SecurityService';

export class MusicService {
  constructor(
    /**
     * search API url
     */
    private API_URL: string,
    private securityService: SecurityService
  ) { }

  searchAlbums(query: string) {
    return axios.get<AlbumsResponse>(this.API_URL, {
      headers: {
        Authorization: `Bearer ${this.securityService.getToken()}`
      },
      params: {
        type: 'album',
        q: query
      }
    })
      .then((res: AxiosResponse<AlbumsResponse>) => res.data.albums.items)
      .catch((error: AxiosError) => {
        if (error.response!.status === 401) {
          this.securityService.authorize();
        }

        return Promise.reject(error.response!.data.error);
      });
  }
}