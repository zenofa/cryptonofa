import * as CryptoJS from 'crypto-js';
declare class Cryptonofa {
    static base64(): CryptoJS.Encoder;
    static latin1(): CryptoJS.Encoder;
    static utf8(): CryptoJS.Encoder;
    static hex(): CryptoJS.Encoder;
    static base64_encode(string: string): Promise<string>;
    static base64_decode(string: string): Promise<string>;
    static md5(string: string): Promise<string>;
    static sha1(string: string): Promise<string>;
    static sha256(string: string): Promise<string>;
    static sha512(string: string): Promise<string>;
    static aes_encrypt(string: string, key: string): Promise<string>;
    static aes_decrypt(string: string, key: string): Promise<string>;
    static hmac(algo: string, string: string, key: string, raw: Boolean): Promise<any>;
}
declare const _default: Cryptonofa;
export default _default;
