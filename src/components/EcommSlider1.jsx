const EcommSlider1 = () => {
    return(
         <section className="box-border grid grid-cols-1 md:grid-cols-2 text-[#F7F7F7] leading-[120%] tracking-[-3%] bg-[#fff] md:min-h-[528px] xl:min-h-screen 2xl:min-h-[958px] w-screen">
            {/* Grid 1 */}
             <div className="h-full relative bg-[#000]">
                {/* layer-1 */}
                <div className="bg-[#29524A] p-[24px] lg:p-[40px] h-full md:h-[66%] relative">
                    {/* this arrow only shows on mobile */}
                    <span className="flex md:hidden flex-col justify-end align-bottom cursor-pointer absolute top-[24px] right-[24px]">
                            <svg
                            className="size-12"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            >
                            <path d="M13 5H19V11" />
                            <path d="M19 5L5 19" />
                            </svg>
                        </span> 
                        {/* end of the mobile arrow */}
                    <div className="flex flex-col md:flex-row items-start justify-start gap-[16px] md:gap-0">
                        <div>
                            <h5 className="font-[500] text-[80px] md:text-[70px] xl:text-[88px] 2xl:text-[110px] leading-[100%] tracking-[-3%]">84%</h5>
                            <div className="leading-[120%]">
                              <span className="text-[14px] md:text-[10px] xl:text-[16px] 2xl:text-[19px] leading-[120%]">Respondents in</span>
                              <p className="text-[20px] md:text-[14px] xl:text-[25px] 2xl:text-[28px] leading-[120%]">Nigeria (n=295)</p>
                            </div>
                        </div>
                        <div className="font-[700] text-[50px] xl:text-[85px] 2xl:text-[102px] leading-[56px] pt-[10px] hidden md:block">+</div>
                        <div>
                            <h5 className="font-[500] text-[80px] md:text-[70px] xl:text-[88px] 2xl:text-[110px] leading-[100%] tracking-[-3%]">86%</h5>
                            <div className="leading-[120%]">
                              <span className="text-[14px] md:text-[10px] xl:text-[16px] 2xl:text-[19px] leading-[120%]">Respondents in</span>
                              <p className="text-[20px] md:text-[14px] xl:text-[25px] 2xl:text-[28px] leading-[120%]">Senegal (n=51)</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-[24px]">
                        <h5 className="font-[500] text-[80px] md:text-[70px] xl:text-[118px] 2xl:text-[110px] leading-[100%] tracking-[-3%]">83%</h5>
                        <div className="leading-[120%]">
                            <span className="text-[14px] md:text-[10px] xl:text-[16px] 2xl:text-[19px] leading-[120%]">Respondents in</span>
                            <p className="text-[20px] md:text-[14px] xl:text-[25px] 2xl:text-[28px] leading-[120%]">Benin (n=50)</p>
                        </div>
                    </div>

                    <div className="relative mt-[24px] md:absolute md:bottom-[32px] xl:bottom-[40px] md:right-[24px] xl:right-[40px] 2xl:right-[48px] block md:w-[358px] 2xl:w-[424px]">
                        <div className="w-full flex flex-row justify-between items-end text-[16px] xl:text-[18px] 2xl:text-[24px] leading-[125%]">
                        <p className="w-[264px] lg:w-[278px] 2xl:w-[338px]">
                       rely heavily on family and friends and social media to learn about new digital platforms.
                        </p>
                        <span className="h-full hidden  md:flex flex-col justify-end align-bottom cursor-pointer shrink-o">
                            <svg
                            className="size-12"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            >
                            <path d="M13 5H19V11" />
                            <path d="M19 5L5 19" />
                            </svg>
                        </span> 
                        </div>
                     </div>
                </div>
                {/* layer 2 */}
                {/* this layer doesn't show on mobile */}
                <div className="box-border hidden md:grid grid-cols-2 min-h-[34%]">
                    <div className="p-[24px] xl:p-[40px] bg-[#A44200]">
                        <p className="text-[28px] md:text-[16px] xl:text-[20px] 2xl:text-[24px] leading-[120%]">
                        Social credibility and community trust may outperform paid advertising, in markets where brand loyalty is low.
                        </p>
                        <div className="mt-[43px] xl:mt-[71px] 2xl:mt-[85px] border border-[#F2BA0F] border-x-0 border-b-0 pt-[10px] xl:pt-[16px]">
                        </div>
                    </div>

                    <div className="bg-[#866500] p-[24px] xl:p-[40px]">
                        <section className="flex items-center gap-[14px] xl:gap-[32px]">
                            <div className="space-y-[12px]">
                                <h5 className="text-[32px] xl:text-[56px] 2xl:text-[68px] leading-[100%] font-[500]">500</h5>
                                <span className="block text-[12px] xl:text-[20px] 2xl:text-[24px]">Women</span>
                            </div>
                             <div className="w-[1px] border border-[#F2BA0F] min-h-[60px] xl:min-h-[80px] shrink-0"></div>
                            <div className="space-y-[12px]">
                                <h5 className="flex items-center">
                                    <span className="text-[32px] xl:text-[56px] 2xl:text-[68px] leading-[100%] font-[500]">8</span>
                                    <div className="text-[8px] xl:text-[14px] 2xl:text-[16px] max-w-[47px] 2xl:max-w-[55px]">West African</div>
                                    </h5>
                                <p className="text-[12px] xl:text-[20px] 2xl:text-[24px]">Countries</p>
                            </div>
                        </section>
                        <section className="text-[12px] xl:text-[18px] 2xl:text-[22px] mt-[40px] xl:mt-[70px] 2xl:mt-[85px] max-w-[270px] 2xl:max-w-[321px] leading-[120%]">
                            Insights into how women across West Africa discover, trust, and adopt e-commerce platforms.
                        </section>
                    </div>
                </div>
                {/* end of this layer that doesn't show on mobile */}
             </div>

             {/* grid 2 */}
             <section className="relative">
                {/* layer 1 */}
                <section className="md:min-h-[26%] p-[24px] md:p-[40px] bg-[#3C1518] flex justify-between items-start">
                     <div className="flex flex-col md:flex-row items-start justify-start gap-[16px] md:gap-0">
                        <div>
                            <h5 className="font-[500] text-[80px] md:text-[70px] xl:text-[80px] 2xl:text-[96px] leading-[100%] tracking-[-3%]">51%</h5>
                            <div className="leading-[120%]">
                              <span className="text-[14px] md:text-[10px] xl:text-[16px] 2xl:text-[19px] leading-[120%]">Respondents in</span>
                              <p className="text-[20px] md:text-[14px] xl:text-[25px] 2xl:text-[28px] leading-[120%]">Nigeria(n=295)</p>
                            </div>
                        </div>
                        <div className="font-[700] text-[50px] xl:text-[85px] 2xl:text-[102px] leading-[56px] pt-[10px] hidden md:block">+</div>
                        <div>
                            <h5 className="font-[500] text-[80px] md:text-[70px] xl:text-[80px] 2xl:text-[96px] leading-[100%] tracking-[-3%]">52%</h5>
                            <div className="leading-[120%]">
                              <span className="text-[14px] md:text-[10px] xl:text-[16px] 2xl:text-[19px] leading-[120%]">Respondents in</span>
                              <p className="text-[20px] md:text-[14px] xl:text-[25px] 2xl:text-[28px] leading-[120%]">Ghana(n=33)</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-[160px] 2xl:w-[190px] 2xl:text-[18px]">
                        <p>Identified scams and harassment as the top barriers to their adoption of digital platforms.</p>
                        <div className="w-full flex justify-end mt-[60px]">
                        <span className="h-full flex flex-col justify-end align-bottom cursor-pointer">
                            <svg
                            className="size-12"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            >
                            <path d="M13 5H19V11" />
                            <path d="M19 5L5 19" />
                            </svg>
                        </span> 
                        </div>
                    </div>
                     
                </section>
                {/* layer2 */}
                <section className="relative bg-[url('https://res.cloudinary.com/dpjrtbofl/image/upload/v1760915227/Frame_11_1_kwda7r.png')] md:bg-[url('https://res.cloudinary.com/dpjrtbofl/image/upload/v1760915227/Frame_11_1_kwda7r.png')] bg-cover bg-center min-h-[420px] md:min-h-[74%]">
                </section>
             </section>

             {/* this layer only appears on mobile */}
             <div className="grid grid-cols-1 md:hidden">
                    <div className="p-[24px] md:p-[40px] bg-[#1CC694]">
                        <p className="text-[28px] 2xl:text-[34px] leading-[120%] max-w-[300px] md:w-full">
                        Affordable, productive, and educational solutions
                        </p>

                        <div className="mt-[40px] md:mt-[71px] 2xl:mt-[85px] border border-[#BF4804] border-x-0 border-b-0 pt-[16px]">
                            <p className="max-w-[135px] 2xl:max-w-[170px] leading-[120%] text-[16px] 2xl:text-[20px]">Untapped value for market growth</p>
                        </div>
                    </div>

                    <div className="bg-[#F8FE89] px-[24px] md:px-[40px] py-[40px]">
                        <section className="flex items-center gap-[32px]">
                            <div className="space-y-[12px]">
                                <h5 className="text-[56px] 2xl:text-[68px]  leading-[100%] font-[500]">500</h5>
                                <span className="block text-[20px] 2xl:text-[24px]">Women</span>
                            </div>
                            <div className="w-[1px] border border-[#BF4804] min-h-[80px] shrink-0"></div>

                            <div className="space-y-[12px]">
                                <h5 className="flex items-center">
                                    <span className="text-[56px] 2xl:text-[68px] leading-[100%] font-[500]">8</span>
                                    <div className="text-[14px] 2xl:text-[16px] max-w-[47px] 2xl:max-w-[55px]">West African</div>
                                    </h5>
                                <p className="text-[20px] 2xl:text-[24px]">Countries</p>
                            </div>
                        </section>
                        <section className="text-[18px] 2xl:text-[22px] mt-[40px] md:mt-[70px] 2xl:mt-[85px] max-w-[270px] 2xl:max-w-[321px] leading-[120%]">
                            Nigeria · Ghana · Togo · Benin · Senegal · Sierra Leone · Liberia · Côte d&#39;Ivoire.
                        </section>
                    </div>
                </div>
                {/* end of this layer that appears only on mobile */}
        </section>
    )
}

export default EcommSlider1;