import React from 'react';
import * as serviceWorker from './serviceWorker';
import {renderEntireTree} from "./render";
import state from "./redux/state";

renderEntireTree(state);

serviceWorker.unregister();
