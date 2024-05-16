import { functionCliquableVideo } from './cliquableVideo.js';
import { functionReadMore } from './readMore.js';
import { functionReadLess } from './readLess.js';
import { functionCliquableMap } from './cliquableMap.js';
import { functionSelectAuto } from './selectAuto.js'
import { functionHeaderModal } from './headerModal.js'

functionCliquableVideo('videoIntroduction');
functionReadMore();
functionReadLess();
functionCliquableMap();
document.addEventListener("DOMContentLoaded", functionSelectAuto);
functionHeaderModal();



