const c=require('crypto'),k=c.generateKeyPairSync('ec',{namedCurve:'prime256v1'}),j=k.privateKey.export({format:'jwk'}),b=s=>Buffer.from(s,'base64url');
console.log('VAPID_PUBLIC_KEY='+Buffer.concat([Buffer.from([4]),b(j.x),b(j.y)]).toString('base64url'));console.log('VAPID_PRIVATE_KEY='+j.d);
