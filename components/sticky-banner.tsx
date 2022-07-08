import { Flex, Link, Text } from '@chakra-ui/react';
import YouTubeLogo from '../components/icons/youtube.svg';
import siteConfig from '../content/site.json';
import { event } from '../lib/gtag';

export function StickyBanner() {
  return (
    <Flex
      as={Link}
      href={siteConfig.url.youtube}
      bg={'yellow.200'}
      color="gray.900"
      alignItems="center"
      position="sticky"
      top={0}
      zIndex={999}
      justifyContent="center"
      py="8px"
      _hover={{ textDecoration: 'none', bg: 'yellow.400' }}
      target="_blank"
      onClick={() =>
        event({
          category: 'Subscription',
          action: 'Clicked the YouTube banner',
          label: 'Sticky YouTube banner on Top',
        })
      }
    >
      <YouTubeLogo
        style={{ height: '20px', display: 'inline-block', marginRight: '7px' }}
      />
      <Text as="span" fontWeight={500} fontSize="14px">
        <Text as="span">
          ما صاحب یه کانال یوتوب شدیم{' '}
          <Text as="span" display={['none', 'inline']}>
            برای دیدن ویدیو‌های بیشتر دنبالمون کنید.
          </Text>
        </Text>
      </Text>
    </Flex>
  );
}
