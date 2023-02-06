import React from 'react'

export default function TableHeader({ data }) {

    return (
        <th>{data.toUpperCase()}</th>
    )
}
