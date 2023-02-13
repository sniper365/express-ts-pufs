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
exports.Footer = void 0;
const React = __importStar(require("react"));
const react_1 = require("@chakra-ui/react");
const fa_1 = require("react-icons/fa");
const Footer = () => (<react_1.Stack spacing={{ base: '4', md: '5' }}>
    <react_1.Stack justify="space-between" direction={['column', 'row']} align="center">
      <react_1.Link href='/'>
        <react_1.Image boxSize='100px' objectFit='scale-down' src="/full-logo-transparent2.svg" width='200px' alt=""/>
      </react_1.Link>
      <react_1.ButtonGroup variant="ghost">
        <react_1.IconButton as="a" href="#" aria-label="LinkedIn" icon={<fa_1.FaLinkedin fontSize="1.25rem"/>} _hover={{ background: 'none', shadow: 'outline' }}/>
        <react_1.IconButton as="a" href="#" aria-label="GitHub" icon={<fa_1.FaGithub fontSize="1.25rem"/>} _hover={{ background: 'none', shadow: 'outline' }}/>
        <react_1.IconButton as="a" href="#" aria-label="Twitter" icon={<fa_1.FaTwitter fontSize="1.25rem"/>} _hover={{ background: 'none', shadow: 'outline' }}/>
        <react_1.IconButton as="a" href="#" aria-label="Discord" icon={<fa_1.FaDiscord fontSize="1.25rem"/>} _hover={{ background: 'none', shadow: 'outline' }}/>
        <react_1.IconButton as="a" href="#" aria-label="Medium" icon={<fa_1.FaMedium fontSize="1.25rem"/>} _hover={{ background: 'none', shadow: 'outline' }}/>
        <react_1.IconButton as="a" href="#" aria-label="Telegram" icon={<fa_1.FaTelegram fontSize="1.25rem"/>} _hover={{ background: 'none', shadow: 'outline' }}/>
        <react_1.IconButton as="a" href="#" aria-label="Reddit" icon={<fa_1.FaReddit fontSize="1.25rem"/>} _hover={{ background: 'none', shadow: 'outline' }}/>
      </react_1.ButtonGroup>
    </react_1.Stack>
  </react_1.Stack>);
exports.Footer = Footer;
//# sourceMappingURL=Footer.js.map