const EdTechSlider1 = () => {
    return(
         <section className="box-border grid grid-cols-1 md:grid-cols-2 text-[#F7F7F7] leading-[120%] tracking-[-3%] bg-[#fff] md:min-h-[528px] xl:min-h-screen 2xl:min-h-[958px] w-screen">
            {/* Grid 1 */}
             <div className="h-full relative">
                {/* layer-1 */}
                <div className="bg-[#3E2F5B] p-[24px] lg:p-[40px] h-full md:h-[66%] relative">
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
                    <div className="flex flex-col md:flex-row items-start justify-start gap-[16px] md:gap-[40px]">
                        <div>
                            <h5 className="font-[500] text-[80px] md:text-[70px] xl:text-[88px] 2xl:text-[110px] leading-[100%] tracking-[-3%]">73%</h5>
                            <div className="leading-[120%]">
                              <span className="text-[14px] md:text-[10px] xl:text-[16px] 2xl:text-[19px] leading-[120%]">Respondents in</span>
                              <p className="text-[20px] md:text-[14px] xl:text-[25px] 2xl:text-[28px] leading-[120%]">Ghana(n=33)</p>
                            </div>
                        </div>

                        <div>
                            <h5 className="font-[500] text-[80px] md:text-[70px] xl:text-[88px] 2xl:text-[110px] leading-[100%] tracking-[-3%]">70%</h5>
                            <div className="leading-[120%]">
                              <span className="text-[14px] md:text-[10px] xl:text-[16px] 2xl:text-[19px] leading-[120%]">Respondents in</span>
                              <p className="text-[20px] md:text-[14px] xl:text-[25px] 2xl:text-[28px] leading-[120%]">Benin(n=50)</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-[24px]">
                        <h5 className="font-[500] text-[80px] md:text-[70px] xl:text-[118px] 2xl:text-[110px] leading-[100%] tracking-[-3%]">64%</h5>
                        <div className="leading-[120%]">
                            <span className="text-[14px] md:text-[10px] xl:text-[16px] 2xl:text-[19px] leading-[120%]">Respondents in</span>
                            <p className="text-[20px] md:text-[14px] xl:text-[25px] 2xl:text-[28px] leading-[120%]">Nigeria(n=50)</p>
                        </div>
                    </div>

                    <div className="relative mt-[24px] md:absolute md:bottom-[32px] xl:bottom-[40px] md:right-[24px] xl:right-[40px] 2xl:right-[48px] block md:w-[358px] 2xl:w-[424px]">
                        <div className="w-full flex flex-row justify-between items-end text-[16px] xl:text-[18px] 2xl:text-[24px] leading-[125%]">
                        <p className="w-[264px] lg:w-[272px] 2xl:w-[338px]">
                       cited excessive data use as a major barrier to consistent use of digital platforms
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
                    <div className="p-[24px] xl:p-[40px] bg-[#D7253D]">
                        <p className="text-[28px] md:text-[16px] xl:text-[20px] 2xl:text-[24px] leading-[120%]">
                        Edtech platforms must meet learners where they are
                        </p>
                        <div className="mt-[43px] xl:mt-[71px] 2xl:mt-[85px] border border-[#F2BA0F] border-x-0 border-b-0 pt-[10px] xl:pt-[16px]">
                         <p className="max-w-[121px] xl:max-w-[135px] 2xl:max-w-[170px] leading-[120%] text-[8px] xl:text-[16px] 2xl:text-[20px]">To truly scale access to education</p>
                        </div>
                    </div>

                    <div className="bg-[#126F63] p-[24px] xl:p-[40px]">
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
                            Revealing diverse experiences with digital learning and use of technology.
                        </section>
                    </div>
                </div>
                {/* end of this layer that doesn't show on mobile */}
             </div>

             {/* grid 2 */}
             <section className="relative">
                {/* layer 1 */}
                <section className="md:min-h-[26%] p-[24px] md:p-[40px] bg-[#000F07] flex justify-between items-start relative">
                     <div className="flex flex-col md:flex-row items-end justify-start gap-[16px] md:gap-[40px]">
                        <div>
                            <h5 className="font-[500] text-[80px] md:text-[70px] xl:text-[80px] 2xl:text-[96px] leading-[100%] tracking-[-3%]">45%</h5>
                            <div className="leading-[120%]">
                              <span className="text-[14px] md:text-[10px] xl:text-[16px] 2xl:text-[19px] leading-[120%]">Respondents in</span>
                              <p className="text-[20px] md:text-[14px] xl:text-[25px] 2xl:text-[28px] leading-[120%]">Ghana(n=33)</p>
                            </div>
                        </div>

                        <div className="w-[198px] 2xl:w-[190px] text-[16px] 2xl:text-[18px]">
                        <p>use smartphones for education or job search</p>
                        </div>
                    </div>

                        <div className="absolute bottom-[28px] md:bottom-[40px] 2xl:bottom-[48px] right-[28px] md:right-[40px] 2xl:right-[48px]">
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
                </section>
                {/* layer2 */}
                <section className="relative bg-[url('https://res.cloudinary.com/dpjrtbofl/image/upload/v1760922211/Frame_11_2_izu3k4.png')] md:bg-[url('https://res.cloudinary.com/dpjrtbofl/image/upload/v1760922211/Frame_11_2_izu3k4.png')] bg-cover bg-center min-h-[420px] md:min-h-[74%]">
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

export default EdTechSlider1;