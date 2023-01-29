import React from 'react';
import PropTypes from 'prop-types';
import { Container,Grid } from 'semantic-ui-react'
import IndiSearchCheckBoxList from "./search/IndiSearchCheckBoxList";

const Search = props => {
    return (
        <>
            <Container>

                <Grid container stackable verticalAlign='middle'>
                    <Grid.Row>
                        <IndiSearchCheckBoxList/>
                    </Grid.Row>
                    <Grid.Row>

                    </Grid.Row>
                </Grid>

            </Container>
        </>
    );
};

Search.propTypes = {
    
};

export default Search;