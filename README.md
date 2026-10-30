# Sniper Data Backend S2 (Dhan, TOTP only)
Render: Build `npm install`, Start `npm start` (Node 18+). Env: see .env.example (VAPID keys: `npm run keys`).
Open the backend URL in a browser = live status dashboard (auto-refresh, checks login / spot / OHLC / OI / change in OI / push).
Endpoints: /spot /gann-candles?index=&tf=30s|1m|3m|5m|15m /oi-chain?index=&strikes=20 /analytics /signals /state /health /push/key /push/subscribe /push/unsubscribe /push/test
Signals pushed at candle close: Bull/Bear divergence, Bull/Bear Sweep-Breakout, RSI cross above/below its SMA (RSI 14, SMA 9, pivot 5; env RSI_LEN, SMA_LEN, PIVOT).
