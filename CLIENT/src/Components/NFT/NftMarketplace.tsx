import React from 'react'
import "./NFT.css"
import Bg from "./../assets/musical.jpg"
import { Link } from 'react-router-dom'
import Animatedpage from '../Animatedpage'

const NftMarketplace : React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  const scrollToHalf = () => {
    const windowHeight = window.innerHeight;
    const halfWindowHeight = windowHeight / 1.1;
    window.scrollTo({ top: halfWindowHeight, left: 0, behavior: 'smooth' });
  };
  return (
    <div>
      <section id="home" className="f z gd xe ye ze mt-24 kg mb-0">
        <span className="e _"></span>
          <div className="e h g _ ib pb" />
          <div className="a">
            <div className="ea za xc yc">
              <div className="pb nf _k/2">
                <div className="ra gc tk">
                  <h1 className="ia lh ph qh vh lk tl om 2xl:ud-text-[50px] sm:text-[46px] bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
                   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, sit?
                  </h1>
                  <p className="qa hh oh rh uh kk text-slate-400 mt-8">
                  You're the light, you're the night, You're the colour of my blood, You're the cure, you're the pain
                  You're the only thing I wanna touch, Never knew that it could mean so much, so much!!
                  </p>
                  <div className="flex flex-wrap items-center mt-7">
                  <a onClick={scrollToHalf} href="#"className="pa ka _a yc _c ld pd yd he sf vf eh nh vh ii aj bg-cyan-400 border-cyan-400">
                     Buy NFT
                    </a>
                    <Link onClick={scrollToTop} to="/SellNft" className="pa ka _a yc _c ld pd yd he sf vf eh nh vh ii aj bg-cyan-400 border-cyan-400">
                     Sell NFT
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="wg mt-0">
          <div className="a">
            <div className="ra td vd _d">
              <div className="ad qj">
                <h2 className="ia mh ph sh vh bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text mt-0">
                  Latest Sells
                </h2>
              </div>
            </div>
            <div className="ea za xc">
              <div className="pb nf hk/2 _k/3 2xl:ud-w-1/4">
                <div className="ja nd qd wd fe hf">
                  <div>
                    <h3>
                      <a href="javascript:void(0)" className="sa ya hh nh vh cj">
                        22-Bit Digital #551
                      </a>
                    </h3>
                    <div className="ka za yc ad">
                      <div className="pb">
                        <div className="za yc">
                          <div className="pb">
                            <h4 className="kh nh vh">
                              @Devid_Mill...
                              <span className="xa kh oh uh">
                                owner
                              </span>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="pb">
                        <h5 className="dh kh nh vh">
                          5.49 ETH
                          <span className="xa kh oh uh">
                            Listed Price
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div className="za yc _c ld ee se kf eh nh vh bg-cyan-400">
                      BUY
                    </div>
                  </div>
                </div>
              </div>
              <div className="pb nf hk/2 _k/3 2xl:ud-w-1/4">
                <div className="ja nd qd wd fe hf">
                  <div>
                    <h3>
                      <a href="javascript:void(0)" className="sa ya hh nh vh cj">
                        25-Bit Digital #729
                      </a>
                    </h3>
                    <div className="ka za yc ad">
                      <div className="pb">
                        <div className="za yc">
                          <div className="pb">
                            <h4 className="kh nh vh">
                              @Devid_Meth...
                              <span className="xa kh oh uh">
                                owner
                              </span>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="pb">
                        <h5 className="dh kh nh vh">
                          1.58 ETH
                          <span className="xa kh oh uh">
                            Listed Price
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div className="za yc _c ld ee se kf eh nh vh bg-cyan-400">
                      BUY
                    </div>
                  </div>
                </div>
              </div>
              <div className="pb nf hk/2 _k/3 2xl:ud-w-1/4">
                <div className="ja nd qd wd fe hf">
                  <div>
                    <h3>
                      <a href="javascript:void(0)" className="sa ya hh nh vh cj">
                        27-Bit Digital #395
                      </a>
                    </h3>
                    <div className="ka za yc ad">
                      <div className="pb">
                        <div className="za yc">
                          <div className="pb">
                            <h4 className="kh nh vh">
                              @Jemmy_Fra...
                              <span className="xa kh oh uh">
                                owner
                              </span>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="pb">
                        <h5 className="dh kh nh vh">
                          3.25 ETH
                          <span className="xa kh oh uh">
                            Listed Price
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div className="za yc _c ld ee se kf eh nh vh bg-cyan-400">
                      BUY
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*Features/Steps*/}
        <section id="features" className="xg">
          <div className="a">
            <div className="da ha dc ch">
              <h2 className="ia gh ph qh vh ck bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
                Core Features
              </h2>
              <p className="hh oh uh text-slate-400 font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a
                lacinia dolor, in pretium nunc. Morbi mollis arcu eget.
              </p>
            </div>
            <div className="ea za xc lg:ml-20">
              <div className="pb nf hk/2 _k/3 2xl:ud-w-1/4">
                <div className="ij ja nd qd wd fe ef ii xi zi">
                  <div className="ka za db tb yc _c od le">
                    <svg width={34} height={34} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M29.75 25.5V26.9167C29.75 27.6681 29.4515 28.3888 28.9201 28.9201C28.3888 29.4515 27.6681 29.75 26.9167 29.75H7.08333C5.51083 29.75 4.25 28.475 4.25 26.9167V7.08333C4.25 6.33189 4.54851 5.61122 5.07986 5.07986C5.61122 4.54851 6.33189 4.25 7.08333 4.25H26.9167C27.6681 4.25 28.3888 4.54851 28.9201 5.07986C29.4515 5.61122 29.75 6.33189 29.75 7.08333V8.5H17C15.4275 8.5 14.1667 9.775 14.1667 11.3333V22.6667C14.1667 23.4181 14.4652 24.1388 14.9965 24.6701C15.5279 25.2015 16.2486 25.5 17 25.5H29.75ZM17 22.6667H31.1667V11.3333H17V22.6667ZM22.6667 19.125C22.1031 19.125 21.5626 18.9011 21.1641 18.5026C20.7656 18.1041 20.5417 17.5636 20.5417 17C20.5417 16.4364 20.7656 15.8959 21.1641 15.4974C21.5626 15.0989 22.1031 14.875 22.6667 14.875C23.2303 14.875 23.7708 15.0989 24.1693 15.4974C24.5678 15.8959 24.7917 16.4364 24.7917 17C24.7917 17.5636 24.5678 18.1041 24.1693 18.5026C23.7708 18.9011 23.2303 19.125 22.6667 19.125Z" fill="#FF766A" />
                    </svg>
                  </div>
                  <h3 className="la ih ph vh gi mj text-cyan-400 font-light">
                    Set Up Your Wallet
                  </h3>
                  <p className="eh oh uh text-slate-400 font-thin">
                    Lorem ipsum dolor sit amet consectetur smit.
                  </p>
                </div>
              </div>
              <div className="pb nf hk/2 _k/3 2xl:ud-w-1/4 lg:ml-20">
                <div className="ij ja nd qd wd fe ef ii xi zi">
                  <div className="ka za db tb yc _c od ne">
                    <svg width={34} height={34} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.0417 19.125L15.5833 23.375L20.5417 17L26.9167 25.5H7.08333L12.0417 19.125ZM29.75 26.9167V7.08333C29.75 5.51083 28.475 4.25 26.9167 4.25H7.08333C6.33189 4.25 5.61122 4.54851 5.07986 5.07986C4.54851 5.61122 4.25 6.33189 4.25 7.08333V26.9167C4.25 27.6681 4.54851 28.3888 5.07986 28.9201C5.61122 29.4515 6.33189 29.75 7.08333 29.75H26.9167C27.6681 29.75 28.3888 29.4515 28.9201 28.9201C29.4515 28.3888 29.75 27.6681 29.75 26.9167Z" fill="#06DE90" />
                    </svg>
                  </div>
                  <h3 className="la ih ph vh gi mj font-light text-cyan-400">
                    Add Your NFTs
                  </h3>
                  <p className="eh oh uh font-thin">
                    Lorem ipsum dolor sit amet consectetur smit.
                  </p>
                </div>
              </div>
              <div className="pb nf hk/2 _k/3 2xl:ud-w-1/4 lg:ml-20">
                <div className="ij ja nd qd wd fe ef ii xi zi">
                  <div className="ka za db tb yc _c od oe">
                    <svg width={34} height={34} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.79168 9.91671C7.22809 9.91671 6.68759 9.69282 6.28907 9.29431C5.89056 8.89579 5.66668 8.35529 5.66668 7.79171C5.66668 7.22812 5.89056 6.68762 6.28907 6.28911C6.68759 5.89059 7.22809 5.66671 7.79168 5.66671C8.35526 5.66671 8.89576 5.89059 9.29428 6.28911C9.69279 6.68762 9.91668 7.22812 9.91668 7.79171C9.91668 8.35529 9.69279 8.89579 9.29428 9.29431C8.89576 9.69282 8.35526 9.91671 7.79168 9.91671ZM30.3308 16.405L17.5808 3.65504C17.0708 3.14504 16.3625 2.83337 15.5833 2.83337H5.66668C4.09418 2.83337 2.83334 4.09421 2.83334 5.66671V15.5834C2.83334 16.3625 3.14501 17.0709 3.66918 17.5809L16.405 30.3309C16.9292 30.8409 17.6375 31.1667 18.4167 31.1667C19.1958 31.1667 19.9042 30.8409 20.4142 30.3309L30.3308 20.4142C30.855 19.9042 31.1667 19.1959 31.1667 18.4167C31.1667 17.6234 30.8408 16.915 30.3308 16.405Z" fill="#5142FC" />
                    </svg>
                  </div>
                  <h3 className="la ih ph vh gi mj font-light text-cyan-400">
                    List Them For Sale
                  </h3>
                  <p className="eh oh uh font-thin">
                    Lorem ipsum dolor sit amet consectetur smit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Buying Place */}
        <section className="rg mt-5">
          <div className="a">
            <div className="ra td vd _d">
              <div className="ad qj">
                <h2 className="ia mh ph sh vh bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
                  NFTs for sale                  
                </h2>
              </div>
            </div>
            <div className="ea za xc">
              <div className="pb nf hk/2 _k/3 2xl:ud-w-1/4">
                <div className="ja nd qd wd fe hf">
                  <div>
                    <h3>
                      <a href="javascript:void(0)" className="sa ya hh nh vh cj">
                        3d abstract illustration
                      </a>
                    </h3>
                    <div className="oa za yc ad">
                      <div className="pb">
                        <div className="za yc">
                          <div className="pb">
                            <h4 className="kh nh vh">
                              @Devid_Mill...
                              <span className="xa kh oh uh">
                                owner
                              </span>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="pb">
                        <h5 className="dh kh nh vh">
                          5.49 ETH
                          <span className="xa kh oh uh">
                            Listed Price
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div className="za yc ad sd wd ug">
                      <a href="javascript:void(0)" className="za yc _c ld he sf nf fh nh vh ii aj xj bg-cyan-400">
                        Place Bid
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pb nf hk/2 _k/3 2xl:ud-w-1/4">
                <div className="ja nd qd wd fe hf">
                  <div>
                    <h3>
                      <a href="javascript:void(0)" className="sa ya hh nh vh cj">
                        3d abstract illustration
                      </a>
                    </h3>
                    <div className="oa za yc ad">
                      <div className="pb">
                        <div className="za yc">
                          <div className="pb">
                            <h4 className="kh nh vh">
                              @Wilium_de...
                              <span className="xa kh oh uh">
                                owner
                              </span>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="pb">
                        <h5 className="dh kh nh vh">
                          2.85 ETH
                          <span className="xa kh oh uh">
                            Listed Price
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div className="za yc ad sd wd ug">
                      <a href="javascript:void(0)" className="za yc _c ld he sf nf fh nh vh ii aj xj bg-cyan-400">
                        Place Bid
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pb nf hk/2 _k/3 2xl:ud-w-1/4">
                <div className="ja nd qd wd fe hf">
                  <div>
                    <h3>
                      <a href="javascript:void(0)" className="sa ya hh nh vh cj">
                        3d abstract illustration
                      </a>
                    </h3>
                    <div className="oa za yc ad">
                      <div className="pb">
                        <div className="za yc">
                          <div className="pb">
                            <h4 className="kh nh vh">
                              @Liza_Auro...
                              <span className="xa kh oh uh">
                                owner
                              </span>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="pb">
                        <h5 className="dh kh nh vh">
                          0.25 ETH
                          <span className="xa kh oh uh">
                            Listed Price
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div className="za yc ad sd wd ug">
                      <a href="javascript:void(0)" className="za yc _c ld he sf nf fh nh vh ii aj xj bg-cyan-400">
                        Place Bid
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pb nf hk/2 _k/3 2xl:ud-w-1/4">
                <div className="ja nd qd wd fe hf">
                  <div>
                    <h3>
                      <a href="javascript:void(0)" className="sa ya hh nh vh cj">
                        3d abstract illustration
                      </a>
                    </h3>
                    <div className="oa za yc ad">
                      <div className="pb">
                        <div className="za yc">
                          <div className="pb">
                            <h4 className="kh nh vh">
                              @Lathium_Lui...
                              <span className="xa kh oh uh">
                                owner
                              </span>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="pb">
                        <h5 className="dh kh nh vh">
                          3.24 ETH
                          <span className="xa kh oh uh">
                            Listed Price
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div className="za yc ad sd wd ug">
                      <a href="javascript:void(0)" className="za yc _c ld he sf nf fh nh vh ii aj xj bg-cyan-400">
                        Place Bid
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pb nf hk/2 _k/3 2xl:ud-w-1/4">
                <div className="ja nd qd wd fe hf">
                  <div>
                    <h3>
                      <a href="javascript:void(0)" className="sa ya hh nh vh cj">
                        3d abstract illustration
                      </a>
                    </h3>
                    <div className="oa za yc ad">
                      <div className="pb">
                        <div className="za yc">
                          <div className="pb">
                            <h4 className="kh nh vh">
                              @Marko...
                              <span className="xa kh oh uh">
                                owner
                              </span>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="pb">
                        <h5 className="dh kh nh vh">
                          4.55 ETH
                          <span className="xa kh oh uh">
                            Listed Price
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div className="za yc ad sd wd ug">
                      <a href="javascript:void(0)" className="za yc _c ld he sf nf fh nh vh ii aj xj bg-cyan-400">
                        Place Bid
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pb nf hk/2 _k/3 2xl:ud-w-1/4">
                <div className="ja nd qd wd fe hf">
                  <div>
                    <h3>
                      <a href="javascript:void(0)" className="sa ya hh nh vh cj">
                        3d abstract illustration
                      </a>
                    </h3>
                    <div className="oa za yc ad">
                      <div className="pb">
                        <div className="za yc">
                          <div className="pb">
                            <h4 className="kh nh vh">
                              @Andrio_Hev...
                              <span className="xa kh oh uh">
                                owner
                              </span>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="pb">
                        <h5 className="dh kh nh vh">
                          0.89 ETH
                          <span className="xa kh oh uh">
                            Listed Price
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div className="za yc ad sd wd ug">
                      <a href="javascript:void(0)" className="za yc _c ld he sf nf fh nh vh ii aj xj bg-cyan-400">
                        Place Bid
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pb nf hk/2 _k/3 2xl:ud-w-1/4">
                <div className="ja nd qd wd fe hf">
                  <div>
                    <h3>
                      <a href="javascript:void(0)" className="sa ya hh nh vh cj">
                        3d abstract illustration
                      </a>
                    </h3>
                    <div className="oa za yc ad">
                      <div className="pb">
                        <div className="za yc">
                          <div className="pb">
                            <h4 className="kh nh vh">
                              @Mariya_Hie...
                              <span className="xa kh oh uh">
                                owner
                              </span>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="pb">
                        <h5 className="dh kh nh vh">
                          1.75 ETH
                          <span className="xa kh oh uh">
                            Listed Price
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div className="za yc ad sd wd ug">
                      <a href="javascript:void(0)" className="za yc _c ld he sf nf fh nh vh ii aj xj bg-cyan-400">
                        Place Bid
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pb nf">
                <div className="rg ch">
                  <a href="javascript:void(0)" className="_a yc _c ld pd vd sf vf eh nh vh ii wi yi mb-4 mt-0 border-cyan-400 hover:border-cyan-400 hover:bg-cyan-400">
                    Load More...
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>    
    </div>
  )
}

export default NftMarketplace