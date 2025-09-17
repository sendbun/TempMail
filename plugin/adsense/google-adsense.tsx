import Script from "next/script";

interface GoogleAdsenseProps {
  client: string;
  slot: string;
  type?: string;
}

const GoogleAdsense = ({ client, slot, type = "auto" }: GoogleAdsenseProps) => (
  <>
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`}
      id="google-adsense"
    ></Script>
    {type == "content" ? (
      <ins
        className="adsbygoogle"
        style={{ display: "block", textAlign: "center" }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client={client}
        data-ad-slot={slot}
      ></ins>
    ) : (
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={type}
        data-full-width-responsive="true"
      ></ins>
    )}

    <Script
      id="google-adsense-script"
      dangerouslySetInnerHTML={{
        __html: `
                    (adsbygoogle = window.adsbygoogle || []).push({});
                `,
      }}
    ></Script>
  </>
);

export default GoogleAdsense;
