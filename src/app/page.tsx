'use client';

import { getPokemonList } from '@/api/functions';
import { Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

export default function Home() {
  const { data } = useQuery({
    queryKey: ['pokemon', { status: 'completed', test: '이거도되네' }],
    queryFn: getPokemonList,
  });

  return (
    <div>
      <Typography fontWeight={100} fontSize={40} fontFamily='Pretendard Variable'>
        세상에 이런 폰트가 나오다니 천재인듯 100
      </Typography>
      <Typography className='flex font-extralight' fontSize={40}>
        세상에 이런 폰트가 나오다니 천재인듯 200
      </Typography>
      <Typography className='text font-light' fontSize={40}>
        세상에 이런 폰트가 나오다니 천재인듯 300
      </Typography>
      <Typography className='text font-normal' fontSize={40}>
        세상에 이런 폰트가 나오다니 천재인듯 400
      </Typography>
      <Typography className='text font-normal' fontSize={40}>
        세상에 이런 폰트가 나오다니 천재인듯 400
      </Typography>
      <Typography className='text font-normal' fontSize={40}>
        세상에 이런 폰트가 나오다니 천재인듯 400
      </Typography>
      <Typography className='text font-normal' fontSize={40}>
        세상에 이런 폰트가 나오다니 천재인듯 400
      </Typography>
      <Typography className='text font-normal' fontSize={40}>
        세상에 이런 폰트가 나오다니 천재인듯 400
      </Typography>
      <Typography className='text font-normal' fontSize={40}>
        세상에 이런 폰트가 나오다니 천재인듯 400
      </Typography>
      <Typography className='text font-normal' fontSize={40}>
        세상에 이런 폰트가 나오다니 천재인듯 400
      </Typography>
      <Typography fontSize={40} className='font-medium md:bg-red-50 md:font-medium'>
        세상에 이런 폰트가 나오다니 천재인듯 500
      </Typography>
      <Typography fontSize={40} className='font-semibold'>
        세상에 이런 폰트가 나오다니 천재인듯 600
      </Typography>
      <Typography fontSize={40} className='font-bold'>
        세상에 이런 폰트가 나오다니 천재인듯 700
      </Typography>
      <Typography fontSize={40} className='font-extrabold'>
        세상에 이런 폰트가 나오다니 천재인듯 800
      </Typography>
      <Typography fontSize={40} className='font-black'>
        세상에 이런 폰트가 나오다니 천재인듯 900
      </Typography>
    </div>
  );
}
