# Karan Ranawade — React Portfolio

## Stack
- React 18
- Vite
- lucide-react icons
- Plain CSS (responsive, no heavy UI framework)

## Run locally
1. Install Node.js 18+.
2. In this folder run:
   npm install
   npm run dev
3. Open the local URL printed by Vite.

## Production build
npm run build

The production files are generated in `dist/`.

## Contact form
The contact form uses FormSubmit and is configured for:
karanranawade54@gmail.com

The first submission can require one-time activation from FormSubmit. For a production site, you can later replace the form action with your own backend/API (AWS Lambda + API Gateway, SES, or another email service).

## Deploy on AWS
This React/Vite site can be built with `npm run build`, then the `dist/` folder can be hosted on S3 and served through CloudFront.
