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
exports.Head = exports.WEBSITE_HOST_URL = void 0;
const React = __importStar(require("react"));
/**
 * Constants & Helpers
 */
exports.WEBSITE_HOST_URL = 'https://bitoro-perp.vercel.app/';
/**
 * Component
 */
const Head = ({ customMeta, }) => {
    const meta = Object.assign({ title: 'Bitoro Perpetual', description: 'Bitoro Perpetual', image: `${exports.WEBSITE_HOST_URL}/images/site-preview.png`, type: 'website' }, customMeta);
    return (<head>
      <title>{meta.title}</title>
      <meta content={meta.description} name="description"/>
      <meta property="og:url" content={`${exports.WEBSITE_HOST_URL}`}/>
      <link rel="canonical" href={`${exports.WEBSITE_HOST_URL}`}/>
      <meta property="og:type" content={meta.type}/>
      <meta property="og:site_name" content="Bitor Perpetual"/>
      <meta property="og:description" content={meta.description}/>
      <meta property="og:title" content={meta.title}/>
      <meta property="og:image" content={meta.image}/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:site" content="@huntarosan"/>
      <meta name="twitter:title" content={meta.title}/>
      <meta name="twitter:description" content={meta.description}/>
      <meta name="twitter:image" content={meta.image}/>
    </head>);
};
exports.Head = Head;
//# sourceMappingURL=Head.js.map