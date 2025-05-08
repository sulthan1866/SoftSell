import Layout from "../components/Layout";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import WhyChooseUs from "../components/WhyChooseUs";
import ContactForm from "../components/ContactForm";
import ChatWidget from "../components/ChatWidget";

import React from 'react'

const index = () => {
  return (
    <Layout>
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <ContactForm />
      <ChatWidget />
    </Layout>
  );
}
export default index;
