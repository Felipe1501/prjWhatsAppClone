export class Base64 {
   static getMimeType(urlBase64){
      return base64URL.match(/^data:(.+);base64,(.*)$/)[1];
   }

   static toFile(urlBase64){
    let mimeType = Base64.getMimeType(urlBase64);
    let ext = mimeType.split('/')[1];
    let filename = `file${Date.now()}.${ext}`;

    return fetch(urlBase64)
    .then(res => { return res.arrayBuffer();})
    .then(buffer => {return new File([buffer], filename, {type: mimeType});})

   }
}