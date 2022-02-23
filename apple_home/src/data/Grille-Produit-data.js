import LogoWatch from '../asserts/tile_watch_logo_lte__h7snssb7mqq2_large.png'
import WatchProduit from '../asserts/tile_watch__e9n11b6m6yq2_large.jpeg'
import LogoMacBook from '../asserts/tile_macbookpro__cx0ur0qg9biq_large.jpeg'
import WatchProduit2 from '../asserts/promo_watch__fo7j0tnywi2q_large.jpeg'
import FitnessLogo from '../asserts/logo__dcojfwkzna2q_large.png'
import FitenessProduit from '../asserts/tile_winter__bpktzwl6hsc2_large.jpeg'
import IpadLogo from '../asserts/promo_logo_ipad_mini__n5nqff6gq8yu_large.png'
import IpadProduit from '../asserts/promo_ipad_mini__spq4zjcuuaie_large.jpeg'
import AirpodsProduit from '../asserts/tile_airpods__fuv6vgn42y2q_large.jpeg'

const GrilleProduitData = [
    {
        new: true,
        logo: LogoWatch,
        accroche: "Notre plus grand écran à ce jour.",
        produit: WatchProduit,
        link1: {
            name: "En savoir plus >",
            href: "https://www.apple.com/fr/apple-watch-series-7/"
        },
        link2: {
            name: "Acheter >",
            href: "https://www.apple.com/fr/shop/goto/buy_watch/apple_watch_series_7"
        },
        class: "produit"
    },
    {
        name: "MacBook Pro",
        accroche: "Superpuissance pour les pros.",
        produit: LogoMacBook,
        link1: {
            name: "En savoir plus >",
            href: "https://www.apple.com/fr/macbook-pro-14-and-16/"
        },
        link2: {
            name: "Acheter >",
            href: "https://www.apple.com/fr/shop/goto/buy_mac/macbook_pro_14"
        },
        class: "produit"
    },
    {
        name: "L'avenir. Droit devant.",
        accroche: "Nouveau bracelet Black Unity \net cadran assorti, inspiré de l'afrofuturisme.",
        produit: WatchProduit2,
        link1: {
            name: "En savoir plus >",
            href: "https://www.apple.com/fr/watch/"
        },
        link2: {
            name: "Acheter >",
            href: "https://www.apple.com/fr/shop/goto/product/MMW93"
        },
        class: "produit black"
    },
    {
        logo: FitnessLogo,
        accroche: "De nouvelles façons de bouger \nAvec Courez et les Collections.",
        produit: FitenessProduit,
        link1: {
            name: "En savoir plus >",
            href: "https://www.apple.com/fr/apple-fitness-plus/"
        },
        link2: {
            name: "Essai gratuit ➚",
            href: "https://fitness.apple.com/subscribe?itscg=10000&itsct=fit-promo-hp_tile-apl-evg-201111"
        },
        class: "produit"
    },
    {
        logo: IpadLogo,
        accroche: "Méga puissant. Tout mini.",
        produit: IpadProduit,
        link1: {
            name: "En savoir plus >",
            href: "https://www.apple.com/fr/ipad-mini/"
        },
        link2: {
            name: "Acheter >",
            href: "https://www.apple.com/fr/shop/goto/buy_ipad/ipad_mini"
        },
        class: "produit"
    },
    {
        name: "AirPods",
        accroche: "Tout nouveaux, avec l'audio spacial.",
        produit: AirpodsProduit,
        link1: {
            name: "En savoir plus >",
            href: "https://www.apple.com/fr/airpods-3rd-generation/"
        },
        link2: {
            name: "Acheter >",
            href: "https://www.apple.com/fr/shop/goto/product/MME73"
        },
        class: "produit bas"
    },
]

export default GrilleProduitData