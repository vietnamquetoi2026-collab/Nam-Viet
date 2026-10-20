import QRCode from 'qrcode';

export async function generateQRCodeDataUrl(text: string): Promise<string> {
  try {
    return await QRCode.toDataURL(text, {
      width: 400,
      margin: 2,
      color: {
        dark: '#123B56',
        light: '#FFFFFF',
      },
      errorCorrectionLevel: 'H',
    });
  } catch (err) {
    console.error('Error generating QR code:', err);
    return '';
  }
}
