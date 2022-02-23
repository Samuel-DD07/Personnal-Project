import './style.css'
import * as THREE from 'three'
import * as dat from 'lil-gui'
import { WebGLRenderer } from 'three'


// Canvas
const canvas = document.querySelector('canvas.webgl')

// // Debug
const gui = new dat.GUI()

// scene
const scene = new THREE.Scene()

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// texture 
const repeat = 10
const TextureLoader = new THREE.TextureLoader()
const Batiment_1 = TextureLoader.load('/textures/Batiments/Batiment_1.jpeg')
const Batiment_2 = TextureLoader.load('/textures/Batiments/Batiment_2.jpeg')
const Batiment_3 = TextureLoader.load('/textures/Batiments/Batiment_3.jpeg')
const Batiment_4 = TextureLoader.load('/textures/Batiments/Batiment_4.jpeg')

Batiment_1.wrapS = Batiment_1.wrapT = THREE.RepeatWrapping; Batiment_1.repeat.set(repeat, repeat)
Batiment_2.wrapS = Batiment_2.wrapT = THREE.RepeatWrapping; Batiment_2.repeat.set(repeat, repeat)
Batiment_3.wrapS = Batiment_3.wrapT = THREE.RepeatWrapping; Batiment_3.repeat.set(repeat, repeat)
Batiment_4.wrapS = Batiment_4.wrapT = THREE.RepeatWrapping; Batiment_4.repeat.set(repeat, repeat)

// Parametres City
const pr = {
    City_Size: 1,
    Batiment_size: new THREE.Vector3(0.5, 0.5, 1),
    ecart: 0.1,
    HBatimentMini: 0.5, 
    HBatimentMax: 1,
    tronc_size: 1,
    feuille_size: 0.25,
    buisson_size: 0.1,
    nombreBuisson: 30,
    Quartier_Size: new THREE.Vector3(1, 1),
    colorBackground: '#F0F0C6'
}


let Geometry = null
let Material = null
let City = null

// Light
const directionaLight = new THREE.DirectionalLight(pr.colorBackground, 0.5)
directionaLight.position.set(1, 0, 10)
scene.add(directionaLight)

const ambientLight = new THREE.AmbientLight(pr.colorBackground, 0.5)
scene.add(ambientLight)

