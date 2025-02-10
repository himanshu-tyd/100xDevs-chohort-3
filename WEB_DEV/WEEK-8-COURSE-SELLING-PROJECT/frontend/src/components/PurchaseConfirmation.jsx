import React from "react";
import WrapperContainer from "./WrapperContainer";
import { ChevronLeftIcon, CircleCheckBig } from "lucide-react";
import { Link } from "react-router-dom";

const PurchaseConfirmation = () => {
  return (
    <WrapperContainer>
      <div className="flex flex-col justify-center items-center font-clash-regular space-y-6 w-full h-[500px] animate-fadeIn">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-green-500/20 animate-ping rounded-full" />
            <CircleCheckBig className="relative text-green-500 w-16 h-16" />
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-clash-semibold text-slate-900">
              Purchase Confirmed
            </h2>
            <p className="text-slate-600 max-w-md">
              Thank you for your purchase. Your course access is now available.
            </p>
          </div>
        </div>

        <Link 
          to={'/dashboard/purchase'} 
          className="flex items-center gap-2 px-6 py-3 text-sm font-medium text-slate-700
            hover:text-slate-900 rounded-full hover:bg-slate-100 transition-all duration-300 group"
        > 
          <ChevronLeftIcon className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Purchases
        </Link>
      </div>
    </WrapperContainer>
  );
};

export default PurchaseConfirmation;
