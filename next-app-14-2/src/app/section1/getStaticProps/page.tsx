import { NextPage } from 'next';

async function getData() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`, { cache: 'force-cache' });
    const data = await res.json();
    
    return {
        props: {data}
    }
 }

const GetStaticPropsPage: NextPage = async () => {

    const data = await getData();
    console.log(data);

    return (
        <main>
            <h1>getStaticProps Page</h1>
            <p>값: {data?.props?.data ?? ''}</p>
        </main>
    )
}

export default GetStaticPropsPage;