const generatorCity = () =>{

    if(City !== null){
        Material.dispose()
        Geometry.dispose()
        City.remove(Quartier)
        scene.remove(City)
    }   

    /**
     * Fog
     */
    // const fog = new THREE.Fog(pr.colorBackground, 0, pr.City_Size)
    // scene.fog = fog
    
    // City Plateforme.
    City = new THREE.Group()

    Geometry = new THREE.BoxGeometry(pr.City_Size, pr.City_Size, 0.5)
    Material = new THREE.MeshStandardMaterial({ color: pr.colorBackground })
    
    const SupportCityDown = new THREE.Mesh(Geometry, Material)
    City.add(SupportCityDown)
    City.rotation.x = - 1
    scene.add(City)
    
    const TabContenuCity = ['Gray', 'Green', '#0096FF', 'Gray']
    const TabColorArbre = ['#6B8E23', '#228B22']
    const tabTextureBatiment = [Batiment_1, Batiment_2, Batiment_3, Batiment_4]
    
    // Quartier
    for (let colonne = 0; colonne < pr.City_Size; colonne+=pr.Quartier_Size.y) {
        for (let ligne = 0; ligne < pr.City_Size; ligne+=pr.Quartier_Size.x){
            var ColorContenu = TabContenuCity[ Math.abs(Math.round(Math.random() * TabContenuCity.length - 1)) ]

            Geometry = new THREE.PlaneGeometry(pr.Quartier_Size.x, pr.Quartier_Size.y)
            Material = new THREE.MeshStandardMaterial({ color: ColorContenu })
            
            var Quartier = new THREE.Mesh(Geometry, Material)
            Quartier.position.x = - (pr.City_Size/2 - pr.Quartier_Size.x/2) + ligne
            Quartier.position.y = - (pr.City_Size/2 - pr.Quartier_Size.y/2) + colonne
            Quartier.position.z = 0.26
            City.add(Quartier)


        // Ensemble d'Immeuble
        const Batiment = new THREE.Group()

        if (ColorContenu == 'Gray'){
            
            for (let colonne = 0; colonne <= pr.Quartier_Size.y - pr.Batiment_size.y; colonne+=pr.Batiment_size.y) {
                for (let ligne = 0; ligne <= pr.Quartier_Size.x - pr.Batiment_size.x; ligne+=pr.Batiment_size.x) {
                    
                        pr.Batiment_size.z = Math.random() * pr.HBatimentMax + pr.HBatimentMini
                        const TextureBatiment = tabTextureBatiment[ Math.abs(Math.round(Math.random() *tabTextureBatiment.length - 1)) ]

                        Geometry = new THREE.BoxGeometry(pr.Batiment_size.x - pr.ecart, pr.Batiment_size.y - pr.ecart, pr.Batiment_size.z)
                        Material = new THREE.MeshStandardMaterial({ map: TextureBatiment })
                        
                        const Immeuble = new THREE.Mesh(Geometry, Material)
                        Immeuble.position.x = - (pr.Quartier_Size.x/2 - pr.Batiment_size.x/2) + ligne
                        Immeuble.position.y = - (pr.Quartier_Size.y/2 - pr.Batiment_size.y/2) + colonne
                        Immeuble.position.z = pr.Batiment_size.z/2
                        Batiment.add(Immeuble)
                }
                
            }
            Quartier.add(Batiment)

            } 
            else if (ColorContenu == 'Green'){
                // Park 
                const Park = new THREE.Group()
                var ColorContenuArbre = TabColorArbre[ Math.abs(Math.round(Math.random() * TabColorArbre.length - 1)) ]
                pr.tronc_size =  Math.random() * pr.tronc_size + 0.25

                Geometry = new THREE.BoxGeometry(0.1, 0.1, pr.tronc_size)
                Material = new THREE.MeshStandardMaterial({ color: '#614b3a'})
                
                const Tronc = new THREE.Mesh(Geometry, Material) 


                Geometry = new THREE.SphereGeometry(pr.feuille_size, 20, 20)
                Material = new THREE.MeshStandardMaterial({ color: ColorContenuArbre})
                
                const Feuille = new THREE.Mesh(Geometry, Material)

                for (let i = 0; i < pr.nombreBuisson; i++) {
                    var ColorContenuArbre = TabColorArbre[ Math.abs(Math.round(Math.random() * TabColorArbre.length - 1)) ]

                    Geometry = new THREE.SphereGeometry(pr.buisson_size, 20, 20)
                    Material = new THREE.MeshStandardMaterial({ color: ColorContenuArbre})
                    const Buisson = new THREE.Mesh(Geometry, Material)
                    
                    Buisson.position.x = Math.cos(Math.random() * i)/Math.PI
                    Buisson.position.y = Math.sin(Math.random() * i)/Math.PI
                    Buisson.position.z = - pr.tronc_size/2
                    Park.add(Buisson)
                }

                Feuille.position.z = pr.tronc_size/2
                Park.add(Tronc, Feuille)
                Park.position.z = pr.tronc_size/2

                Quartier.add(Park)
                
            }
        }
    }
}
generatorCity()

// camera
const camera = new THREE.PerspectiveCamera(50, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0.5
camera.position.z = 5

scene.add(camera)

console.log()

// rendu
const renderer = new WebGLRenderer({
    canvas: canvas,
    alpha: true
})
renderer.setClearAlpha(0)
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio), 2)

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

        // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

const clock = new THREE.Clock()
const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    camera.position.z = pr.City_Size * 2 + 1

    City.rotation.z = Math.PI * elapsedTime / 10
 
    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}
tick()

gui.add(pr, 'City_Size').min(1).max(20).step(1).onChange(generatorCity).name('Taille de la ville')