"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const next_1 = __importDefault(require("next"));
const express_1 = __importDefault(require("express"));
const server = express_1.default();
const port = parseInt(process.env.PORT || '3006', 10);
const NODE_ENV = process.env.NODE_ENV;
const ENV = process.env.ENV;
const dev = NODE_ENV !== 'production';
const app = next_1.default({ dev });
const handle = app.getRequestHandler();
app.prepare().then(() => {
    server.get('/gioi-thieu', (req, res) => {
        return app.render(req, res, '/gioi-thieu', req.query);
    });
    server.get('/quy-trinh', (req, res) => {
        return app.render(req, res, '/quy-trinh', req.query);
    });
    server.get('/thac-mac', (req, res) => {
        return app.render(req, res, '/thac-mac', req.query);
    });
    server.get('/lien-he', (req, res) => {
        return app.render(req, res, '/lien-he', req.query);
    });
    server.get('/tin-tuc', (req, res) => {
        return app.render(req, res, '/tin-tuc', req.query);
    });
    server
        .all('*', (req, res) => {
        handle(req, res);
    })
        .listen(port);
    console.log(`> Server listening at http://localhost:${port} as ${NODE_ENV} as ${ENV}`);
});
//# sourceMappingURL=index.js.map