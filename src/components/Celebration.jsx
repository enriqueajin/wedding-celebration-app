import { Box, Button, Divider } from "@mui/material";
import champan from "../assets/champan.png";

export default function Celebration() {
    
    const buttonStyle = { 
        backgroundColor: "#8c9c6d",
        borderRadius: 5,
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 10,
        paddingBottom: 10,
        fontFamily: "nexaextralight",
        fontWeight: 'bold'
    }

    return(
        <>
            <Box className="rings-icon-container">
                <img className="rings" src={champan} />
            </Box>
            <br />
            <p className="ceremony-title">CELEBRACIÓN</p>
            <br />
            <p className="ceremony-desc">Lugar:</p>
            <br />
            <p className="ceremony-desc">Palmetto (trapiche)</p>
            <br />
            <br />
            <Box className="ceremony-details-container">
                <p className="ceremony-date">31 AGO</p>
                <Divider orientation="vertical" variant="li" flexItem/>
                <Box className="ceremony-time-container">
                    <p className="ceremony-time">5:30</p>
                    <p className="ceremony-time-suffix">P.M.</p>
                </Box>
            </Box>
            <br />
            <p className="ceremony-address">Calzada Aguilar Batres, KM 13, Carretera al Pacífico, Cuesta Villa Lobos, Villa Nueva</p>
            <br />
            <br />
            <Button 
                variant="contained"
                href="https://maps.app.goo.gl/YPrv2kA2bfCffTpZA" 
                target="_blank" 
                style={buttonStyle}>
                VER UBICACIÓN
            </Button>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </>
    )
}