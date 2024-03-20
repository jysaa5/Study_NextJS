import { NextPage } from 'next';

interface Props {
    data: number
}

const GetStaticPropsPage: NextPage = async () => {

 async function getData() {
    const delayInSeconds = 2;
    const data: number = await new Promise((reslove) => setTimeout(() => reslove(Math.random()), delayInSeconds * 1000))

    return {
        props: {data}
    }
}
    const data = await getData();
    console.log(data)
    return (
        <main>
            <h1>getStaticProps Page</h1>
            <p>값: {data?.props?.data ?? ''}</p>
        </main>
    )
}

export default GetStaticPropsPage;

