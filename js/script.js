import { functionCliquableVideo } from './cliquableVideo.js';
import { functionReadMore } from './readMore.js';
import { functionReadLess } from './readLess.js';
import { functionCliquableMap } from './cliquableMap.js';
import { functionSelectAuto } from './selectAuto.js'
import { functionSelectAutoDesktop } from './selectAutoDesktop.js'
import { functionHeaderModal } from './headerModal.js'
import { functionCarouselPictures } from './carouselPictures.js';

functionCliquableVideo('videoIntroduction');
functionReadMore();
functionReadLess();
functionCliquableMap();
functionSelectAuto();
functionHeaderModal();
functionSelectAutoDesktop()
functionCarouselPictures(
    '.photo-galery__carousel-container__carousel-inner',
    '.photo-galery__carousel-container__control__prev',
    '.photo-galery__carousel-container__control__next'
);




