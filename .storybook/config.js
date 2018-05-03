import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/general.js');
  require('../stories/button.js');
  require('../stories/grid.js');
}

configure(loadStories, module);