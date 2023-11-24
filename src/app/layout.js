import Head from 'next/head';
import './globals.css';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
});


export const metadata = {
  title: 'Jalankarirku',
  description:
    'JalanKarirku bertujuan untuk membimbing generasi muda (usia 17-25 tahun) dalam memahami dunia kerja, mengatasi ketidakpastian dalam pemilihan karier, dan mengembangkan soft skills yang diperlukan. Ini mencakup konsultasi karier, webinar, dan kelas online. Dengan bimbingan ahli, wawasan industri, dan pelatihan keterampilan, JalanKarirku memberikan solusi konkret untuk mengatasi kesulitan dan ketidakpastian yang dihadapi oleh fresh graduate dalam memasuki dunia kerja, sehingga mereka dapat mempersiapkan diri dengan baik, membuat keputusan yang lebih baik, dan mencapai kesuksesan karier.',
};


export default function RootLayout({ children, pageTitle }) {
  return (
    <html lang="en">
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{pageTitle ?? 'Jalankarirku'}</title>
        <link rel="icon" href="/assets/img/logo light.png" />
      </Head>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
