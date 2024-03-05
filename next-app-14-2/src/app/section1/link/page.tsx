import { NextPage } from 'next';
import Link from 'next/link';

const LinkPage: NextPage = async () => {
   
    return (
        <main>
            <h1>Links</h1>
            <Link href="/section1/getStaticProps">/getStaticProps</Link>
        </main>
    )
}

 export default LinkPage;