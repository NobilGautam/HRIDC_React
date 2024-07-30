import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between mt-10">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <img src="https://www.hridc.co.in/img/footer-logo.png" className="h-20 me-3" alt="FlowBite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">HRIDC</span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">Useful Links</h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://ncrtc.in/vigilance/" className="hover:underline">Vigilance</a>
                </li>
                <li className=' mb-4'>
                  <a href="https://ncrtc.in/privacy-policy/" className="hover:underline">Privacy Policy</a>
                </li>
                <li className='mb-4'>
                  <a href="https://ncrtc.in/telephone-directory/" className="hover:underline">Telephone Directory</a>
                </li>
                <li className='mb-4'>
                  <a href="https://ncrtc.in/copyright-statement/" className="hover:underline">Copyright Statement</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">External Links</h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://www.irctc.co.in/nget/train-search" className="hover:underline ">IRCTC</a>
                </li>
                <li className='mb-4'>
                  <a href="https://indianrailways.gov.in/railwayboard/view_section.jsp?lang=0&id=0,7,1281" className="hover:underline">Railway Recruitment Board</a>
                </li>
                <li className='mb-4'>
                  <a href="https://haryana.gov.in/" className="hover:underline">Govt. of Haryana</a>
                </li>
                <li className='mb-4'>
                  <a href="http://www.indianrailways.gov.in/" className="hover:underline">Indian Railways</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">Contact Us</h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                <h1>Registered Office (Chandigarh)</h1>
                <h1>SCO 17-18-19, Near Jagat Cinema,</h1>
                <h1>Sector-17A, Chandigarh.</h1>
                </li>
                <li className='mb-4'>
                <h1>IRCON International, Tower-2, </h1>
                <h1>Plot No.-16, Sector- 32, Gurugram, </h1>
                <h1>Haryana- 122018</h1>
                </li>
                <li className='mb-4'>
                  <a href="tel:+911722715644">+91 172 2715644</a>
                </li>
                <li className='mb-4'>
                  <a href="mailto:hridc2017@gmail.com">hridc2017@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 sm:mx-autoborder-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm sm:text-center text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">Molog</a>. All Rights Reserved.</span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
  <a href="https://www.linkedin.com/company/hridc" className="text-white" target="_blank" rel="noopener noreferrer">
    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path d="M4.98 3.5C4.98 2.119 3.861 1 2.48 1S.98 2.119.98 3.5 2.1 6 3.48 6c1.38 0 2.5-1.119 2.5-2.5zM.98 8h4.99V23H.98zM10.98 8h-4.99V23h4.99v-7.708c0-4.194 5.614-4.533 5.614 0V23h4.99V14.684C20.984 6.232 10.98 6.612 10.98 12.797V23z"/>
    </svg>
    <span className="sr-only">LinkedIn page</span>
  </a>
  <a href="https://www.youtube.com/channel/HRIDC" className="text-white ms-5" target="_blank" rel="noopener noreferrer">
    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.005 3.005 0 0 0-2.118-2.123C19.671 3.5 12 3.5 12 3.5s-7.671 0-9.381.563a3.005 3.005 0 0 0-2.118 2.123C.5 7.8.5 12.021.5 12.021s0 4.221.563 5.835a3.005 3.005 0 0 0 2.118 2.123C4.329 20.5 12 20.5 12 20.5s7.671 0 9.381-.563a3.005 3.005 0 0 0 2.118-2.123C23.5 16.242 23.5 12.021 23.5 12.021s0-4.221-.563-5.835zM9.75 15.333V8.707l6.127 3.313-6.127 3.313z"/>
    </svg>
    <span className="sr-only">YouTube channel</span>
  </a>
  <a href="https://www.instagram.com/hridc" className="text-white ms-5" target="_blank" rel="noopener noreferrer">
    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path d="M7.75 2A5.76 5.76 0 0 0 2 7.75v8.5A5.76 5.76 0 0 0 7.75 22h8.5A5.76 5.76 0 0 0 22 16.25v-8.5A5.76 5.76 0 0 0 16.25 2h-8.5zM19.75 16.25A3.5 3.5 0 0 1 16.25 19.75h-8.5A3.5 3.5 0 0 1 4.25 16.25v-8.5A3.5 3.5 0 0 1 7.75 4.25h8.5A3.5 3.5 0 0 1 19.75 7.75v8.5zM16 6.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 8a4 4 0 1 0 4 4 4.006 4.006 0 0 0-4-4zm0 6.5a2.5 2.5 0 1 1 2.5-2.5 2.503 2.503 0 0 1-2.5 2.5z"/>
    </svg>
    <span className="sr-only">Instagram page</span>
  </a>
  <a href="https://www.facebook.com/hridc" className="text-white ms-5" target="_blank" rel="noopener noreferrer">
    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.437 9.878v-6.98H7.898v-2.898h2.539v-2.226c0-2.505 1.492-3.892 3.775-3.892 1.094 0 2.234.197 2.234.197v2.454h-1.257c-1.24 0-1.624.774-1.624 1.564v1.904h2.748l-.44 2.898h-2.308V22C18.343 21.128 22 16.991 22 12z"/>
    </svg>
    <span className="sr-only">Facebook page</span>
  </a>
  <a href="https://twitter.com/hridc" className="text-white ms-5" target="_blank" rel="noopener noreferrer">
    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.643 4.937a9.742 9.742 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.875 9.875 0 0 1-3.127 1.196 4.908 4.908 0 0 0-8.366 4.482A13.911 13.911 0 0 1 1.671 3.149a4.868 4.868 0 0 0-.664 2.468c0 1.703.867 3.204 2.188 4.084a4.907 4.907 0 0 1-2.226-.616v.061a4.912 4.912 0 0 0 3.939 4.814 4.943 4.943 0 0 1-2.221.085 4.915 4.915 0 0 0 4.588 3.417A9.86 9.86 0 0 1 0 21.542 13.93 13.93 0 0 0 7.548 24c9.14 0 14.143-7.72 14.143-14.418 0-.22-.004-.44-.014-.658A10.18 10.18 0 0 0 24 4.55a9.965 9.965 0 0 1-2.357.647z"/>
    </svg>
    <span className="sr-only">Twitter page</span>
  </a>
</div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
