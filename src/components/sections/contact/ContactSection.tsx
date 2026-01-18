'use client';

import Mail from './Mail';
import GoogleMap from './GoogleMap';

const ContactSection = () => {
  return (
    <section className="bg-white py-10 ">
      <div className="container w-6xl mx-auto px-4 space-y-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <Mail />
          <GoogleMap />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
