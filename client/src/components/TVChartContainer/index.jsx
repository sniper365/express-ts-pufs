import * as React from 'react';
import './index.css';
import { widget } from '../../charting_library';
import datafeed from './datafeed';

function getLanguageFromURL() {
	const regex = new RegExp('[\\?&]lang=([^&#]*)');
	const results = regex.exec(location.search);
	return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

export class TVChartContainer extends React.PureComponent {
	static defaultProps = {
		symbol: 'Bitfinex:ETH/USDT',
		interval: '5',
		datafeedUrl: 'https://demo_feed.tradingview.com',
		libraryPath: '/charting_library/',
		chartsStorageUrl: 'https://saveload.tradingview.com',
		chartsStorageApiVersion: '1.1',
		clientId: 'tradingview.com',
		userId: 'public_user_id',
		theme: 'Dark',
		fullscreen: false,
		autosize: true,
		custom_css_url: '/static/css/themed.css',
		studiesOverrides: {},
	};

	tvWidget = null;
	ref = React.createRef();

	componentDidMount() {
		if (!this.ref.current) {
			return;
		}

		const widgetOptions = {
			symbol: this.props.symbol,
			// BEWARE: no trailing slash is expected in feed URL
			// tslint:disable-next-line:no-any
			datafeed: datafeed,
			interval: this.props.interval,
			container: this.ref.current,
			library_path: this.props.libraryPath,

			locale: getLanguageFromURL() || 'en',
			disabled_features: ['use_localstorage_for_settings'],
			enabled_features: ['study_templates'],
			charts_storage_url: this.props.chartsStorageUrl,
			charts_storage_api_version: this.props.chartsStorageApiVersion,
			client_id: this.props.clientId,
			user_id: this.props.userId,
			theme: this.props.theme,
			fullscreen: this.props.fullscreen,
			autosize: this.props.autosize,
			custom_css_url: this.props.custom_css_url,
			studies_overrides: this.props.studiesOverrides,
		};

		const tvWidget = new widget(widgetOptions);
		tvWidget.applyOverrides({ 'paneProperties.background': '#00204c', 'paneProperties.backgroundType': 'solid' })
		this.tvWidget = tvWidget;

		tvWidget.onChartReady(() => {
			tvWidget.headerReady().then(() => {
				tvWidget
					.chart()
					.createOrderLine()
					.setText('Long')
					.setQuantity(2.3)
					.setPrice(1330)
				console.log('[tvWidget onChartReady]: started')
				const button = tvWidget.createButton();
				button.setAttribute('title', 'Click to show a notification popup');
				button.classList.add('apply-common-tooltip');
				button.addEventListener('click', () => tvWidget.showNoticeDialog({
					title: 'Notification',
					body: 'TradingView Charting Library API works correctly',
					callback: () => {
						console.log('Noticed!');
					},
				}));
				button.innerHTML = 'Check API';
			});
		});
	}

	componentWillUnmount() {
		if (this.tvWidget !== null) {
			this.tvWidget.remove();
			this.tvWidget = null;
		}
	}

	render() {
		return (
			<div
				ref={this.ref}
				className={'TVChartContainer'}
			/>
		);
	}
}
