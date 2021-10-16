
import React from 'react'
import { checkAuth } from '../Router'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@material-ui/core'

import DeleteIcon from '@material-ui/icons/Delete'


import { Link } from 'react-router-dom'

const Listings = (props) => {
    console.log('props.listings', props)
    // conditionally render a delete column in the table if user is logged in
    return checkAuth() ? (
        <Container maxWidth="lg" className="car-container">
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Hours</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {props.listings.map((listing, index) => (
                    <TableRow key={listing.id}>
                        <TableCell className="biz-name">
                            <Link to={`/listings/${listing.id}`}>{listing["Name"]}</Link>
                            </TableCell>
                        <TableCell>{listing["Description"]}</TableCell>
                        <TableCell>{listing["Hours"]}</TableCell>
                        <TableCell>{listing["Address"]}</TableCell>
                        <TableCell>
                            <DeleteIcon className="icon text-red" onClick={() => props.removeListing(index)}/>
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Container>
    ) : (
        <Container maxWidth="lg" className="car-container">
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