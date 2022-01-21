import Head from 'next/head'
import styles from './Home.module.css'

const HomeView = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className="titleGlobal">
                    Home
                </h1>
                <h1 className="titleGlobal">
                    Detail 1
                </h1>
                <h1 className="titleGlobal">
                    Detail 100
                </h1>
            </main>

        </div>
    )
}

export default HomeView;