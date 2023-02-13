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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
const React = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const react_1 = require("@chakra-ui/react");
const react_2 = require("@headlessui/react");
const solid_1 = require("@heroicons/react/24/solid");
const Footer_1 = require("./Footer");
const navigation = [
    { name: "Docs", to: "/docs" },
    { name: "Community", to: "/aboutus" }
];
const Layout = ({ children, customMeta }) => {
    const history = (0, react_router_dom_1.useHistory)();
    return (<>
      {/* <Head customMeta={customMeta} /> */}
      <react_1.Flex as="header" w='100%' left="50%" transform="translateX(-50%)" maxWidth="container.xl" backdropFilter='auto' backdropBlur='8px' position='fixed' zIndex='20' alignItems={'center'} justifyContent='space-between'>
        <react_2.Disclosure as="nav" style={{ width: '100%' }}>
          {({ open }) => (<>
              <react_1.Show breakpoint='(max-width: 426px)'>
                {/* Mobile menu button*/}
                <react_1.Flex alignItems={'center'} justifyContent='space-between' p='2'>
                  <react_1.Link href="/">
                    <react_1.Image boxSize='100px' objectFit='scale-down' src="/logo.png" alt=""/>
                  </react_1.Link>
                  <react_1.Flex alignItems={'baseline'} gap='2'>
                    {history.location.pathname !== '/trade' &&
                <react_1.Flex py={[4, null, null, 0]} alignItems="center">
                        <react_1.Link href="/trade" px="4" py="2" rounded='md' isExternal _hover={{ textDecoration: 'none' }}>
                          Lanuch App
                        </react_1.Link>
                      </react_1.Flex>}
                    <react_1.Box textAlign={'right'}>
                      <react_2.Disclosure.Button>
                        {open ? (<solid_1.XMarkIcon className="block h-6 w-6" aria-hidden="true" width={30}/>) : (<solid_1.Bars3BottomRightIcon className="block h-6 w-6" aria-hidden="true" width={30}/>)}
                      </react_2.Disclosure.Button>
                    </react_1.Box>
                  </react_1.Flex>
                </react_1.Flex>
              </react_1.Show>

              <react_1.Container maxWidth="container.xl" backdropBlur="md">
                <react_1.Flex alignItems={'center'} justifyContent='space-between'>
                  <react_1.Show breakpoint='(min-width: 768px)'>
                    <react_1.Link href="/">
                      <react_1.Image boxSize='100px' objectFit='scale-down' src="/logo.png" alt=""/>
                    </react_1.Link>
                    {history.location.pathname !== '/trade' &&
                <react_1.Flex gap={'8'} alignItems='center'>
                        <react_1.Flex textAlign={'right'} p='4' gap='8'>
                          {navigation.map((item) => (<react_1.Link href={item.to} key={item.name} role="button" _hover={{ textDecoration: 'none' }}>
                              {item.name}
                            </react_1.Link>))}
                        </react_1.Flex>
                        <react_1.Flex 
                // order={[-1, null, null, 2]}
                alignItems={'center'} justifyContent={['flex-end', null, null, 'flex-end']}>
                          <react_1.Flex py={[4, null, null, 0]} alignItems="center">
                            <react_1.Link href="/trade" px="4" py="2" bg='bitoro.700' rounded='sm' isExternal _hover={{ textDecoration: 'none' }}>
                              Lanuch App
                            </react_1.Link>
                          </react_1.Flex>
                        </react_1.Flex>
                      </react_1.Flex>}
                  </react_1.Show>
                </react_1.Flex>
              </react_1.Container>

              {/* Mobile */}
              <react_1.Show breakpoint='(max-width: 426px)'>
                <react_2.Disclosure.Panel>
                  <react_1.Flex textAlign={'right'} flexDir='column' px='4'>
                    {navigation.map((item) => (<react_1.Link key={item.name} href={item.to} role="button">
                        <react_2.Disclosure.Button className="block">
                          {item.name}
                        </react_2.Disclosure.Button>
                      </react_1.Link>))}
                  </react_1.Flex>
                </react_2.Disclosure.Panel>
              </react_1.Show>
            </>)}
        </react_2.Disclosure>
      </react_1.Flex>
      <main>
        <react_1.Container maxWidth="container.xl">{children}</react_1.Container>
      </main>
      <footer>
        <react_1.Container mt="8" py="8" maxWidth="container.xl">
          {history.location.pathname !== '/trade' &&
            <Footer_1.Footer />}
        </react_1.Container>
      </footer>
    </>);
};
exports.Layout = Layout;
//# sourceMappingURL=Layout.js.map