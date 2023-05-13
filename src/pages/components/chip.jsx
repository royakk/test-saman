import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

export default function ColorChips(props) {
const {status,lable,value} = props;
switch (status) {
    case 'مطلوب':
      return (
        <>
          <Chip sx={{mx:2,width:'100px'}} label={lable} color="success"/>
        </>
      );
    case 'نامطلوب':
      return (
        <>
          <Chip sx={{mx:2,width:'100px'}} label={lable} color="error"  />
        </>
      );
    case 'متوسط':
      return (
        <>
          <Chip sx={{mx:2,width:'100px'}} label={lable} color="warning"/>
        </>
      );
    case 'بدون انتظار':
      return (
        <>
          <Chip sx={{mx:2,width:'100px'}}  label={lable}  />
        </>
      );
    case 'ISMS':
      return (
        <>
        <Stack direction='row' spacing={1}>
          <Typography>{value}</Typography>  
          <Chip sx={{mx:2,width:'80px'}} label={lable} color="error" />
        </Stack>
        </>
      );
    case 'ITIL':
      return (
        <>
          <Stack direction='row' spacing={1}>
          <Typography>{value}</Typography>  
          <Chip x={{mx:2,width:'80px'}} label={lable} color="success"/>
        </Stack>
        </>
      );
    default:
      return null;
  }
}