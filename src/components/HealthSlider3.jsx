const HealthSlider3 = () => {
    return(
        <section className="box-border relative grid grid-cols-1 md:grid-cols-2 text-[#1D2328] leading-[120%] tracking-[-3%] md:min-h-[528px] xl:min-h-screen 2xl:min-h-[960px] w-screen">
            <h3 className="max-w-full absolute top-[40px] xl:top-[56px] 2xl:top-[80px] left-[24px] xl:left-[40px] 2xl:left-[100px] z-[50] text-[46px] md:text-[58px] xl:text-[100px] 2xl:text-[120px] font-[800] leading-[100%] uppercase tracking-[-3%] text-[#F1EADA]">
                PATIENTS<br/> to POWERHOUSE
            </h3>
            {/* grid1*/}
            <div className="box-border bg-[#C596FE] px-[24px] xl:px-[40px] 2xl:px-[100px] pt-[172px] xl:pt-[305px] 2xl:pt-[384px] pb-[40px] xl:pb-[110px]">
                <div className="space-y-[15px] xl:space-y-[30px] max-w-full lg:max-w-[574px] text-[18px] md:text-[16px] xl:text-[18px] 2xl:text-[20px] leading-[160%]">
                    <p>
                    45% of respondents in Ghana (n=33) use digital platforms for learning or studying. 
                    This indicates that healthtech solutions may scale faster when framed not just as direct healthcare solutions, but also offering the added value of educating users in a variety of matters that interest them in the context of healthcare.  
                    Additionally, that aligns with women&apos;s existing use of digital tools for learning.
                    </p>
                </div>
            </div>
            {/* grid 2 */}
            <div className="box-border relative bg-[url('https://res.cloudinary.com/dpjrtbofl/image/upload/v1760907045/Healthtech3_itajek.png')] bg-cover bg-bottom h-full pt-[40px] md:pt-[150px] xl:pt-[285px] 2xl:pt-[384px] pb-[40px] md:pb-[24px] xl:pb-[40px] md:pb-[110px]">
               <div className="loraFont text-[#fff] px-[24px] xl:px-0 relative mx-auto max-w-full xl:max-w-[580px] 2xl:max-w-[696px] space-y-[24px] text-[20px] xl:text-[27px] 2xl:text-[32.5px] font-[500] leading-[156%]">
                 <div>
                   <h4 className="fontHelvetica uppercase border border-b-[#fff] pb-[2px] inline md:hidden border-x-0 border-t-0">Food for thought</h4>
                   </div>
                    <p>
                      What if healthtech platforms doubled as a learning & empowerment tool, 
                      by embedding educational content e.g., maternal health, wellness and preventive care, 
                      that reflects how women use digital tools to improve their livelihoods?
                    </p>
               </div>
            </div>
        </section>
    )
}

export default HealthSlider3;