'use client'
import CardMember from '@/components/CardMember';
import { Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel'

const Carrousel = ()=>{

    const members = [
        {
          img:'/images/vigui-equipo-atencion-al-cliente-desktop.webp',
          name:'Victor Alonso',
          position:'Representante Legal'
        },
        {
          img:'/images/vigui-equipo-fibra-optica-desktop.webp',
          name:'Dora Hoyos',
          position:'Gerente Administrativa'
        },
        {
          img:'/images/vigui-equipo-internet-dedicado-desktop.webp',
          name:'Valentina Suarez',
          position:'Auxiliar Administrativa'
        },
        {
          img:'/images/vigui-equipo-internet-sin-caidas-desktop.webp',
          name:'Gerardo Ramirez',
          position:'Ing. Sistemas y jefe de técnicos'
        }
      ]

    return (
            <>
                <Box sx={{width:'100vw',height:'250px',display:{lg:'none'}}}>
                    <Carousel

                >
                        {members.map((member)=>(
                            <Box key={member.name} sx={{display:'flex',justifyContent:'center',alignContent:'center'}}>
                                    <CardMember img={member.img} name={member.name} position={member.position}/>
                            </Box>
                        ))}
                    </Carousel>
                </Box>
                <Box sx={{width:'100vw',height:'200px',justifyContent:'space-around',display:{xs:'none',lg:'flex'}}}>
                    {
                        members.map((member)=>(
                            <Box key={member.name} >
                                    <CardMember img={member.img} name={member.name} position={member.position}/>
                            </Box>
                        ))
                    }
                </Box>
            </>
      );
}

export default Carrousel