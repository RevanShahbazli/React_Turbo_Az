import React from 'react'

function Card({item}) {
  console.log(item);
  
  return (
    <>
        <article className="flex flex-col cursor-pointer shadow-[0_17px_34px_0_rgba(44,39,56,0.04),_0_8px_17px_0_rgba(44,39,56,0.02)] hover:shadow-[0_4px_8px_0_rgba(177,181,199,0.48)] transition duration-300 rounded-[7px] bg-white">
                                <div className="relative">
                                    <img alt="car" className="object-cover w-full h-52 rounded-[8px_8px_0_0] dark:bg-gray-500" src={item.images[0]}/>
                                        <i onclick="addBasket( 24, 22000, 'E 430', 'Mercedes', 'AZN', 'https://turbo.azstatic.com/uploads/full/2023%2F01%2F30%2F18%2F47%2F06%2F92202a2f-1f27-453f-a37e-c03b988d1187%2F49755_qZklKVXHkSfjWtrA_iHn_A.jpg', event, 'main')" className="fa-regular fa-heart text-white absolute right-2 top-2 text-[22px] cursor-pointer"></i>
                                </div>
                                <div className="flex flex-col flex-1 p-3">
                                    <h3 className="flex-1 pt-2 pb-[2px] text-[18px] font-[700] leading-snug">{item.price} AZN</h3>
                                    <span className="text-[16px] capitalize hover: dark:text-default-600">{item.brand} {item.model}</span>
                                    <span className="text-[16px] hover: dark:text-default-600">{item.year}, {item.engine}, {item.odometer} {item.odometerUnit}</span>
                                    <div className="flex flex-wrap text-[14px] justify-between pt-1 space-x-2 text-sm text-gray-600">
                                        <span className="text-[#8d94ad]">{item.dates}</span>
                                    </div>
                                </div>
                            </article>
    </>
  )
}

export default Card