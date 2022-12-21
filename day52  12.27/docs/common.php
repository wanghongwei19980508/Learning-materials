<?php

/**
 * 发送get请求      http_get($url)
 * 发送post请求     http_post($url,$param,$post_file=false)
 * 二维数组排序       array_sort($arr, $keys, $type = 'asc')
 * 空格换行符过滤  trimAll($parma)
 * 加密               XcryptEnc($str)
 * 解密               XcryptDec($strend)
 * 密码加密         pwd($pwd)
 * qq快捷登录       qq_login()
 */

/**
 * GET 请求
 * @param string $url
 */
function http_get($url){
    $oCurl = curl_init();
    if(stripos($url,"https://")!==FALSE){
        curl_setopt($oCurl, CURLOPT_SSL_VERIFYPEER, FALSE);
        curl_setopt($oCurl, CURLOPT_SSL_VERIFYHOST, FALSE);
        curl_setopt($oCurl, CURLOPT_SSLVERSION, 1);
    }
    curl_setopt($oCurl, CURLOPT_URL, $url);
    curl_setopt($oCurl, CURLOPT_RETURNTRANSFER, 1 );
    $sContent = curl_exec($oCurl);
    $aStatus = curl_getinfo($oCurl);
    curl_close($oCurl);
    if(intval($aStatus["http_code"])==200){
        return $sContent;
    }else{
        return false;
    }
}

/**
 * POST 请求
 * @param string $url
 * @param array $param
 * @param boolean $post_file 是否文件上传
 * @return string content
 */
function http_post($url,$param,$post_file=false){
    $oCurl = curl_init();
    if(stripos($url,"https://") !== FALSE){
        curl_setopt($oCurl,CURLOPT_SSL_VERIFYPEER,FALSE);
        curl_setopt($oCurl,CURLOPT_SSL_VERIFYHOST,false);
        curl_setopt($oCurl,CURLOPT_SSLVERSION,1);
    }
    if (is_string($param) || $post_file){
        $strPOST = $param;
    } else {
        $aPOST = array();
        foreach($param as $key => $val){
            $aPOST[] = $key."=" . urlencode($val);
        }
        $strPOST = join("&",$aPOST);
    }
    curl_setopt($oCurl,CURLOPT_URL,$url);
    curl_setopt($oCurl,CURLOPT_RETURNTRANSFER,1);
    curl_setopt($oCurl,CURLOPT_POST,true);
    curl_setopt($oCurl,CURLOPT_POSTFIELDS,$strPOST);
    $sContent = curl_exec($oCurl);
    $aStatus = curl_getinfo($oCurl);
    curl_close($oCurl);
    if(intval($aStatus["http_code"]) == 200){
        return $sContent;
    }else{
        return false;
    }
}