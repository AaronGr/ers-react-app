import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

class ReimbursementTable extends Component {
    render() {
        return  (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Author</th>
                        <th>Amount</th>
                        <th>Submitted</th>
                        <th>Resolved</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Type</th>
                    </tr>
                </thead>
            </Table>
        )       
    }
}

export default ReimbursementTable;