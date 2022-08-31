
import { Chart } from './VisxChart'
import ParentSize from '@visx/responsive/lib/components/ParentSize'
import { getFrequency } from '../util/getFrequency';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export function Graphs({ posts }) {

    const postsMonths = posts.filter((post) => new Date(parseInt(post.createdAt)).getFullYear() === 2019).map((post) => months[new Date(parseInt(post.createdAt)).getMonth()])
    const postsAuthors = posts.map((post) => `${post.author.firstName} ${post.author.lastName}`)

    const monthsFrequency = getFrequency(postsMonths)

    const authorFrequency = getFrequency(postsAuthors)


    return <div style={{ flex: '1' }}>
        <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Graphs</h1>
        {
            !posts.length ? (<h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Loading...</h1>) :
                <>
                    <h3 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Posts in 2019 by month</h3>
                    <ParentSize style={{ display: 'flex', height: '32vh', paddingRight: '1rem' }}>
                        {({ width, height }) => <Chart data={monthsFrequency} width={width} height={height} />}
                    </ParentSize>
                </>}
        {
            !posts.length ? (<h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Loading...</h1>) :
                <>
                    <h3 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Posts in 2019 by author</h3>
                    <ParentSize style={{ display: 'flex', height: '32vh', paddingRight: '1rem' }}>
                        {({ width, height }) => <Chart data={authorFrequency} width={width} height={height} />}
                    </ParentSize>
                </>}
    </div>
}

