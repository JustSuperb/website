export const gaId = process.env.NEXT_PUBLIC_GA_ID;

declare global {
    interface Window {
        gtag: any;
    }
}

export const pageview = (url) => {
    window.gtag("config", gaId, {
        page_path: url,
    });
};
