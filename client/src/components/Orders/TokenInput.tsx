import * as React from "react";
import { Box, Input, Flex, Text } from "@chakra-ui/react";
import TokensListModal from "./TokenListModal";
import Token from "../../types/Token";

type TokenInputProps = {
  input: string;
  onChangeInput: (input: string) => void;
  token: Token;
  onChangeToken: (token: Token) => void;
  balance: string;
  isTokenA?: boolean;
  isLong?: boolean;
  minimumTranslation?: string;
  headline?: string
};

const TokenInput = ({
  input,
  onChangeInput,
  token,
  onChangeToken,
  balance,
  isTokenA,
  isLong,
  minimumTranslation,
  headline
}: TokenInputProps) => {
  return (
    <Box>
      <Flex bg='bitoro.900' p='4' rounded='2xl' shadow='md' flexDir={'column'} borderColor={isLong ? 'green.200' : 'orange.300'} borderWidth='1px'>
        <Flex flexDir={'row'} justify='space-between'>
          <Text>{headline}</Text>
          <Text>Balance: </Text>
        </Flex>
        <Flex flexDir={'row'} justify='space-between'>
          <Input
            type="text"
            minLength={1}
            inputMode="decimal"
            name="amount"
            id="amount"
            value={input}
            onFocus={(e) => e.target.select()}
            onChange={(e) => onChangeInput(e.target.value)}
            w='full'
            p='0'
            textAlign='left'
            color='gray.500'
            bg='inherit'
            border='none'
            focusBorderColor="bitoro.700"
            // disabled={token?.address ? false : true}
            placeholder="0.0"
          />
          <TokensListModal
            token={token}
            onChangeToken={onChangeToken}
            isTokenA={isTokenA}
            balance={balance}
            minimumTranslation={minimumTranslation}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default TokenInput;
