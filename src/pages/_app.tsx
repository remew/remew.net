import { AppProps } from 'next/app';
import { ReactElement } from 'react';
import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
