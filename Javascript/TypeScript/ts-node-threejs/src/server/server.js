import express from 'express';
import http from 'http';
import path from 'path';
import apis from './apis/api.js';
import * as THREE from 'three';
import { OBJLoader } from './OBJLoader.js';

class App {
  constructor(port) {
    console.log(apis);
    this.port = port;
    const app = express();
    const __dirname = path.resolve(); // @see https://blog.csdn.net/weixin_41192489/article/details/116881498
    app.use(express.static(path.join(__dirname, '../client')));
    app.use(
      '/build/three.module.js',
      express.static(
        path.join(__dirname, '../../node_modules/three/build/three.module.js')
      )
    );
    app.use(
      '/jsm/controls/OrbitControls',
      express.static(
        path.join(
          __dirname,
          '../../node_modules/three/examples/jsm/controls/OrbitControls.js'
        )
      )
    );
    app.use(
      '/jsm/libs/stats.module',
      express.static(
        path.join(
          __dirname,
          '../../node_modules/three/examples/jsm/libs/stats.module.js'
        )
      )
    );
    app.use(
      '/jsm/libs/dat.gui.module',
      express.static(
        path.join(
          __dirname,
          '../../node_modules/three/examples/jsm/libs/dat.gui.module.js'
        )
      )
    );
    this._initScene();
    this.server = new http.Server(app);
  }

  _initScene() {
    let scene = new THREE.Scene();
    console.log(scene);
    console.log(OBJLoader);
  }
  Start() {
    this.server.listen(this.port, () => {
      console.log(`Server listening on port ${this.port}.`);
    });
  }
}

new App(3000).Start();
