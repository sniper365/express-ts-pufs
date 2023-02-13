"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_1 = require("react");
const react_2 = require("@chakra-ui/react");
const react_3 = require("@chakra-ui/react");
const solid_1 = require("@heroicons/react/24/solid");
const tokens_json_1 = __importDefault(require("../../constants/tokens.json"));
const TokensListModal = ({ token, onChangeToken, isTokenA, balance, minimumTranslation }) => {
    const { isOpen, onOpen, onClose } = (0, react_3.useDisclosure)();
    // const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = (0, react_1.useState)("");
    const [currencies, setCurrencies] = (0, react_1.useState)(tokens_json_1.default);
    const selectToken = (token) => {
        onChangeToken(token);
        // setIsOpen(false);
    };
    const searchToken = (event) => {
        setSearchTerm(event.target.value);
    };
    (0, react_1.useEffect)(() => {
        let filter = tokens_json_1.default.filter(currency => currency === null || currency === void 0 ? void 0 : currency.ticker.includes(searchTerm));
        setCurrencies(filter);
    }, [searchTerm]);
    return (<>
      <react_2.Flex>
        <react_2.Button 
    // onClick={() => setIsOpen(true)}
    onClick={onOpen} p='2' bg='inherit' flex={[1]} alignItems='center' gap='1' _hover={{ background: 'none' }} _focus={{ background: 'none' }}>
          {(token === null || token === void 0 ? void 0 : token.image) ? (<react_2.Image h={5} w={5} rounded={'full'} src={token === null || token === void 0 ? void 0 : token.image} alt=""/>) : (<solid_1.QuestionMarkCircleIcon className="h-5 inline"/>)}
          <react_2.Text className="font-bold mx-2">
            {token.ticker ? token.ticker.toUpperCase() : "Select token"}
          </react_2.Text>
          <react_2.Box w='10' h='5'>
            <solid_1.ChevronDownIcon />
          </react_2.Box>
        </react_2.Button>
        {/* {isTokenA &&
          <p className="text-gray-600  text-sm font-medium">
            {minimumTranslation} : {balance}
          </p>
        } */}
      </react_2.Flex>
      <react_3.Modal isCentered onClose={onClose} isOpen={isOpen} motionPreset='slideInBottom'>
        {/* <ModalOverlay /> */}
        <react_3.ModalContent bg='bitoro.900'>
          <react_3.ModalHeader>
            <react_2.Text as='h3'>
              Select a Token
            </react_2.Text>
            <react_2.Flex className="relative">
              <react_2.Flex position='absolute' left={0} alignItems='center' pl='3' pointerEvents='none' insetY={0}>
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </react_2.Flex>
              <react_2.Input onChange={searchToken} type="search" id="default-search" className="block p-1 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search tokens..." required/>
            </react_2.Flex>
          </react_3.ModalHeader>
          <react_3.ModalCloseButton />
          <react_3.ModalBody p='6'>
            <react_2.Flex overflowY='auto' scrollBehavior='smooth' flexDir='column' gap='2'>
              {currencies.map((token, index) => (<react_2.Button key={index} w='full' h='full' borderColor={'whiteAlpha.200'} _hover={{ background: 'none' }} _focus={{ background: 'none' }} onClick={() => { selectToken(token); onClose(); }}>
                  <react_2.Flex justify='space-between' w='full'>
                    <react_2.Flex justify='start' w='full'>
                      {(token === null || token === void 0 ? void 0 : token.image) ?
                <react_2.Image src={token === null || token === void 0 ? void 0 : token.image} alt="token_logo" bg='inherit'/> : (<react_2.Box h='5'>
                            <solid_1.QuestionMarkCircleIcon />
                          </react_2.Box>)}
                      <react_2.Text ml='3' color='inherit' fontWeight='normal'>
                        {token.ticker.toUpperCase()}
                      </react_2.Text>
                    </react_2.Flex>
                    <react_2.Text color='inherit' fontWeight='normal' fontSize='xs'>
                      {'Balance: '}
                    </react_2.Text>
                  </react_2.Flex>
                </react_2.Button>))}
            </react_2.Flex>
          </react_3.ModalBody>
        </react_3.ModalContent>
      </react_3.Modal>
    </>);
};
exports.default = TokensListModal;
//# sourceMappingURL=TokenListModal.js.map