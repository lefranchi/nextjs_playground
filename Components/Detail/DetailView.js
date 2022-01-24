import Head from 'next/head'
import styles from './Detail.module.css'
import { useRouter } from 'next/router'

const DetailView = ({ id }) => {
    const router = useRouter()
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className="titleGlobal">
                    Detail {id}
                </h1>
                <h1 onClick={() => router.back()}>
                    <span >Voltar</span>
                </h1>
            </main>

        </div>
    )
}

export default DetailView;