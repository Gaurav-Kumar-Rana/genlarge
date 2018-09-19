/*Redux itself is a small library (2KB). 
The Redux store exposes a simple API for managing the state. The most important methods are:

1.getState for accessing the current state of the application
2.dispatch for dispatching an action
3.subscribe for listening on state changes */

import store from "./store/index";
import { addArticle } from "./action/index";

window.store = store;
window.addArticle = addArticle;