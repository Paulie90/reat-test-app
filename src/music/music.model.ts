export interface Entity {
  id: string;
  name: string;
}

export interface Album extends Entity {
  images: Array<AlbumImage>;
  artists?: Array<Artist>;
}

export interface Artist extends Entity { }

export interface AlbumImage {
  url: string;
}

export interface PagingObject<T> {
  items: Array<T>;
  offset?: number;
  total?: number;
}

export interface AlbumsResponse {
  albums: PagingObject<Album>
}