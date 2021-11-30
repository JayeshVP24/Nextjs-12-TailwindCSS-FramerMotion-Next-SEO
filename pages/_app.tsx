import "../styles/globals.css";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import { AppProps } from "next/app";
import Head from "next/head";
import { AnimatePresence, domAnimation, LazyMotion } from "framer-motion";
// import { IKContext} from 'imagekitio-react';
function MyApp({ Component, pageProps }: AppProps) {
    // const PUBLIC_KEY = "public_DdnXL0ip5CRZeQdeSI4QrmwIetA=";
    // const URL_ENDPOINT = "https://ik.imagekit.io/elightlabs/Annamaya";

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta
                    httpEquiv="Content-Type"
                    content="text/html; charset=utf-8 "
                />
            </Head>
            {/* <IKContext
            publicKey={PUBLIC_KEY}
            urlEndpoint={URL_ENDPOINT}>             */}
            <div>
                <DefaultSeo {...SEO} />
                <LazyMotion features={domAnimation}>
                    <AnimatePresence exitBeforeEnter>
                        <Component {...pageProps} />
                    </AnimatePresence>
                </LazyMotion>
            </div>
            {/* </IKContext> */}
        </>
    );
}

export default MyApp;
