import { CheckIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

const pricingData = [
  {
    title: "Basic",
    price: "$9.99",
    description: "Essential features for beginners.",
    inverse: true,
    popular: false,
    buttonText: "Get Started with Basic",
    features: [
      "Basic Platform Access",
      "Email Support",
      "Limited Data Storage"
    ]
  },
  {
    title: "Pro",
    price: "$19.99",
    description: "Advanced tools for growth.",
    inverse: false,
    popular: true,
    buttonText: "Get Started with Pro",
    label: "Most popular",
    features: [
      "Full Platform Access",
      "Email and Chat Support",
      "Unlimited Data Storage"
    ]
  },
  {
    title: "Premium",
    price: "$29.99",
    description: "Top-tier support and customization.",
    inverse: true,
    popular: false,
    buttonText: "Get Started with Premium",
    features: [
      "Advanced Platform Access",
      "24/7 Support via Chat, and Phone",
      "Customized Features"
    ]
  }
]

export default function Pricing() {
  return (
    <div className="container">
      <div className='justify-center flex flex-col text-center  items-center'>
        <div className="max-w-[545px] mx-auto">
          <h1 className="text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-white to-[#96EA63] text-transparent bg-clip-text mt-6">
            Pricing
          </h1>
          <p className="text-[19px] leading-[30px] text-white tracking-tight mt-5">
            Explore our pricing plans tailored to fit your need
          </p>
        </div>
      </div>

      <div className="flex-col gap-6 flex lg:flex-row lg:justify-center lg:items-end py-16">
        {pricingData.map((plan, index) => (
          <div
            key={index}
            className={twMerge(
              'p-8 max-w-[350px] w-full rounded-3xl shadow-md border-white/40 border  bg-black',
              plan.inverse === false &&  'box'
            )}
          >
            <div className='flex justify-between items-center'>
              <h3 className={twMerge('text-lg font-bold text-white')}>{plan.title}</h3>
              {plan.popular && <span className="bg-green-900 text-[#96EA63]  px-2 py-1 rounded">Most Popular</span>}
            </div>
            <div className='flex items-baseline gap-1 mt-[30px]'>
              <span className='text-4xl font-bold tracking-tighter text-white leading-none'>{plan.price}</span>
              <span className='tracking-tight font-bold text-white/40'>/month</span>
            </div>
            <div className="mt-[30px]">
              <span className='tracking-tight font-medium text-[18px] text-white/40'>{plan.description}</span>
            </div>
            <button className={twMerge(
              'btn btn-primary inline-flex items-center justify-center w-full py-3 rounded-md mt-[30px] text-center',
              plan.inverse && 'bg-white text-black'
            )}>
              {plan.buttonText}
            </button>
            <ul className='flex flex-col leading-1 mt-8'>
              {plan.features.map((feature, id) => (
                <div className='leading-none' key={id}>
                  <li className='flex items-center text-white gap-4 mt-[30px]'>
                  <CheckIcon className="h-6 w-6" />
                    <span>{feature}</span>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="backdrop-blur-sm text-white w-full flex md:flex-row flex-col justify-between max-w-[1100px] py-6  px-4  mx-auto boxx bg-black ">
          <div className="">
            <h1 className="text-3xl font-[900] font-groove ">Unlock the Power of Web3 Today!</h1>
            <p className="text-base font-medium pt-5">Join us on the journey to the decentralized future.</p>
          </div>
          <div>
          <button className={twMerge(
              'btn btn-primary inline-flex items-center font-medium px-8 text-black justify-center w-full py-3 rounded-md mt-[30px] text-center',
            )}>
              Get Started
            </button>
          </div>
      </div>
    </div>
  );
}
