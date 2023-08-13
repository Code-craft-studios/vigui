import { Box, Typography } from '@mui/material';
import styles from './styles.module.css';
import { FC } from 'react';

interface CardMemberProps{
    img:string;
    name:string;
    position:string;
}


const CardMember:FC<CardMemberProps> = ({img,name,position}) =>{
    return(
        <Box className={styles.member}>
            <img className={styles.member__img} src={img} alt="member-img" />
            <Box className={styles.member__text} sx={{display:'flex',flexDirection:'column',gap:'6px'}}>
                <Typography variant='h5' className={styles.member__name}>{name}</Typography>
                <p className={styles.member__position}>{position}</p>
            </Box>
        </Box>
    )
}

export default CardMember;