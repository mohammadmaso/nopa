import { useState } from 'react';
import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  CloseButton,
  Container,
  Flex,
  IconButton,
  Image,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import RoadmapLogo from '../components/icons/roadmap.svg';
import siteConfig from '../content/site.json';

type MenuLinkProps = {
  text: string;
  link: string;
};

function MenuLink(props: MenuLinkProps) {
  const { text, link } = props;

  return (
    <Link
      borderBottomWidth={0}
      borderBottomColor="gray.500"
      _hover={{ textDecoration: 'none', borderBottomColor: 'white' }}
      fontWeight={500}
      href={link}
    >
      {text}
    </Link>
  );
}

function DesktopMenuLinks() {
  return (
    <Stack
      display={['none', 'flex', 'flex']}
      shouldWrapChildren
      isInline
      spacing="15px"
      alignItems="center"
      color="gray.50"
      fontSize="15px"
    >
      <MenuLink text={'نقشه‌‌ها'} link={'/roadmaps'} />
      <MenuLink text={'راهنماها'} link={'/guides'} />
      <MenuLink text={'فیلم‌ها'} link={'/watch'} />
      <MenuLink text={'قدردانی'} link={'/thanks'} />

      <Link
        ml="10px"
        bgGradient="linear(to-l, yellow.700, red.600)"
        p="7px 10px"
        rounded="4px"
        _hover={{
          textDecoration: 'none',
          bgGradient: 'linear(to-l, red.800, yellow.700)',
        }}
        fontWeight={500}
        href={'/signup'}
      >
        نام‌نویسی
      </Link>
    </Stack>
  );
}

function MobileMenuLinks() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IconButton
        rounded="5px"
        padding={0}
        aria-label={'Menu'}
        display={['block', 'none', 'none']}
        icon={<HamburgerIcon color="white" w="25px" height="25px" />}
        color="white"
        cursor="pointer"
        h="auto"
        bg="transparent"
        _hover={{ bg: 'transparent' }}
        _active={{ bg: 'transparent' }}
        _focus={{ bg: 'transparent' }}
        onClick={() => setIsOpen(true)}
      />

      {isOpen && (
        <Stack
          color="gray.100"
          fontSize={['22px', '22px', '22px', '32px']}
          alignItems="center"
          justifyContent="center"
          pos="fixed"
          left={0}
          right={0}
          bottom={0}
          top={0}
          bg="gray.900"
          spacing="12px"
          zIndex={999}
        >
          <Link href="/roadmaps">نقشه‌ها</Link>
          <Link href="/guides">راهنما</Link>
          <Link href="/watch">فیلم‌ها</Link>
          <Link href="/thanks">قدردانی</Link>
          <Link href="/signup">نام‌نویسی</Link>
          <CloseButton
            onClick={() => setIsOpen(false)}
            pos="fixed"
            top="40px"
            right="15px"
            size="lg"
          />
        </Stack>
      )}
    </>
  );
}

type GlobalHeaderProps = {
  variant?: 'transparent' | 'solid';
};

export function GlobalHeader(props: GlobalHeaderProps) {
  const { variant = 'solid' } = props;

  return (
    <Box bg={variant === 'solid' ? 'gray.900' : 'transparent'} p="20px 0">
      <Container maxW="container.md">
        <Flex justifyContent="space-between" alignItems="center">
          <Box>
            <Link
              w="100%"
              display="flex"
              href="/"
              alignItems="center"
              color="white"
              fontWeight={600}
              _hover={{ textDecoration: 'none' }}
              fontSize="18px"
            >
              <RoadmapLogo
                style={{ height: '40px', width: '40px', marginLeft: '5px' }}
              />
              <Text display={['block', 'none', 'block']} as="span">
                مدرسه‌ی نوپا
              </Text>
            </Link>
          </Box>
          <DesktopMenuLinks />
          <MobileMenuLinks />
        </Flex>
      </Container>
    </Box>
  );
}
