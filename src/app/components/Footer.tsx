
import { ClockClockwise, FacebookLogo, InstagramLogo, PinterestLogo, TwitterLogo, YoutubeLogo } from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-black  flex flex-col items-center justify-center px-0 w-full  xl:pt-20 lg:pt-16 pt-10">
      {/* Support Section */}
      <div className="lg:flex lg:flex-row lg:justify-between lg:items-center lg:gap-x-40 border-b-2 border-custom-yellow pb-8 mb-8 mx-9">
        <div className="text-center lg:text-left">
          <p className="font-semibold text-[32px] text-white">
            <span className="text-custom-yellow">St</span>ill Need Our Support?
          </p>
          <p className="px-12 lg:px-0 text-gray-400">
          Don’t wait, make a smart &amp; logical quote here. It&apos;s pretty easy.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-end lg:gap-x-3 mt-6 lg:mt-0">
          <div className="flex justify-center w-full">
            <input
              type="text"
              placeholder="Enter your Email"
              className="w-full max-w-[280px] lg:max-w-[200px] rounded-tl-lg rounded-bl-lg text-white  px-4 py-3 bg-custom-yellow"
            />
            <button className="text-[16px] font-thin bg-white rounded-tr-lg rounded-br-lg px-6 py-3 text-custom-yellow hover:bg-custom-yellow transition-all hover:text-white">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="flex flex-col gap-y-12 xl:flex-row xl:gap-y-0 items-start justify-between lg:gap-x-10 xl:gap-x-24 mx-6 lg:mx-9">
        {/* About Us Section */}
        <div className="flex flex-col items-start max-w-[300px]">
          <p className="text-custom-yellow font-medium text-lg">About Us</p>
          <p className="mt-4 text-gray-400 text-[18px] leading-6">
            Corporate clients and leisure travelers rely on us for dependable, safe, and professional chauffeured car service worldwide.
          </p>
          <div className="flex items-center justify-start mt-5 space-x-3">
            <div className="bg-custom-yellow rounded-sm p-4">
              <ClockClockwise size={36} />
            </div>
            <div>
              <p className="text-white text-[18px]">Opening Hours</p>
              <p className="text-gray-400 text-[14px]">Mon - Sat (8.00 - 6.00)</p>
              <p className="text-gray-400 text-[14px]">Sunday - Closed</p>
            </div>
          </div>
        </div>

        {/* Courses Section */}
        <div className="flex flex-col">
          <h3 className="text-lg font-medium text-white">Courses</h3>
          <ul className="mt-4 text-sm text-gray-400">
            {['Business', 'Development', 'Technology', 'Designs'].map((course) => (
              <li className="mt-2" key={course}>
                <Link href="#" className="hover:text-white transition-all">
                  {course}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Section */}
        <div className="flex flex-col">
          <h3 className="text-lg font-medium text-white">Social</h3>
          <ul className="mt-4 text-sm text-gray-400">
            {['Facebook', 'Instagram', 'Twitter', 'LinkedIn'].map((social) => (
              <li className="mt-2" key={social}>
                <Link href="#" className="hover:text-white transition-all">
                  {social}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources Section */}
        <div className="flex flex-col">
          <h3 className="text-lg font-medium text-white bg-black">Resources</h3>
          <ul className="mt-4 text-sm text-gray-400 space-y-5">
            {[1, 2, 3].map((_, idx) => (
              <li key={idx} className="flex items-center">
                <Image src="/images/sprinkle.svg" alt="" height={80} width={80} />
                <div className="pl-3">
                  <p className="text-[16px] text-white mb-2">Is fast food good for your body?</p>
                  <p className="text-[14px] text-gray-400">February 28, 2022</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className=" mt-8 bg-custom-gray-2 w-full py-6 flex flex-col lg:flex-row items-center justify-between lg:px-32 xl:px-52 ">
        <p className="text-white text-sm">
          Copyright &copy; {new Date().getFullYear()} by Ayeman. All Rights Reserved.
        </p>

        <div className="flex items-center gap-x-5 mt-4 lg:mt-0">
          <div className='bg-white rounded-sm p-2'><FacebookLogo size={28} color='black'  /></div>
          <div className='bg-white rounded-sm p-2'><TwitterLogo size={28}color='black'  weight="fill" /></div>
          <div className='bg-white rounded-sm p-2'><InstagramLogo size={28} color='black'  weight="light" /></div>
          <div className='bg-white rounded-sm p-2'><YoutubeLogo size={28} color='#FF9F0D' weight="fill" /></div>
          <div className='bg-white rounded-sm p-2'><PinterestLogo size={28} color='black' weight="fill" /></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
