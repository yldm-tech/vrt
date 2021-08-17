import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enUsTrans from '@/assets/i18n/en-us.json';
import zhCnTrans from '@/assets/i18n/zh-cn.json';
import jaJpTrans from '@/assets/i18n/ja-jp.json';

i18n
	.use(LanguageDetector) // 嗅探当前浏览器语言
	.use(initReactI18next) // init i18next
	.init({
		// 引入资源文件
		resources: {
			en: {
				translation: enUsTrans,
			},
			zh: {
				translation: zhCnTrans,
			},
			ja: {
				translation: jaJpTrans,
			},
		},
		// 选择默认语言，选择内容为上述配置中的key，即en/zh/ja
		fallbackLng: 'ja',
		debug: false,
		interpolation: {
			escapeValue: false, // not needed for react as it escapes by default
		},
	})
	.then((r) => console.log(r));

export default i18n;
