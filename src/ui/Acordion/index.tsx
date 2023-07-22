'use client';

import styles from './styles.module.css';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { frequentQuestions } from '@/data/frequentQuestions';
import { Box } from '@mui/material';

const Acordion = () => {
  return (
    <Box component='div' className={styles.container}>
      {frequentQuestions.map((data) => (
        <Accordion key={data.answer} className={styles.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            className={styles.summary}
          >
            {data.question}
          </AccordionSummary>
          <AccordionDetails>{data.answer}</AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default Acordion;
