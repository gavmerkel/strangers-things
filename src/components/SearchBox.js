import React from 'react'
import { Alert, Button, Card } from 'react-bootstrap'

export default function SearchBox() {
    return (
        <Card className="w-50 mx-auto">
            <Card.Body>

                <Card.Title>
                    Search Posts <input type="text" />
                </Card.Title>

            </Card.Body>
        </Card>
    )
}
