import { motion } from "motion/react"
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { LatLngTuple } from "leaflet";

export default function LocationModal() {
    const position: LatLngTuple = [11.184907683135664, -74.14191211633373];

    return(
        <motion.div 
            initial={{ background: "#00000000" }}
            animate={{ background: "#000000" }}
            exit={{ background: "#00000000", transition: { delay: 0.6, duration: 0.5} }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 left-0 z-10 w-full h-dvh md:p-2">
            <motion.div 
                initial={{ scale: 0, borderRadius: 9999 }}
                animate={{ scale: 1, borderRadius: 40 }}
                exit={{ scale: 0, borderRadius: 9999, transition: { delay: 0.7, duration: 0.6 } }}
                transition={{ duration: 0.6 }}
                className="w-full h-full rounded-4xl origin-center relative overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-full h-full z-0">
                    <MapContainer
                        zoomControl={false}
                        scrollWheelZoom={true}
                        center={position}
                        zoom={10}
                        style={{ height: "100%", width: "100%" }}
                    >
                        <TileLayer
                            attribution='&copy; OpenStreetMap contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        <Marker position={position}>
                        </Marker>
                    </MapContainer>
                </div>
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.7, duration: 0.6 }}}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="p-2 w-full rounded-4xl text-left text-sm md:max-w-100 relative"
                >
                    <div className="w-full bg-[#2a2725] rounded-4xl p-8 flex flex-col gap-8">
                        <div className="flex flex-col gap-2 md:gap-4">
                            <div>
                                <img className="w-50 md:w-60 lg:w-70" src="/logo.svg" alt="" />
                            </div>
                            <p className="text-[#b1a696]">Carretera vereda el Porvenir, Via a Minca, Santa Marta, Magdalena, Colombia</p>
                            <a className="underline underline-offset-3 text-lg" href="/">Ready to reserve</a>
                        </div>
                        <div className="flex gap-2">
                            <div className="w-full h-18 rounded-xl overflow-hidden lg:h-25">
                                <img className="w-full h-full object-cover" src="/maison-mobile.webp" alt="" />                                    
                            </div>
                            <div className="w-full h-18 rounded-xl overflow-hidden lg:h-25">
                                <img className="w-full h-full object-cover" src="/patio-mobile.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </motion.div>                
            </motion.div>            
        </motion.div>
    )
}