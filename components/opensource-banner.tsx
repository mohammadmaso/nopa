import { Box, Container, Heading, Link, Text } from '@chakra-ui/react';

export function OpensourceBanner() {
  return (
    <Box
      bg="white"
      borderTopWidth={1}
      pt={['45px', '45px', '70px']}
      pb={['60px', '60px', '90px']}
      textAlign="center"
    >
      <Container maxW="container.md">
        <Heading
          fontSize={['25px', '25px', '35px']}
          mb={['10px', '10px', '20px']}
        >
          متن باز
        </Heading>
        <Text lineHeight="26px" fontSize={['15px', '15px', '16px']} mb="20px">
          محتوای سایت مدرسه‌ی نوپا به صورت متن باز توسعه پیدا می‌کند.&nbsp;
          {/* <Link
            _hover={{ textDecoration: 'none' }}
            href="https://github.com/search?o=desc&q=stars%3A%3E100000&s=stars&type=Repositories"
            target="_blank"
            borderBottomWidth={1}
            fontWeight={600}
          >
            7th most starred project on GitHub
          </Link>{' '}
          and is visited by hundreds of thousands of developers every month. */}
        </Text>
        <iframe
          src="https://ghbtns.com/github-btn.html?user=mohammadmaso&repo=nopa&type=star&count=true&size=large"
          frameBorder="0"
          scrolling="0"
          width="120"
          height="30"
          style={{ margin: 'auto', marginBottom: '30px' }}
          title="GitHub"
        />

        <Text
          lineHeight={['25px', '25px', '26px']}
          fontSize={['15px', '15px', '16px']}
          mb="15px"
        >
          شما می‌توانید به صورت اختیاری از جامعه‌ی مدرسین و تولید کنندگان محتوای
          نوپا حمایت کنید.
        </Text>

        <Box>
          <iframe
            src="https://ghbtns.com/github-btn.html?user=mohammadmaso&type=sponsor&size=large"
            frameBorder="0"
            scrolling="0"
            width="260"
            height="30"
            title="GitHub"
            style={{ margin: 'auto' }}
          />
        </Box>
      </Container>
    </Box>
  );
}
