import { ReactNode } from 'react';
import Header from './header';

interface Props {
  children: ReactNode;
}

const MainContainer = ({ children }: Props) => {
  return (
    <main className=''>
      <Header />
      {children}
    </main>
  );
};
export default MainContainer;
