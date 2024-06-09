import { Box, Button } from "@mui/material";
import gifts from "../assets/gift.png";

export default function Gifts() {

    const textMargin = {
        width: {
            xs: '85%', 
            sm: '85%', 
            md: '30%'
        }
    }

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
                <img className="rings" src={gifts} />
            </Box>
            <br />
            <p className="ceremony-title">REGALOS</p>
            <br />
            <Box sx={textMargin}>
                <p className="gifts-desc">Si quieres agradarnos con un presente, hemos elegido nuestros regalos en Bodas Cemaco. Solicita la lista en una sucursal como "Ajin Guillén" o mira los regalos en línea.</p>
            </Box>
            <br />
            <br />
            <Button 
                variant="contained"
                href="https://www.cemaco.com/list/bodaajinguillen" 
                target="_blank" 
                style={buttonStyle}>
                VER REGALOS
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