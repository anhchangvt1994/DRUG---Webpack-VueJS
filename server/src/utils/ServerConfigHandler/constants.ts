import { IServerConfig } from './types'

export const defaultServerConfig: IServerConfig = {
	locale: {
		enable: false,
		hideDefaultLocale: true,
		routes: {},
	},
	isRemoteCrawler: false,
	crawl: {
		enable: true,
		content: ['desktop'],
		cache: {
			enable: true,
			time: 4 * 3600, // 4 hours (second unit)
			renewTime: 3 * 60, // 3 minutes (second unit)
		},
		compress: true,
		optimize: ['script'],
		routes: {},
	},
	api: {
		list: {},
	},
}
