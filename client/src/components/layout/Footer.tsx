import * as React from 'react'
import { ButtonGroup, Container, IconButton, Stack, Text, Image, Link } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter, FaDiscord, FaMedium, FaTelegram, FaReddit } from 'react-icons/fa'

export const Footer = () => (
  <Stack spacing={{ base: '4', md: '5' }}>
    <Stack justify="space-between" direction={['column', 'row']} align="center">
      <Link href='/'>
        <Image
          boxSize='100px'
          objectFit='scale-down'
          src="/full-logo-transparent2.svg"
          width='200px'
          alt="" />
      </Link>
      <ButtonGroup variant="ghost" >
        <IconButton
          as="a"
          href="#"
          aria-label="LinkedIn"
          icon={<FaLinkedin fontSize="1.25rem" />}
          _hover={{ background: 'none', shadow: 'outline' }}
        />
        <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} _hover={{ background: 'none', shadow: 'outline' }} />
        <IconButton
          as="a"
          href="#"
          aria-label="Twitter"
          icon={<FaTwitter fontSize="1.25rem" />}
          _hover={{ background: 'none', shadow: 'outline' }}
        />
        <IconButton
          as="a"
          href="#"
          aria-label="Discord"
          icon={<FaDiscord fontSize="1.25rem" />}
          _hover={{ background: 'none', shadow: 'outline' }}
        />
        <IconButton
          as="a"
          href="#"
          aria-label="Medium"
          icon={<FaMedium fontSize="1.25rem" />}
          _hover={{ background: 'none', shadow: 'outline' }}
        />
        <IconButton
          as="a"
          href="#"
          aria-label="Telegram"
          icon={<FaTelegram fontSize="1.25rem" />}
          _hover={{ background: 'none', shadow: 'outline' }}
        />
        <IconButton
          as="a"
          href="#"
          aria-label="Reddit"
          icon={<FaReddit fontSize="1.25rem" />}
          _hover={{ background: 'none', shadow: 'outline' }}
        />
      </ButtonGroup>
    </Stack>
  </Stack>
)