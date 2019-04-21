'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = require("crypto-js");
class Cryptonofa {
    static base64() {
        return CryptoJS.enc.Base64;
    }
    static latin1() {
        return CryptoJS.enc.Latin1;
    }
    static utf8() {
        return CryptoJS.enc.Utf8;
    }
    static hex() {
        return CryptoJS.enc.Hex;
    }
    static base64_encode(string) {
        return __awaiter(this, void 0, void 0, function* () {
            return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(string));
        });
    }
    static base64_decode(string) {
        return __awaiter(this, void 0, void 0, function* () {
            return CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(string));
        });
    }
    static md5(string) {
        return __awaiter(this, void 0, void 0, function* () {
            return CryptoJS.MD5(string).toString();
        });
    }
    static sha1(string) {
        return __awaiter(this, void 0, void 0, function* () {
            return CryptoJS.SHA1(string).toString();
        });
    }
    static sha256(string) {
        return __awaiter(this, void 0, void 0, function* () {
            return CryptoJS.SHA256(string).toString();
        });
    }
    static sha512(string) {
        return __awaiter(this, void 0, void 0, function* () {
            return CryptoJS.SHA512(string).toString();
        });
    }
    static aes_encrypt(string, key) {
        return __awaiter(this, void 0, void 0, function* () {
            return CryptoJS.AES.encrypt(string, key).toString();
        });
    }
    static aes_decrypt(string, key) {
        return __awaiter(this, void 0, void 0, function* () {
            return CryptoJS.AES.decrypt(string, key).toString(CryptoJS.enc.Utf8);
        });
    }
    static hmac(algo, string, key, raw) {
        return __awaiter(this, void 0, void 0, function* () {
            let hash;
            if (typeof raw === 'undefined')
                raw = false;
            switch (algo.toLowerCase()) {
                case 'md5':
                    hash = CryptoJS.HmacMD5(string, key);
                    break;
                case 'sha1':
                    hash = CryptoJS.HmacSHA1(string, key);
                    break;
                case 'sha256':
                    hash = CryptoJS.HmacSHA256(string, key);
                    break;
                case 'sha512':
                    hash = CryptoJS.HmacSHA512(string, key);
                    break;
            }
            if (raw) {
                return hash;
            }
            else {
                return hash.toString();
            }
        });
    }
}
exports.default = new Cryptonofa();
//# sourceMappingURL=cryptonofa.js.map