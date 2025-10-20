const FintechSlider3 = () => {
    return(
        <section className="box-border relative grid grid-cols-1 md:grid-cols-2 text-[#1D2328] leading-[120%] tracking-[-3%] md:min-h-[528px] xl:min-h-screen 2xl:min-h-[960px] w-screen">
            <h3 className="absolute top-[40px] xl:top-[56px] 2xl:top-[80px] left-[24px] xl:left-[40px] 2xl:left-[100px] z-[50] text-[46px] md:text-[58px] xl:text-[100px] 2xl:text-[120px] font-[800] leading-[100%] uppercase tracking-[-3%] text-[#BF4142]">
                SEAMLESS FINANCE
            </h3>
            {/* grid1*/}
            <div className="box-border bg-[#EBD2B3] px-[24px] xl:px-[40px] 2xl:px-[100px] pt-[172px] md:pt-[114px] xl:pt-[205px] 2xl:pt-[264px] pb-[40px] mb:px-[24px] xl:pb-[110px]">
                <div className="space-y-[15px] xl:space-y-[30px] w-full lg:max-w-[512px] 2xl:max-w-[620px] text-[18px] md:text-[16px] xl:text-[18px] 2xl:text-[20px] leading-[160%]">
                    <p>
                    Findings from our survey revealed a strong opportunity and need for financial services to tailor offerings to answer to the needs of women who are building their own businesses or actively seeking employment. 
                    </p>
                    <p>
                    38% of the 295 Nigerian women reported being unemployed or self-employed, along with slightly half of the respondents surveyed in Benin (56%, n=50).
                    </p>
                </div>
            </div>
            {/* grid 2 */}
            <div className="box-border relative bg-[url('https://res.cloudinary.com/dpjrtbofl/image/upload/v1760954691/Fintech3_xroxwc.jpg')] bg-center bg-cover h-full pt-[40px] md:pt-[114px] xl:pt-[164px] 2xl:pt-[264px] pb-[40px] md:pb-[24px] xl:pb-[40px] xl:pb-[110px]">
                {/*Overlay*/}
               <div className="absolute inset-0 bg-gradient-to-b from-[#3D2200CC] to-[#3D2200CC]"></div>

               <div className="loraFont text-[#fff] px-[24px] xl:px-0 relative mx-auto max-w-full xl:max-w-[560px] 2xl:max-w-[675px] space-y-[20px] xl:space-y-[34px] text-[20px] xl:text-[27px] 2xl:text-[32px] font-[500] leading-[156%]">
                   <div>
                   <h4 className="fontHelvetica uppercase border border-b-[#fff] pb-[2px] inline md:hidden border-x-0 border-t-0">Food for thought</h4>
                   </div>
                    <p>
                     Can financial services, in their search for new revenue streams, develop offerings, 
                     through partnerships or other models, in the areas of career advancement and business growth, that women can benefit from?
                    </p>
               </div>

            </div>
            

        </section>
    )
}

export default FintechSlider3;