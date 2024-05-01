import { getScopedI18n } from "../../../../locales/server"
import { setStaticParamsLocale } from 'next-international/server'
import { getStaticParams } from "../../../../locales/server";

export function generateStaticParams() {
  return getStaticParams()
}

export default async function Contact({ params: { locale } }: { params: { locale: string } }) {
  setStaticParamsLocale(locale)
  const t = await getScopedI18n('contact')

  return (
    <div className="contact-layout">
      <div className="contact-static">
        <h1>{t('title')}</h1>
        <p>{t('about')}</p>
        <div className="contact-static-info">
          <div>
          <svg height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 293.334 293.334">
            <g>
              <g>
                <path d="M146.667,0C94.903,0,52.946,41.957,52.946,93.721c0,22.322,7.849,42.789,20.891,58.878
                  c4.204,5.178,11.237,13.331,14.903,18.906c21.109,32.069,48.19,78.643,56.082,116.864c1.354,6.527,2.986,6.641,4.743,0.212
                  c5.629-20.609,20.228-65.639,50.377-112.757c3.595-5.619,10.884-13.483,15.409-18.379c6.554-7.098,12.009-15.224,16.154-24.084
                  c5.651-12.086,8.882-25.466,8.882-39.629C240.387,41.962,198.43,0,146.667,0z M146.667,144.358
                  c-28.892,0-52.313-23.421-52.313-52.313c0-28.887,23.421-52.307,52.313-52.307s52.313,23.421,52.313,52.307
                  C198.98,120.938,175.559,144.358,146.667,144.358z"/>
                <circle cx="146.667" cy="90.196" r="21.756"/>
              </g>
            </g>
          </svg>
            <span>{t('city')}</span>
          </div>
          <div>
          <svg width="20px" height="20px" viewBox="0 -3.5 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fill-rule="evenodd">
              <g id="Icon-Set-Filled" transform="translate(-414.000000, -261.000000)" fill="#000000">
                <path d="M430,275.916 L426.684,273.167 L415.115,285.01 L444.591,285.01 L433.235,273.147 L430,275.916 L430,275.916 Z M434.89,271.89 L445.892,283.329 C445.955,283.107 446,282.877 446,282.634 L446,262.862 L434.89,271.89 L434.89,271.89 Z M414,262.816 L414,282.634 C414,282.877 414.045,283.107 414.108,283.329 L425.147,271.927 L414,262.816 L414,262.816 Z M445,261 L415,261 L430,273.019 L445,261 L445,261 Z" id="mail">
                </path>
              </g>
            </g>
          </svg>
            <span>
              info@lukmart.com
            </span>
          </div>
          <div>
          <svg width="20px" height="20px" viewBox="0 0 24 24" fill="#000000" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5562 15.5477L14.1007 16.0272C14.1007 16.0272 13.0181 17.167 10.0631 14.0559C7.10812 10.9448 8.1907 9.80507 8.1907 9.80507L8.47752 9.50311C9.18407 8.75924 9.25068 7.56497 8.63424 6.6931L7.37326 4.90961C6.61028 3.8305 5.13596 3.68795 4.26145 4.60864L2.69185 6.26114C2.25823 6.71766 1.96765 7.30945 2.00289 7.96594C2.09304 9.64546 2.81071 13.259 6.81536 17.4752C11.0621 21.9462 15.0468 22.1239 16.6763 21.9631C17.1917 21.9122 17.6399 21.6343 18.0011 21.254L19.4217 19.7584C20.3806 18.7489 20.1102 17.0182 18.8833 16.312L16.9728 15.2123C16.1672 14.7486 15.1858 14.8848 14.5562 15.5477Z" fill="#1C274C"/>
            <path d="M17 12C19.7614 12 22 9.76142 22 7C22 4.23858 19.7614 2 17 2C14.2386 2 12 4.23858 12 7C12 7.79984 12.1878 8.55582 12.5217 9.22624C12.6105 9.4044 12.64 9.60803 12.5886 9.80031L12.2908 10.9133C12.1615 11.3965 12.6035 11.8385 13.0867 11.7092L14.1997 11.4114C14.392 11.36 14.5956 11.3895 14.7738 11.4783C15.4442 11.8122 16.2002 12 17 12Z" fill="#1C274C"/>
          </svg>
            <span>
              593-30-00-31
            </span>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <form>
          <div className="input-wrap">
            <label htmlFor="first_name">{t('firstName')}</label>
            <input type="text" name="first_name" id="first_name" />
          </div>
          <div className="input-wrap">
            <label htmlFor="last_name">{t('lastName')}</label>
            <input type="text" name="last_name" id="last_name" />
          </div>
          <div className="input-wrap">
            <label htmlFor="email">{t('email')}</label>
            <input type="email" name="email"  id="email" />
          </div>
          <div className="input-wrap">
            <label htmlFor="number">{t('number')}</label>
            <input type="number" name="number"  id="number" />
          </div>
          <textarea placeholder={t('text')} rows={5}></textarea>
          <button>{t('send')} ↗️</button>
        </form>
      </div>
    </div>
  )
}