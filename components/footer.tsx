import {
  Box,
  Container,
  Flex,
  HStack,
  Image,
  Link,
  Stack,
  Text,
  Wrap,
} from '@chakra-ui/react';
import siteConfig from '../content/site.json';
import { CustomAd } from './custom-ad';

function NavigationLinks() {
  return (
    <>
      <Stack
        isInline
        display={['none', 'none', 'flex']}
        color="gray.400"
        fontWeight={600}
        spacing="30px"
      >
        <Link _hover={{ color: 'white' }} href="/roadmaps">
          نقشه‌ها
        </Link>
        <Link _hover={{ color: 'white' }} href="/guides">
          راهنما‌ها
        </Link>
        <Link _hover={{ color: 'white' }} href="/watch">
          فیلم‌ها
        </Link>
        <Link _hover={{ color: 'white' }} href="/about">
          درباره‌ی نوپا
        </Link>
        <Link
          _hover={{ color: 'white' }}
          href={siteConfig.url.youtube}
          target="_blank"
        >
          اپارات
        </Link>
      </Stack>

      <Stack
        display={['flex', 'flex', 'none']}
        color="gray.400"
        fontWeight={600}
        spacing={0}
      >
        <Link
          py="7px"
          borderBottomWidth={1}
          borderBottomColor="gray.800"
          _hover={{ color: 'white' }}
          href="/roadmaps"
        >
          نقشه‌ها
        </Link>
        <Link
          py="7px"
          borderBottomWidth={1}
          borderBottomColor="gray.800"
          _hover={{ color: 'white' }}
          href="/guides"
        >
          راهنماها
        </Link>
        <Link
          py="7px"
          borderBottomWidth={1}
          borderBottomColor="gray.800"
          _hover={{ color: 'white' }}
          href="/watch"
        >
          فیلم‌ها
        </Link>
        <Link
          py="7px"
          borderBottomWidth={1}
          borderBottomColor="gray.800"
          _hover={{ color: 'white' }}
          href="/thanks"
        >
          قدردانی
        </Link>
        <Link
          py="7px"
          borderBottomWidth={1}
          borderBottomColor="gray.800"
          _hover={{ color: 'white' }}
          href="/about"
        >
          درباره‌ی نوپا
        </Link>
        <Link
          py="7px"
          _hover={{ color: 'white' }}
          target="_blank"
          href={siteConfig.url.youtube}
        >
          آپارات
        </Link>
      </Stack>
    </>
  );
}

export function Footer() {
  return (
    <Box bg="brand.hero" p={['25px 0', '25px 0', '40px 0']}>
      <Container maxW="container.md">
        <NavigationLinks />

        <Box mt={['40px', '40px', '50px']} mb="40px" maxW="500px">
          <Wrap alignItems="center" color="gray.400">
            <Link
              display="flex"
              alignItems="center"
              fontWeight={600}
              _hover={{ textDecoration: 'none', color: 'white' }}
              href="/"
            >
              <Image alt="" h="25px" w="25px" src="/logo.svg" ml="6px" />
              مدرسه‌ی نوپا
            </Link>
            <Text as="span" mx="7px">
              توسط
            </Text>
            <Link
              bg="blue.500"
              dir="ltr"
              px="6px"
              py="2px"
              rounded="4px"
              color="white"
              fontWeight={600}
              fontSize="13px"
              _hover={{ textDecoration: 'none', bg: 'blue.600' }}
              href={siteConfig.url.twitter}
              target="_blank"
            >
              @mohammadmaso
            </Link>
          </Wrap>

          <Text my="15px" fontSize="14px" color="gray.500">
            آموزش کسب و کار و توسعه‌ی فردی توسط همه برای همه
          </Text>

          <Text fontSize="14px" color="gray.500">
            <Text as="span" ml="10px">
              &copy; مدرسه نوپا
            </Text>
            &middot;
            <Link
              href="/about"
              _hover={{ textDecoration: 'none', color: 'white' }}
              color="gray.400"
              mx="10px"
            >
              پرسش و پاسخ
            </Link>
            &middot;
            <Link
              href="/terms"
              _hover={{ textDecoration: 'none', color: 'white' }}
              color="gray.400"
              mx="10px"
            >
              قوانین
            </Link>
            &middot;
            <Link
              href="/privacy"
              _hover={{ textDecoration: 'none', color: 'white' }}
              color="gray.400"
              mx="10px"
            >
              حریم خصوصی
            </Link>
          </Text>
        </Box>
      </Container>
    </Box>
  );
}
