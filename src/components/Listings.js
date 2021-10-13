// conditionally render a delete column in the table if user is logged in

import React from 'react'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@material-ui/core'

import { Link } from 'react-router-dom'

const Listings = (props) => {
    console.log('props.listings', props)
    return (
        <Container maxWidth="lg" className="car-container">
            {/* Change NAME to props.user.username */}
            <h4>Welcome, {props.user.username}</h4>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Hours</TableCell>
                        <TableCell>Address</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {/* Change cars to props.cars and remove the cars.json import above */}
                {props.listings.map(listing => (
                    <TableRow key={listing.id}>
                        <TableCell className="biz-name">
                            <Link to={`/listings/${listing.id}`}>{listing["Name"]}</Link>
                            </TableCell>
                        <TableCell>{listing["Description"]}</TableCell>
                        <TableCell>{listing["Hours"]}</TableCell>
                        <TableCell>{listing["Address"]}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default Listings