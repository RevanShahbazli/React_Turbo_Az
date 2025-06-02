
function Header() {
  return (
    <>
      <div className="bg-[#f6f7fa] text-[15px] hidden md:block">
        <div className="max-w-[1000px] m-auto px-3">
          <div className="container m-auto py-[9px] flex justify-between items-center">
            <div className="text-[#8d94ad] text-[15px]">
              <a href="https://tap.az/" target="_blank" className="mr-[25px] hover:text-[#ca1016]">Tap.az</a>
              <a href="https://bina.az/" target="_blank" className="mr-[25px] hover:text-[#ca1016]">Bina.az</a>
              <a href="https://boss.az/" target="_blank" className=" hover:text-[#ca1016]">Boss.az</a>
            </div>
            <div className="flex text-[#8d94ad] gap-5">
              <div className="text-[#212c3a]">
                <span className="cursor-default">Dəstək:</span>
                <a href="tel:+994125264747" className="hover:text-[#ca1016]">(012) 526-47-47</a>
              </div>
              <div><a href="#" className="hover:text-[#ca1016]">Yardim</a></div>
              <div><a href="#" className="hover:text-[#ca1016]">RU</a></div>
              <div><button className="hover:text-[#ca1016]"><i
                className="fa-solid fa-heart mr-1"></i> Seçilmişlər</button></div>
              <div><a href="#" className="hover:text-[#ca1016]"><i className="fa-solid fa-user mr-1"></i> Giriş</a></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f6f7fa] md:hidden">
        <div className="px-3 m-auto py-[9px] flex justify-between items-center">
          <div className="text-[#8d94ad] text-[15px]">
            <a href="https://tap.az/" target="_blank" className="mr-[25px] max-xsm:mr-[15px] hover:text-[#ca1016]">Tap.az</a>
            <a href="https://bina.az/" target="_blank" className="mr-[25px] max-xsm:mr-[15px] hover:text-[#ca1016]">Bina.az</a>
            <a href="https://boss.az/" target="_blank" className=" hover:text-[#ca1016]">Boss.az</a>
          </div>
          <div className="flex text-[#8d94ad] gap-5">
            <div><button className="hover:text-[#ca1016]"><i
              className="fa-solid fa-heart mr-1"></i></button></div>
            <div><a href="#" className="hover:text-[#ca1016]"><i className="fa-solid fa-user mr-1"></i></a></div>
          </div>
        </div>
      </div>
      <header className="bg-[#ca1016] py-[10px]">
        <div className="max-w-[1000px] m-auto">
          <nav className="flex flex-col gap-5 items-center md:flex-row max-md:hidden container md:justify-between m-auto px-3">
            <menu className="md:flex text-center text-white items-center">
              <li className="text-white text-[18px] font-[700] md:pr-9"><a href="index.htm">TURBO.AZ</a></li>
              <li className="lg:px-[10px] my-1 md:my-0 px-[5px] text-[15px]"><a href="index.htm"
                className="hover:opacity-75">Bütün elanlar</a></li>
              <li className="lg:px-[10px] my-1 md:my-0 px-[5px] text-[15px]"><a href="#"
                className="hover:opacity-75">Dilerlər</a></li>
              <li className="lg:px-[10px] my-1 md:my-0 px-[5px] text-[15px]"><a href="#"
                className="hover:opacity-75">Avtokatoloq</a></li>
              <li className="lg:px-[10px] my-1 md:my-0 px-[5px] text-[15px]"><a href="#"
                className="hover:opacity-75">Moto</a></li>
              <li className="lg:px-[10px] my-1 md:my-0 px-[5px] text-[15px]"><a href="#"
                className="hover:opacity-75">Ehtiyyat hissələri ve aksesuarlar</a></li>
              <li className="lg:px-[10px] my-1 md:my-0 px-[5px] text-[15px]"><a href="#"
                className="hover:opacity-75">İcarə</a></li>
            </menu>
            <div
              className="bg-[#7ed321] h-10 w-[103px] rounded-[7px] text-white flex justify-center items-center cursor-pointer transition ease-in-out duration-300 hover:bg-[#85c01f]">
              <img src="img/plus.svg" className="w-[15px] h-[15px] mr-[7px]" alt="plus" />
              <span>Yeni elan</span>
            </div>
          </nav>
          <div className="flex justify-between px-3 items-center md:hidden">
            <a href="index.htm" className="text-[18px] font-[700] text-white">TURBO.AZ</a>
            <i className="fa-solid fa-bars text-[18px] text-white font-[700]"></i>
          </div>
          <div id="sideBar" className="border p-2 fixed transition-all z-[999] duration-300 md:hidden right-[-100%] top-0  bg-white max-w-[400px] w-[100%] h-screen">
            <p className="text-[25px] text-right cursor-pointer">🗙</p>
            <menu className="flex flex-col gap-2 text-black">
              <li className="lg:px-[10px] my-1 md:my-0 px-[5px] text-[15px]"><a href="index.htm"
                className="hover:opacity-75">Bütün elanlar</a></li>
              <li className="lg:px-[10px] my-1 md:my-0 px-[5px] text-[15px]"><a href="#"
                className="hover:opacity-75">Dilerlər</a></li>
              <li className="lg:px-[10px] my-1 md:my-0 px-[5px] text-[15px]"><a href="#"
                className="hover:opacity-75">Avtokatoloq</a></li>
              <li className="lg:px-[10px] my-1 md:my-0 px-[5px] text-[15px]"><a href="#"
                className="hover:opacity-75">Moto</a></li>
              <li className="lg:px-[10px] my-1 md:my-0 px-[5px] text-[15px]"><a href="#"
                className="hover:opacity-75">Ehtiyyat hissələri ve aksesuarlar</a></li>
              <li className="lg:px-[10px] my-1 md:my-0 px-[5px] text-[15px]"><a href="#"
                className="hover:opacity-75">İcarə</a></li>
            </menu>
            <div
              className="bg-[#7ed321] h-10 w-[103px] mt-6 rounded-[7px] text-white flex justify-center items-center cursor-pointer transition ease-in-out duration-300 hover:bg-[#85c01f]">
              <img src="img/plus.svg" className="w-[15px] h-[15px] mr-[7px]" alt="plus" />
              <span>Yeni elan</span>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header