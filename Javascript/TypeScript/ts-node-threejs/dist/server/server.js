import express from 'express';
import path from 'path';
import * as THREE from 'three';
import apis from './api.js';
import { OBJLoader } from './OBJLoader.js';
class Server {
    constructor(options) {
        this._suppFileE = [
            '3mf',
            'amf',
            'awd',
            'dae',
            'ctm',
            'stl',
            'obj',
            'ply',
            'vtk',
            'vtp',
        ];
        this._material = new THREE.MeshBasicMaterial({
            color: 0x00ff00,
            wireframe: true,
        });
        const app = express();
        const __dirname = path.resolve();
        app.use(express.static(path.join(__dirname, '../client')));
        const self = this;
        this._ip = options
            ? options.ip
            : process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
        this._port = options ? options.port : 3000;
        this._initScene();
        app.get('/', (req, res) => {
            res.send(`Hello: ${apis.ello} + ${apis.jamie}`);
        });
        app.listen(this._port, this._ip, 0);
        console.log('Server running on http://%s:%s', this._ip, this._port);
    }
    _initScene() {
        let scene = new THREE.Scene();
        console.log(scene);
        console.log(apis);
        let objLoader = new OBJLoader();
        console.log(objLoader);
    }
}
new Server();
//# sourceMappingURL=server.js.map