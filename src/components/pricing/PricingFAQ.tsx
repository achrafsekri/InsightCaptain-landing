import { FAQ } from "@/shared/types";
import React from "react";

const FAQ: FAQ[] = [
  {
    question: "Can I cancel at anytime?",
    answer:
      "Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if you will give us some feedback.",
  },
  {
    question: "My team has credits. How do we use them?",
    answer:
      "Once your team signs up for a subscription plan. This is where we sit down, grab a cup of coffee and dial in the details.",
  },
  {
    question: "How does Preline's pricing work?",
    answer:
      "Our subscriptions are tiered. Understanding the task at hand and ironing out the wrinkles is key.",
  },
  {
    question: "How secure is Preline?",
    answer:
      "Protecting the data you trust to Preline is our first priority. This part is really crucial in keeping the project in line to completion.",
  },
  {
    question: "How do I get access to a theme I purchased?",
    answer:
      "If you lose the link for a theme you purchased, don't panic! We've got you covered. You can login to your account, tap your avatar in the upper right corner, and tap Purchases. If you didn't create a login or can't remember the information, you can use our handy Redownload page, just remember to use the same email you originally made your purchases with.",
  },
  {
    question: "Upgrade License Type",
    answer:
      "There may be times when you need to upgrade your license from the original type you purchased and we have a solution that ensures you can apply your original purchase cost to the new license purchase.",
  },
];

const PricingFAQ = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* <!-- Grid --> */}
      <div className="grid gap-6 md:grid-cols-6">
        <div className="md:col-span-2">
          <div className="max-w-xs">
            <h2 className="text-2xl font-bold md:text-3xl md:leading-tight ">
              Frequently
              <br />
              asked questions
            </h2>
            <p className="hidden mt-1 text-gray-600 md:block ">
              Answers to the most frequently asked questions.
            </p>
          </div>
        </div>
        {/* <!-- End Col --> */}
        <div className="md:col-span-4">
          {/* <!-- Accordion --> */}
          <div className="divide-y divide-gray-200 hs-accordion-group ">
            {FAQ.map((faq, index) => (
              <div
                className="pt-6 pb-3 hs-accordion"
                id="hs-basic-with-title-and-arrow-stretched-heading-two"
                key={index}
              >
                <button
                  className="inline-flex items-center justify-between w-full pb-3 font-semibold text-left text-gray-800 transition hs-accordion-toggle group gap-x-3 md:text-lg hover:text-gray-500 "
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
                >
                  {faq.question}
                  <svg
                    className="block w-3 h-3 text-gray-600 hs-accordion-active:hidden group-hover:text-gray-500 "
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                  <svg
                    className="hidden w-3 h-3 text-gray-600 hs-accordion-active:block group-hover:text-gray-500 "
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
                <div
                  id="hs-basic-with-title-and-arrow-stretched-collapse-two"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
                >
                  <div className="pr-8">
                    <p className="text-gray-600 ">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <!-- End Accordion --> */}
        </div>
        {/* <!-- End Col --> */}
      </div>
      {/* <!-- End Grid --> */}
    </div>
  );
};

export default PricingFAQ;
