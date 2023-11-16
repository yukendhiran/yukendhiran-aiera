import { SectionWrapper } from '../hoc'


const FaqSection = () => {
    return (
      <div className="bg-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-gray-800">Frequently Asked Questions</h2>
          <div className="mt-8">
            <div className="border-t border-gray-200">
              <dl className="divide-y divide-gray-200">
                {/* FAQ items */}
                <div className="py-6">
                  <dt className="text-lg">
                    <button className="flex items-start justify-between w-full text-left">
                      <span className="font-medium text-gray-900">Question 1?</span>
                      <span className="ml-6 h-7 flex items-center">
                        <svg className="h-6 w-6 transform rotate-0 transition-transform duration-300 ease-in-out"
                          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </span>
                    </button>
                  </dt>
                  <dd className="mt-2 pr-12">
                    <p className="text-base text-gray-500">Answer 1.</p>
                  </dd>
                </div>
                {/* Repeat the above structure for other FAQ items */}
              </dl>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default SectionWrapper(FaqSection, "faq");