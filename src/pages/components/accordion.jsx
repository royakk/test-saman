import React,{useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { items } from '../data/data';
import { Stack } from '@mui/material';
import ColorChips from './chip';
import CssBaseline from '@mui/material/CssBaseline';
import styles from '../../styles/accordion.module.css'

export default function ControlledAccordions() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={styles.main}>
      <div className='flex p-4 bg-slate-100 rounded'>
        <Typography variant='h6' mx={4} >وضعیت</Typography>
        <Typography variant='h6'  mx={4}>نام ذینفع</Typography>
      </div>

      {items.map ((item,index)=>(
        <Accordion
          sx={{my :0.5,border:'0.5px solid #f7f7f7'}}
          key={item.id}
          expanded={expanded === index}
          onChange={handleChange(index)}
        >
          <AccordionSummary
            sx={{my:0.3,}}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Stack direction='row' spacing={3}>
              <ColorChips status={item.status} lable={item.status}/>
              <Typography  sx={{ color: 'text.secondary',marginX:2,fontSize:'16px' }}>{item.title}</Typography>
            </Stack>
          </AccordionSummary>
          <AccordionDetails
            sx={{paddingX:5, backgroundColor:'#f7f7f7'}}
          >
            {item.children.map((child,innerIndex)=>(
              <li key={innerIndex} className={styles.sub}>
                <div className='grid grid-cols-3 gap-4'>
                  <Typography>{child.title}</Typography>
                  <div className='flex'>
                    {child.statuses.slice(0, 3).map((status,innerStatus)=>(
                      <div className='flex mx-2' key={innerStatus}>
                        <ColorChips lable={status.lable} status={status.lable}/>
                        <Typography>{status.value}</Typography>
                      </div> 
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}  
    </div>
  );
}
