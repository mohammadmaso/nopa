import React from 'react';
// @ts-ignore
import { MDXProvider } from '@mdx-js/react';
import { ChakraProvider } from '@chakra-ui/react';
import MdxComponents from './mdx-components';
import { nopaTheme } from '../../styles/theme';

type MdRendererType = {
  children: React.ReactNode;
};

export default function MdRenderer(props: MdRendererType) {
  return (
    <ChakraProvider theme={nopaTheme} resetCSS>
      <MDXProvider components={MdxComponents}>{props.children}</MDXProvider>
    </ChakraProvider>
  );
}
