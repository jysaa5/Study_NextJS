import { NextPage } from 'next';

interface Props {
    data: number
}
const Example: NextPage<Props> = ({ data }) => {
    return (
        <main>
            <h1>getStaticProps Page</h1>
            <p>값: {data}</p>
        </main>
    )
}

export default Example;

export async function getData() {
    const delayInSeconds = 2;
    const data = await new Promise((reslove) => setTimeout(() => reslove(Math.random()), delayInSeconds * 1000))

    return {
        props: {data}
    }
}