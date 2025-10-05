import {Table} from "@chakra-ui/react";

export function FlowTableStandard() {
    return (
        <Table.Root size='lg' style={{ width: '240px', border: '1px solid oklch(70.9% 0.01 56.259)'}} draggable>
            <Table.Header>
                <Table.Row>
                    <Table.ColumnHeader style={{ border: '1px solid oklch(70.9% 0.01 56.259)' }}>Header</Table.ColumnHeader>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                <Table.Row>
                    <Table.Cell style={{ border: '1px solid oklch(70.9% 0.01 56.259)' }}>Cell</Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table.Root>
    )
}