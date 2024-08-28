function FindProxyForURL(url, host) {
  //
  //Exclude FTP from proxy
  //
  if (url.substring(0, 4) == 'ftp:') {
    return 'DIRECT';
  }
  //
  //Bypass proxy for this server
  //
  if (shExpMatch(host, '*.ton')) {
    return 'PROXY in1.ton.org:8080; PROXY in2.ton.org:8080; PROXY in3.ton.org:8080; DIRECT';
  }
  return 'DIRECT';
}
