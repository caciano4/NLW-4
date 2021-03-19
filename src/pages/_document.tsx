import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                        <link href="https://emoji-css.afeld.me/emoji.css" rel="stylesheet"></link>
                        <link rel="shortcut icon" href="icon/clock.svg" type="image/svg" />
                        <link rel="preconnect" href="https://fonts.gstatic.com" />
                        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" />
                </Head>
                    <body>
                        <Main />
                        <NextScript />
                    </body>
            </Html>
        )
    }
}
// Esta pagina fica estatica so carrega na primeira vez que o usuario acessa-la.