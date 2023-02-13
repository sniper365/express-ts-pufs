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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_1 = require("react");
const react_2 = require("@chakra-ui/react");
const react_awesome_reveal_1 = require("react-awesome-reveal");
const home_boxes_json_1 = __importDefault(require("../constants/home_boxes.json"));
const home_boxes3_json_1 = __importDefault(require("../constants/home_boxes3.json"));
const url = process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : 'https://bitoro-perpetual-react.vercel.app';
console.log('url is prod or dev', url);
const Dashboard = () => {
    console.log('url of env::');
    const name = 'Hello Bitoro';
    (0, react_1.useEffect)(() => {
        const fetchValue = () => __awaiter(void 0, void 0, void 0, function* () {
            const data = yield fetch(`${url}/home`);
            console.log(':::res', data);
        });
        const fetchGreetings = () => __awaiter(void 0, void 0, void 0, function* () {
            const greetings = yield fetch(`${url}/greetings`);
            const json = yield greetings.json();
            console.log('return json value::', json);
            return json;
        });
        fetchValue()
            .catch(console.error);
        fetchGreetings()
            .catch(console.error);
    }, []);
    return (<react_2.Stack gap='16'>
      <react_2.SimpleGrid columns={[1, 2, 2, 2]} pt={[32, 40, 40, 40]}>
        <react_awesome_reveal_1.Fade direction="up">
          <react_2.Box p='2'>
            <react_2.Text pb={[4, 8, 8, 8]}>
              DECENTRALIZED SELF-CUSTODIAL LEVERAGED TRADING
            </react_2.Text>
            <react_2.Heading as='h2' pb={[4, 8, 8, 8]}>
              Built with the institutional trader in mind
            </react_2.Heading>
            <react_2.Text pb={[4, 8, 8, 8]}>
              The world's most powerful and cost-efficient platform for trading perpetuals. Trade directly from your wallet or custodian in a secure, private and decentralized environment.
            </react_2.Text>
            <react_2.Button>
              <react_2.Link href="/trade" _hover={{ textDecoration: 'none' }}>
                Start Trading
              </react_2.Link>
            </react_2.Button>
          </react_2.Box>
        </react_awesome_reveal_1.Fade>
      </react_2.SimpleGrid>
      <react_awesome_reveal_1.Slide direction="up">
        <react_2.Heading as='h3' textAlign='center'>
          Fully Optimized Trading
        </react_2.Heading>
      </react_awesome_reveal_1.Slide>
      <react_2.SimpleGrid columns={[1, 2, 2, 3]}>
        <react_awesome_reveal_1.Fade direction="up" cascade damping={0.3} triggerOnce>
          {home_boxes_json_1.default.map(({ id, icon, title, description }) => <react_2.Card key={id} maxW='sm' m='4' bg='bitoro.900' bgGradient="inherit">
              <react_2.CardBody>
                <react_2.Image src={`/${icon}`} alt='Green double couch with wooden legs' borderRadius='lg'/>
                <react_2.Stack mt='6' spacing='4' color='bitoro.100'>
                  <react_2.Heading size='md'>{title}</react_2.Heading>
                  <react_2.Text>
                    {description}
                  </react_2.Text>
                </react_2.Stack>
              </react_2.CardBody>
            </react_2.Card>)}
        </react_awesome_reveal_1.Fade>
      </react_2.SimpleGrid>
      <react_awesome_reveal_1.Slide direction="up">
        <react_2.Heading as='h3' textAlign='center'>
          Cutting-edge technology
        </react_2.Heading>
      </react_awesome_reveal_1.Slide>
      <react_2.SimpleGrid columns={[1, 2, 2, 2]} alignItems='center' gap='4'>
        <react_awesome_reveal_1.Slide direction="left">
          <react_2.Stack textAlign='center' alignItems='center'>
            <react_2.Heading as='h4'>Optimized Trading Cost</react_2.Heading>
            <react_2.Text textAlign='center' maxW='sm' alignItems='center'>
              MUX selects the most suitable liquidity route and minimizes the composite cost for traders while meeting the needs of opening positions.
            </react_2.Text>
          </react_2.Stack>
          <react_2.Stack alignItems='center'>
            <react_2.Image src={`/brandmark-design5.svg`} alt='Green double couch with wooden legs' borderRadius='lg' width={300}/>
          </react_2.Stack>
        </react_awesome_reveal_1.Slide>
      </react_2.SimpleGrid>
      <react_2.SimpleGrid columns={[1, 2, 2, 2]} alignItems='center' gap='4'>
        <react_awesome_reveal_1.Slide direction="right">
          <react_2.Stack textAlign='center' alignItems='center'>
            <react_2.Heading as='h4'>Smart position routing</react_2.Heading>
            <react_2.Text textAlign='center' maxW='sm' alignItems='center'>
              MUX selects the most suitable liquidity route and minimizes the composite cost for traders while meeting the needs of opening positions.
            </react_2.Text>
          </react_2.Stack>
          <react_2.Stack alignItems='center'>
            <react_2.Image src={`/brandmark-design4.svg`} alt='Green double couch with wooden legs' borderRadius='lg' width={300}/>
          </react_2.Stack>
        </react_awesome_reveal_1.Slide>
      </react_2.SimpleGrid>
      <react_2.SimpleGrid columns={[1, 2, 2, 2]} alignItems='center' gap='4'>
        <react_awesome_reveal_1.Slide direction="left">
          <react_2.Stack textAlign='center' alignItems='center'>
            <react_2.Heading as='h4'>Levarge Boosting</react_2.Heading>
            <react_2.Text textAlign='center' maxW='sm' alignItems='center'>
              MUX selects the most suitable liquidity route and minimizes the composite cost for traders while meeting the needs of opening positions.
            </react_2.Text>
          </react_2.Stack>
          <react_2.Stack alignItems='center'>
            <react_2.Image src={`/brandmark-design3.svg`} alt='Green double couch with wooden legs' borderRadius='lg' width={300}/>
          </react_2.Stack>
        </react_awesome_reveal_1.Slide>
      </react_2.SimpleGrid>
      <react_2.SimpleGrid columns={[1, 2, 2, 3]} gap='16'>
        <react_awesome_reveal_1.Zoom direction="up" cascade damping={0.3} triggerOnce>
          {home_boxes3_json_1.default.map(({ id, icon, title, description }) => <react_2.Card key={id} maxW='xs' rounded='2xl' margin='auto' borderColor='bitoro.500' borderWidth='1px' _hover={{ borderColor: 'bitoro.300' }}>
              <react_2.CardBody>
                <react_2.Image src={`/${icon}`} alt='Green double couch with wooden legs' borderRadius='lg' height={300}/>
                <react_2.Stack mt='6' spacing='4' color='bitoro.100' textAlign='center'>
                  <react_2.Heading size='md'>{title}</react_2.Heading>
                  <react_2.Text>
                    {description}
                  </react_2.Text>
                </react_2.Stack>
              </react_2.CardBody>
            </react_2.Card>)}
        </react_awesome_reveal_1.Zoom>
      </react_2.SimpleGrid>
    </react_2.Stack>);
};
exports.default = Dashboard;
//# sourceMappingURL=Dashboard.js.map