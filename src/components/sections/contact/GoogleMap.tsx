'use client';

const GoogleMap = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-1/2 my-auto">
      <p className="mb-4 text-2xl font-bold text-blue-700">
        Find us on Google Map
      </p>

      <iframe
        className="w-full h-[300px] md:h-full rounded-xl"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.818932289997!2d90.38971337562249!3d23.753835478668083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9e8dff849b3%3A0xc3fac397ece57180!2sLatif%20Tower!5e0!3m2!1sen!2sbd!4v1722749042022!5m2!1sen!2sbd"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ border: 0 }}
      />
    </div>
  );
};

export default GoogleMap;
