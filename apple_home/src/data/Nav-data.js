import logo from '../asserts/globalnav_apple_image__b5er5ngrzxqq_large.svg'
import panier from '../asserts/globalnav_bag_image__yzte50i47ciu_large.svg'
import accessoire from '../asserts/globalnav_links_accessories_image__edj0wqmfwxyu_large.svg'
import airpods from '../asserts/globalnav_links_airpods_image__f969s84ivmaa_large.svg'
import ipad from '../asserts/globalnav_links_ipad_image__fw9qyj9lloi2_large.svg'
import iphone from '../asserts/globalnav_links_iphone_image__ko7x4isga4ia_large.svg'
import mac from '../asserts/globalnav_links_mac_image__dazlko3t9a6a_large.svg'
import exclusivite from '../asserts/globalnav_links_onlyonapple_image__c4t8k97tougm_large.svg'
import store from '../asserts/globalnav_links_store_image__c7jy08initqq_large.svg'
import assistance from '../asserts/globalnav_links_support_image__bw9kctll7u3m_large.svg'
import tvEtMaison from '../asserts/globalnav_links_tvhome_image__zb2ewyxbi6ae_large.svg'
import watch from '../asserts/globalnav_links_watch_image__gkoblojrlsqe_large.svg'
import search from '../asserts/globalnav_search_image__cbllq1gkias2_large.svg'


const srcNav = [
    {
        name: "logo",
        src: logo,
        link: "https://www.apple.com/fr/",
        important: true
    },

    {
        name: "store",
        src: store,
        link: "https://www.apple.com/fr/shop/goto/store"
    },

    {
        name: "mac",
        src: mac,
        link: "https://www.apple.com/fr/mac/"
    },

    {
        name: "ipad",
        src: ipad,
        link: "https://www.apple.com/fr/ipad/"
    },

    {
        name: "iphone",
        src: iphone,
        link: "https://www.apple.com/fr/iphone/"
    },

    {
        name: "watch",
        src: watch,
        link: "https://www.apple.com/fr/watch/"
    },

    {
        name: "airpods",
        src: airpods,
        link: "https://www.apple.com/fr/airpods/"
    },

    {
        name: "tvEtMaison",
        src: tvEtMaison,
        link: "https://www.apple.com/fr/tv-home/"
    },

    {
        name: "exclusivite",
        src: exclusivite,
        link: "https://www.apple.com/fr/services/"
    },

    {
        name: "accessoire",
        src: accessoire,
        link: "https://www.apple.com/fr/shop/goto/buy_accessories"
    },

    {
        name: "assistance",
        src: assistance,
        link: "https://support.apple.com/fr-fr"
    },

    {
        name: "search",
        src: search,
        UserElement: true,
    },

    {
        name: "panier",
        src: panier,
        UserElement: true,
        important: true
    }]

export default srcNav