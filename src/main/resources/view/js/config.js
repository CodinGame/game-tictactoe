import { EntityManager } from './EntityManager.js';
import { DefaultModule } from './DefaultModule.js';

export const assets = {
  baseUrl: '',
  images: {
    ball: 'https://static.codingame.com/common/images/about/team/img_team_maxime_cheramy.9860b2bc.jpg',
    nico: '/assets/nico.png',
    cross: 'https://static.codingame.com/common/images/about/team/img_team_matthieu_wipliez.29d96b71.jpg',
    background: '/assets/Background.jpg'
  }
};

export const players = [
  {
    name: 'Player 1',
    avatar: 'https://static.codingame.com/servlet/fileservlet?id=1719285195844&format=viewer_avatar'
  },
  {
    name: 'Player 2',
    avatar: 'https://static.codingame.com/servlet/fileservlet?id=1717001354716&format=viewer_avatar'
  }
];

export const demo = {
  logo: '/assets/logo.png',
  agents: [{
    index: 0,
    name: '[CG]Nonofr',
    avatar: 'https://static.codingame.com/servlet/fileservlet?id=' + 1715936252943 + '&format=viewer_avatar',
    type: 'CODINGAMER',
    color: '#ffae16',
    typeData: {
      me: true,
      nickname: '[CG]Nonofr'
    }
  }, {
    index: 1,
    name: 'Index_1',
    avatar: 'https://static.codingame.com/servlet/fileservlet?id=' + 1717001354716 + '&format=viewer_avatar',
    type: 'CODINGAMER',
    color: '#ff1d5c',
    typeData: {
      me: true,
      nickname: '[CG]Maxime'
    }
  }],
  playerCount: 2,
  frames: [{"global":{"entitymanager":{"width":1920,"height":1080}},"frame":{"key":true,"frameNumber":0,"default":[[0,0,0],[0,0,0],[0,0,0]],"duration":2000,"entitymanager":"CREATE 1 TEXT\nCREATE 2 TEXT\nCREATE 3 RECTANGLE\nCREATE 4 TEXT\nCREATE 5 LINE\nCREATE 6 LINE\nCREATE 7 LINE\nCREATE 8 LINE\nCREATE 9 GROUP\nUPDATE 2 1 {\"fillColor\":-2,\"x\":100,\"y\":300,\"fontSize\":90,\"text\":\"$1\",\"zIndex\":20}\nUPDATE 7 1 {\"x\":-125,\"y\":-375,\"y2\":375,\"x2\":-125,\"lineColor\":16711680,\"lineWidth\":10,\"zIndex\":-20}\nUPDATE 5 1 {\"x\":-375,\"y\":-125,\"y2\":-125,\"x2\":375,\"lineColor\":16711680,\"lineWidth\":10,\"zIndex\":-20}\nUPDATE 1 1 {\"fillColor\":-1,\"x\":100,\"y\":200,\"fontSize\":90,\"text\":\"$0\",\"zIndex\":20}\nUPDATE 6 1 {\"x\":-375,\"y\":125,\"y2\":125,\"x2\":375,\"lineColor\":16711680,\"lineWidth\":10,\"zIndex\":-20}\nUPDATE 9 1 {\"children\":\"7,5,6,8\",\"x\":960,\"y\":540}\nUPDATE 4 1 {\"fillColor\":16777215,\"rotation\":0.2,\"x\":100,\"y\":100,\"fontSize\":90,\"text\":\"Hello world !\",\"zIndex\":20}\nUPDATE 8 1 {\"x\":125,\"y\":-375,\"y2\":375,\"x2\":125,\"lineColor\":16711680,\"lineWidth\":10,\"zIndex\":-20}\nUPDATE 3 1 {\"x\":0,\"width\":1920,\"y\":0,\"lineColor\":16711680,\"lineWidth\":20,\"height\":1080}\n"}},{"key":true,"frameNumber":1,"default":[[1,0,0],[0,0,0],[0,0,0]],"entitymanager":"CREATE 10 SPRITE\nUPDATE 10 0 {\"scaleX\":0.0,\"anchorY\":0.5,\"image\":\"$0\",\"scaleY\":0.0,\"anchorX\":0.5,\"x\":-250,\"y\":-250}\nUPDATE 9 1 {\"children\":\"7,5,6,8,10\"}\nUPDATE 10 1 {\"scaleX\":1.0,\"scaleY\":1.0,\"rotation\":2.171618522726581}\n"},{"key":true,"frameNumber":2,"default":[[1,0,0],[0,2,0],[0,0,0]],"entitymanager":"CREATE 11 SPRITE\nUPDATE 11 0 {\"scaleX\":0.0,\"anchorY\":0.5,\"image\":\"$1\",\"scaleY\":0.0,\"anchorX\":0.5,\"x\":0,\"y\":0}\nUPDATE 9 1 {\"children\":\"7,5,6,11,8,10\"}\nUPDATE 11 1 {\"scaleX\":1.0,\"scaleY\":1.0,\"rotation\":0.7533098545619391}\nUPDATE 10 1 {\"rotation\":5.559972049546448}\n"},{"key":true,"frameNumber":3,"default":[[1,1,0],[0,2,0],[0,0,0]],"entitymanager":"CREATE 12 SPRITE\nUPDATE 12 0 {\"scaleX\":0.0,\"anchorY\":0.5,\"image\":\"$0\",\"scaleY\":0.0,\"anchorX\":0.5,\"x\":0,\"y\":-250}\nUPDATE 9 1 {\"children\":\"7,5,6,11,8,12,10\"}\nUPDATE 11 1 {\"rotation\":2.5693994870230035}\nUPDATE 12 1 {\"scaleX\":1.0,\"scaleY\":1.0,\"rotation\":1.5223519104654082}\nUPDATE 10 1 {\"rotation\":3.0266717439169204}\n"},{"key":true,"frameNumber":4,"default":[[1,1,0],[0,2,0],[0,0,2]],"entitymanager":"CREATE 13 SPRITE\nUPDATE 13 0 {\"scaleX\":0.0,\"anchorY\":0.5,\"image\":\"$1\",\"scaleY\":0.0,\"anchorX\":0.5,\"x\":250,\"y\":250}\nUPDATE 12 1 {\"rotation\":1.4539993945728713}\nUPDATE 13 1 {\"scaleX\":1.0,\"scaleY\":1.0,\"rotation\":1.8763198422864469}\nUPDATE 9 1 {\"children\":\"7,5,13,6,11,8,12,10\"}\nUPDATE 11 1 {\"rotation\":0.39271410722213934}\nUPDATE 10 1 {\"rotation\":5.017897788914569}\n"},{"key":true,"frameNumber":5,"duration":10000,"default":[[1,1,1],[0,2,0],[0,0,2]],"entitymanager":"CREATE 14 SPRITE\nCREATE 15 LINE\nUPDATE 14 0 {\"scaleX\":0.0,\"anchorY\":0.5,\"image\":\"$0\",\"scaleY\":0.0,\"anchorX\":0.5,\"x\":250,\"y\":-250}\nUPDATE 14 1 {\"scaleX\":1.0,\"scaleY\":1.0,\"rotation\":2.0368056187548538}\nUPDATE 12 1 {\"rotation\":2.953481806198805}\nUPDATE 13 1 {\"rotation\":2.2996432641333646}\nUPDATE 9 1 {\"children\":\"7,5,13,6,14,11,8,12,15,10\"}\nUPDATE 11 1 {\"rotation\":3.810670998644087}\nUPDATE 15 1 {\"x\":-250,\"y\":-250,\"y2\":-250,\"x2\":250,\"lineColor\":-1,\"lineWidth\":10,\"zIndex\":30}\nUPDATE 10 1 {\"rotation\":2.370869362953995}\n"}]
};

export const modules = [
  {name: 'default', class: DefaultModule},
  {name: 'entitymanager', class: EntityManager}
];