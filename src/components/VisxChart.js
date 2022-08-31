import { AxisBottom, AxisLeft } from '@visx/axis'
import { GradientTealBlue } from '@visx/gradient'
import { Group } from '@visx/group'
import { scaleBand, scaleLinear } from '@visx/scale'
import { Bar } from '@visx/shape'
import React, { useMemo } from 'react'
import { sortByMonth } from '../util/sortDate'


const verticalMargin = 120
const margins = {
    left: 30,
}

export function Chart({ data, width, height }) {

    const xMax = width - margins.left
    const yMax = height - verticalMargin

    const xScale = useMemo(
        () =>
            scaleBand({
                range: [0, xMax],
                round: true,
                domain: sortByMonth(Object.keys(data)).map((key) => key),
                padding: 0.4,
            }),
        [xMax, data],
    )

    const yScale = useMemo(
        () =>
            scaleLinear({
                range: [yMax, 0],
                round: true,
                domain: [0, Math.max(...Object.values(data).map((value) => value))],
            }),
        [yMax, data],
    )

    return width < 10 ? null : (

        <svg width={width} height={height}>

            <GradientTealBlue id="teal" />
            <rect width={width} height={height} fill="url(#teal)" rx={14} />
            <Group top={verticalMargin / 2} left={margins.left}>
                {(Object.entries(data)).map((entries) => {

                    const letter = entries[0]
                    const barWidth = xScale.bandwidth()
                    const barHeight = yMax - (yScale(entries[1] - 5) ?? 0)
                    const barX = xScale(letter)
                    const barY = yMax - barHeight


                    return (
                        <Bar
                            key={`bar-${letter}`}
                            x={barX}
                            y={barY}
                            width={barWidth}
                            height={barHeight}
                            fill="black"
                        />
                    )
                })}
                <AxisBottom
                    numTicks={data.length}
                    top={yMax}
                    scale={xScale}
                    tickLabelProps={() => ({
                        fill: 'black',
                        fontSize: 11,
                        textAnchor: 'middle',
                    })}
                />
                <AxisLeft
                    scale={yScale.nice()}
                    numTicks={10}
                    top={0}
                    tickLabelProps={(e) => ({
                        fill: 'black',
                        fontSize: 10,
                        textAnchor: 'end',
                        x: -12,
                        y: (yScale(e) ?? 0) + 3,
                    })}
                />
            </Group>
        </svg>
    )
}


