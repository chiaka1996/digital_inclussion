const HealthSlider2 = () => {
    return(
        <section className="box-border relative grid grid-cols-1 md:grid-cols-2 text-[#1D2328] leading-[120%] tracking-[-3%] md:min-h-[528px] xl:min-h-screen 2xl:min-h-[960px] w-screen">
            <h3 className="absolute top-[40px] xl:top-[56px] 2xl:top-[80px] left-[24px] xl:left-[40px] 2xl:left-[100px] z-[50] text-[46px] md:text-[58px] xl:text-[100px] 2xl:text-[120px] font-[800] leading-[100%] uppercase tracking-[-3%] text-[#F1EADA]">
                Product Boosters
            </h3>
            {/* grid1*/}
            <div className="box-border bg-[#FF8651] px-[24px] xl:px-[40px] 2xl:px-[100px] pt-[172px] md:pt-[114px] xl:pt-[205px] 2xl:pt-[264px] pb-[40px] mb:px-[24px] xl:pb-[110px]">
                <div className="space-y-[15px] xl:space-y-[30px] w-full lg:max-w-[512px] 2xl:max-w-[620px] text-[18px] md:text-[16px] xl:text-[18px] 2xl:text-[20px] leading-[160%]">
                    <p>
                    Our survey data shows that income security is a key driver in women's adoption of health solutions. 
                    With 38% of respondents in Nigeria (n=295) and 48.5% in Ghana (n=33) reporting that they are 
                    unemployed and seeking work or self-employed.
                    </p>
                    <p>
                    In demographies with smaller sample sizes such as Liberia and Côte d&#39;Ivoire, more than half of 
                    respondents also identified as unemployed and seeking work or self-employed.
                    </p>
                    <p>
                    While further market validation is recommended, particularly in markets such as Liberia and 
                    Côte d&#39;Ivoire, these findings reveal a strong opportunity to design solutions that prioritize 
                    affordability, efficiency, and even support for education and skills-building, empowering women 
                    not only as patients but also as informed decision-makers around matters of health.
                    </p>
                </div>
            </div>
            {/* grid 2 */}
            <div className="box-border relative bg-[url('https://res.cloudinary.com/dpjrtbofl/image/upload/v1760906997/Healthtech2_gijobr.jpg')] bg-cover h-full pt-[40px] md:pt-[114px] xl:pt-[204px] 2xl:pt-[264px] pb-[40px] md:pb-[24px] xl:pb-[40px] xl:pb-[110px]">
                {/*Overlay*/}
               <div className="absolute inset-0 bg-gradient-to-b from-[#1F100A99] to-[#1F100ACC]"></div>

               <div className="loraFont text-[#fff] px-[24px] xl:px-0 relative mx-auto max-w-full xl:max-w-[560px] 2xl:max-w-[675px] space-y-[20px] xl:space-y-[34px] text-[20px] xl:text-[27px] 2xl:text-[32px] font-[500] leading-[156%]">
                   <div>
                   <h4 className="fontHelvetica uppercase border border-b-[#fff] pb-[2px] inline md:hidden border-x-0 border-t-0">Food for thought</h4>
                   </div>
                    <p>
                       Could framing healthtech around productivity and earning potential spark interest 
                       and accelerate adoption among women seeking several sources of income or managing side hustles? 
                    </p>
                    <p>
                        What if digital health solutions were framed as productivity and income enablers, helping women 
                        with irregular income, supporting side hustles, 
                        and protecting their ability to earn while still scaling effectively for clinics and providers?
                    </p>
               </div>

            </div>
            

        </section>
    )
}

export default HealthSlider2;