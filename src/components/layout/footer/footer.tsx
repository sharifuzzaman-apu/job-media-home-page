import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="container w-11/12 mx-auto py-10">
        <div className="flex flex-col md:flex-row gap-10 justify-between">
          {/* Quick Access */}
          <div className="text-center md:text-left">
            <h3 className="text-white/90 text-2xl font-bold mb-4">
              Quick Access Links
            </h3>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-white/90 hover:text-cyan-500">
                About
              </a>
              <a href="#" className="text-white/90 hover:text-cyan-500">
                Categories
              </a>
              <a href="#" className="text-white/90 hover:text-cyan-500">
                Privacy Policy
              </a>
              <a href="#" className="text-white/90 hover:text-cyan-500">
                Refund Policy
              </a>
              <a href="#" className="text-white/90 hover:text-cyan-500">
                Terms & Conditions
              </a>
              <a href="#" className="text-white/90 hover:text-cyan-500">
                Contact us
              </a>
              <a href="#" className="text-white/90 hover:text-cyan-500">
                Blog
              </a>
            </div>
          </div>

          {/* App */}
          <div className="text-white/90 w-full md:w-5/12 flex flex-col gap-6">
            <p className="md:text-2xl font-bold text-center">
              Download our app to get the latest job updates and apply for jobs
              on the go.
            </p>

            <div className="flex flex-col gap-6 items-center">
              <div className="text-center">
                <p className="text-sm font-bold mb-2">Employer App</p>
                <div className="flex gap-2 justify-center">
                  <a
                    href="https://apps.apple.com/sn/app/job-media-employer/id6479050348"
                    target="_blank"
                    rel="noopener noreferrer"
                  ></a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.jobmedia.jobemployer"
                    target="_blank"
                    rel="noopener noreferrer"
                  ></a>
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm font-bold mb-2">Job Seeker App</p>
                <div className="flex gap-2 justify-center">
                  <a
                    href="https://apps.apple.com/ne/app/job-media/id6479184075"
                    target="_blank"
                    rel="noopener noreferrer"
                  ></a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.jobmedia.jobseeker"
                    target="_blank"
                    rel="noopener noreferrer"
                  ></a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-10 md:w-3/12 items-center md:items-start">
            {/* Social */}
            <div>
              <h3 className="text-white/90 text-2xl font-bold mb-4">
                Follow us on
              </h3>
              <div className="flex gap-6">
                <a
                  href="https://www.facebook.com/myjobmedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-[#1877F2] transition-all hover:scale-110"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="https://www.instagram.com/myjobmedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-[#E4405F] transition-all hover:scale-110"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/company/myjobmedia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-[#0A66C2] transition-all hover:scale-110"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://www.youtube.com/@job_media"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-[#FF0000] transition-all hover:scale-110"
                >
                  <Youtube size={24} />
                </a>
              </div>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-4">
              <h3 className="text-white/90 text-2xl font-bold">Get in Touch</h3>

              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-white/90" />
                <p className="text-white/90 text-sm">office@jobmedia.com.bd</p>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-white/90" />
                <p className="text-white/90 text-sm">
                  +8801329711631, +8801329711632
                </p>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-white/90" />
                <p className="text-white/90 text-sm">
                  Latif Tower (9th Floor), 47, Kawran Bazar C/A, Dhaka-1215
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#748D94] py-6 text-center">
        <p className="text-white/90 text-sm">
          ©{new Date().getFullYear()} Job Media Ltd. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
