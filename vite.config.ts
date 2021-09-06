import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import * as path from 'path';
import fs, { existsSync } from 'fs';


// Dotenv 是一个零依赖的模块，它能将环境变量中的变量从 .env 文件加载到 process.env 中
const dotenv = require('dotenv');

// 判断根目录中是否存在 .env 文件并优先使用
const file = existsSync('.env') ?
	'.env' : path.resolve('envs', `.env.${process.env.NODE_ENV}`);

const envConfig = dotenv.parse(fs.readFileSync(file));
for (const k in envConfig) {
	process.env[k] = envConfig[k];
}

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [reactRefresh()],
	resolve: {
		alias: {
			'@@': path.resolve(__dirname),
			'@': path.resolve(__dirname, 'src'),
		}
	},
	server: {
		cors: true,
		port: process.env.VITE_PORT as unknown as number,
		hmr: {
			host: 'localhost',
			protocol: 'ws',
			port: process.env.VITE_PORT as unknown as number,
		}
	}
});
