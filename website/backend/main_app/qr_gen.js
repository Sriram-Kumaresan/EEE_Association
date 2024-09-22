const qr = require('qr-image');

const generate_QR=(url_str)=>{
    try {
        const qrCodeBuffer = qr.imageSync(url_str, { type: 'png' });
        const base64QR = qrCodeBuffer.toString('base64');
        return base64QR
    } catch (error) {
        console.log(error)
    }
}

module.exports={
    generate_QR
}