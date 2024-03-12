'use client'
import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


const LinkPage: NextPage =  () => {
    const router = useRouter();
    return (
        <main>
            <h1>Links</h1>
            <button onClick={() => {router.push('/section1/getStaticProps')}}>/getStaticProps</button>
            {/* <h1>Links</h1>
            <div style={{height: '200vh'}}/>
            <Link href="/section1/getStaticProps" style={{color: 'red'}}>/getStaticProps</Link> */}
        </main>
    )
}

 export default LinkPage;