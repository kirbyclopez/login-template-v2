import axios from 'axios';
import Router from 'next/router';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import baseUrl from '../lib/baseUrl';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  const handleLogout = async () => {
    await axios.delete(`${baseUrl}/api/auth/sessions`, {
      withCredentials: true,
    });

    Router.push('/login');
  };

  return (
    <div>
      <h1>This is the landing page.</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
