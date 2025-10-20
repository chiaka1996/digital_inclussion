const EdTechSlider2 = () => {
    return(
        <section className="box-border relative grid grid-cols-1 md:grid-cols-2 text-[#F7F7F7] leading-[120%] tracking-[-3%] md:min-h-[528px] xl:min-h-screen 2xl:min-h-[960px] w-screen">
            <h3 className="absolute top-[40px] xl:top-[56px] 2xl:top-[80px] left-[24px] xl:left-[40px] 2xl:left-[100px] z-[50] text-[46px] md:text-[58px] xl:text-[100px] 2xl:text-[120px] font-[800] leading-[100%] uppercase tracking-[-3%] text-[#F1EADA]">
            LEARNING<br/> WITHOUT LIMITS
            </h3>
            {/* grid1*/}
            <div className="box-border bg-[#3E2F5B] px-[24px] xl:px-[40px] 2xl:px-[100px] pt-[172px] md:pt-[305px] xl:pt-[305px] 2xl:pt-[364px] pb-[40px] mb:px-[24px] xl:pb-[110px]">
                <div className="space-y-[15px] xl:space-y-[30px] w-full lg:max-w-[512px] 2xl:max-w-[620px] text-[18px] md:text-[16px] xl:text-[18px] 2xl:text-[20px] leading-[160%]">
                    <p>
                    While many women have smartphones, high data costs and device limitations still restrict consistent use. 64% of respondents in Nigeria (n=295), 70% in Benin (n=50), 73% in Ghana (n=33) and all respondents in Senegal (n=51) cited excessive data use as a major barrier. 
                    </p>
                    <p>
                    For Edtech, this implies that scaling participation would require platforms that consume less data, remain affordable, and are compatible with the devices women already own.    
                    </p>
                </div>
            </div>
            {/* grid 2 */}
            <div className="box-border relative bg-[url('https://res.cloudinary.com/dpjrtbofl/image/upload/v1760924369/Edtech2_y25lhp.jpg')] bg-cover bg-center h-full pt-[40px] md:pt-[114px] xl:pt-[270px] 2xl:pt-[314px] pb-[40px] md:pb-[24px] xl:pb-[40px] xl:pb-[110px]">
                {/*Overlay*/}
                <div className="absolute inset-0 bg-gradient-to-b from-[#14003D66] to-[#14003DB2]"></div>

               <div className="loraFont text-[#fff] px-[24px] xl:px-0 relative mx-auto max-w-full xl:max-w-[560px] 2xl:max-w-[675px] space-y-[20px] xl:space-y-[34px] text-[20px] xl:text-[27px] 2xl:text-[32px] font-[500] leading-[156%]">
                   <div>
                   <h4 className="fontHelvetica uppercase border border-b-[#fff] pb-[2px] inline md:hidden border-x-0 border-t-0">Food for thought</h4>
                   </div>
                    <p>
                       Could Edtech platforms combine low-data operations on everyday devices, with offline features like downloadable lessons 
                       to ensure women can learn consistently, even when connectivity is unreliable or data is costly?
                    </p>
                    
               </div>

            </div>
            

        </section>
    )
}

export default EdTechSlider2;