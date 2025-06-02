import Card from "./Card"

function Main() {
  return (
    <>
       <main className="bg-[#f6f7fa]">
        <div id="openClose"
            className="fixed bg-gray-100 top-0 h-screen overflow-y-auto max-w-[400px] transition-all ease-in-out duration-300 z-10 right-[-100%] w-[100%] p-2">
            <div className="flex justify-between items-center">
                <span  className="text-[25px] cursor-pointer">🗙</span>
                <button className="text-[15px] bg-[#ca1016] px-2 py-1 rounded text-white hover:bg-[#b02b2f]">Delete All</button>
            </div>
            <div id="likeDiv"></div>
        </div>
        <div id="detailsMain">
            <div className="bg-[#ebedf3] py-5">
                <p  className="text-center cursor-pointer md:hidden text-[#ca1016] pb-4">Filtrlər▼</p>
                <div id="filtersDiv" className="max-md:max-h-0 transition-all duration-300 overflow-hidden">
                    <div id="selects" className="max-w-[1000px] m-auto">
                        <div className="px-3 container m-auto flex flex-col items-center md:flex-row justify-between gap-3">
                            <select id="marka"
                                className="h-[46px] cursor-pointer text-[#8d94ad] outline-none max-w-[235px] w-[100%] rounded-[7px] border p-2 focus:border focus:border-[#8080808f]">
                                <option value="">Marka seçin</option>
                            </select>
                            <select id="model" 
                                className="h-[46px] cursor-pointer text-[#8d94ad] outline-none max-w-[235px] w-[100%] rounded-[7px] border p-2 focus:border focus:border-[#8080808f] ">
                                <option value="">Model seçin</option>
                            </select>
                            <div id="toRed"
                                className="flex border rounded-[7px] border-[#dfe3e9] bg-white text-[#8d94ad] cursor-pointer max-w-[235px]">
                                <div 
                                    className="flex items-center justify-center py-[11px] px-4 transition-all duration-300 bg-[#ca1016] rounded-tl-[7px] rounded-bl-[7px] text-white">
                                    Hamısı</div>
                                <div  className="border-x border-[#dfe3e9] transition-all duration-300 flex py-[11px] items-center justify-center px-4">Yeni
                                </div>
                                <div  className="flex items-center justify-center transition-all duration-300 rounded-r-[7px] py-[11px] px-[9px]">Sürülmüş</div>
                            </div>
                            <select id="city" 
                                className="h-[46px] cursor-pointer text-[#8d94ad] outline-none max-w-[235px] w-[100%] rounded-[7px] border p-2 focus:border focus:border-[#8080808f]">
                                <option value="">Şəhər seçin</option>
                            </select>
                        </div>
                        <div
                            className="px-3 mt-[10px] container m-auto flex flex-col items-center md:flex-row justify-between gap-3">
                            <div className="h-[46px] bg-white flex text-[#8d94ad] max-w-[235px] w-[100%] rounded-[7px]">
                                <input type="text"
                                    className="w-[50%] p-2 outline-none focus:border-[#8d94ad] border border-r-[#8d94ad] rounded-tl-[7px] rounded-bl-[7px]"
                                    placeholder="Qiymət, min." />
                                <input type="text"
                                    className="w-[50%] p-2 outline-none focus:border-[#8d94ad] border rounded-tr-[7px] rounded-br-[7px]"
                                    placeholder="maks." />
                            </div>
                            <div className="h-[46px] flex max-w-[235px] w-[100%] rounded-[7px]  justify-between">
                                <select
                                    className="min-w-[82px] rounded-[7px] border outline-none p-2 focus:border cursor-pointer focus:border-[#8080808f]">
                                    <option value="">AZN</option>
                                    <option value="">USD</option>
                                    <option value="">EUR</option>
                                </select>
                                <div
                                    className="w-[60px] border rounded-[7px] bg-white flex justify-center items-center cursor-pointer transition ease-in-out duration-300 hover:border-[#8080808f]">
                                    Kredit</div>
                                <div
                                    className="w-[60px] border rounded-[7px] bg-white flex justify-center items-center cursor-pointer transition ease-in-out duration-300 hover:border-[#8080808f]">
                                    Barter</div>
                            </div>
                            <select id="banType"
                                className="h-[46px] cursor-pointer outline-none text-[#8d94ad] max-w-[235px] w-[100%] rounded-[7px] border p-2 focus:border focus:border-[#8080808f]">
                                <option value="">Bannövü seçin</option>
                            </select>
                            <div className="h-[46px] bg-white flex text-[#8d94ad] max-w-[235px] w-[100%] rounded-[7px]">
                                <select id="yearMin" type="text"
                                    className="w-[50%] p-2 outline-none border border-r-[#8d94ad] rounded-tl-[7px] rounded-bl-[7px] focus:border focus:border-[#8080808f]"
                                    placeholder="Qiymət, min.">
                                    <option value="">İl seçin</option>
                                </select>
                                <select id="yearMax" type="text"
                                    className="w-[50%] p-2 outline-none border rounded-tr-[7px] rounded-br-[7px] focus:border focus:border-[#8080808f]"
                                    placeholder="maks.">
                                    <option value="">İl seçin</option>
                                </select>
                            </div>
                        </div>
                        <div
                            className="container text-[15px] m-auto px-3 flex flex-col items-center gap-4 md:flex-row justify-between pt-5">
                            <div className="flex items-center gap-1">
                                <span>Bu gün: </span>
                                <a href="#" className="text-[#4c88f9]">935 yeni elan</a>
                            </div>
                            <div className="flex mini:gap-5 gap-2 items-center">
                                <span className="text-[#8d94ad] cursor-pointer">Sıfırla</span>
                                <span className="text-[#ca1016] cursor-pointer">Daha çox filtr <i
                                        className="fa-solid fa-caret-down"></i></span>
                                <button
                                    className="rounded-[7px] bg-[#ca1016] text-white mini:px-10 px-1 py-[13px] transition ease-in-out duration-300 hover:bg-[#b80d13]">Elanları
                                    göstər</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#f1f3f7]">
                <div className="max-w-[1000px] m-auto ">
                    <h1 className="container py-4 px-3 font-[500] text-[16px] border-y border-t-[#eaebf2] uppercase m-auto">
                        Premium Elanlar</h1>
                </div>
            </div>

            <div className="max-w-[1000px] m-auto ">
                <section className="py-6 ">
                    <div id="error" className="container p-6 mx-auto space-y-8">

                        <div id="content" className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                              
                              {
                                Array(8).fill('').map( item=>(
                                  <Card />
                                )) }
                        </div>
                    </div>
                </section>
            </div>
            <div className="flex justify-center p-3">
                <button id="btnArtir"
                    className="bg-[#7ed321] px-2 h-10 transition ease-in-out duration-300 rounded-[7px] text-white flex justify-center items-center cursor-pointer hover:bg-[#85c01f]">Daha
                    cox goster ▼</button>
            </div>
        </div>

    </main>
    </>
  )
}

export default Main