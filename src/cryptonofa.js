'use strict'
import CryptoJS from 'crypto-js'
class Cryptonofa{
    static base64(){
        return CryptoJS.enc.Base64
    }
    static latin1(){
        return CryptoJS.enc.Latin1
    }
    static utf8(){
        return CryptoJS.enc.Utf8
    }
    static hex(){
        return CryptoJS.enc.Hex
    }
    static async base64_encode(string){
        return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(string))
    }
    static async base64_decode(string){
        return CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(string))
    }
    static async md5(string){
        return CryptoJS.MD5(string).toString()
    }

    static async sha1(string){
        return CryptoJS.SHA1(string).toString()
    }

    static async sha256(string){
        return CryptoJS.SHA256(string).toString()
    }

    static async sha512(string){
        return CryptoJS.SHA512(string).toString()
    }

    static async aes_encrypt(string,key){
        return CryptoJS.AES.encrypt(string,key).toString()
    }

    static async aes_decrypt(string,key){
        return CryptoJS.AES.decrypt(string,key).toString(CryptoJS.enc.Utf8)
    }

    static async hmac(algo,string,key,raw){
        let hash
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

module.exports = Cryptonofa
