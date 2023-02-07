import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

function BasicExample(props) {

    const [rows, setRows] = useState(props.data);

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    {rows.length ? (
                        Object.entries(rows[0]).map(([key, value]) => (
                            <TableHeader key={key} data={key} />
                        ))
                    ) : (
                        rows.length === 0 ? (
                            <th>Warning!</th>
                        ) : (

                            Object.entries(rows).map(([key, value]) => (
                                <TableHeader key={key} data={key} />
                            ))
                        )
                    )}
                    {rows.length !== 0 && <th> Action </th>}
                </tr>
            </thead>
            <tbody>

                {rows.length ? (
                    rows.map((post) => (
                        <TableRow key={post.id} data={post} row_option={setRows} unique_id={post.id} rows={rows} />
                    ))
                ) : (
                    rows.length === 0 ? (
                        <tr>
                            <td>No Posts Available</td>
                        </tr>

                    )
                        : (
                            <TableRow data={rows} row_option={setRows} unique_id={rows.id} rows={rows} />
                        )
                )}

            </tbody>
        </Table>
    );
}

export default BasicExample;