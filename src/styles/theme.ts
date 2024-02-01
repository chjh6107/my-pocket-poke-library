'use client';

import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Pretendard Variable',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Oxygen-Sans',
      'Ubuntu',
      'Cantarell',
      'Helvetica Neue',
      'sans-serif',
    ].join(','),
  },
});

export default theme;
