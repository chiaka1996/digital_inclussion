const EdTechSlider3 = () => {
    return(
        <section className="box-border relative grid grid-cols-1 md:grid-cols-2 text-[#F7F7F7] leading-[120%] tracking-[-3%] md:min-h-[528px] xl:min-h-screen 2xl:min-h-[960px] w-screen">
            <h3 className="max-w-full absolute top-[40px] xl:top-[56px] 2xl:top-[80px] left-[24px] xl:left-[40px] 2xl:left-[100px] z-[50] text-[46px] md:text-[58px] xl:text-[100px] 2xl:text-[120px] font-[800] leading-[100%] uppercase tracking-[-3%] text-[#F1EADA]">
                PATHWAYS TO<br/> LIVELIHOOD
            </h3>
            {/* grid1*/}
            <div className="box-border bg-[#000F07] px-[24px] xl:px-[40px] 2xl:px-[100px] pt-[172px] xl:pt-[305px] 2xl:pt-[384px] pb-[40px] xl:pb-[110px]">
                <div className="space-y-[15px] xl:space-y-[30px] max-w-full lg:max-w-[574px] text-[18px] md:text-[16px] xl:text-[18px] 2xl:text-[20px] leading-[160%]">
                    <p>
                    In Ghana, (n=33), 45% of respondents use smartphones for education or job search, revealing that digital tools are significantly becoming a part of how women grow their skills and explore new income opportunities. 
                    </p>
                    <p>
                    Edtech can leverage this by connecting direct learning to real-world career and income generating outcomes, not just certificates.
                    </p>
                    <p>
                    Though the sample size was smaller, trends show that women in Liberia also use digital tools for learning.             
                    </p>
                </div>
            </div>
            {/* grid 2 */}
            <div className="box-border relative bg-[url('https://res.cloudinary.com/dpjrtbofl/image/upload/v1760925020/Edtech3_ywcafk.jpg')] bg-cover bg-center h-full pt-[40px] md:pt-[150px] xl:pt-[285px] 2xl:pt-[384px] pb-[40px] md:pb-[24px] xl:pb-[40px] md:pb-[110px]">
                {/*Overlay*/}
              <div className="absolute inset-0 bg-gradient-to-b from-[#000000B2] to-[#000000B2]"></div>


               <div className="loraFont text-[#fff] px-[24px] xl:px-0 relative mx-auto max-w-full xl:max-w-[580px] 2xl:max-w-[696px] space-y-[24px] text-[20px] xl:text-[27px] 2xl:text-[32.5px] font-[500] leading-[156%]">
                 <div>
                   <h4 className="fontHelvetica uppercase border border-b-[#fff] pb-[2px] inline md:hidden border-x-0 border-t-0">Food for thought</h4>
                   </div>
                    <p>
                    What would it take for edtech certificates to carry true market value? What additional elements of value can be added, 
                    to successfully engage women who are seeking to expand their knowledge and grow their careers? 
                    </p>
               </div>
            </div>
        </section>
    )
}

export default EdTechSlider3;