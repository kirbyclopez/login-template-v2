import Head from 'next/head';
import Header from '../components/layouts/header/Header';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>AppName | Dashboard</title>
      </Head>
      <div className="min-h-[300px] flex flex-col items-center justify-center">
        <div className="text-xl">Welcome to AppName!</div>
      </div>
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <Header />
      {page}
    </PrimaryLayout>
  );
};
