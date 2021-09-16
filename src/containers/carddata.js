import thepeg from './ThePeg.png';
import cloud from './Cloud.png';
import nin from './Nintendo.png';
import news from './newspaper.png';
import anime from './Anime.png';
import opera from './Opera.png';
import dev from './Developer.png';
import can from './canada.png';
import mex from './Mexico.png';
import neptunus from './neptunus.png';

const cardData = [
//this is the list of the topics that the News API will query on the Home page. The icons are pulled from local images.
  {
    img: news,
    title: 'Headlines'
  },
  {
    img: can,
    title: 'Canada'
  },
  {
    img: mex,
    title: 'Mexico'
  },
  {
    img: cloud,
    title: 'Cloud'
  },
  {
    img: nin,
    title: 'Nintendo'
  },
  {
    img: thepeg,
    title: 'Winnipeg'
  },
  {
    img: dev,
    title: 'Developer'
  },
  {
    img: anime,
    title: 'Anime'
  },
  {
    img: opera,
    title: 'Opera'
  },
  {
    img: neptunus,
    title: 'Pagan'
  }
];

export default cardData;