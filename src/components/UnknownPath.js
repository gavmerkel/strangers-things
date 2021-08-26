import React from 'react'
import { Card, Container } from 'react-bootstrap'
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
    MDBCarouselCaption
  } from 'mdb-react-ui-kit'

export default function UnknownPath(props) {

    const { EmptyHeader } = props

    return (
        <>
        {EmptyHeader}

        <Container className='d-flex flex-column' style={{ minHeight: '80vh' }}>
            <Card>

                <MDBCarousel showControls showIndicators dark fade>
                <MDBCarouselInner>
                    <MDBCarouselItem itemId={0}>
                    <MDBCarouselElement src='/img/404_error_2.jpg' alt='...'/>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId={1}>
                    <MDBCarouselElement src='/img/404_error_3.jpg' alt='...'/>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId={2}>
                    <MDBCarouselElement src='/img/404_error_1.jpg' alt='...'/>
                    </MDBCarouselItem>
                </MDBCarouselInner>
                </MDBCarousel>
            </Card>
        </Container>
        </>
      )
}
