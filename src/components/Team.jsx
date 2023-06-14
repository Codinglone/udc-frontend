import React from 'react';

const Team = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-0 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center mb-8">
          </div>
          <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar" />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-blue-700 dark:text-white">
                  <a href="#">Bonnie Green</a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">CEO &amp; Engineer</span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Bonnie is the chief executive officer at UDC</p>
                <ul className="flex space-x-4 sm:mt-0">
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1.986 7.67h2.956V7.657h-2.956v2.014zm3.252 0h2.898V7.657h-2.898v2.014zm-6.146 0h2.955V7.657h-2.955v2.014zm3.147 6.292v-2.018h2.957v2.018H14.29zm3.24 0v-2.018h2.897v2.018h-2.897zm-6.136 0v-2.018h2.956v2.018h-2.956zm-3.294 2.6a8.07 8.07 0 0 1-3.838-1.071l1.543-1.542a5.537 5.537 0 0 0 2.488.586 5.556 5.556 0 0 0 3.929-1.632l1.428 1.428a8.087 8.087 0 0 1-6.55 2.231zm9.36-2.762l1.542 1.541c-1.133 1.554-3.076 2.604-5.34 2.604a8.09 8.09 0 0 1-3.162-.645l1.428-1.427c.616.26 1.285.4 1.976.4 .744 0 1.458-.175 2.105-.49l1.451 1.45zm-6.378-5.578l-1.541-1.542A8.034 8.034 0 0 1 12 6.346a8.077 8.077 0 0 1 4.524 1.388L15.96 9.275a5.55 5.55 0 0 0-2.453-.573 5.537 5.537 0 0 0-4.95 3.034L6.346 12l.001-.004a8.068 8.068 0 0 1-1.071 3.838l1.542 1.542a5.56 5.56 0 0 0 2.603-5.34z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2a10 10 0 0 0-7.22 16.876l.356.457-.368.477h1.852l.378-.487a8.01 8.01 0 0 1 2.601-1.712c.13.174.358.33.633.472.37.164.802.26 1.19.26.39 0 .82-.096 1.19-.26.275-.142.503-.298.633-.472a8.01 8.01 0 0 1 2.602 1.712l.378.487h1.852l-.368-.477.356-.457A10 10 0 0 0 12 2zm0 2c2.773 0 5 2.226 5 5.001v.999a5 5 0 0 1-10 0V9.001C7 6.226 9.227 4 12 4zm-4 7v1h2.5v-1H8zm5.5 0v1H17v-1h-3.5zm-1.5 2v1h6v-1h-6zm-1.5 2v1h3.5v-1H11zm-2.5 2v1h6v-1h-6zm-1.5 2v1H17v-1h-6z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#" className='w-[260px] max-w-[50%] h-[240px] overflow-hidden'>
                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg w-full h-full" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="Michael Avatar" />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-blue-700 dark:text-white">
                  <a href="#">Michael Brown</a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">MD &amp; Project Manager</span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Michael is the managing director at UDC</p>
                <ul className="flex space-x-4 sm:mt-0">
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1.986 7.67h2.956V7.657h-2.956v2.014zm3.252 0h2.898V7.657h-2.898v2.014zm-6.146 0h2.955V7.657h-2.955v2.014zm3.147 6.292v-2.018h2.957v2.018H14.29zm3.24 0v-2.018h2.897v2.018h-2.897zm-6.136 0v-2.018h2.956v2.018h-2.956zm-3.294 2.6a8.07 8.07 0 0 1-3.838-1.071l1.543-1.542a5.537 5.537 0 0 0 2.488.586 5.556 5.556 0 0 0 3.929-1.632l1.428 1.428a8.087 8.087 0 0 1-6.55 2.231zm9.36-2.762l1.542 1.541c-1.133 1.554-3.076 2.604-5.34 2.604a8.09 8.09 0 0 1-3.162-.645l1.428-1.427c.616.26 1.285.4 1.976.4 .744 0 1.458-.175 2.105-.49l1.451 1.45zm-6.378-5.578l-1.541-1.542A8.034 8.034 0 0 1 12 6.346a8.077 8.077 0 0 1 4.524 1.388L15.96 9.275a5.55 5.55 0 0 0-2.453-.573 5.537 5.537 0 0 0-4.95 3.034L6.346 12l.001-.004a8.068 8.068 0 0 1-1.071 3.838l1.542 1.542a5.56 5.56 0 0 0 2.603-5.34z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2a10 10 0 0 0-7.22 16.876l.356.457-.368.477h1.852l.378-.487a8.01 8.01 0 0 1 2.601-1.712c.13.174.358.33.633.472.37.164.802.26 1.19.26.39 0 .82-.096 1.19-.26.275-.142.503-.298.633-.472a8.01 8.01 0 0 1 2.602 1.712l.378.487h1.852l-.368-.477.356-.457A10 10 0 0 0 12 2zm0 2c2.773 0 5 2.226 5 5.001v.999a5 5 0 0 1-10 0V9.001C7 6.226 9.227 4 12 4zm-4 7v1h2.5v-1H8zm5.5 0v1H17v-1h-3.5zm-1.5 2v1h6v-1h-6zm-1.5 2v1h3.5v-1H11zm-2.5 2v1h6v-1h-6zm-1.5 2v1H17v-1h-6z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
