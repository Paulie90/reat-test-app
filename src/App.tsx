import React from 'react';
import { Route, Switch, Redirect } from 'react-router';

import { MusicSearchView } from './music/components/MusicSearchView';
import { DefaultLayout } from './layouts/DefaultLayout';
import { PlaylistsView } from './playlists/components/PlaylistsView';

export const App = () => {
  return (
    <DefaultLayout>
      <Switch>
        <Redirect path='/' exact={true} to='/music' />

        <Route path='/music' component={MusicSearchView} />
        <Route path='/playlists' component={PlaylistsView} />

        {/* NOT FOUND */}
        <Redirect path='**' to='/music' />
      </Switch>
    </DefaultLayout>
  );
}
