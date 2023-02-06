import Table from 'react-bootstrap/Table';
import TableHeader from './TableHeader';
import TableData from './TableData';
import TableRow from './TableRow';

function BasicExample(props) {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    {props.data.length ? (
                        Object.entries(props.data[0]).map(([key, value]) => (
                            <TableHeader key={key} data={key} />
                        ))
                    ) : (
                        Object.entries(props.data).map(([key, value]) => (
                            <TableHeader key={key} data={key} />
                        ))
                    )}
                    <th> Action </th>
                </tr>
            </thead>
            <tbody>

                {props.data.length ? (
                    props.data.map((post) => (
                        <TableRow key={post.id} data={post} />
                    ))
                ) : (
                    <TableRow data={props.data} />
                )}

            </tbody>
        </Table>
    );
}

export default BasicExample;