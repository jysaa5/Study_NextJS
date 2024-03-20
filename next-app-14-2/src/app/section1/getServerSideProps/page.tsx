import { NextPage } from 'next';

async function getData() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`, { cache: 'no-store' });
    const data = await res.json();
    
    return {
        props: {data}
    }
 }

const GetServerSidePage: NextPage = async () => {
    const data = await getData();
    console.log(data);
    return (
        <main>
            <h1>getStaticProps Page</h1>
            <p>값: { data.props.data?.title}</p>
        </main>
    )
}

export default GetServerSidePage;

