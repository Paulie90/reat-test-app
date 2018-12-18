import { MusicService } from "./services/MusicService";
import { SecurityService } from "./services/SecurityService";
import { createContext } from "react";
import { Album } from "./music/music.model";

export const security = new SecurityService({
  auth_url: 'https://accounts.spotify.com/authorize',
  response_type: 'token',
  redirect_uri: 'http://localhost:3000/',
  client_id: '0937a14a21f945a58dab4c9453e8d151'
});

export const musicService: MusicService = new MusicService('https://api.spotify.com/v1/search', security);

export const MusicSearchContext = createContext({
  onSearch(query: string): void {
    throw new Error('missing search Provider!');
  },
  albums: [] as Array<Album>
})