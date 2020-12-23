import { Box, Button, Flex, Link } from '@chakra-ui/react';
import React from 'react';
import NextLink from 'next/link';
import { useMeQuery } from '../generated/graphql';

export const NavBar: React.FC<{}> = ({}) => {
  const [{ data, fetching }] = useMeQuery();
  let body = null;

  // Data is loading
  if (fetching) {
    // Since we init. body we can leave it out
    // User not logged in
  } else if (!data?.me) {
    <>
      <NextLink href='/login'>
        <Link color='white' mr={4}>
          Login
        </Link>
      </NextLink>

      <NextLink href='/register'>
        <Link color='white'>Register</Link>
      </NextLink>
    </>;

    // User logged in
  } else {
    body = (
      <Flex>
        <Box mr={4} color='white'>
          {data.me.username}
        </Box>
        <Button variant='link'>Logout</Button>
      </Flex>
    );
  }

  return (
    <Flex p={4} bg='black'>
      <Box ml={'auto'}>{body}</Box>
    </Flex>
  );
};
