import { type Plan } from "@/shared/types";
import React from "react";

type NormalPlanCardProps = {
  plan: Plan;
  isMonthly: boolean;
};

const NormalPlanCard = ({ plan, isMonthly }: NormalPlanCardProps) => {
  return (
    <div className="flex flex-col p-4 text-center bg-white border border-gray-200 rounded-2xl md:p-8 ">
      <h4 className="text-lg font-medium text-gray-800 "> {plan.name} </h4>
      <span className="text-3xl font-bold text-gray-800 mt-7 md:text-4xl xl:text-5xl ">
        {isMonthly ? plan.monthly_price : plan.annual_price}$
      </span>
      <p className="mt-2 text-sm text-gray-500">{plan.description}</p>

      <ul className="mt-7 space-y-2.5 text-sm">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex space-x-2">
            <svg
              className="flex-shrink-0 w-5 h-5 text-blue-600"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                fill="currentColor"
              />
            </svg>
            <span className="text-gray-800 ">{feature}</span>
          </li>
        ))}
      </ul>

      <a
        className="inline-flex items-center justify-center gap-2 px-4 py-3 mt-5 text-sm font-semibold text-blue-600 transition-all border-2 border-blue-600 rounded-lg hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 "
        href={plan.href}
      >
        Get started
      </a>
    </div>
  );
};

export default NormalPlanCard;
