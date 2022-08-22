export class Base64 {
   static getMimeType(base64URL){
      return base64URL.match(/^data:(.+);base64,(.*)$/)[1];
   }

   static toFile(base64URL){
    let mimeType = Base64.getMimeType(base64URL);
    let ext = mimeType.split('/')[1];
    let filename = `file${Date.now()}.${ext}`;

    return fetch(base64URL)
    .then(res => { return res.arrayBuffer();})
    .then(buffer => {return new File([buffer], filename, {type: mimeType});})

   }
}