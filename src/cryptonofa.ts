'use strict'
import * as CryptoJS from 'crypto-js'
import {Encoder} from "crypto-js"
export class Cryptonofa{
    static randomBytes(length:number):string{
        return Cryptonofa.randomBytes(length)
    }
    static base64():Encoder{
        return CryptoJS.enc.Base64
    }
    static latin1():Encoder{
        return CryptoJS.enc.Latin1
    }
    static utf8():Encoder{
        return CryptoJS.enc.Utf8
    }
    static hex():Encoder{
        return CryptoJS.enc.Hex
    }
    static base64_encode(string:string):string{
        return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(string))
    }
    static base64_decode(string:string):string{
        return CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(string))
    }
    static md5(string:string):string{
        return CryptoJS.MD5(string).toString()
    }

    static sha1(string:string):string{
        return CryptoJS.SHA1(string).toString()
    }

    static sha256(string:string):string{
        return CryptoJS.SHA256(string).toString()
    }

    static sha512(string:string):string{
        return CryptoJS.SHA512(string).toString()
    }

    static aes_encrypt(string:string,key:string):string{
        return CryptoJS.AES.encrypt(string,key).toString()
    }

    static aes_decrypt(string:string,key:string):string  {
        return CryptoJS.AES.decrypt(string,key).toString(CryptoJS.enc.Utf8)
    }

    static hmac(algo:string,string:string,key:string,raw:boolean):any{
        let hash:any
        if(typeof raw === 'undefined')
            raw=false
        switch (algo.toLowerCase()) {
            case 'md5':
                hash = CryptoJS.HmacMD5(string,key)
                break;
            case 'sha1':
                hash = CryptoJS.HmacSHA1(string,key)
                break;
            case 'sha256':
                hash = CryptoJS.HmacSHA256(string,key)
                break;
            case 'sha512':
                hash = CryptoJS.HmacSHA512(string,key)
                break;
        }
        if(raw){
            return hash
        }else{
            return hash.toString()
        }
    }
}
