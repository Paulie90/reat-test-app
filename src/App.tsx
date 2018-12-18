import React, { PureComponent } from 'react';

import MusicSearchView from './music/components/MusicSearchView';
import { DefaultLayout } from './layouts/DefaultLayout';
import { MusicSearchProvider } from './services/MusicSearchProvider';

class App extends PureComponent {
  render() {
    return (
      <MusicSearchProvider>
        <DefaultLayout>
          <MusicSearchView />
        </DefaultLayout>
      </MusicSearchProvider>
    );
  }
}

export default App;
