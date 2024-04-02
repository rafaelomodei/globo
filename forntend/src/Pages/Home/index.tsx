import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';

import { StarIcon } from '@chakra-ui/icons';

export const Home = () => {
  const names = ['João', 'Maria', 'Pedro', 'Ana'];

  return (
    <Flex
      width='100%'
      p={4}
      flexWrap='wrap'
      gap={4}
      justifyContent='space-evenly'
    >
      {names.map((name, index) => (
        <Card maxW='sm' key={index}>
          <CardBody>
            <Image
              src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
              alt='Green double couch with wooden legs'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Flex w='100%' justifyContent='space-between'>
                <Flex alignItems='center' gap={2}>
                  <Icon as={StarIcon} color='#FF8F01' />
                  <Text>4.9</Text>
                </Flex>
                <Button variant='solid' colorScheme='teal' size='xs'>
                  Votar
                </Button>
              </Flex>
              <Heading size='md'>{name}</Heading>
            </Stack>
          </CardBody>
          <CardFooter>
            <Button variant='solid' colorScheme='blue' w='100%'>
              Saber mais
            </Button>
          </CardFooter>
        </Card>
      ))}
    </Flex>
  );
};
