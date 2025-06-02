function Footer() {
  return (
    <>
      <footer className="bg-[#f1f3f7] border-t border-[#eaebf2] font-sans">
        <div className="min-h-[60px] py-[5px] tablet:text-[13px] flex items-center max-tablet:flex-col max-tablet:items-start max-tablet:gap-y-2 justify-between max-w-[970px] w-full mx-auto px-5">
          <a className="text-[#212c3a] transition duration-300 hover:text-[#ca1016]" href="#">Qaydalar</a>
          <a className="text-[#212c3a] transition duration-300 hover:text-[#ca1016]" href="#">Qanun</a>
          <a className="text-[#212c3a] transition duration-300 hover:text-[#ca1016]" href="#">İstifadəçi razılaşması</a>
          <a className="text-[#212c3a] transition duration-300 hover:text-[#ca1016]" href="#">Məxfilik siyasəti</a>
          <a className="text-[#212c3a] transition duration-300 hover:text-[#ca1016]" href="#">Sifarişli avtomobil alan alıcı üçün tövsiyələr</a>
          <a className="text-[#212c3a] transition duration-300 hover:text-[#ca1016]" href="#">Reklam yerləşdirin</a>
        </div>
        <div className="bg-[#ca1016] text-white py-[5px] md:text-base sm:text-sm ">
          <div className="h-[100%] tablet:text-[13px] flex justify-between max-tablet:flex-col max-tablet:gap-2 max-tablet:items-start items-center max-w-[970px] w-full mx-auto px-5">
            <div className="flex-none max-w-[390px] w-full">
              Saytın Administrasiyası reklam bannerlərinin və yerləşdirilmiş elanların məzmununa görə məsuliyyət daşımır.
            </div>
            <div className="flex items-center max-tablet:flex-col max-tablet:gap-2 max-tablet:items-start">
              <div className="mr-[25px]">2006-2025 Digital Classifieds MMC. VÖEN: 1405631661</div>
              <a href="index.html" className="no-underline">Mobil versiyası</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer