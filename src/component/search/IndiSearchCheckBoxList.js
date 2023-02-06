import React, {useEffect, useState} from 'react';
import { Container,Grid } from 'semantic-ui-react'
import axios from 'axios';
import IndiSearchCehckBoxItem from "./IndiSearchCehckBoxItem";
import Box from "@mui/material/Box";


const IndiSearchCheckBoxList = props => {

    const [indiArray,setIndiArray] = useState([]);
    /**
     * indicator(계산된 재무지표) 목록들 가져오기
     */
    function getIndiSearchCheckList(){
        const option ={
            url:'http://localhost:8080/search/indicatorlist',
            method:'GET',
            header:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            data:{
            }
        }

            axios(option)
            .then(response => {
                setIndiArray([...response.data])
            })
    }

    useEffect(()=>{
        getIndiSearchCheckList();
    },[]);

    return (
        <Container>
            <Grid>
            {indiArray.map((item,index) =>{
                return (<Grid.Column><IndiSearchCehckBoxItem key={item.indiType} label={item.indiName}/></Grid.Column>)
            })}
            </Grid>
            <Box>

            </Box>
        </Container>
    );
};


export default IndiSearchCheckBoxList;